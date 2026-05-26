// ===================================================================
// QUESTÕES INTERATIVAS - Estilo OAB/FGV
// ===================================================================
const QUESTOES = {
  constitucional_01: {
    materia: "Direito Constitucional",
    enunciado: "São fundamentos da República Federativa do Brasil, EXCETO:",
    alternativas: [
      "A) A soberania",
      "B) A cidadania",
      "C) A livre iniciativa",
      "D) A intervenção militar"
    ],
    correta: 3,
    justificativa: "O art. 1º da CF elenca como fundamentos: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, e pluralismo político. Intervenção militar não é fundamento, mas sim hipótese excepcional prevista no art. 34 e 137 da CF."
  },
  constitucional_02: {
    materia: "Direito Constitucional",
    enunciado: "O direito de propriedade está garantido no art. 5º da CF, mas:",
    alternativas: [
      "A) É absoluto e ilimitado",
      "B) Deve atender sua função social",
      "C) Não admite desapropriação",
      "D) Só se aplica a brasileiros"
    ],
    correta: 1,
    justificativa: "O art. 5º, XXII garante o direito de propriedade, mas o inciso XXIII estabelece que 'a propriedade atenderá sua função social'. A desapropriação é possível (art. 5º, XXIV) mediante justa e prévia indenização."
  },
  constitucional_03: {
    materia: "Direito Constitucional",
    enunciado: "O controle difuso de constitucionalidade pode ser exercido por:",
    alternativas: [
      "A) STF apenas",
      "B) Qualquer juiz ou tribunal",
      "C) Presidente da República",
      "D) Congresso Nacional"
    ],
    correta: 1,
    justificativa: "O controle difuso (via de exceção) pode ser exercido por qualquer juiz ou tribunal no caso concreto. O controle concentrado é feito pelo STF (ADI, ADC, ADO, ADPF)."
  },
  constitucional_04: {
    materia: "Direito Constitucional",
    enunciado: "A ADI por omissão é denominada:",
    alternativas: [
      "A) ADC",
      "B) ADPF",
      "C) ADO",
      "D) MI"
    ],
    correta: 2,
    justificativa: "ADO = Ação Direta de Inconstitucionalidade por Omissão (CF art. 103, §2º). MI = Mandado de Injunção (ação individual). ADC = Ação Declaratória de Constitucionalidade. ADPF = Arguição de Descumprimento de Preceito Fundamental."
  },
  constitucional_05: {
    materia: "Direito Constitucional",
    enunciado: "O controle de convencionalidade é exercido:",
    alternativas: [
      "A) Pelo STF apenas",
      "B) Por qualquer juiz brasileiro",
      "C) Pelo Congresso Nacional",
      "D) Pela ONU"
    ],
    correta: 1,
    justificativa: "O controle de convencionalidade é exercido por qualquer juiz ou tribunal brasileiro, que deve verificar se as leis internas são compatíveis com os tratados internacionais de direitos humanos."
  },
  civil_01: {
    materia: "Direito Civil",
    enunciado: "A menoridade cessa aos:",
    alternativas: [
      "A) 16 anos",
      "B) 18 anos",
      "C) 21 anos",
      "D) 25 anos"
    ],
    correta: 1,
    justificativa: "Art. 5º do CC: 'A menoridade cessa aos dezoito anos completos, quando a pessoa fica habilitada à prática de todos os atos da vida civil.'"
  },
  civil_02: {
    materia: "Direito Civil",
    enunciado: "No regime legal de comunhão parcial de bens, comunicam-se:",
    alternativas: [
      "A) Todos os bens dos cônjuges",
      "B) Apenas os bens adquiridos onerosamente na constância do casamento",
      "C) Apenas os bens anteriores ao casamento",
      "D) Os bens recebidos por doação"
    ],
    correta: 1,
    justificativa: "No regime de comunhão parcial (art. 1.658-1.666 CC), comunicam-se os bens adquiridos onerosamente na constância do casamento. Excluem-se os bens anteriores e os recebidos por doação ou herança."
  },
  civil_03: {
    materia: "Direito Civil",
    enunciado: "Vício redibitório é:",
    alternativas: [
      "A) Vício de consentimento",
      "B) Defeito oculto que torna a coisa imprópria para o uso",
      "C) Erro de cálculo no contrato",
      "D) Cláusula contratual abusiva"
    ],
    correta: 1,
    justificativa: "Vícios redibitórios (CC arts. 441-446) são defeitos ocultos em coisa recebida em virtude de contrato comutativo, que a tornam imprópria ao uso a que se destina, ou lhe diminuem o valor."
  },
  civil_04: {
    materia: "Direito Civil",
    enunciado: "A mora do devedor configura:",
    alternativas: [
      "A) Inadimplemento absoluto",
      "B) Inadimplemento relativo",
      "C) Caso fortuito",
      "D) Força maior"
    ],
    correta: 1,
    justificativa: "Mora é o inadimplemento relativo (art. 394 CC) - o devedor ainda pode cumprir a obrigação, mas está em atraso. Difere do inadimplemento absoluto, onde a prestação não mais interessa ao credor."
  },
  civil_05: {
    materia: "Direito Civil",
    enunciado: "A cessão de crédito transfere a posição de:",
    alternativas: [
      "A) Devedor",
      "B) Credor",
      "C) Ambos credor e devedor",
      "D) Terceiro garantidor"
    ],
    correta: 1,
    justificativa: "Cessão de crédito (CC arts. 286-303) é o negócio jurídico pelo qual o credor (cedente) transfere a outrem (cessionário) sua posição ativa na obrigação."
  },
  penal_01: {
    materia: "Direito Penal",
    enunciado: "São elementos dogmáticos do crime:",
    alternativas: [
      "A) Tipicidade, ilicitude e punibilidade",
      "B) Tipicidade, ilicitude e culpabilidade",
      "C) Ação, omissão e resultado",
      "D) Dolo, culpa e preterdolo"
    ],
    correta: 1,
    justificativa: "O crime é fato típico, ilícito (antijurídico) e culpável. A punibilidade é consequência, não elemento. Dolo e culpa são espécies de conduta (elemento do fato típico no finalismo)."
  },
  penal_02: {
    materia: "Direito Penal",
    enunciado: "A legítima defesa é causa de:",
    alternativas: [
      "A) Exclusão da tipicidade",
      "B) Exclusão da ilicitude",
      "C) Exclusão da culpabilidade",
      "D) Isenção de pena"
    ],
    correta: 1,
    justificativa: "A legítima defesa (CP art. 25) é causa de exclusão da ilicitude (art. 23, II CP), juntamente com estado de necessidade, estrito cumprimento do dever legal e exercício regular do direito."
  },
  penal_03: {
    materia: "Direito Penal",
    enunciado: "No concurso formal de crimes, a pena aplicada é:",
    alternativas: [
      "A) A soma das penas",
      "B) Aumentada de 1/6 a 1/2",
      "C) A pena do crime mais grave",
      "D) Isenção de pena"
    ],
    correta: 1,
    justificativa: "Concurso formal (CP art. 70): o agente, mediante uma só ação ou omissão, pratica dois ou mais crimes. Aplica-se a pena mais grave acrescida de 1/6 a 1/2 (sistema da exasperação)."
  },
  penal_04: {
    materia: "Direito Penal",
    enunciado: "O arrependimento eficaz ocorre quando o agente:",
    alternativas: [
      "A) Confessa espontaneamente o crime",
      "B) Impede que o resultado se produza",
      "C) Desiste de prosseguir na execução",
      "D) Repara o dano após a sentença"
    ],
    correta: 1,
    justificativa: "Arrependimento eficaz (CP art. 15): 'O agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, só responde pelos atos já praticados.'"
  },
  processo_01: {
    materia: "Processo Civil",
    enunciado: "A jurisdição é caracterizada pela:",
    alternativas: [
      "A) Inércia",
      "B) Atividade administrativa",
      "C) Proatividade do juiz",
      "D) Execução direta sem provocação"
    ],
    correta: 0,
    justificativa: "A jurisdição é inerte (CPC art. 2º): 'O processo começa por iniciativa da parte e se desenvolve por impulso oficial.' O juiz não pode agir de ofício (salvo exceções legais)."
  },
  processo_02: {
    materia: "Processo Civil",
    enunciado: "São condições da ação:",
    alternativas: [
      "A) Partes, causa de pedir e pedido",
      "B) Legitimidade, interesse de agir e possibilidade jurídica do pedido",
      "C) Autor, réu e juiz competente",
      "D) Competência, capacidade e forma"
    ],
    correta: 1,
    justificativa: "As condições da ação são: legitimidade (para agir e para contender), interesse de agir (necessidade, adequação e utilidade) e possibilidade jurídica do pedido."
  },
  processo_03: {
    materia: "Processo Civil",
    enunciado: "O prazo para o réu contestar no procedimento comum é de:",
    alternativas: [
      "A) 5 dias",
      "B) 10 dias",
      "C) 15 dias",
      "D) 30 dias"
    ],
    correta: 2,
    justificativa: "CPC art. 335: 'O réu poderá oferecer contestação, por petição, no prazo de 15 (quinze) dias' contados da audiência de conciliação ou do protocolo do cancelamento."
  },
  processo_04: {
    materia: "Processo Civil",
    enunciado: "Cabe agravo de instrumento contra decisão que:",
    alternativas: [
      "A) Julga a sentença",
      "B) Concede tutela provisória",
      "C) Homologa acordo",
      "D) Extingue o processo"
    ],
    correta: 1,
    justificativa: "CPC art. 1.015, I: 'Cabe agravo de instrumento contra decisões interlocutórias que versarem sobre tutelas provisórias.' Da sentença cabe apelação."
  },
  trabalho_01: {
    materia: "Direito do Trabalho",
    enunciado: "A jornada normal de trabalho é de até:",
    alternativas: [
      "A) 6 horas diárias",
      "B) 8 horas diárias e 44 semanais",
      "C) 10 horas diárias",
      "D) 12 horas diárias"
    ],
    correta: 1,
    justificativa: "CF art. 7º, XIII: 'duração do trabalho normal não superior a oito horas diárias e quarenta e quatro semanais'."
  },
  trabalho_02: {
    materia: "Direito do Trabalho",
    enunciado: "O percentual mínimo de adicional de horas extras é de:",
    alternativas: [
      "A) 20%",
      "B) 30%",
      "C) 50%",
      "D) 100%"
    ],
    correta: 2,
    justificativa: "CF art. 7º, XVI: 'remuneração do serviço extraordinário superior, no mínimo, em cinquenta por cento à do normal'."
  },
  trabalho_03: {
    materia: "Direito do Trabalho",
    enunciado: "O aviso prévio proporcional ao tempo de serviço pode chegar a até:",
    alternativas: [
      "A) 30 dias",
      "B) 60 dias",
      "C) 90 dias",
      "D) 120 dias"
    ],
    correta: 2,
    justificativa: "Art. 7º, XXI CF c/c Lei 12.506/2011: aviso prévio de 30 dias + 3 dias por ano trabalhado, limitado a 60 dias, totalizando até 90 dias."
  },
  trabalho_04: {
    materia: "Direito do Trabalho",
    enunciado: "O contrato de experiência pode ter duração máxima de:",
    alternativas: [
      "A) 30 dias",
      "B) 45 dias",
      "C) 60 dias",
      "D) 90 dias"
    ],
    correta: 3,
    justificativa: "CLT art. 445, § único: contrato de experiência não pode exceder 90 dias."
  },
  processo_penal_01: {
    materia: "Processo Penal",
    enunciado: "O inquérito policial é um procedimento:",
    alternativas: [
      "A) Contraditório e ampla defesa",
      "B) Inquisitivo e dispensável",
      "C) Judicial e público",
      "D) Definitivo e vinculante"
    ],
    correta: 1,
    justificativa: "O inquérito policial é inquisitivo (sem contraditório), dispensável (MP pode oferecer denúncia sem ele, com provas próprias), e não vinculante (o MP não é obrigado a denunciar)."
  },
  processo_penal_02: {
    materia: "Processo Penal",
    enunciado: "A prisão em flagrante é hipótese de prisão:",
    alternativas: [
      "A) Definitiva",
      "B) Cautelar",
      "C) Penal",
      "D) Administrativa"
    ],
    correta: 1,
    justificativa: "A prisão em flagrante é cautelar (processual) e deve ser convertida em preventiva pelo juiz em até 24h, sob pena de relaxamento (art. 310 CPP)."
  },
  processo_penal_03: {
    materia: "Processo Penal",
    enunciado: "O habeas corpus pode ser impetrado:",
    alternativas: [
      "A) Por qualquer pessoa física ou jurídica",
      "B) Apenas por advogado",
      "C) Apenas pelo próprio preso",
      "D) Apenas pelo Ministério Público"
    ],
    correta: 0,
    justificativa: "Qualquer pessoa física ou jurídica pode impetrar HC (CPP art. 654). É ação gratuita e não exige capacidade postulatória, salvo para atos privativos de advogado."
  },
  tributario_01: {
    materia: "Direito Tributário",
    enunciado: "O princípio da anterioridade nonagesimal (noventena) exige:",
    alternativas: [
      "A) 30 dias entre publicação e vigência",
      "B) 60 dias entre publicação e vigência",
      "C) 90 dias entre publicação e vigência",
      "D) 180 dias entre publicação e vigência"
    ],
    correta: 2,
    justificativa: "CF art. 150, III, 'c': lei tributária não pode cobrar tributos antes de 90 dias da publicação. A anterioridade de exercício exige que a lei seja anterior ao ano fiscal."
  },
  tributario_02: {
    materia: "Direito Tributário",
    enunciado: "No ITCMD, o imposto compete ao Estado onde:",
    alternativas: [
      "A) O doador reside",
      "B) O donatário reside",
      "C) O bem é registrado",
      "D) O inventário é processado"
    ],
    correta: 0,
    justificativa: "ITCMD (Art. 155, §1º, CF): compete ao Estado onde for processado o inventário (bens móveis/títulos) ou onde o doador residir (doação) ou onde o imóvel estiver situado."
  },
  adm_01: {
    materia: "Direito Administrativo",
    enunciado: "O princípio da autotutela permite à Administração:",
    alternativas: [
      "A) Apenas anular atos ilegais, não revogar convenientes",
      "B) Anular atos ilegais e revogar atos inconvenientes",
      "C) Judiciário revisar todos os atos administrativos",
      "D) Particulares controlar atos administrativos"
    ],
    correta: 1,
    justificativa: "Súmulas STF 346 e 473: a Administração pode anular seus próprios atos (ilegais) e revogá-los (por conveniência/oportunidade), respeitados direitos adquiridos."
  },
  adm_02: {
    materia: "Direito Administrativo",
    enunciado: "A licitação é dispensável para obras de até:",
    alternativas: [
      "A) R$ 15.000",
      "B) R$ 33.000",
      "C) R$ 50.000",
      "D) R$ 100.000"
    ],
    correta: 1,
    justificativa: "Lei 14.133/2021 art. 75, I: dispensável para obras e serviços de engenharia de até R$ 33.000 (serviços comuns: art. 75, II até R$ 17.600)."
  },
  empresa_01: {
    materia: "Direito Empresarial",
    enunciado: "O empresário individual responde pelas obrigações:",
    alternativas: [
      "A) Limitado ao capital social",
      "B) Com todos os bens pessoais",
      "C) Apenas com bens da empresa",
      "D) Limitado ao dobro do capital"
    ],
    correta: 1,
    justificativa: "No empresário individual não há separação patrimonial. Responde com todos os bens pessoais (CC art. 966 c/c art. 1.024). EIRELI tem capital mínimo e limitação."
  }
};

// Função auxiliar para buscar questões por matéria
function buscarQuestoes(materia) {
  const qs = [];
  for(const [key, q] of Object.entries(QUESTOES)) {
    if(q.materia.toLowerCase().includes(materia.toLowerCase())) {
      qs.push({...q, id: key});
    }
  }
  return qs;
}
