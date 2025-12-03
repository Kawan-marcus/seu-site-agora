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
    id: "descobrimento",
    title: "Descobrimento do Brasil",
    description: "A chegada dos portugueses em 1500 e o início da colonização",
    icon: "⛵",
    image: "descobrimento",
    content: {
      introduction: "Em 22 de abril de 1500, uma frota portuguesa comandada por Pedro Álvares Cabral chegou ao litoral brasileiro, marcando o início oficial da história colonial do Brasil. A expedição, que tinha como destino as Índias, avistou o Monte Pascoal e desembarcou em uma região que hoje pertence ao estado da Bahia.",
      keyPoints: [
        "Pedro Álvares Cabral comandava uma frota de 13 navios",
        "O primeiro contato foi com os índios Tupiniquins",
        "Pero Vaz de Caminha escreveu a famosa Carta do Descobrimento",
        "A terra foi inicialmente chamada de Ilha de Vera Cruz",
        "O pau-brasil foi o primeiro produto explorado comercialmente"
      ],
      funFact: "A Carta de Pero Vaz de Caminha é considerada a 'certidão de nascimento' do Brasil e descreve detalhadamente os indígenas, a fauna e a flora encontradas!"
    }
  },
  {
    id: "imperio",
    title: "Brasil Império",
    description: "A independência e o período imperial brasileiro (1822-1889)",
    icon: "👑",
    image: "imperio",
    content: {
      introduction: "O Brasil Império foi o período da história brasileira que se estendeu de 1822 a 1889. Iniciou-se com a proclamação da Independência por Dom Pedro I e terminou com a Proclamação da República. Durante esse período, o Brasil foi governado por dois imperadores: Dom Pedro I e Dom Pedro II.",
      keyPoints: [
        "A Independência foi proclamada em 7 de setembro de 1822",
        "Dom Pedro I foi o primeiro imperador do Brasil",
        "Dom Pedro II governou por 49 anos, o mais longo reinado",
        "A Lei Áurea aboliu a escravidão em 1888",
        "O café se tornou o principal produto de exportação"
      ],
      funFact: "Dom Pedro II era um grande intelectual e cientista amador. Ele correspondeu-se com cientistas famosos como Louis Pasteur e Graham Bell, e foi o segundo chefe de estado a ter uma linha telefônica!"
    }
  },
  {
    id: "republica",
    title: "Proclamação da República",
    description: "O fim da monarquia e o nascimento da República em 1889",
    icon: "🏛️",
    image: "republica",
    content: {
      introduction: "A Proclamação da República Brasileira ocorreu em 15 de novembro de 1889, quando um golpe militar liderado pelo Marechal Deodoro da Fonseca depôs o Imperador Dom Pedro II. Este evento marcou o fim do regime monárquico e o início do período republicano no Brasil.",
      keyPoints: [
        "Marechal Deodoro da Fonseca foi o primeiro presidente",
        "A bandeira republicana foi inspirada no positivismo",
        "A família imperial foi exilada para a Europa",
        "A primeira constituição republicana foi promulgada em 1891",
        "O lema 'Ordem e Progresso' foi adotado na bandeira"
      ],
      funFact: "A Proclamação da República foi tão pacífica que muitos brasileiros só souberam da mudança de regime dias depois! Dom Pedro II, ao saber do golpe, disse: 'Se é assim, será a minha aposentadoria'."
    }
  }
];
