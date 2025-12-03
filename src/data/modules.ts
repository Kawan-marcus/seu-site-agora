export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  content: {
    introduction: string;
    keyPoints: string[];
    funFact: string;
  };
}

export const modules: Module[] = [
  {
    id: "earth",
    title: "Terra",
    description: "Nosso planeta azul e lar de toda vida conhecida",
    icon: "🌍",
    image: "earth",
    content: {
      introduction: "A Terra é o terceiro planeta do Sistema Solar e o único conhecido por abrigar vida. Com aproximadamente 4,5 bilhões de anos, nosso planeta possui condições únicas que permitem a existência de água líquida e uma atmosfera rica em oxigênio.",
      keyPoints: [
        "Diâmetro: 12.742 km",
        "Distância do Sol: 149,6 milhões de km",
        "Período orbital: 365,25 dias",
        "Satélite natural: 1 (Lua)",
        "Atmosfera: 78% nitrogênio, 21% oxigênio",
        "70% da superfície coberta por água"
      ],
      funFact: "A Terra é o único planeta do Sistema Solar que não foi nomeado em homenagem a um deus grego ou romano!"
    }
  },
  {
    id: "mars",
    title: "Marte",
    description: "O planeta vermelho e possível futuro lar da humanidade",
    icon: "🔴",
    image: "mars",
    content: {
      introduction: "Marte é o quarto planeta a partir do Sol e o segundo menor do Sistema Solar. Conhecido como 'Planeta Vermelho' devido ao óxido de ferro em sua superfície, Marte tem sido alvo de intensas explorações espaciais.",
      keyPoints: [
        "Diâmetro: 6.779 km",
        "Distância do Sol: 227,9 milhões de km",
        "Período orbital: 687 dias terrestres",
        "Satélites naturais: 2 (Fobos e Deimos)",
        "Temperatura média: -63°C",
        "Possui as maiores montanhas do Sistema Solar"
      ],
      funFact: "Um dia em Marte dura quase o mesmo tempo que na Terra: 24 horas e 37 minutos!"
    }
  },
  {
    id: "jupiter",
    title: "Júpiter",
    description: "O gigante gasoso e maior planeta do Sistema Solar",
    icon: "🪐",
    image: "jupiter",
    content: {
      introduction: "Júpiter é o maior planeta do Sistema Solar, com uma massa maior que a de todos os outros planetas combinados. Este gigante gasoso possui uma famosa tempestade chamada Grande Mancha Vermelha, que dura há centenas de anos.",
      keyPoints: [
        "Diâmetro: 139.820 km",
        "Distância do Sol: 778,5 milhões de km",
        "Período orbital: 11,86 anos terrestres",
        "Satélites naturais: 95 luas conhecidas",
        "Composição: principalmente hidrogênio e hélio",
        "A Grande Mancha Vermelha é uma tempestade maior que a Terra"
      ],
      funFact: "Júpiter tem um campo magnético tão forte que poderia ser detectado da Terra, mesmo sem instrumentos!"
    }
  }
];
