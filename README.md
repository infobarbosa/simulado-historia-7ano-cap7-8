# Simulado de História — 7º ano — Capítulos 7 e 8

Aplicativo web **estático** (sem back-end), em estilo gamificado, para estudar
os capítulos **7 (A conquista da América)** e **8 (A colonização espanhola e
inglesa)** da **Coleção Rotas — História, 7º ano (Edebê)**.

🔗 **Acesse:** https://infobarbosa.github.io/simulado-historia-7ano-cap7-8/

## Funcionalidades

- **45 questões** de **múltipla escolha** e **verdadeiro/falso**, com foco nos
  tópicos da prova (pp. 126–167).
- Botão **"+"** em cada questão → abre o **conteúdo completo do livro**
  relacionado àquela questão.
- Botão **"Explique"** → mostra a explicação da resposta, com **ênfase quando a
  resposta está incorreta**.
- Experiência tipo *quiz* gamificado: barra de progresso, vidas (❤️), XP,
  sequência de acertos, feedback imediato e confete.
- Tela final com aproveitamento e **revisão de todas as questões** (ou só os erros).
- Responsivo (mobile-first), com tema claro e escuro automático.

## Como funciona

Tudo roda no navegador. Não há servidor nem banco de dados — as questões, as
explicações e os trechos do livro ficam em `data.js`.

## Arquivos

| Arquivo | Função |
|---|---|
| `index.html` | Estrutura das telas |
| `styles.css` | Estilo (gamificado, claro/escuro) |
| `app.js` | Lógica do quiz |
| `data.js` | Questões, explicações e conteúdo do livro |

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Fonte do conteúdo

Coleção Rotas — História, 7º ano (Edebê), capítulos 7 e 8 (pp. 126–167).
Material de estudo de uso pessoal.
