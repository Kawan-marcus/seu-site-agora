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
    question: "Quem comandou a expedição portuguesa que chegou ao Brasil em 1500?",
    options: ["Vasco da Gama", "Pedro Álvares Cabral", "Cristóvão Colombo", "Fernão de Magalhães"],
    correctAnswer: 1,
    explanation: "Pedro Álvares Cabral comandou a frota de 13 navios que chegou ao Brasil em 22 de abril de 1500."
  },
  {
    id: 2,
    question: "Qual foi o primeiro nome dado ao Brasil pelos portugueses?",
    options: ["Terra de Santa Cruz", "Ilha de Vera Cruz", "Terra Brasilis", "Nova Lusitânia"],
    correctAnswer: 1,
    explanation: "Inicialmente, a terra foi chamada de Ilha de Vera Cruz, depois Terra de Santa Cruz, e finalmente Brasil."
  },
  {
    id: 3,
    question: "Em que data foi proclamada a Independência do Brasil?",
    options: ["15 de novembro de 1889", "7 de setembro de 1822", "22 de abril de 1500", "13 de maio de 1888"],
    correctAnswer: 1,
    explanation: "A Independência foi proclamada por Dom Pedro I às margens do rio Ipiranga em 7 de setembro de 1822."
  },
  {
    id: 4,
    question: "Quem foi o primeiro imperador do Brasil?",
    options: ["Dom Pedro II", "Dom João VI", "Dom Pedro I", "Marechal Deodoro"],
    correctAnswer: 2,
    explanation: "Dom Pedro I foi o primeiro imperador do Brasil, governando de 1822 a 1831."
  },
  {
    id: 5,
    question: "Qual lei aboliu oficialmente a escravidão no Brasil?",
    options: ["Lei do Ventre Livre", "Lei dos Sexagenários", "Lei Áurea", "Lei Eusébio de Queirós"],
    correctAnswer: 2,
    explanation: "A Lei Áurea, assinada pela Princesa Isabel em 13 de maio de 1888, aboliu a escravidão no Brasil."
  },
  {
    id: 6,
    question: "Quem escreveu a famosa Carta do Descobrimento?",
    options: ["Pedro Álvares Cabral", "Pero Vaz de Caminha", "Duarte Pacheco Pereira", "Américo Vespúcio"],
    correctAnswer: 1,
    explanation: "Pero Vaz de Caminha, escrivão da frota, escreveu a carta que é considerada a 'certidão de nascimento' do Brasil."
  },
  {
    id: 7,
    question: "Qual produto foi o principal motivo da colonização inicial do Brasil?",
    options: ["Ouro", "Café", "Pau-brasil", "Cana-de-açúcar"],
    correctAnswer: 2,
    explanation: "O pau-brasil foi o primeiro produto explorado comercialmente, dando nome ao país."
  },
  {
    id: 8,
    question: "Por quantos anos Dom Pedro II governou o Brasil?",
    options: ["29 anos", "39 anos", "49 anos", "59 anos"],
    correctAnswer: 2,
    explanation: "Dom Pedro II governou por 49 anos (1840-1889), o mais longo reinado da história do Brasil."
  },
  {
    id: 9,
    question: "Quem proclamou a República no Brasil?",
    options: ["Dom Pedro II", "Princesa Isabel", "Marechal Deodoro da Fonseca", "Floriano Peixoto"],
    correctAnswer: 2,
    explanation: "O Marechal Deodoro da Fonseca liderou o golpe militar que proclamou a República em 15 de novembro de 1889."
  },
  {
    id: 10,
    question: "Qual é o significado do lema 'Ordem e Progresso' na bandeira brasileira?",
    options: ["Homenagem aos imperadores", "Influência do positivismo", "Referência à independência", "Símbolo militar"],
    correctAnswer: 1,
    explanation: "O lema foi inspirado no positivismo de Auguste Comte: 'O amor por princípio, a ordem por base, o progresso por fim'."
  },
  {
    id: 11,
    question: "Em que ano a família real portuguesa chegou ao Brasil fugindo de Napoleão?",
    options: ["1808", "1822", "1500", "1889"],
    correctAnswer: 0,
    explanation: "A família real chegou ao Brasil em 1808, fugindo da invasão napoleônica em Portugal."
  },
  {
    id: 12,
    question: "Qual foi o principal produto de exportação durante o Segundo Reinado?",
    options: ["Açúcar", "Borracha", "Café", "Algodão"],
    correctAnswer: 2,
    explanation: "O café foi o principal produto de exportação durante o Segundo Reinado, especialmente no Vale do Paraíba."
  },
  {
    id: 13,
    question: "Qual povo indígena teve o primeiro contato com os portugueses em 1500?",
    options: ["Guaranis", "Tupinambás", "Tupiniquins", "Aimorés"],
    correctAnswer: 2,
    explanation: "Os Tupiniquins foram os primeiros indígenas a ter contato com a expedição de Cabral na Bahia."
  },
  {
    id: 14,
    question: "Onde Dom Pedro I proclamou a Independência do Brasil?",
    options: ["Rio de Janeiro", "São Paulo (Ipiranga)", "Salvador", "Ouro Preto"],
    correctAnswer: 1,
    explanation: "A Independência foi proclamada às margens do rio Ipiranga, em São Paulo."
  },
  {
    id: 15,
    question: "O que aconteceu com a família imperial após a Proclamação da República?",
    options: ["Foram presos", "Foram exilados para a Europa", "Permaneceram no Brasil", "Foram executados"],
    correctAnswer: 1,
    explanation: "A família imperial foi exilada para a Europa, onde Dom Pedro II viveu até sua morte em Paris, em 1891."
  }
];

export function getRandomQuestions(count: number = 5): Question[] {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
