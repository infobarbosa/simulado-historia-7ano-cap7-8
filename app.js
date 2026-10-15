// ============================================================
// Simulado de História - 7º ano - Caps. 7 e 8
// Lógica do app (100% estático, sem back-end)
// ============================================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ---------- Estado ----------
const VIDAS_INICIAIS = 5;
let estado = {};

function novoEstado() {
  estado = {
    indice: 0,
    acertos: 0,
    xp: 0,
    vidas: VIDAS_INICIAIS,
    streak: 0,
    selecao: null,          // índice da opção selecionada (na ordem exibida)
    respondida: false,
    ordemOpcoes: [],        // mapeamento da ordem exibida -> índice original
    resultados: [],         // {id, topico, pergunta, acertou, respostaUsuario, respostaCerta, explicacao}
    semVidas: false
  };
}

// ---------- Utilidades ----------
function embaralhar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mostrarTela(id) {
  $$('.tela').forEach(t => t.classList.remove('ativa'));
  $('#' + id).classList.add('ativa');
  window.scrollTo(0, 0);
}

// ---------- Tela inicial ----------
$('#stat-total').textContent = QUESTOES.length;

$('#btn-comecar').addEventListener('click', iniciarQuiz);
$('#btn-refazer').addEventListener('click', iniciarQuiz);
$('#btn-sair').addEventListener('click', () => {
  if (confirm('Sair do simulado? Seu progresso atual será perdido.')) {
    mostrarTela('tela-inicio');
  }
});

function iniciarQuiz() {
  novoEstado();
  mostrarTela('tela-quiz');
  renderQuestao();
}

// ---------- Renderização da questão ----------
function questaoAtual() { return QUESTOES[estado.indice]; }

function renderQuestao() {
  const q = questaoAtual();
  estado.selecao = null;
  estado.respondida = false;

  // meta
  $('#q-topico').textContent = q.topico;
  $('#q-pagina').textContent = q.paginas;
  $('#q-tipo').textContent = q.tipo === 'vf' ? 'Verdadeiro ou Falso' : 'Múltipla escolha';
  $('#q-pergunta').textContent = q.pergunta;

  // conteúdo "+"
  const exp = $('#conteudo-expandido');
  exp.hidden = true;
  $('#btn-mais').setAttribute('aria-expanded', 'false');
  $('#conteudo-texto').textContent = q.conteudo;
  $('#conteudo-pagina').textContent = '(' + q.paginas + ')';

  // opções (embaralha múltipla escolha; mantém V/F fixo)
  const container = $('#opcoes');
  container.innerHTML = '';
  container.classList.toggle('vf', q.tipo === 'vf');

  let indices = q.opcoes.map((_, i) => i);
  if (q.tipo === 'mc') indices = embaralhar(indices);
  estado.ordemOpcoes = indices;

  indices.forEach((idxOriginal, posicao) => {
    const btn = document.createElement('button');
    btn.className = 'opcao';
    btn.type = 'button';
    btn.textContent = q.opcoes[idxOriginal];
    btn.dataset.pos = posicao;
    btn.addEventListener('click', () => selecionar(posicao));
    container.appendChild(btn);
  });

  // barra de progresso
  const pct = (estado.indice / QUESTOES.length) * 100;
  $('#progresso-preenchido').style.width = pct + '%';
  $('.barra-progresso').setAttribute('aria-valuenow', Math.round(pct));

  // vidas
  $('#vidas-num').textContent = estado.vidas;

  // botão verificar
  const bv = $('#btn-verificar');
  bv.disabled = true;
  bv.textContent = 'Verificar';

  esconderFeedback();
}

function selecionar(posicao) {
  if (estado.respondida) return;
  estado.selecao = posicao;
  $$('#opcoes .opcao').forEach(o => o.classList.remove('selecionada'));
  $(`#opcoes .opcao[data-pos="${posicao}"]`).classList.add('selecionada');
  $('#btn-verificar').disabled = false;
}

// ---------- Botão "+" (conteúdo completo) ----------
$('#btn-mais').addEventListener('click', () => {
  const exp = $('#conteudo-expandido');
  const abrindo = exp.hidden;
  exp.hidden = !abrindo;
  $('#btn-mais').setAttribute('aria-expanded', String(abrindo));
  if (abrindo) exp.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
$('#btn-fechar-conteudo').addEventListener('click', () => {
  $('#conteudo-expandido').hidden = true;
  $('#btn-mais').setAttribute('aria-expanded', 'false');
});

// ---------- Verificar resposta ----------
$('#btn-verificar').addEventListener('click', verificar);

function verificar() {
  if (estado.respondida || estado.selecao === null) return;
  estado.respondida = true;

  const q = questaoAtual();
  const idxOriginalEscolhido = estado.ordemOpcoes[estado.selecao];
  const acertou = idxOriginalEscolhido === q.correta;

  // trava e colore as opções
  $$('#opcoes .opcao').forEach(o => {
    o.classList.add('travada');
    const pos = Number(o.dataset.pos);
    const original = estado.ordemOpcoes[pos];
    if (original === q.correta) o.classList.add('correta');
    else if (pos === estado.selecao) o.classList.add('incorreta');
    else o.classList.add('esmaecida');
  });

  // registra resultado
  estado.resultados.push({
    id: q.id,
    topico: q.topico,
    paginas: q.paginas,
    pergunta: q.pergunta,
    acertou,
    respostaUsuario: q.opcoes[idxOriginalEscolhido],
    respostaCerta: q.opcoes[q.correta],
    explicacao: q.explicacao,
    conteudo: q.conteudo
  });

  if (acertou) {
    estado.acertos++;
    estado.streak++;
    const bonus = estado.streak >= 3 ? 5 : 0;
    estado.xp += 10 + bonus;
  } else {
    estado.streak = 0;
    estado.vidas = Math.max(0, estado.vidas - 1);
    $('#vidas-num').textContent = estado.vidas;
    $('#vidas').classList.remove('piscar');
    void $('#vidas').offsetWidth;
    $('#vidas').classList.add('piscar');
  }

  mostrarFeedback(acertou, q);
}

// ---------- Feedback ----------
function mostrarFeedback(acertou, q) {
  const fb = $('#feedback');
  fb.hidden = false;
  fb.classList.toggle('erro', !acertou);
  $('#feedback-icone').textContent = acertou ? '✓' : '✕';

  if (acertou) {
    const titulos = ['Correto!', 'Mandou bem!', 'Isso aí!', 'Perfeito!'];
    $('#feedback-titulo').textContent = titulos[Math.floor(Math.random() * titulos.length)];
    $('#feedback-sub').textContent = estado.streak >= 3 ? `🔥 Sequência de ${estado.streak}! +5 XP de bônus` : '+10 XP';
    soltarConfete();
  } else {
    $('#feedback-titulo').textContent = 'Resposta incorreta';
    $('#feedback-sub').textContent = 'Resposta certa: ' + q.opcoes[q.correta];
  }

  // esconde rodapé de ação (verificar) enquanto feedback aberto
  $('.rodape-acao').style.visibility = 'hidden';
}

function esconderFeedback() {
  $('#feedback').hidden = true;
  $('#feedback').classList.remove('erro');
  $('.rodape-acao').style.visibility = 'visible';
}

// ---------- Botão Explique ----------
$('#btn-explique').addEventListener('click', () => abrirExplicacao(questaoAtual()));
$('#btn-fechar-modal').addEventListener('click', fecharModalExplique);
$('#btn-modal-ok').addEventListener('click', fecharModalExplique);
$('#modal-explique').addEventListener('click', (e) => {
  if (e.target === $('#modal-explique')) fecharModalExplique();
});

function abrirExplicacao(q) {
  $('#modal-texto').textContent = q.explicacao;
  const extra = $('#modal-conteudo-texto');
  extra.textContent = q.conteudo;
  extra.hidden = true;
  $('#btn-modal-conteudo').textContent = '📖 Ver conteúdo completo do livro';
  $('#modal-explique').hidden = false;
}
function fecharModalExplique() { $('#modal-explique').hidden = true; }

$('#btn-modal-conteudo').addEventListener('click', () => {
  const extra = $('#modal-conteudo-texto');
  const abrindo = extra.hidden;
  extra.hidden = !abrindo;
  $('#btn-modal-conteudo').textContent = abrindo
    ? '📖 Ocultar conteúdo do livro'
    : '📖 Ver conteúdo completo do livro';
});

// ---------- Continuar ----------
$('#btn-continuar').addEventListener('click', continuar);

function continuar() {
  // sem vidas? oferece modal
  if (estado.vidas <= 0 && !estado.semVidas) {
    estado.semVidas = true;
    esconderFeedback();
    $('#modal-vidas').hidden = false;
    return;
  }
  avancar();
}

function avancar() {
  esconderFeedback();
  if (estado.indice < QUESTOES.length - 1) {
    estado.indice++;
    renderQuestao();
  } else {
    finalizar();
  }
}

// ---------- Modal de vidas ----------
$('#btn-continuar-praticando').addEventListener('click', () => {
  $('#modal-vidas').hidden = true;
  estado.vidas = 3;            // reabastece de forma leve, para seguir estudando
  estado.semVidas = false;
  $('#vidas-num').textContent = estado.vidas;
  avancar();
});
$('#btn-recomecar-vidas').addEventListener('click', () => {
  $('#modal-vidas').hidden = true;
  iniciarQuiz();
});

// ---------- Resultado ----------
let filtrandoErros = false;

function finalizar() {
  mostrarTela('tela-resultado');
  const total = QUESTOES.length;
  const acertos = estado.acertos;
  const pct = Math.round((acertos / total) * 100);

  $('#res-acertos').textContent = `${acertos}/${total}`;
  $('#res-percent').textContent = pct + '%';
  $('#res-xp').textContent = estado.xp;

  let emoji, titulo, frase;
  if (pct >= 90) { emoji = '🏆'; titulo = 'Excelente!'; frase = 'Você domina os capítulos 7 e 8. Está pronta para a prova!'; }
  else if (pct >= 70) { emoji = '🎉'; titulo = 'Muito bem!'; frase = 'Ótimo desempenho. Revise os poucos erros e você fecha o conteúdo.'; }
  else if (pct >= 50) { emoji = '💪'; titulo = 'Bom começo!'; frase = 'Você está no caminho. Revise os erros abaixo e tente de novo.'; }
  else { emoji = '📚'; titulo = 'Vamos revisar!'; frase = 'Releia os conteúdos dos erros abaixo e refaça o simulado — você consegue!'; }

  $('#resultado-emoji').textContent = emoji;
  $('#resultado-titulo').textContent = titulo;
  $('#resultado-frase').textContent = frase;

  if (pct >= 70) soltarConfete(40);

  filtrandoErros = false;
  $('#btn-revisar-erros').textContent = 'Ver só os erros';
  renderRevisao();
}

function renderRevisao() {
  const cont = $('#revisao');
  cont.innerHTML = '';
  const lista = filtrandoErros ? estado.resultados.filter(r => !r.acertou) : estado.resultados;

  if (filtrandoErros && lista.length === 0) {
    cont.innerHTML = '<div class="rev-item acerto"><div class="rev-pergunta">🎯 Você não errou nenhuma questão. Parabéns!</div></div>';
    return;
  }

  lista.forEach(r => {
    const item = document.createElement('div');
    item.className = 'rev-item' + (r.acertou ? ' acerto' : '');
    item.innerHTML = `
      <div class="rev-cab">
        <span class="rev-topico">${r.topico} · ${r.paginas}</span>
        <span class="rev-status ${r.acertou ? 'ok' : 'erro'}">${r.acertou ? '✓ acertou' : '✕ errou'}</span>
      </div>
      <div class="rev-pergunta">${r.pergunta}</div>
      <div class="rev-resposta">
        ${r.acertou ? '' : `Sua resposta: ${escapar(r.respostaUsuario)}<br>`}
        Resposta certa: <span class="certa">${escapar(r.respostaCerta)}</span>
      </div>
      <div class="rev-explica">💡 ${escapar(r.explicacao)}</div>`;
    cont.appendChild(item);
  });
}

$('#btn-revisar-erros').addEventListener('click', () => {
  filtrandoErros = !filtrandoErros;
  $('#btn-revisar-erros').textContent = filtrandoErros ? 'Ver todas as questões' : 'Ver só os erros';
  renderRevisao();
  $('#revisao').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function escapar(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

// ---------- Confete ----------
function soltarConfete(qtd = 18) {
  const cores = ['#2bb673', '#f5b22d', '#3aa0d8', '#e5533c', '#8c5bd6', '#f59e0b'];
  for (let i = 0; i < qtd; i++) {
    const c = document.createElement('div');
    c.className = 'confete';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = cores[Math.floor(Math.random() * cores.length)];
    c.style.animationDuration = (1.4 + Math.random() * 1.1) + 's';
    c.style.animationDelay = (Math.random() * 0.2) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}
