// ============================================================
// Simulado de História - 7º ano - Capítulos 7 e 8
// Livro: Rotas - História - 7º ano (Coleção Rotas, Edebê)
// Conteúdo dos botões "+" = texto fiel do material (pp. 126-167)
// Questões originais, com foco nos tópicos da prova.
// ============================================================

const QUESTOES = [
  // ---------- CAP 7: Ilhas do Caribe (p.128) ----------
  {
    id: 1,
    tipo: "mc",
    topico: "A experiência nas ilhas do Caribe",
    paginas: "p. 128",
    pergunta: "As características da conquista espanhola na América foram baseadas em qual experiência europeia anterior?",
    opcoes: [
      "A Guerra de Reconquista contra os reinos muçulmanos na península Ibérica",
      "As Cruzadas na Terra Santa",
      "A Guerra dos Cem Anos entre França e Inglaterra",
      "A Revolução Comercial italiana"
    ],
    correta: 0,
    explicacao: "A conquista espanhola se baseou na Guerra de Reconquista, empreendida contra os reinos muçulmanos na península Ibérica. Essa experiência teve características tanto de povoamento (povoar, estabelecer cidades, cultivar) quanto de pilhagem (invadir e saquear riquezas) — e as duas práticas foram aplicadas nas ilhas do Caribe.",
    conteudo: "As características da conquista espanhola na América foram baseadas na experiência europeia durante a Guerra de Reconquista, empreendida contra os reinos muçulmanos na península Ibérica, a qual teve características tanto de povoamento quanto de pilhagem, ou seja, definida por ações de povoar, estabelecer cidades, ocupar os campos com cultivo e criação, bem como por invasão e saque das riquezas de um povo. As duas práticas foram realizadas nas ilhas do Caribe, que foram os primeiros territórios explorados pelos espanhóis."
  },
  {
    id: 2,
    tipo: "vf",
    topico: "A experiência nas ilhas do Caribe",
    paginas: "p. 128",
    pergunta: "Em 1500, a Coroa espanhola declarou os povos indígenas livres e não sujeitos à escravização.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. Os teólogos argumentaram que os indígenas não eram 'infiéis' (não renegavam a fé cristã), mas 'pagãos' (não a conheciam). Por isso, em 1500 a Coroa declarou os indígenas livres. Mesmo assim, a mão de obra indígena continuou sendo explorada sob outros moldes, muitas vezes análogos à escravidão.",
    conteudo: "Porém, os teólogos (estudiosos da religião) criticaram tal entendimento, afirmando que os indígenas não renegavam a fé cristã; na verdade, eles não a conheciam, e, portanto, não eram infiéis, mas pagãos. Por isso, a escravização não poderia ser utilizada contra eles. Em 1500, a Coroa espanhola declarou os povos indígenas livres e não sujeitos à escravização. Contudo, a mão de obra indígena foi empregada sob outros moldes, muitas vezes análogos à escravidão."
  },
  {
    id: 3,
    tipo: "mc",
    topico: "A experiência nas ilhas do Caribe",
    paginas: "p. 128",
    pergunta: "Na visão dos conquistadores espanhóis, quais eram as 'riquezas' que buscavam nas ilhas do Caribe?",
    opcoes: [
      "Ouro ou prata",
      "Especiarias e seda",
      "Madeira e açúcar",
      "Terras para plantio de trigo"
    ],
    correta: 0,
    explicacao: "Para os conquistadores, riqueza significava ouro ou prata. Como nas ilhas esses metais não eram abundantes, a atenção se voltou para os indígenas, que passaram a ser escravizados.",
    conteudo: "Nessas ilhas, as riquezas a serem tomadas não eram abundantes, o que na visão dos conquistadores significava ouro ou prata. Assim, a atenção desses conquistadores, inclusive da família de Colombo, voltou-se para os indígenas, que passaram a ser escravizados."
  },

  // ---------- CAP 7: Sistema de trabalho (p.129) ----------
  {
    id: 4,
    tipo: "mc",
    topico: "Sistema de trabalho e organização social",
    paginas: "p. 129",
    pergunta: "Como se chamava o sistema em que o indígena era submetido a trabalhos estipulados por um colono, que tinha o dever de catequizá-lo?",
    opcoes: ["Encomienda", "Plantation", "Mita", "Hacienda"],
    correta: 0,
    explicacao: "É a encomienda. O encomendero explorava o trabalho indígena e, em troca, tinha o dever de catequizar e ensinar o modo de vida europeu. Esse sistema, surgido no Caribe, foi expandido a outros territórios da América espanhola.",
    conteudo: "O conquistador distribuía os indígenas para trabalharem em fazendas e minas, permitindo que os colonos se apropriassem dos bens produzidos. O sistema passou a ser conhecido como encomienda, ou seja, os indígenas eram submetidos a trabalhos estipulados pelo encomendero, que, por sua vez, tinha o dever de catequizar e ensinar o modo de vida europeu aos indígenas sob seu domínio. Essa dinâmica de trabalho seria desenvolvida para além do Caribe, sendo expandida a outros territórios da América espanhola."
  },
  {
    id: 5,
    tipo: "vf",
    topico: "Sistema de trabalho e organização social",
    paginas: "p. 129",
    pergunta: "O cabildo era uma espécie de câmara municipal, na qual os habitantes resolviam questões administrativas, econômicas e políticas.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. Com a formação das vilas, cada uma tinha um cabildo — uma espécie de câmara municipal onde se resolviam questões administrativas, econômicas e políticas.",
    conteudo: "Somente os colonos considerados mais capacitados podiam receber uma encomenda de indígenas, e esses eram os proprietários de terras ou minas que possuíam casas nos centros urbanos. Assim, a formação de vilas também se desenvolveu, tendo cada uma delas um cabildo, espécie de câmara municipal na qual os habitantes resolviam questões administrativas, econômicas e políticas."
  },

  // ---------- CAP 7: Declínio da população indígena (p.130) ----------
  {
    id: 6,
    tipo: "mc",
    topico: "O declínio da população indígena",
    paginas: "p. 130",
    pergunta: "Além da guerra e da fome, qual foi a PRINCIPAL causa do declínio das populações indígenas nas ilhas do Caribe?",
    opcoes: [
      "As doenças e as péssimas condições de trabalho",
      "A migração voluntária para o continente",
      "A baixa taxa de natalidade",
      "As guerras entre tribos rivais"
    ],
    correta: 0,
    explicacao: "A mortalidade veio da guerra, da fome e, principalmente, das doenças e das péssimas condições de trabalho — o que levou ao desaparecimento dessas populações em algumas ilhas do Caribe.",
    conteudo: "Uma situação que surgiu nas ilhas, que também refletiu em outras regiões da colonização europeia nas Américas, foi o declínio das populações indígenas. A mortalidade pela guerra, fome e, principalmente, pelas doenças e péssimas condições de trabalho levou ao desaparecimento dessas populações em algumas ilhas do Caribe."
  },
  {
    id: 7,
    tipo: "mc",
    topico: "O declínio da população indígena",
    paginas: "p. 130",
    pergunta: "Diante da falta de mão de obra indígena, qual foi a decisão da Coroa espanhola?",
    opcoes: [
      "Recorrer à mão de obra escravizada africana",
      "Trazer camponeses pobres da Espanha",
      "Abandonar as ilhas do Caribe",
      "Pagar salários aos indígenas livres"
    ],
    correta: 0,
    explicacao: "A Coroa recorreu à mão de obra escravizada africana, que não sucumbia às doenças da mesma maneira que os indígenas, pois tinha um sistema imunológico mais adaptado aos vírus existentes na Europa.",
    conteudo: "Os colonos tentaram trazer indígenas de outras ilhas para o trabalho nas encomiendas, mas nunca em quantidade suficiente. A decisão da Coroa foi recorrer a utilização de mão de obra escravizada africana, que não sucumbia às doenças da mesma maneira que os indígenas, pois possuía um sistema imunológico mais adaptado aos vírus existentes na Europa. Eles também eram mais ambientados para a forma de trabalho europeia, embora não se ajustassem passivamente à escravização."
  },
  {
    id: 8,
    tipo: "vf",
    topico: "O declínio da população indígena",
    paginas: "p. 130",
    pergunta: "As primeiras cidades espanholas na América surgiram de forma espontânea e desorganizada, como as cidades medievais europeias.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 1,
    explicacao: "Falso. As primeiras cidades espanholas na América foram PLANEJADAS — surgiam no papel antes de serem construídas, seguindo orientações renascentistas, com ruas retas e praças planejadas. As cidades europeias é que mantinham a organização medieval espontânea.",
    conteudo: "Outra criação da colonização espanhola nas ilhas do Caribe foram as cidades. As primeiras cidades na América espanhola foram planejadas, surgindo no papel antes de serem construídas. As cidades europeias mantinham uma organização medieval oriunda de cidades espontâneas, com casas agrupadas em pequenos espaços. As cidades espanholas na América puderam seguir as orientações renascentistas e se constituíram como novas experiências para a vida urbana. Em geral, foram planificadas, com ruas retas, praças planejadas, sendo também delineados os espaços onde seriam erguidos os prédios da administração e as igrejas."
  },

  // ---------- CAP 7: Conquista do México (p.131) ----------
  {
    id: 9,
    tipo: "mc",
    topico: "A conquista do México",
    paginas: "p. 131",
    pergunta: "Tenochtitlán, que se tornou símbolo da conquista espanhola, era a capital de qual império?",
    opcoes: ["Império Asteca", "Império Inca", "Império Maia", "Império Olmeca"],
    correta: 0,
    explicacao: "Tenochtitlán era a capital do Império Asteca, formado no século XV pela aliança entre as cidades Tenochtitlán, Texcoco e Tlacopan. Corresponde hoje à Cidade do México e viria a se tornar capital do vice-reino da Nova Espanha.",
    conteudo: "A expansão mais ao interior levou os espanhóis a Tenochtitlán, capital do vasto Império Asteca, formado no século XV por alianças entre as cidades astecas Tenochtitlán, Texcoco e Tlacopan. A conquista do território de Tenochtitlán, que corresponde hoje à atual Cidade do México, tornou-se um símbolo da conquista espanhola na América. A capital conquistada viria a se tornar capital do vice-reino da Nova Espanha."
  },
  {
    id: 10,
    tipo: "mc",
    topico: "A conquista do México",
    paginas: "p. 131",
    pergunta: "Quais dois aspectos fundamentais marcaram o avanço dos espanhóis pelo continente americano?",
    opcoes: [
      "As alianças e as guerras entre espanhóis e povos mesoamericanos",
      "O comércio e a diplomacia pacífica",
      "A religião e a agricultura",
      "A navegação e a cartografia"
    ],
    correta: 0,
    explicacao: "Dois aspectos foram fundamentais: as alianças e as guerras entre os espanhóis e os povos mesoamericanos. Juntos, formaram uma complexa rede de relações políticas, militares e sociais no processo de conquista.",
    conteudo: "É importante ter em mente dois aspectos fundamentais presentes no processo de avanço dos espanhóis pelo continente americano: as alianças e as guerras entre os espanhóis e os povos mesoamericanos. Essas características demarcam uma complexa rede de relações políticas, militares e sociais engendradas entre os diferentes grupos envolvidos no processo de conquista espanhola na América."
  },

  // ---------- CAP 7: Expedição de Hernán Cortés (p.132-133) ----------
  {
    id: 11,
    tipo: "mc",
    topico: "A expedição de Hernán Cortés",
    paginas: "p. 132",
    pergunta: "Em fevereiro de 1519, de onde partiu a expedição de Hernán Cortés rumo à península de Iucatã?",
    opcoes: [
      "Do porto de Santiago, na ilha de Cuba",
      "Do porto de Lisboa, em Portugal",
      "Do porto de Sevilha, na Espanha",
      "Do porto de Santo Domingo"
    ],
    correta: 0,
    explicacao: "A expedição de Cortés, com cerca de mil homens, partiu em fevereiro de 1519 do porto de Santiago, na ilha de Cuba, rumo à península de Iucatã.",
    conteudo: "Em fevereiro de 1519, uma expedição chefiada por Hernán Cortés, com aproximadamente mil homens, deixou o porto de Santiago, na ilha de Cuba, rumo à península de Iucatã. Ao chegarem, foram recebidos por um chefe maia local e permaneceram alguns dias tomando conhecimento da região."
  },
  {
    id: 12,
    tipo: "mc",
    topico: "A expedição de Hernán Cortés",
    paginas: "p. 132-133",
    pergunta: "Qual foi o papel de Malinche (Marina) na expedição de Cortés?",
    opcoes: [
      "Foi tradutora entre os espanhóis e o povo náuatle",
      "Comandou o exército tlaxcalteca",
      "Era a esposa de Montezuma",
      "Pilotava os navios espanhóis"
    ],
    correta: 0,
    explicacao: "Malinche falava náuatle (a língua de Tenochtitlán) e aprendeu espanhol. Ela assumiu o papel de tradutora entre as duas culturas, ampliando o conhecimento de Cortés sobre os povos que pretendia conquistar.",
    conteudo: "Entre as gratificações estava uma mulher de nome Mallinalli, ou Malinche, que também foi batizada com o nome de Marina. Ela era de um povo de língua náuatle, a mesma falada em Tenochtitlán. Sob o domínio de Cortés, Malinche aprendeu a se comunicar em espanhol. A atuação de Malinche ajudou a ampliar os conhecimentos de Cortés sobre os povos que pretendia conquistar. Esse conhecimento prévio dos espanhóis é apontado por historiadores como um ponto relevante no processo de conquista do México-Tenochtitlán."
  },
  {
    id: 13,
    tipo: "mc",
    topico: "A expedição de Hernán Cortés",
    paginas: "p. 132",
    pergunta: "Como funcionava a cadeia de tradução usada por Cortés para se comunicar com os povos náuatles?",
    opcoes: [
      "Cortés falava espanhol, Aguilar traduzia para o maia e Malinche para o náuatle",
      "Cortés falava diretamente em náuatle",
      "Montezuma traduzia tudo para o espanhol",
      "Os tlaxcaltecas serviam de intérpretes"
    ],
    correta: 0,
    explicacao: "A tradução passava por duas pessoas: Cortés falava em espanhol, Gerônimo de Aguilar traduzia para o maia, e Malinche traduzia do maia para o náuatle.",
    conteudo: "A relação de Cortés com Aguilar e Malinche possibilitou sua comunicação entre os mesoamericanos. A tradução ocorria da seguinte forma: Cortés falava em espanhol, Aguilar traduzia para o maia, e Malinche, para o náuatle. Assim, no decorrer das interações entre os espanhóis e o povo náuatle, Malinche assumiu o papel de tradutora entre as duas culturas."
  },
  {
    id: 14,
    tipo: "vf",
    topico: "A expedição de Hernán Cortés",
    paginas: "p. 132",
    pergunta: "Gerônimo de Aguilar era um frade franciscano espanhol, náufrago, que vivia com os maias desde 1511 e passou a traduzir a língua maia para Cortés.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. Durante a expedição, Cortés encontrou Gerônimo de Aguilar, um frade franciscano náufrago que vivia com os maias desde 1511 e se tornou tradutor da língua maia.",
    conteudo: "No decurso da expedição, encontraram um náufrago espanhol, o frade franciscano Gerônimo de Aguilar, que vivia com os maias desde 1511. Ele, então, passou a ser o tradutor da língua maia para Cortés."
  },

  // ---------- CAP 7: Encontro Cortés x Montezuma (p.134) ----------
  {
    id: 15,
    tipo: "mc",
    topico: "O encontro de Cortés com Montezuma",
    paginas: "p. 134",
    pergunta: "Qual povo foi o principal aliado de Cortés na marcha até Tenochtitlán?",
    opcoes: [
      "Os tlaxcaltecas",
      "Os maias chontales",
      "Os incas",
      "Os guaranis"
    ],
    correta: 0,
    explicacao: "O principal apoio veio dos tlaxcaltecas, uma confederação de cidades que resistia ao domínio asteca. Cerca de quatro mil tlaxcaltecas acompanharam os quatrocentos soldados espanhóis.",
    conteudo: "No primeiro contato, esses povos não encontraram motivos para hostilizar os espanhóis e, desejando se libertar do domínio asteca, aliaram-se a eles na expedição de conquista. O principal apoio veio dos tlaxcaltecas, uma confederação de cidades que resistia ao domínio asteca. A expedição seguiu para Tenochtitlán com cerca de quatrocentos soldados espanhóis, mas cresceu em força de combate com os quatro mil tlaxcaltecas que a acompanhavam."
  },
  {
    id: 16,
    tipo: "vf",
    topico: "O encontro de Cortés com Montezuma",
    paginas: "p. 134",
    pergunta: "O encontro entre Cortés e Montezuma começou de forma pacífica, e Cortés foi recebido como um amigo dos astecas.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. O encontro ocorreu fora da cidade e, a princípio, foi pacífico: Cortés foi recebido como amigo e convidado a entrar na cidade. Mas a paz não durou — Cortés queria conquistar Tenochtitlán, e acabou aprisionando Montezuma.",
    conteudo: "O encontro com o líder Montezuma, governante da capital asteca, ocorreu fora da cidade e, a princípio, de forma pacífica. Assim, o líder espanhol foi recebido como um amigo dos astecas e, em seguida, convidado a entrar na cidade. A relação pacífica não durou muito tempo, pois Cortés não desejava ser hóspede em Tenochtitlán, mas conquistá-la. Os espanhóis fizeram um estudo das defesas da cidade e das potenciais riquezas que poderiam pilhar. Assim, após alguns dias esperando uma boa oportunidade, atacaram e aprisionaram Montezuma em seu palácio."
  },

  // ---------- CAP 7: Conquista de Tenochtitlán (p.135) ----------
  {
    id: 17,
    tipo: "mc",
    topico: "A conquista de Tenochtitlán",
    paginas: "p. 135",
    pergunta: "Como ficou conhecido (na perspectiva dos espanhóis) o episódio em que os astecas conseguiram expulsar os espanhóis de Tenochtitlán?",
    opcoes: [
      "Noite Triste",
      "Noite dos Cristais",
      "Grande Fuga",
      "Batalha do Lago"
    ],
    correta: 0,
    explicacao: "Os astecas expulsaram os espanhóis da cidade no episódio conhecido como Noite Triste. Cortés se refugiou em Tlaxcala, construiu barcos e voltou para atacar Tenochtitlán, situada em um lago.",
    conteudo: "Ainda assim, os astecas conseguiram expulsar os espanhóis da cidade, no episódio conhecido como Noite Triste (na perspectiva dos espanhóis), e Cortés e seus homens se refugiaram em Tlaxcala, onde construíram barcos para atacar novamente Tenochtitlán, situada em um lago. Nesse meio-tempo, chegaram das ilhas do Caribe diversos destacamentos de soldados espanhóis, reforçando o acervo de armas e cavalos para o combate."
  },
  {
    id: 18,
    tipo: "mc",
    topico: "A conquista de Tenochtitlán",
    paginas: "p. 135",
    pergunta: "Em que ano Cortés, com o auxílio dos guerreiros de Tlaxcala, conquistou definitivamente Tenochtitlán?",
    opcoes: ["1521", "1492", "1500", "1519"],
    correta: 0,
    explicacao: "Em 1521, Cortés preparou o cerco à cidade asteca e conquistou o coração do império, dando início à colonização da região, que passou a se chamar vice-reino da Nova Espanha.",
    conteudo: "Com o auxílio de guerreiros de Tlaxcala, Cortés preparou o cerco à cidade asteca, em 1521, e conquistou o coração do império, dando início ao período de colonização da região, a qual passou a se chamar vice-reino da Nova Espanha."
  },
  {
    id: 19,
    tipo: "mc",
    topico: "A conquista de Tenochtitlán",
    paginas: "p. 135",
    pergunta: "Quem assumiu o comando do Império Asteca após a morte de Montezuma?",
    opcoes: [
      "Cuauhtémoc, primo de Montezuma",
      "Atahualpa, irmão de Montezuma",
      "Malinche",
      "Gerônimo de Aguilar"
    ],
    correta: 0,
    explicacao: "Cuauhtémoc, primo de Montezuma, assumiu o comando do império. Mas a cidade sofria com fome, mortes por varíola e falta de água potável.",
    conteudo: "Após a morte de Montezuma, a rebelião asteca tornou-se insustentável para os espanhóis. Cuauhtémoc, primo de Montezuma, assumiu o comando do império, mas a cidade sofria com a fome causada por desorganização na produção, mortes por varíola e falta de água potável."
  },
  {
    id: 20,
    tipo: "vf",
    topico: "A conquista de Tenochtitlán",
    paginas: "p. 135",
    pergunta: "Pesquisas atuais confirmam que os astecas realmente acreditaram que Cortés era o deus Quetzalcóatl.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 1,
    explicacao: "Falso. Por muito tempo os historiadores pensaram isso, mas pesquisas atuais indicam que essa narrativa foi provavelmente criada pelos próprios conquistadores espanhóis — não há indícios de que os astecas acreditaram que Cortés fosse uma divindade.",
    conteudo: "Por muito tempo, historiadores pensavam que os astecas, ao encontrarem Cortés, acreditaram que ele era o deus Quetzalcoati, o qual, segundo suas profecias, apareceria, coincidentemente, no mesmo ano e local em que Cortés chegou ao México. Atualmente, porém, pesquisas indicam que essa narrativa foi provavelmente criada pelos próprios conquistadores espanhóis, já que não há indícios históricos de que os astecas acreditaram que Cortés fosse uma divindade."
  },

  // ---------- CAP 7: Império Inca (p.137) ----------
  {
    id: 21,
    tipo: "mc",
    topico: "A conquista do Império Inca",
    paginas: "p. 137",
    pergunta: "Quem liderou a expedição espanhola que invadiu o Império Inca e capturou o imperador Atahualpa?",
    opcoes: [
      "Francisco Pizarro",
      "Hernán Cortés",
      "Cristóvão Colombo",
      "Sebastián Caboto"
    ],
    correta: 0,
    explicacao: "Francisco Pizarro chefiou a expedição que invadiu o território inca. Sua estratégia foi aprisionar o monarca: atraiu Atahualpa para Cajamarca com a desculpa de um jantar e o capturou.",
    conteudo: "Após o desgaste do embate, outra circunstância de violência se aproximou do povo inca: uma expedição espanhola, chefiada por Francisco Pizarro, invadiu o território com a intenção de dominar a região, seus povos e suas riquezas. A estratégia de Pizarro foi aprisionar o monarca inca e, para isso, a título de um jantar e uma conferência, atraiu-o para a cidade de Cajamarca, onde foi cercado e capturado."
  },
  {
    id: 22,
    tipo: "vf",
    topico: "A conquista do Império Inca",
    paginas: "p. 137",
    pergunta: "Mesmo após receber o resgate em ouro e prata, Pizarro quebrou o acordo e condenou Atahualpa à morte.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. O resgate foi entregue, mas Pizarro quebrou o acordo e organizou um julgamento que condenou Atahualpa à morte. Para evitar ser queimado (inconcebível para os incas), Atahualpa aceitou ser batizado e foi morto por estrangulamento.",
    conteudo: "Após a captura de Atahualpa, foi exigido um resgate em ouro e prata por sua soltura, que foi entregue a Pizarro, o qual derreteu as peças e dividiu a riqueza entre seus homens. Porém, Pizarro quebrou o acordo e organizou um julgamento para o líder inca, o qual o condenou à morte na fogueira. Contudo, esse tipo de morte era inconcebível para os incas, pois eles acreditavam na preservação do corpo para uma futura ressureição em outro plano. Para evitar ser queimado, Atahualpa aceitou ser batizado e, após o batismo, foi morto por estrangulamento e enterrado."
  },
  {
    id: 23,
    tipo: "mc",
    topico: "A conquista do Império Inca",
    paginas: "p. 137",
    pergunta: "Que vice-reino foi criado na região andina, após a consolidação do domínio espanhol?",
    opcoes: [
      "Vice-reino do Peru",
      "Vice-reino da Nova Espanha",
      "Vice-reino do Rio da Prata",
      "Vice-reino de Nova Granada"
    ],
    correta: 0,
    explicacao: "O resultado de anos de guerra foi a consolidação do domínio espanhol no altiplano andino, onde foi criado o vice-reino do Peru.",
    conteudo: "Após a morte do imperador, toda a região sublevou-se, com alguns povos indígenas mantendo-se aliados aos espanhóis contra os incas. O resultado desses anos de guerra foi a consolidação do domínio da Coroa espanhola na região do altiplano andino. Nessa região, foi criado o vice-reino do Peru."
  },

  // ---------- CAP 7: Rio da Prata (p.140) ----------
  {
    id: 24,
    tipo: "mc",
    topico: "A conquista da região do rio da Prata",
    paginas: "p. 140",
    pergunta: "Qual cidade, atual capital da Argentina, foi fundada em 1536, abandonada e refundada apenas em 1580?",
    opcoes: [
      "Buenos Aires",
      "Assunção",
      "Santo Domingo",
      "Potosí"
    ],
    correta: 0,
    explicacao: "Buenos Aires foi fundada em 1536 para explorar a região, mas por causa dos ataques indígenas e do desinteresse da Coroa, foi abandonada, sendo refundada somente em 1580.",
    conteudo: "Para explorar melhor a região, foi fundada a cidade de Buenos Aires, atual capital da Argentina, em 1536, mas, em razão dos ataques indígenas e do desinteresse da Coroa, a cidade foi abandonada, sendo refundada somente em 1580."
  },
  {
    id: 25,
    tipo: "mc",
    topico: "A conquista da região do rio da Prata",
    paginas: "p. 140",
    pergunta: "Qual característica marcou a região de Assunção (atual capital do Paraguai)?",
    opcoes: [
      "A mestiçagem, pelas uniões entre espanhóis e mulheres guaranis",
      "A mineração de ouro e prata",
      "A total ausência de indígenas",
      "A fundação de universidades"
    ],
    correta: 0,
    explicacao: "Assunção foi marcada pela mestiçagem, devido ao grande número de uniões entre espanhóis e mulheres guaranis. Essa política de casamento era vista como necessária para a paz, mas era criticada pela Igreja.",
    conteudo: "Outra cidade importante para a região foi Assunção, atual capital do Paraguai, fundada por Juan de Salazar y Espinosa. A cidade foi erguida como um forte às margens do rio Paraguai, em 1537. Uma característica da região de Assunção foi a mestiçagem, em razão do grande número de uniões entre espanhóis e mulheres guaranis. Essa política de casamento foi compreendida como necessária para estabelecer a paz entre os europeus e os indígenas, apesar de ser duramente criticada pela Igreja, pois era comum que um espanhol desposasse várias mulheres."
  },
  {
    id: 26,
    tipo: "vf",
    topico: "A conquista da região do rio da Prata",
    paginas: "p. 140",
    pergunta: "O vice-reino do rio da Prata foi o último e mais curto vice-reino criado pela Espanha, no século XVIII.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. No século XVIII, a região foi elevada à condição de vice-reino do rio da Prata — o último e mais curto criado pela Espanha. Sua criação visava impedir o avanço de potências como Portugal e Inglaterra.",
    conteudo: "No século XVIII, a região do rio da Prata foi elevada à condição de vice-reino do rio da Prata, sendo o último e mais curto vice-reino criado pela Espanha. Em grande medida, sua criação ocorreu visando impedir outras potências mundiais, como Portugal e Inglaterra, de avançarem sobre os territórios controlados pela Coroa espanhola."
  },

  // ---------- CAP 7: Impactos e administração (p.141-142) ----------
  {
    id: 27,
    tipo: "mc",
    topico: "Organização e administração da colônia",
    paginas: "p. 142",
    pergunta: "Quantos vice-reinos a Coroa espanhola criou para administrar os territórios conquistados?",
    opcoes: [
      "Quatro: Prata, Peru, Nova Granada e Nova Espanha",
      "Dois: Peru e Nova Espanha",
      "Três: Peru, Prata e México",
      "Cinco: Prata, Peru, Chile, Granada e Nova Espanha"
    ],
    correta: 0,
    explicacao: "Carlos V, rei da Espanha, estabeleceu o domínio colonial com base em quatro vice-reinos: Prata, Peru, Nova Granada e Nova Espanha.",
    conteudo: "Para controlar e administrar os vastos e populosos territórios conquistados, Carlos V, rei da Espanha, estabeleceu o domínio colonial com base em vice-reinos, que foram regiões divididas e governadas por figuras que o representavam na colônia. A Coroa espanhola criou quatro vice-reinos: Prata, Peru, Nova Granada e Nova Espanha."
  },
  {
    id: 28,
    tipo: "vf",
    topico: "Os impactos da conquista",
    paginas: "p. 141",
    pergunta: "As doenças trazidas pelos europeus, como a varíola e a gripe, foram uma das grandes causas da mortalidade indígena, pois os nativos não tinham resistência imunológica a elas.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. Além da exploração do trabalho, as doenças europeias (varíola, gripe) causaram mortalidade dramática, pois os indígenas não possuíam resistência imunológica contra elas.",
    conteudo: "Outra razão que acresceu a mortalidade foram as doenças trazidas pelos europeus, contra as quais os indígenas não possuíam resistência imunológica, fosse a varíola ou uma gripe. A mortalidade dessas populações foi dramática nos primeiros anos de conquista e colonização. Diante desse cenário, a Coroa espanhola e a Igreja católica estabeleceram medidas para diminuir a mortalidade, visto que o rei queria súditos, a Igreja necessitava de fiéis e ambos desejavam a força de trabalho dos indígenas."
  },

  // ---------- CAP 7: Resistência cultural (p.143) ----------
  {
    id: 29,
    tipo: "mc",
    topico: "A resistência cultural indígena",
    paginas: "p. 143",
    pergunta: "Como é chamada a estratégia de resistência cultural, não violenta, dos povos indígenas?",
    opcoes: [
      "Resistência passiva (ou não violenta)",
      "Resistência armada",
      "Rebelião aberta",
      "Guerra de guerrilha"
    ],
    correta: 0,
    explicacao: "Essa estratégia de resistência por meios culturais é chamada de resistência passiva, também conhecida como resistência não violenta.",
    conteudo: "A dominação europeia sobre os povos da América consolidou-se ao longo dos séculos XVI e XVII, e a enorme violência contra a população local provocou ações de resistência ativa. Contudo, estratégias de resistência foram desenvolvidas por outros meios, como o cultural. Essa atuação é o que denominamos de resistência passiva, conhecida também como resistência não violenta."
  },
  {
    id: 30,
    tipo: "mc",
    topico: "A resistência cultural indígena",
    paginas: "p. 143",
    pergunta: "Quando um artista indígena pintava um colibri (beija-flor) nas paredes de uma igreja, a que ele se referia secretamente?",
    opcoes: [
      "Ao deus Huitzilopochtli",
      "Ao deus Quetzalcóatl",
      "À deusa Xochiquétzal",
      "A Nossa Senhora de Guadalupe"
    ],
    correta: 0,
    explicacao: "O colibri (beija-flor) era uma referência ao deus Huitzilopochtli. Já a serpente remetia a Quetzalcóatl, e uma flor na roupa homenageava a deusa Xochiquétzal — formas de manter as tradições sob disfarce cristão.",
    conteudo: "Nesse sentido, muitos artistas indígenas, quando convocados para decorar catedrais católicas, o fizeram com figuras religiosas pré-cristãs. Se um colibri (beija-flor) fosse desenhado nas paredes de uma igreja, isso significava uma referência ao deus Huitzilopochtli, da mesma forma que uma serpente poderia significar o deus Quetzalcóatl; se alguém saísse de casa com uma flor pregada em sua roupa, poderia ser uma homenagem à deusa Xochiquétzal."
  },
  {
    id: 31,
    tipo: "vf",
    topico: "A resistência cultural indígena",
    paginas: "p. 143",
    pergunta: "A imagem de Nossa Senhora de Guadalupe representa a fusão cultural entre os povos indígenas e ibéricos e é hoje um dos maiores símbolos da cultura mexicana.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. Os povos indígenas construíram, com os ibéricos, o cerne das culturas coloniais. Nossa Senhora de Guadalupe, que segundo a tradição apareceu ao índio Juan Diego, é hoje um dos maiores símbolos da cultura mexicana.",
    conteudo: "Assim, os povos indígenas construíram com os povos ibéricos o cerne das culturas coloniais e, posteriormente, da cultura nacional da América Latina. Essa característica é representada na imagem de Nossa Senhora de Guadalupe, que, segundo a tradição, apareceu ao índio Juan Diego Cuauhtlatoatzin, no monte Tepeyac, na cidade do México, no século XVI. Atualmente, a Virgem de Guadalupe é um dos maiores símbolos da cultura mexicana."
  },

  // ---------- CAP 8: Uma nova Espanha (p.148) ----------
  {
    id: 32,
    tipo: "mc",
    topico: "Uma nova Espanha na América",
    paginas: "p. 148",
    pergunta: "Segundo o texto, o que orientou predominantemente a colonização espanhola (assim como a portuguesa)?",
    opcoes: [
      "Os interesses financeiros",
      "Apenas a expansão da fé católica",
      "A busca por conhecimento científico",
      "O desejo de povoar terras vazias"
    ],
    correta: 0,
    explicacao: "Embora a Coroa justificasse a conquista como expansão da fé católica, a criação das colônias foi consequência da expansão comercial e da oportunidade de enriquecimento. A colonização foi orientada predominantemente pelos interesses financeiros.",
    conteudo: "A Coroa espanhola justificava suas ações de conquista como parte da expansão da fé católica, a qual era elemento integrante de sua constituição como Estado moderno. No entanto, a criação das colônias no Novo Mundo também foi consequência da expansão comercial e da necessidade de novos produtos serem vendidos na Europa, além de constituir uma grande oportunidade de enriquecimento para comerciantes, nobres empobrecidos e aventureiros. Desse modo, a colonização espanhola, assim como a portuguesa, foi orientada predominantemente pelos interesses financeiros."
  },

  // ---------- CAP 8: Organização administrativa (p.149) ----------
  {
    id: 33,
    tipo: "mc",
    topico: "A organização administrativa da colônia",
    paginas: "p. 149",
    pergunta: "Quem eram os 'chapetones' na administração colonial espanhola?",
    opcoes: [
      "Os representantes da Coroa que davam a decisão final sobre a colônia",
      "Os filhos de espanhóis nascidos na América",
      "Os líderes indígenas aliados",
      "Os escravizados africanos"
    ],
    correta: 0,
    explicacao: "Apesar da administração local dos cabildos, a decisão final sobre os destinos da colônia era sempre da Coroa, por meio de seus representantes, os chapetones.",
    conteudo: "Todas as áreas urbanas tinham um cabildo, uma espécie de câmara municipal, responsável pela administração pública, formada por representantes criollos. Apesar da existência dessa administração local, a decisão final sobre os destinos da colônia era sempre dada pela Coroa por meio de seus representantes, os chapetones. Embora fosse um território muito extenso, as leis gerais eram as mesmas e a administração colonial tinha estrutura semelhante."
  },
  {
    id: 34,
    tipo: "mc",
    topico: "A organização administrativa da colônia",
    paginas: "p. 149",
    pergunta: "O Tribunal do Santo Ofício, que condenava quem questionasse os dogmas cristãos, era um órgão de qual instituição?",
    opcoes: [
      "Da Igreja Católica",
      "Do cabildo municipal",
      "Da Coroa espanhola",
      "Dos vice-reis"
    ],
    correta: 0,
    explicacao: "A Igreja Católica era muito presente na colônia. Além das missões de catequização e da educação cristã, ela representava o Tribunal do Santo Ofício, responsável por condenar e punir quem questionasse os dogmas cristãos.",
    conteudo: "A Igreja Católica era outra instituição muito presente na colônia e sua atuação se desenvolvia por meio das missões de catequização dos indígenas e pela educação cristã dos colonos, além de representar o Tribunal do Santo Ofício, órgão da Igreja responsável por condenar e punir quem questionasse os dogmas cristãos."
  },
  {
    id: 35,
    tipo: "vf",
    topico: "A organização administrativa da colônia",
    paginas: "p. 149",
    pergunta: "A administração espanhola dividiu suas colônias na forma de quatro vice-reinados: Nova Espanha, Nova Granada, Peru e Rio da Prata.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. A divisão administrativa ocorreu em quatro vice-reinados: Nova Espanha, Nova Granada, Peru e Rio da Prata. Cada vice-reino tinha uma capitania — a cidade principal e sede do poder da Coroa.",
    conteudo: "A divisão administrativa das colônias ocorreu na forma de quatro vice-reinados, que regiam todo o território espanhol na América. São eles: vice-reino de Nova Espanha (na área que vai do Sul dos Estados Unidos da América até a Costa Rica, na América Central); vice-reino de Nova Granada (na região noroeste da América do Sul); vice-reino do Peru (nos territórios andinos, a Oeste da América do Sul); e vice-reino do Rio da Prata (nos atuais territórios de Uruguai, Argentina, Paraguai e Bolívia). Cada vice-reino tinha uma capitania, que era a cidade principal e sede do poder da Coroa espanhola."
  },

  // ---------- CAP 8: Trabalho e riquezas (p.150) ----------
  {
    id: 36,
    tipo: "mc",
    topico: "A organização do trabalho e geração de riquezas",
    paginas: "p. 150",
    pergunta: "O que era o 'repartimiento' (também chamado de mita), que substituiu a encomienda no fim do século XVI?",
    opcoes: [
      "Um sorteio que definia quem prestaria serviços por um período, em troca de pagamento",
      "A doação definitiva de terras aos indígenas",
      "A libertação total dos trabalhadores indígenas",
      "Um imposto pago em ouro pela Coroa"
    ],
    correta: 0,
    explicacao: "A mita baseava-se em um sorteio que definia quem prestaria serviços aos colonizadores por um período (em geral quatro meses), com pagamento em dinheiro. Apesar de pago, era uma espécie de trabalho forçado, em condições precárias e mal remunerado.",
    conteudo: "A prática da encomienda foi substituída pelo repartimiento de indígenas, no final do século XVI. Também conhecida como mita, essa forma de organização do trabalho se baseava em um sorteio por meio do qual se definia quem prestaria os serviços aos colonizadores por determinado período — em geral, quatro meses — em troca de pagamento em dinheiro. Essa modalidade, que tinha origem inca, foi muito utilizada na mineração. Apesar de pago, esse também pode ser considerado uma espécie de trabalho forçado, pois, além de ser realizado em condições precárias, recebia-se menos do que um trabalhador livre, além de não ser permitido o sustento e a autonomia das famílias."
  },
  {
    id: 37,
    tipo: "mc",
    topico: "A organização do trabalho e geração de riquezas",
    paginas: "p. 150",
    pergunta: "A mita, forma de trabalho muito usada na mineração, tinha origem em qual povo?",
    opcoes: ["Inca", "Asteca", "Maia", "Guarani"],
    correta: 0,
    explicacao: "A mita tinha origem inca e foi muito utilizada na mineração durante a colonização espanhola.",
    conteudo: "Também conhecida como mita, essa forma de organização do trabalho se baseava em um sorteio por meio do qual se definia quem prestaria os serviços aos colonizadores por determinado período — em geral, quatro meses — em troca de pagamento em dinheiro. Essa modalidade, que tinha origem inca, foi muito utilizada na mineração."
  },
  {
    id: 38,
    tipo: "vf",
    topico: "A organização do trabalho e geração de riquezas",
    paginas: "p. 150",
    pergunta: "Na encomienda, os colonos podiam se apropriar das terras indígenas, além de explorar o trabalho das comunidades.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 1,
    explicacao: "Falso. Embora NÃO pudessem se apropriar das terras nativas, os encomenderos recebiam autorização apenas para usufruir do TRABALHO de comunidades indígenas inteiras, cobrando tributos pagos em produtos agrícolas ou minerais.",
    conteudo: "Nos primeiros anos da administração espanhola na América, estabeleceu-se o sistema conhecido como encomienda, que permitia que espanhóis e colonos, chamados encomenderos, explorassem legalmente a mão de obra indígena. Embora não pudessem se apropriar das terras nativas, os encomienda recebiam autorização para usufruir do trabalho de comunidades indígenas inteiras, que eram postas sob sua responsabilidade pela administração espanhola e de quem cobravam tributos, pagos geralmente com produtos agrícolas ou minerais. Em troca, eles forneciam alimentação, vestimenta, moradia e, principalmente, comprometiam-se a fornecer educação cristã, catequizando-os."
  },

  // ---------- CAP 8: Mineração (p.151) ----------
  {
    id: 39,
    tipo: "mc",
    topico: "A mineração",
    paginas: "p. 151",
    pergunta: "Qual cidade, com sua mina do Cerro Rico, tornou-se o centro da mineração de prata e uma das maiores cidades do mundo no século XVI?",
    opcoes: [
      "Potosí",
      "Buenos Aires",
      "Tenochtitlán",
      "Cajamarca"
    ],
    correta: 0,
    explicacao: "Potosí, fundada em 1545, chegou a ter 200 mil habitantes. Sua maior mina, o Cerro Rico, produzia cerca de 60% de toda a prata extraída no mundo naquele período.",
    conteudo: "A mineração foi a principal atividade econômica desenvolvida nas colônias espanholas, dada a grande disponibilidade de ouro e prata nas regiões do vice-reino do México e do Peru e, principalmente, na cidade de Potosí. Fundada em 1545, esta se tornou uma das maiores cidades do mundo no século XVI, chegando a ter 200 mil habitantes. A sua maior mina, a montanha de Cerro Rico, produzia cerca de 60 por cento de toda a prata extraída no mundo naquele período."
  },

  // ---------- CAP 8: Haciendas (p.152) ----------
  {
    id: 40,
    tipo: "vf",
    topico: "As haciendas",
    paginas: "p. 152",
    pergunta: "A servidão por dívidas prendia os camponeses à hacienda porque eles compravam, a preços altos, produtos em armazéns próximos e acabavam endividados.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. Além da encomienda e do repartimiento, as haciendas usavam a servidão por dívidas: os camponeses adquiriam produtos a preços mais altos em armazéns próximos, geravam endividamento e ficavam presos àquela hacienda.",
    conteudo: "As haciendas empregavam vários tipos de mão de obra, entre eles, a encomienda e o repartimiento de indígenas. Além disso, havia a servidão por dívidas, que se configurava ao se estabelecer crédito para compra em armazéns próximos às haciendas. Nesses estabelecimentos, os camponeses adquiriam produtos a preços mais altos, o que gerava endividamento e os prendia àquela hacienda."
  },

  // ---------- CAP 8: Sociedade colonial (p.153) ----------
  {
    id: 41,
    tipo: "mc",
    topico: "A sociedade colonial",
    paginas: "p. 153",
    pergunta: "Quem eram os 'criollos' na sociedade colonial espanhola?",
    opcoes: [
      "Os filhos dos chapetones que nasceram na América",
      "Os espanhóis nascidos na Espanha",
      "Os indígenas convertidos ao cristianismo",
      "Os mestiços de indígena com africano"
    ],
    correta: 0,
    explicacao: "Os criollos eram os filhos dos chapetones nascidos na América. Como descendentes da elite, tinham privilégios (terras, trabalho, comércio), mas não podiam exercer plenamente os cargos políticos — apenas participar dos cabildos.",
    conteudo: "A distribuição espacial e a ocupação das colônias ocorriam com a construção de vilas e de cidades, em uma sociedade composta, nas elites, de dois grupos: os chapetones e os criollos. Os chapetones estavam na posição mais privilegiada da sociedade colonial e representavam os interesses da Coroa espanhola nas terras americanas. Apenas os nascidos na Espanha podiam ser chapetones e somente eles podiam exercer os principais cargos políticos. Já os criollos eram os filhos dos chapetones que nasceram na América. Como eram descendentes da elite administrativa e política, eles também tinham privilégios. Os criollos possuíam terras e podiam explorar as forças de trabalho existentes nas colônias e praticar o comércio."
  },
  {
    id: 42,
    tipo: "mc",
    topico: "A sociedade colonial",
    paginas: "p. 153",
    pergunta: "Qual movimento, surgido no início do século XVII, baseou-se no sentimento de identidade própria dos criollos?",
    opcoes: [
      "O criollismo",
      "O chapetonismo",
      "O cabildo",
      "O encomendismo"
    ],
    correta: 0,
    explicacao: "Com o tempo, os criollos desenvolveram um senso de identidade próprio, gerando o criollismo. Esse movimento os fez lutar por maior participação política — e essa elite local seria fundamental nos futuros processos de independência.",
    conteudo: "Com o tempo, os criollos tornaram-se diferentes dos espanhóis e desenvolveram o senso de identidade próprio, gerando um movimento conhecido como criollismo, no início do século XVII. Esse movimento se baseou no sentimento de origem comum que os diferenciava de outros grupos da sociedade colonial, fazendo-os lutar pela sua participação na política e na administração colonial. Como haviam nascido na América, não tinham direito de exercer essas funções plenamente, restando-lhes apenas a participação nas câmaras locais, conhecidas como cabildos. Nos séculos posteriores, essa elite local, mais fortalecida, foi fundamental nos processos de independência das colônias."
  },
  {
    id: 43,
    tipo: "vf",
    topico: "A sociedade colonial",
    paginas: "p. 153",
    pergunta: "Os criollos, por serem descendentes da elite, podiam exercer plenamente os principais cargos políticos da colônia.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 1,
    explicacao: "Falso. Apenas os chapetones (nascidos na Espanha) podiam exercer os principais cargos políticos. Os criollos, por terem nascido na América, não podiam exercê-los plenamente — restava-lhes a participação nos cabildos (câmaras locais).",
    conteudo: "Apenas os nascidos na Espanha podiam ser chapetones e somente eles podiam exercer os principais cargos políticos, além de terem o controle sobre a circulação das embarcações, as políticas fiscais e de taxas. (...) Como haviam nascido na América, não tinham direito de exercer essas funções plenamente, restando-lhes apenas a participação nas câmaras locais, conhecidas como cabildos."
  },

  // ---------- CAP 8: Mestiços, indígenas e africanos (p.154, 156) ----------
  {
    id: 44,
    tipo: "mc",
    topico: "Os mestiços e indígenas",
    paginas: "p. 154",
    pergunta: "Qual grupo formava uma 'classe intermediária' na sociedade colonial, nascido das relações entre indígenas e europeus?",
    opcoes: [
      "Os mestiços",
      "Os criollos",
      "Os chapetones",
      "Os africanos escravizados"
    ],
    correta: 0,
    explicacao: "Os mestiços formavam uma classe intermediária. Nascidos das relações entre indígenas e europeus, não podiam participar da política e, em geral, exerciam trabalhos braçais, como militares, comerciantes locais e artesãos.",
    conteudo: "Além dos chapetones e dos criollos, a sociedade colonial espanhola também contava com outros três grupos importantes: os mestiços, os indígenas e os africanos escravizados. Os mestiços formavam uma classe intermediária na sociedade colonial. Nascidos das relações entre indígenas e europeus, eles não podiam participar da política e, na sua maioria, exerciam, nas regiões urbanas e rurais, trabalhos braçais como militares, comerciantes locais e artesãos."
  },
  {
    id: 45,
    tipo: "vf",
    topico: "Os africanos escravizados",
    paginas: "p. 156",
    pergunta: "Em muitos lugares da América espanhola, como no Caribe, os africanos escravizados chegaram a ser a maior parte da população.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao: "Verdadeiro. A partir do século XVII, o tráfico de africanos escravizados foi usado onde havia escassez de mão de obra indígena. No Caribe, em 1700, eles representavam mais de três quartos do total de habitantes.",
    conteudo: "O tráfico de africanos escravizados também foi utilizado pela Coroa espanhola nas grandes plantações, a partir do século XVII, especialmente nas Antilhas, em alguns territórios da América Central e no litoral da América do Sul, regiões que apresentavam escassez de mão de obra indígena para o trabalho. Em muitos lugares da América espanhola, os escravizados africanos eram a maior parte da população, como no Caribe, onde eles representavam mais de três quartos do total de habitantes em 1700."
  }
];
