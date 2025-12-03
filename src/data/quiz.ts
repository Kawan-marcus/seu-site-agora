export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é o maior planeta do Sistema Solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    correctAnswer: 2,
    explanation: "Júpiter é o maior planeta do Sistema Solar, com um diâmetro de aproximadamente 139.820 km."
  },
  {
    id: 2,
    question: "Quantos satélites naturais a Terra possui?",
    options: ["Nenhum", "1", "2", "3"],
    correctAnswer: 1,
    explanation: "A Terra possui apenas um satélite natural: a Lua."
  },
  {
    id: 3,
    question: "Por que Marte é conhecido como 'Planeta Vermelho'?",
    options: [
      "Devido à sua temperatura quente",
      "Devido ao óxido de ferro em sua superfície",
      "Devido a suas tempestades",
      "Devido à sua atmosfera"
    ],
    correctAnswer: 1,
    explanation: "Marte tem uma cor avermelhada devido à presença de óxido de ferro (ferrugem) em sua superfície."
  },
  {
    id: 4,
    question: "Qual é a distância aproximada da Terra ao Sol?",
    options: ["100 milhões de km", "149,6 milhões de km", "200 milhões de km", "250 milhões de km"],
    correctAnswer: 1,
    explanation: "A Terra está a aproximadamente 149,6 milhões de quilômetros do Sol, uma distância conhecida como Unidade Astronômica (UA)."
  },
  {
    id: 5,
    question: "Quantos dias terrestres um ano marciano possui?",
    options: ["365 dias", "500 dias", "687 dias", "800 dias"],
    correctAnswer: 2,
    explanation: "Um ano em Marte dura aproximadamente 687 dias terrestres."
  },
  {
    id: 6,
    question: "Qual é a composição principal de Júpiter?",
    options: [
      "Rochas e metais",
      "Hidrogênio e hélio",
      "Nitrogênio e oxigênio",
      "Metano e amônia"
    ],
    correctAnswer: 1,
    explanation: "Júpiter é composto principalmente de hidrogênio e hélio, sendo um gigante gasoso."
  },
  {
    id: 7,
    question: "Qual porcentagem da superfície da Terra é coberta por água?",
    options: ["50%", "60%", "70%", "80%"],
    correctAnswer: 2,
    explanation: "Aproximadamente 70% da superfície da Terra é coberta por água."
  },
  {
    id: 8,
    question: "Quantas luas Marte possui?",
    options: ["Nenhuma", "1", "2", "4"],
    correctAnswer: 2,
    explanation: "Marte possui duas pequenas luas chamadas Fobos e Deimos."
  },
  {
    id: 9,
    question: "O que é a Grande Mancha Vermelha de Júpiter?",
    options: [
      "Um vulcão ativo",
      "Uma cratera gigante",
      "Uma tempestade permanente",
      "Um oceano de lava"
    ],
    correctAnswer: 2,
    explanation: "A Grande Mancha Vermelha é uma tempestade anticiclônica gigante que existe há séculos e é maior que a Terra."
  },
  {
    id: 10,
    question: "Qual é a temperatura média em Marte?",
    options: ["0°C", "-20°C", "-63°C", "-100°C"],
    correctAnswer: 2,
    explanation: "A temperatura média em Marte é de aproximadamente -63°C, muito mais fria que a Terra."
  },
  {
    id: 11,
    question: "Quantos planetas existem no Sistema Solar?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 1,
    explanation: "Atualmente reconhecemos 8 planetas no Sistema Solar, desde que Plutão foi reclassificado como planeta anão em 2006."
  },
  {
    id: 12,
    question: "Qual é a composição principal da atmosfera terrestre?",
    options: [
      "Oxigênio e hidrogênio",
      "Nitrogênio e oxigênio",
      "Dióxido de carbono e metano",
      "Hélio e hidrogênio"
    ],
    correctAnswer: 1,
    explanation: "A atmosfera da Terra é composta principalmente de nitrogênio (78%) e oxigênio (21%)."
  },
  {
    id: 13,
    question: "Quantas luas conhecidas Júpiter possui?",
    options: ["12", "35", "67", "95"],
    correctAnswer: 3,
    explanation: "Júpiter possui 95 luas conhecidas, sendo o planeta com mais satélites naturais do Sistema Solar."
  },
  {
    id: 14,
    question: "Qual é a duração de um dia em Marte?",
    options: ["20 horas", "24 horas e 37 minutos", "30 horas", "48 horas"],
    correctAnswer: 1,
    explanation: "Um dia em Marte (chamado de sol) dura 24 horas e 37 minutos, muito similar a um dia terrestre."
  },
  {
    id: 15,
    question: "Qual é a idade aproximada da Terra?",
    options: ["1 bilhão de anos", "2,5 bilhões de anos", "4,5 bilhões de anos", "10 bilhões de anos"],
    correctAnswer: 2,
    explanation: "A Terra tem aproximadamente 4,5 bilhões de anos, formada junto com o resto do Sistema Solar."
  }
];

export function getRandomQuestions(count: number = 5): Question[] {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
