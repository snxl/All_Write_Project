'use strict';
const moment = require("moment")

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('library',[{
      id_user: 1,
      titulo: "Vinte mil léguas submarinas",
      sinopse:"Em 1866, o Professor Pierre M. Aronnax e seu assistente Conseil, que estão em São Francisco para pesquisar relatos de um monstro marinho gigante atacando navios no Oceano Pacífico, são convidados a participar de uma expedição para procurar a criatura. Durante a busca, eles e o arpoador Ned Land são lançados ao mar durante um ataque, acabando por descobrir que o monstro é na verdade um submarino pilotado pelo brilhante, mas assombrado, Capitão Nemo.",
      image: "vinte-mil-leguas-submarinas.jpg",
      pdf:"livro1.pdf",
      category:"aventura",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 1,
      titulo: "a arte da guerra",
      sinopse:`“Se você conhece o inimigo e conhece a si mesmo, não precisa temer o resultado de cem batalhas. Se você se conhece, mas não conhece o inimigo, para cada vitória grande, sofrerá também uma derrota. Se você não conhece nem o inimigo e nem a si mesmo, perderá todas as batalhas…”

      A arte da guerra é sem dúvida a bíblia da estratégia, sendo utilizada amplamente no mundo dos negócios, conquistando pessoas e mercados. Na paz, preparar-se para a guerra; na guerra, preparar-se para a paz. A arte da guerra é de importância vital para o Estado. É uma questão de vida ou morte, um caminho tanto para a segurança como para a ruína. Assim, em nenhuma circunstância deve ser negligenciada.

      Desta maneira começa o notável documento chinês, escrito há cerca de 2500 anos, no qual é registrada a sabedoria de Sun Tzu, filósofo que se tornou general. Os conselhos de Sun Tzu podem ser usados de diferentes formas e para diversos campos do conhecimento humano. São muito úteis, principalmente, para jovens executivos e empreendedores, assim como para chefes de Estado e comandantes.

      Em A arte da guerra, são discutidos todos os aspectos da guerra – táticos, hierárquicos e humanos, entre outros – numa linguagem tão poética quanto didática. James Clavell, autor de prestígio mundial, assina o prefácio, onde cita alguns preceitos do livro e os contextualiza em nosso cotidiano. Uma obra para ser lida não apenas por todo comandante ou oficial, mas por qualquer pessoa interessada na paz. Não surpreende que o livro seja citado em filmes e constantemente aplicado para solucionar os mais recentes conflitos do nosso dia-a-dia.`,
      image: "arte-da-guerra.jpg",
      pdf:"livro2.pdf",
      category:"literario",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 2,
      titulo: "a república",
      sinopse:"A República é o segundo diálogo mais extenso de Platão (428-347 a.C.), composto por dez partes (dez livros) e aborda diversos temas como: política, educação, imortalidade da alma, etc. ... Essa é a principal e mais complexa obra de Platão, onde estão presentes os principais fundamentos de sua filosofia.",
      image: "a-republica.jpg",
      pdf:"livro3.pdf",
      category:"humanas",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 2,
      titulo: "O banquete",
      sinopse:"O Banquete é uma narrativa feita por Apolodoro acerca do banquete que Agatão ofereceu a alguns amigos, entre eles, Sócrates, Aristófanes, Alcibíades etc. Ao explanar para o leitor o diálogo, o narrador possibilita uma reflexão sobre Eros (Amor), expondo experiências e cogitações fundamentalmente humanas.",
      image: "o-banquete.jpg",
      pdf:"livro4.pdf",
      category:"humanas",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 3,
      titulo: "alice no país das maravilhas",
      sinopse:"A garota Alice vê um coelho branco entrar em uma toca. Vai atrás dele e chega ao País das Maravilhas. Ela muda de tamanho muitas vezes e conhece criaturas esquisitas, como a Lagarta, a Duquesa, o Gato de Cheshire, a Lebre de Março, o Chapeleiro Maluco e o Rei e a Rainha de Copas. Tradução de Ligia Cademartori para o clássico de Lewis Carroll.",
      image: "image5.jpg",
      pdf:"livro5.pdf",
      category:"aventura",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 3,
      titulo: "Romeu e Julieta",
      sinopse:`Romeu e Julieta é uma das mais famosas histórias de amor da literatura. Ela se passa na cidade italiana de Verona, no século 16. Romeu Montecchio e Julieta Capuleto são dois jovens que acabam se apaixonando perdidamente, mas há uma barreira que impede os dois de ficarem juntos: suas famílias são grandes rivais e não permitiriam nunca que os dois se casassem. O ódio entre os Montecchio e os Capuleto não será suficiente para afastar Romeu de Julieta, nesta história que nos faz acreditar no amor eterno.

      Quem escreveu esta peça é o maior dramaturgo inglês, o escritor William Shakespeare. Sua obra se tornou conhecida por tratar das grandes questões da humanidade como o amor, a inveja, o ódio e a sede pelo poder. Outras grandes obras de Shakespeare são: Hamlet, Otelo, A megera domada e Macbeth.`,
      image: "image6.jpg",
      pdf:"livro6.pdf",
      category:"romance",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 4,
      titulo: "Hamlet",
      sinopse:`Um jovem príncipe se reúne com o fantasma de seu pai, que alega que seu próprio irmão, agora casado com sua viúva, o assassinou. O príncipe cria um plano para testar a veracidade de tal acusação, forjando uma brutal loucura para traçar sua vingança. Mas sua aparente insanidade logo começa a causar estragos — para culpados e inocentes.

      Esta é a sinopse da tragédia de Shakespeare, agora em nova e fluente tradução de Lawrence Flores Pereira. Mas a trama inventada pelo dramaturgo inglês vai muito além disso: Hamlet é um dos momentos mais altos da criação artística mundial, um retrato — eletrizante e sempre contemporâneo — da vida emocional de um homo sapiens
      adulto.`,
      image: "image7.jpg",
      pdf:"livro7.pdf",
      category:"literario",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 4,
      titulo: "A Volta ao Mundo em Oitenta Dias",
      sinopse:"Uma das obras mais conhecidas e impressionantes de Júlio Verne, A volta ao mundo em 80 dias é um divertido romance de aventura. Entretanto, é também um registro acurado do conhecimento do autor sobre a geografia – por meio de maravilhosas descrições das paisagens e cidades ao redor do globo – e a mecânica – explorando, em detalhes, o funcionamento dos vários meios de transporte utilizados pelos personagens. A jornada do metódico lorde inglês Phileas Fogg e de seu destemido criado Passepartout começa com uma inesperada aposta em um clube de cavalheiros londrino. Mas como completar uma volta na Terra em 80 dias? – eis o grande desafio dos heróis da trama. As estratégias de Fogg levam a dupla a enfrentar fanáticos religiosos no interior da Índia, tormentas marítimas a caminho do Japão e até tribos indígenas nos Estados Unidos. Obra-prima do pai da ficção científica, este é um clássico da literatura para todas as idades.",
      image: "image8.jpg",
      pdf:"livro8.pdf",
      category:"aventura",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },{
      id_user: 5,
      titulo: "Viagem ao Centro da Terra",
      sinopse:"Durante uma expedição na Islândia, o professor Trevor Anderson, o seu sobrinho Sean, e sua guia Hannah ficam presos em uma caverna. Enquanto seguem sua rota de fuga mais abaixo da superfície da Terra, eles passam por lugares estranhos e encontram criaturas incríveis, incluindo dinossauros. Porém, como a atividade vulcânica à sua volta aumenta, eles percebem que precisam encontrar o caminho para fora rapidamente.",
      image: "image9.jpg",
      pdf:"livro9.pdf",
      category:"aventura",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },{
      id_user: 5,
      titulo: "A Garota do Penhasco",
      sinopse:'"A Garota do Penhasco" é um romance que enreda o leitor através de vários fios: a história de Grania Ryan e sua querida Aurora Devonshire, a garota do penhasco, nos fala sobre mudança de vida. ... O caso de amor entre Grania Ryan e Lawrence Lisle comove por sua delicadeza e força vertiginosa que culmina em imensa tristeza.',
      image: "image10.jpg",
      pdf:"livro10.pdf",
      category:"aventura",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }],{})

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('library', null, {});

  }
};
