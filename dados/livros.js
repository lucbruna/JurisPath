const LIVROS = [
  {
    titulo: "Manual de Direito Constitucional - Gilmar Mendes",
    conteudo: `<h3>Principios Fundamentais (CF arts. 1-4)</h3>
<p><strong>Fundamentos (art. 1):</strong> soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e livre iniciativa, pluralismo politico.</p>
<p><strong>Poderes (art. 2):</strong> Legislativo, Executivo, Judiciario - independentes e harmonicos.</p>
<p><strong>Objetivos (art. 3):</strong> construir sociedade livre justa e solidaria, garantir desenvolvimento, erradicar pobreza, promover bem de todos.</p>
<p><strong>Principios internacionais (art. 4):</strong> independencia nacional, direitos humanos, autodeterminacao, nao intervencao, igualdade, defesa da paz, solucao pacifica.</p>

<h3>Direitos e Garantias Fundamentais (art. 5)</h3>
<p><strong>Direitos individuais:</strong> vida, liberdade, igualdade, seguranca, propriedade. Inviolabilidade do direito a vida. Igualdade formal e material.</p>
<p><strong>Principio da legalidade (II):</strong> ninguem sera obrigado a fazer ou deixar de fazer algo senao em virtude de lei.</p>
<p><strong>Liberdade de expressao (IV, IX, XIV):</strong> manifestacao do pensamento, atividade intelectual, artistica, cientifica e de comunicacao. Vedado anonimato.</p>
<p><strong>Inviolabilidades (X-XII):</strong> intimidade, vida privada, honra, imagem. Casa e asilo inviolavel. Sigilo de correspondencia e comunicacoes.</p>
<p><strong>Liberdades (XIII-XVII):</strong> exercicio de trabalho, oficio ou profissao; acesso a informacao; locomocao; reuniao; associacao.</p>
<p><strong>Propriedade (XXII-XXXI):</strong> garantia do direito de propriedade, funcao social, desapropriacao, pequena propriedade rural, direito de heranca.</p>
<p><strong>Devido processo legal (LIII-LXXVIII):</strong> juiz natural, devido processo legal, contraditorio e ampla defesa, provas ilicitas, presuncao de inocencia, publicidade dos atos, motivacao das decisoes.</p>
<p><strong>Remedios constitucionais (LXVIII-LXXIII):</strong> habeas corpus, mandado de seguranca, mandado de injuncao, habeas data, acao popular.</p>

<h3>Direitos Sociais (arts. 6-11)</h3>
<p>Educacao, saude, alimentacao, trabalho, moradia, transporte, lazer, seguranca, previdencia, protecao a maternidade e infancia, assistencia aos desamparados. Direitos dos trabalhadores urbanos e rurais (art. 7).</p>

<h3>Organizacao do Estado (arts. 18-43)</h3>
<p><strong>Entes federativos:</strong> Uniao, Estados, DF, Municipios. Competencias privativas (art. 22), comuns (art. 23), concorrentes (art. 24). Intervencao federal (arts. 34-36).</p>

<h3>Organizacao dos Poderes (arts. 44-135)</h3>
<p><strong>Legislativo:</strong> Congresso Nacional, Camara, Senado. Processo legislativo ordinario e emendas constitucionais. Comissoes parlamentares de inquerito.</p>
<p><strong>Executivo:</strong> Presidente da Republica, atribuicoes, ministerios. Conselho da Republica e de Defesa Nacional.</p>
<p><strong>Judiciario:</strong> STF, STJ, TST, TSE, STM, TRFs, TJs. Garantias da magistratura: vitaliciedade, inamovibilidade, irredutibilidade de subsidios.</p>

<h3>Controle de Constitucionalidade</h3>
<p><strong>Difuso:</strong> qualquer juiz ou tribunal. Efeito inter partes. Clausula de reserva de plenario (art. 97).</p>
<p><strong>Concentrado:</strong> STF. ADI, ADC, ADO, ADPF. Efeito erga omnes e vinculante. Legitimados ativos (art. 103).</p>`
  },
  {
    titulo: "Curso de Direito Civil - Parte Geral (Pablo Stolze)",
    conteudo: `<h3>Pessoa Natural (arts. 1-39)</h3>
<p><strong>Personalidade (art. 2):</strong> comeca com o nascimento com vida; direitos do nascituro protegidos desde a concepcao.</p>
<p><strong>Capacidade (arts. 3-5):</strong> absolutamente incapazes (menores de 16), relativamente incapazes (16-18, ebrigos habituais, viciados, prodigos, incapazes de exprimir vontade).</p>
<p><strong>Direitos da personalidade (arts. 11-21):</strong> intransmissiveis, irrenunciaveis, indisponiveis. Nome, imagem, honra, privacidade.</p>
<p><strong>Ausencia (arts. 22-39):</strong> curadoria dos bens, sucessao provisoria e definitiva.</p>

<h3>Pessoa Juridica (arts. 40-69)</h3>
<p><strong>Classificacao:</strong> direito publico (interno e externo) e direito privado (associacoes, sociedades, fundacoes, organizacoes religiosas, partidos politicos, EIRELI).</p>
<p><strong>Desconsideracao (art. 50):</strong> superacao da personalidade juridica para alcancar bens dos socios em caso de abuso, desvio de finalidade ou confusao patrimonial.</p>

<h3>Bens (arts. 79-103)</h3>
<p>Moveis e imoveis, fungiveis e infungiveis, consumiveis e inconsumiveis, divisiveis e indivisiveis, singulares e coletivos, publicos e particulares.</p>

<h3>Fato Juridico - Negocio Juridico (arts. 104-232)</h3>
<p><strong>Elementos essenciais (art. 104):</strong> agente capaz, objeto lico possivel determinado ou determinavel, forma prescrita ou nao defesa em lei.</p>
<p><strong>Interpretacao (arts. 112-114):</strong> vontade das partes, boa-fe, usos e costumes.</p>
<p><strong>Defeitos (arts. 138-165):</strong> erro, dolo, coacao, estado de perigo, lesao, fraude contra credores, simulacao.</p>
<p><strong>Invalidade (arts. 166-184):</strong> nulidade absoluta (interesse publico, nao convalesce) e anulabilidade relativa (interesse privado, convalesce).</p>
<p><strong>Prescricao (arts. 189-211):</strong> perda da pretensao. Prazos gerais: 10 anos (regra), 5 anos (Lei 14.195/21 reduziu), 3 anos (indenizacao), 1 ano (hospedagem, seguros).</p>
<p><strong>Decadencia (arts. 207-211):</strong> perda do direito potestativo. Nao se suspende nem interrompe.</p>`
  },
  {
    titulo: "Direito das Obrigacoes (Carlos Roberto Goncalves)",
    conteudo: `<h3>Teoria Geral (arts. 233-420 CC)</h3>
<p><strong>Conceito:</strong> vinculo juridico entre credor e devedor, tendo por objeto prestacao de dar, fazer ou nao fazer.</p>
<p><strong>Elementos:</strong> sujeitos (credor e devedor), objeto (prestacao), vinculo juridico (debito e responsabilidade).</p>

<h3>Modalidades</h3>
<p><strong>Dar coisa certa (arts. 233-242):</strong> abrange acessorios, frutos, melhorias. Perda por caso fortuito e resolvida para ambas as partes.</p>
<p><strong>Dar coisa incerta (arts. 243-246):</strong> indicada pelo genero e quantidade; escolha pelo devedor; antes da escolha nao pode perecer.</p>
<p><strong>Fazer (arts. 247-249):</strong> fungivel (terceiro pode realizar) e infungivel (intuito personae).</p>
<p><strong>Nao fazer (arts. 250-251):</strong> devedor se abstem de ato que poderia praticar.</p>
<p><strong>Alternativas (arts. 252-256):</strong> duas ou mais prestacoes; escolha do devedor; impossibilidade de uma nao extingue.</p>
<p><strong>Divisiveis e indivisiveis (arts. 257-263):</strong> fracionamento ou nao da prestacao.</p>
<p><strong>Solidarias (arts. 264-285):</strong> cada devedor responde pela divida toda (solidariedade passiva) ou cada credor pode exigir a divida toda (solidariedade ativa).</p>

<h3>Transmissao (arts. 286-303)</h3>
<p><strong>Cessao de credito:</strong> transferencia do direito do credor a terceiro.</p>
<p><strong>Cessao de debito:</strong> assumcao de divida por terceiro, com consentimento do credor.</p>
<p><strong>Cessao de contrato:</strong> transferencia da posicao contratual.</p>

<h3>Adimplemento (arts. 304-412)</h3>
<p>Pagamento direto e indireto (consignacao, subrogacao, novacao, compensacao, confusao, remissao, da cao em pagamento).</p>

<h3>Inadimplemento</h3>
<p><strong>Mora (arts. 394-401):</strong> atraso no cumprimento. Mora do devedor (solvendi) e do credor (accipiendi).</p>
<p><strong>Perdas e danos (arts. 402-405):</strong> danos emergentes e lucros cessantes. Juros de mora e correcao monetaria.</p>
<p><strong>Clausula penal (arts. 408-416):</strong> pena convencional pelo inadimplemento. Nao pode exceder o valor da obrigacao principal.</p>`
  },
  {
    titulo: "Tratado de Direito Penal - Rogerio Greco",
    conteudo: `<h3>Teoria da Norma Penal</h3>
<p><strong>Principios:</strong> legalidade (art. 1 CP - nao ha crime sem lei anterior), anterioridade, irretroatividade da lei penal mais gravosa, retroatividade da mais benifica (art. 2).</p>
<p><strong>Lei penal no tempo (arts. 2-4):</strong> tempo do crime (teoria da atividade - art. 4), lei excepcional e temporaria (art. 3).</p>
<p><strong>Lei penal no espaco (arts. 5-9):</strong> territorialidade, extraterritorialidade, lugar do crime (teoria da ubiquidade - art. 6).</p>

<h3>Teoria do Crime</h3>
<p><strong>Conceito analitico:</strong> fato tipico, ilicito e culpavel.</p>
<p><strong>Fato tipico:</strong> conduta (dolosa ou culposa), resultado, nexo causal, tipicidade. Teoria da imputacao objetiva.</p>
<p><strong>Dolo (art. 18 I):</strong> direto e eventual.</p>
<p><strong>Culpa (art. 18 II):</strong> imprudencia, negligencia, impericia. Modalidades: consciente e inconsciente.</p>
<p><strong>Consumacao e tentativa (arts. 14-15):</strong> iter criminis. Tentativa: reduz a pena de 1/3 a 2/3. Desistencia voluntaria e arrependimento eficaz (art. 15).</p>

<h3>Ilicitude (arts. 23-25)</h3>
<p><strong>Excludentes:</strong> estado de necessidade, legtima defesa, estrito cumprimento do dever legal, exercicio regular de direito.</p>
<p><strong>Legitima defesa (art. 25):</strong> repulsa a agressao injusta, atual ou iminente, usando moderadamente dos meios necessarios. Legitima defesa putativa e subjetiva.</p>

<h3>Culpabilidade</h3>
<p><strong>Elementos:</strong> imputabilidade, potencial consciencia da ilicitude, exigibilidade de conduta diversa.</p>
<p><strong>Imputabilidade (arts. 26-28):</strong> menores de 18, doenca mental, desenvolvimento mental incompleto ou retardado. Embriaguez: acidental (exclui) x voluntaria (nao exclui).</p>
<p><strong>Erro de proibicao (art. 21):</strong> erro sobre a ilicitude do fato. Inevitavel: isenta. Evitavel: reduz.</p>

<h3>Concurso de Pessoas (arts. 29-31)</h3>
<p>Teoria monista (todos respondem pelo mesmo crime). Participacao de menor importancia (art. 29 ss 1). Cooperacao dolosamente distinta (art. 29 ss 2).</p>

<h3>Penas (arts. 32-60)</h3>
<p>Privativas de liberdade: reclusao e detencao. Restritivas de direitos. Multa. Fixacao da pena: sistema trifasico (art. 68). Circunstancias judiciais (art. 59). Agravantes e atenuantes. Causas de aumento e diminuicao.</p>

<h3>Concursos de Crimes (arts. 69-71)</h3>
<p>Material (art. 69): soma de penas. Formal (art. 70): crime unico com pena majorada. Continuado (art. 71): ficcao juridica, unificacao. Crime continuado especifico (art. 71 paragrafo unico).</p>`
  },
  {
    titulo: "Processo Civil - Fredie Didier Jr.",
    conteudo: `<h3>Teoria Geral do Processo</h3>
<p><strong>Jurisdicao:</strong> funcao estatal de substituir a vontade dos litigantes pela solucao imperativa. Caracteristicas: substitutividade, inercia, definitividade, investidura, indeclinabilidade.</p>
<p><strong>Principios:</strong> devido processo legal, contraditorio e ampla defesa, duracao razoavel, boa-fe processual, primazia do merito, cooperacao, publicidade, motivacao.</p>
<p><strong>Acao:</strong> direito de provocar a jurisdicao. Condicoes: possibilidade juridica do pedido, legitimidade, interesse de agir (necessidade, adequacao, utilidade).</p>

<h3>Competencia (arts. 42-66 CPC)</h3>
<p><strong>Internacional (arts. 21-25):</strong> competencia concorrente e exclusiva.</p>
<p><strong>Foro e criterios:</strong> territorial, valor, materia, funcional. Modificacao: prorrogacao, conexao, continencia, prevencao. Perpetuacao da jurisdicao (art. 43).</p>

<h3>Sujeitos Processuais</h3>
<p><strong>Juiz:</strong> poderes, deveres, impedimento e suspeicao (arts. 144-148).</p>
<p><strong>Partes:</strong> capacidade de ser parte e de estar em juizo. Dever de litigar de boa-fe (art. 5). Litisconsorcio e intervencao de terceiros.</p>
<p><strong>Ministerio Publico:</strong> intervencao obrigatoria e facultativa (arts. 178-179).</p>
<p><strong>Advocacia publica e Defensoria:</strong> representacao judicial da Uniao, Estados, DF, Municipios. Assistencia juridica integral e gratuita.</p>

<h3>Atos Processuais (arts. 188-235)</h3>
<p>Forma, lugar, tempo. Prazos (arts. 218-235): proprios, improprios, dilatorios, peremptorios, legais, judiciais, convencionais. Contagem em dias uteis (art. 219). Preclusao.</p>

<h3>Tutela Provisoria (arts. 294-311)</h3>
<p><strong>Urgencia:</strong> tutela antecipada e cautelar.</p>
<p><strong>Evidencia:</strong> direito incontroverso, abuso de direito de defesa, pedido incontroverso.</p>
<p>Requisitos: probabilidade do direito e perigo de dano ou risco ao resultado util. Estabilizacao (art. 304).</p>

<h3>Procedimento Comum (arts. 318-512)</h3>
<p>Peticao inicial, indeferimento e emenda (arts. 319-331). Audiencia de conciliacao ou mediacao (art. 334). Contestacao e revelia (arts. 335-346). Providenciais preliminares e julgamento conforme estado do processo (arts. 347-357).</p>
<p><strong>Provacao (arts. 369-484):</strong> deposito, prova documental, testemunhal, pericial, inspecao judicial, prova emprestada, atipica. Distribuicao do onus da prova e inversao.</p>
<p><strong>Sentenca (arts. 485-512):</strong> sem resolucao de merito e com resolucao de merito. Coisa julgada material e formal.</p>

<h3>Recursos (arts. 994-1054)</h3>
<p>Apelacao, agravo de instrumento e interno, embargos de declaracao, recurso ordinario, extraordinario e especial. Juizo de admissibilidade e merito. Efeitos: devolutivo, suspensivo, translativo, extensivo, regressivo.</p>`
  },
  {
    titulo: "Direito do Trabalho - Mauricio Godinho Delgado",
    conteudo: `<h3>Principios do Direito do Trabalho</h3>
<p><strong>Protetor:</strong> in dubio pro operario, norma mais favoravel, condicao mais benefica.</p>
<p><strong>Irrenunciabilidade:</strong> direitos trabalhistas sao indisponiveis.</p>
<p><strong>Primazia da realidade:</strong> prevalece a realidade dos fatos sobre documentos.</p>
<p><strong>Continuidade:</strong> contrato de trabalho por tempo indeterminado e regra.</p>
<p><strong>Intangibilidade salarial:</strong> salario nao pode ser reduzido (exceto convencao coletiva).</p>

<h3>Relação de Emprego (arts. 2-3 CLT)</h3>
<p><strong>Requisitos:</strong> pessoa fisica, pessoalidade, nao eventualidade, subordinacao, onerosidade.</p>
<p><strong>Empregado:</strong> toda pessoa fisica que presta servicos de natureza nao eventual a empregador, sob dependencia e mediante salario.</p>
<p><strong>Empregador:</strong> empresa, individual ou coletiva, que assume os riscos da atividade, admite, assalaria e dirige a prestacao pessoal de servicos.</p>

<h3>Tipos Especiais de Empregado</h3>
<p>Rural, domestico, aprendiz, temporario, teleempregado (art. 6 CLT), celetista x estatutario. Diferenciado: bancario, jornalista, professor, aeronauta, motorista.</p>

<h3>Contrato de Trabalho</h3>
<p><strong>Modalidades:</strong> prazo determinado (experiencia, servico especificado, atividade transitoria) e indeterminado.</p>
<p><strong>Alteracao:</strong> unilateral nao pode (art. 468 CLT).</p>
<p><strong>Suspensao e interrupcao:</strong> suspensao (sem salario), interrupcao (com salario).</p>
<p><strong>Extincao:</strong> dispensa sem justa causa, com justa causa (art. 482 CLT), pedido de demissao, culpa reciproca, rescindindo indireta (art. 483).</p>

<h3>Jornada de Trabalho</h3>
<p><strong>Limites (art. 7 CF, arts. 58-75 CLT):</strong> 8h diarias / 44h semanais. Hora extra: 50% minimo. Banco de horas (acordo individual ou coletivo).</p>
<p><strong>Descanso:</strong> intrajornada (1h), interjornada (11h), semanal remunerado (Domingo). Ferias (arts. 129-153).</p>

<h3>Remuneracao</h3>
<p>Salario e gorjeta. Adicionais: hora extra, noturno, insalubridade, periculosidade, transferencia. Equiparacao salarial (art. 461 CLT). 13 salario. FGTS.</p>

<h3>Direito Coletivo</h3>
<p>Sindicato: liberdade sindical (art. 8 CF), unicidade, contribuicao sindical. Convencao e acordo coletivo. Greve (Lei 7.783/89). Dissidio coletivo.</p>`
  },
  {
    titulo: "Direito Tributario - Hugo de Brito Machado",
    conteudo: `<h3>Sistema Tributario Nacional (CF arts. 145-162)</h3>
<p><strong>Competencia tributaria:</strong> capacidade de instituir tributos. Privativa (Uniao, Estados, DF, Municipios), comum, residual (Uniao via lei complementar), cumulativa (DF).</p>

<h3>Principios Constitucionais</h3>
<p><strong>Legalidade (art. 150 I):</strong> nenhum tributo sera exigido sem lei que o institua ou aumente.</p>
<p><strong>Anterioridade:</strong> anual (art. 150 III b) e nonagesimal (art. 150 III c).</p>
<p><strong>Irretroatividade (art. 150 III a):</strong> lei tributaria nao retroage.</p>
<p><strong>Isolamento (art. 150 II):</strong> tratamento igual entre contribuintes em condicoes equivalentes.</p>
<p><strong>Capacidade contributiva (art. 145 ss 1):</strong> tributos pessoais graduados pela capacidade economica.</p>
<p><strong>Nao confisco (art. 150 IV):</strong> tributo nao pode ter efeito de confisco.</p>
<p><strong>Transito (art. 150 V):</strong> limitacao ao trafego de pessoas e bens.</p>

<h3>Imunidades (art. 150 VI)</h3>
<p>Reciprocas (Uniao, Estados, DF, Municipios), templos religiosos, partidos politicos e sindicatos, livros e jornais, musicas nacionais, entidades de assistencia social, ITR de pequenas glebas.</p>

<h3>Classificacao dos Tributos</h3>
<p><strong>Impostos (art. 145 I):</strong> obrigacao que tem como fato gerador situacao independente de atividade estatal especifica.</p>
<p><strong>Taxas (art. 145 II):</strong> poder de policia ou servico publico especifico e divisivel.</p>
<p><strong>Contribuicoes de melhoria (art. 145 III):</strong> decorrente de obra publica.</p>
<p><strong>Emprestimos compulsorios (art. 148):</strong> calamidade, guerra, investimento publico.</p>
<p><strong>Contribuicoes especiais (art. 149):</strong> sociais (COFINS, PIS, CSLL), de intervencao no dominio economico, de interesse das categorias profissionais.</p>

<h3>Obrigacao Tributaria (CTN)</h3>
<p><strong>Fato gerador (arts. 114-118 CTN):</strong> situacao prevista em lei que da origem a obrigacao tributaria.</p>
<p><strong>Sujeito ativo:</strong> ente tributante.</p>
<p><strong>Sujeito passivo (arts. 121-137):</strong> contribuinte e responsavel (solidariedade, substituicao, transferencia).</p>

<h3>Credito Tributario</h3>
<p><strong>Lancamento (arts. 142-150 CTN):</strong> de oficio, por declaracao, homologacao (art. 150).</p>
<p><strong>Suspensao (arts. 151-155-A):</strong> moratoria, deposito, reclamação/recursos, liminar, tutela, parcelamento.</p>
<p><strong>Extincao (arts. 156-174):</strong> pagamento, compensacao, transacao, remissao, prescricao e decadencia (arts. 173-174), conversao de deposito, pagamento antecipado com homologacao.</p>
<p><strong>Exclusao (arts. 175-182):</strong> isencao e anistia.</p>
<p><strong>Garantias e privilegios (arts. 183-193):</strong> preferencia, indisponibilidade de bens, nao sujeicao a falencia.</p>

<h3>Impostos em Especie</h3>
<p><strong>Federal:</strong> IR, IPI, IOF, ITR, IE, II.</p>
<p><strong>Estadual:</strong> ICMS (Lei Kandir - LC 87/96, EC 87/2015), IPVA, ITCMD.</p>
<p><strong>Municipal:</strong> ISS (LC 116/03), IPTU, ITBI.</p>`
  },
  {
    titulo: "Direito Administrativo - Maria Sylvia Di Pietro",
    conteudo: `<h3>Princípios da Administração (art. 37 CF)</h3>
<p><strong>LIMPE:</strong> Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiencia. Inclui proporcionalidade, razoabilidade, seguranca juridica, motivacao, interesse publico, indisponibilidade, contraditorio e ampla defesa.</p>

<h3>Organizacao Administrativa</h3>
<p><strong>Administracao direta:</strong> Uniao, Estados, DF, Municipios e seus orgaos.</p>
<p><strong>Administracao indireta:</strong> autarquias, fundacoes publicas, empresas publicas, sociedades de economia mista.</p>
<p><strong>Orgaos publicos:</strong> independentes, autonomos, superiores, subalternos. Teoria do orgao (imputacao).</p>

<h3>Ato Administrativo</h3>
<p><strong>Elementos (art. 2 Lei 4.717/65):</strong> competencia, finalidade, forma, motivo, objeto.</p>
<p><strong>Atributos:</strong> presuncao de legitimidade, imperatividade, autoexecutoriedade, tipicidade.</p>
<p><strong>Classificacao:</strong> vinculado e discricionario; individual e normativo; simples, complexo e composto; valido, nulo, anulavel, inexistente.</p>
<p><strong>Extincao:</strong> anulacao (autotutela), revogacao (merito), cassacao, caducidade, contraposicao, renuncia.</p>

<h3>Poderes Administrativos</h3>
<p><strong>Vinculado:</strong> sem margem de escolha.</p>
<p><strong>Discricionario:</strong> liberdade dentro dos limites legais (merito administrativo).</p>
<p><strong>Hierarquico:</strong> ordenar, fiscalizar, rever, avocar, delegar.</p>
<p><strong>Disciplinar:</strong> punir infracoes de servidores e administrados contratuais.</p>
<p><strong>Normativo:</strong> expedir decretos, regulamentos, instrucoes.</p>
<p><strong>Policia:</strong> limitar direitos individuais em prol do interesse publico.</p>

<h3>Licitações e Contratos (Lei 14.133/2021)</h3>
<p><strong>Principios:</strong> legalidade, impessoalidade, moralidade, igualdade, publicidade, eficiencia, probidade, vinculacao ao instrumento convocatorio, julgamento objetivo, seguranca juridica, competitividade, transparencia, eficacia, economicidade.</p>
<p><strong>Modalidades:</strong> pregao, concorrencia, concurso, leilao, dialogo competitivo (Lei 14.133/21).</p>
<p><strong>Contratos:</strong> caracteristicas, garantias, duracao, alteracao, extincao, nulidades.</p>

<h3>Servicos Publicos</h3>
<p>Conceito, principios (continuidade, generalidade, modicidade, atualidade, cortesia), formas de prestacao (centralizada, descentralizada, delegada). Concessao, permissao, autorizacao, PPP (Lei 11.079/04).</p>

<h3>Responsabilidade Civil do Estado</h3>
<p><strong>Objetiva (art. 37 ss 6 CF):</strong> pessoas juridicas de direito publico e direito privado prestadoras de servico publico. Teoria do risco administrativo. Excludentes: culpa exclusiva da vitima, caso fortuito externo, forca maior.</p>
<p><strong>Subsidiariedade:</strong> acao regressiva contra agente em caso de dolo ou culpa.</p>

<h3>Controle da Administracao</h3>
<p>Administrativo (autotutela), legislativo (CPI, TCU), judicial (amplo, via de regra). Improbidade administrativa (Lei 8.429/92, alterada pela Lei 14.230/2021). Agentes publicos, servidores e regime previdenciario (arts. 37-41 CF, Lei 8.112/90).</p>`
  },
  {
    titulo: "Direito Empresarial - Fabio Ulhoa Coelho",
    conteudo: `<h3>Teoria da Empresa (arts. 966-1.195 CC)</h3>
<p><strong>Empresario (art. 966):</strong> quem exerce profissionalmente atividade economica organizada para producao ou circulacao de bens ou servicos.</p>
<p><strong>Nao e empresario:</strong> profissional intelectual (medico, advogado, contador, arquiteto), a menos que atividade constitua elemento de empresa.</p>

<h3>Registro de Empresa (arts. 967-971)</h3>
<p>Junta Comercial (RENASIM). Capacidade: plena. Impedimentos: falido nao reabilitado, servidor publico, incapaz (exceto se continuar empresa do falecido, com representacao).</p>

<h3>Estabelecimento Empresarial (arts. 1.142-1.149)</h3>
<p>Complexo de bens (corporeos e incorporeos) organizados para atividade empresarial. Trespass: alienacao do estabelecimento (art. 1.143). Clientes, nome empresarial, ponto comercial, propriedade industrial.</p>

<h3>Nome Empresarial</h3>
<p><strong>Firma:</strong> individual (nome civil) e coletiva (nome de socios).</p>
<p><strong>Denominacao:</strong> objeto social.</p>

<h3>Sociedades (arts. 981-1.141)</h3>
<p><strong>Nao personalizadas:</strong> sociedade em comum (sem registro) e em conta de participacao.</p>
<p><strong>Personalizadas:</strong> Simples (Nova Lei 14.451/22), Limitada (Ltda. - mais comum, arts. 1.052-1.087), Anonima (S.A. - Lei 6.404/76), Comandita Simples e por Acoes, Cooperativa, Coligadas e Controladas.</p>
<p><strong>Limitada:</strong> responsabilidade dos socios restrita ao capital social (art. 1.052). Administracao por uma ou mais pessoas designadas no contrato social. Exclusao judicial ou extrajudicial de socio (art. 1.030, 1.085-1.087).</p>
<p><strong>S.A.:</strong> capital dividido em acoes; responsabilidade limitada ao preco de emissao das acoes subscritas ou adquiridas. Conselho de administracao, diretoria, conselho fiscal (facultativo). Assembleia geral de acionistas, debentures, partes beneficiarias.</p>

<h3>Títulos de Credito (arts. 887-926 e Lei Uniforme de Genebra)</h3>
<p>Letra de cambio, nota promissoria, cheque, duplicata. Atributos: negociabilidade, literalidade, cartularidade, autonomia. Endosso, aval, protesto, prescricao.</p>

<h3>Recuperacao Judicial e Falencia (Lei 11.101/2005)</h3>
<p><strong>Recuperacao judicial:</strong> plano de recuperacao, assembleia de credores, classes. Processo, concessao e fiscalizacao.</p>
<p><strong>Falencia:</strong> requisitos, processo, arrecadacao, realizacao do ativo, pagamento dos credores, encerramento. Ordem de pagamento: credores trabalhistas, tributarios, quirografarios, subordinados.</p>`
  },
  {
    titulo: "Direito Internacional Publico - Celso Mello",
    conteudo: `<h3>Conceito e Fundamentos</h3>
<p><strong>Definicao:</strong> conjunto de normas que rege as relacoes entre sujeitos internacionais (Estados, organizacoes internacionais, individuos).</p>
<p><strong>Fontes (art. 38 CIJ):</strong> tratados, costume internacional, principios gerais de direito, doutrina e jurisprudencia.</p>

<h3>Tratados (Convencao de Viena 1969)</h3>
<p><strong>Conceito:</strong> acordo internacional concluido por escrito entre Estados e regido pelo direito internacional.</p>
<p><strong>Fases:</strong> negociacao, adocao, autenticacao, assinatura, ratificacao, promulgacao, publicacao (no Brasil: Decreto Presidencial).</p>
<p><strong>Efeitos:</strong> pacta sunt servanda. Reservas. Extincao: denuncia, nulidade, impossibilidade superveniente, rompimento de relacoes.</p>

<h3>Sujeitos de Direito Internacional</h3>
<p><strong>Estado:</strong> povo, territorio, governo, soberania. Reconhecimento. Sucessao.</p>
<p><strong>Organizacoes internacionais:</strong> ONU (Carta de 1945), OEA, OIT, OMC, UNESCO, FMI. Personalidade juridica derivada. Privilegios e imunidades.</p>
<p><strong>Individuo:</strong> protecao internacional dos direitos humanos.</p>

<h3>Direito do Mar (UNCLOS 1982)</h3>
<p>Mar territorial (12 milhas), zona contigua (24), ZEE (200), plataforma continental, alto-mar. Direito de passagem inocente.</p>

<h3>Solucao de Controversias</h3>
<p>Meios diplomaticos (negociacao, mediacao, bons oficios, conciliacao, inquerito), meios juridicos (arbitragem, Corte Internacional de Justica, tribunais regionais).</p>

<h3>Direito Internacional Humanitario e Direitos Humanos</h3>
<p><strong>Convencoes de Genebra:</strong> protecao de vitimas de conflitos armados.</p>
<p><strong>Sistemas de protecao:</strong> ONU (PIDCP, PIDESC, Comites), OEA (CADH, Corte IDH).</p>
<p><strong>Rompimento da paz:</strong> uso da forca, legtima defesa, Conselho de Seguranca da ONU, operacoes de peacekeeping.</p>`
  },
  {
    titulo: "Direito Ambiental - Paulo Affonso Leme Machado",
    conteudo: `<h3>Princípios (art. 225 CF)</h3>
<p><strong>Precaucao:</strong> na ausencia de certeza, medidas protetivas devem ser tomadas.</p>
<p><strong>Prevencao:</strong> evitar danos ambientais conhecidos.</p>
<p><strong>Poluidor-pagador:</strong> quem polui paga pela prevencao, reparacao e compensacao.</p>
<p><strong>Usuario-pagador:</strong> uso de recursos naturais gera contrapartida.</p>
<p><strong>Participacao:</strong> direito a informacao, educacao ambiental, audiencias publicas.</p>
<p><strong>Funcao socioambiental da propriedade:</strong> uso deve respeitar o equilibrio ecologico.</p>

<h3>Licenciamento Ambiental (Lei 6.938/81, CONAMA 237/97)</h3>
<p><strong>Tres etapas (art. 225 ss 1 IV):</strong> Licenca Previa (LP - viabilidade), Licenca de Instalacao (LI), Licenca de Operacao (LO). EIA/RIMA para atividades de significativo impacto.</p>
<p><strong>Orgaos:</strong> IBAMA (federal), orgaos estaduais (OEMA) e municipais.</p>

<h3>Responsabilidade Ambiental</h3>
<p><strong>Administrativa:</strong> infracoes e sancoes (Lei 9.605/98, Decreto 6.514/08).</p>
<p><strong>Civil:</strong> objetiva e solidaria (art. 14 ss 1 Lei 6.938/81). Teoria do risco integral. Dano material, moral, coletivo.</p>
<p><strong>Penal (Lei 9.605/98):</strong> crimes ambientais contra fauna, flora, poluicao, ordenamento urbano, patrimonio cultural, administracao ambiental. Pessoa juridica responde penalmente (art. 225 ss 3 CF).</p>

<h3>Unidades de Conservacao (Lei 9.985/00 - SNUC)</h3>
<p><strong>Protecao integral:</strong> Estacao Ecologica, Reserva Biologica, Parque, Monumento Natural, Refugio de Vida Silvestre.</p>
<p><strong>Uso sustentavel:</strong> APA, Area de Relevante Interesse Ecologico, Floresta, Reserva Extrativista, Reserva de Desenvolvimento Sustentavel, RPPN.</p>

<h3>Recursos Hidricos e Florestais</h3>
<p>Politica Nacional de Recursos Hidricos (Lei 9.433/97): outorga, cobranca, Comites de Bacia. Codigo Florestal (Lei 12.651/12): APP, Reserva Legal, regulacao do desmatamento, CAR, PRA.</p>

<h3>Mudancas Climaticas</h3>
<p><strong>Acordo de Paris (2015):</strong> compromisso brasileiro de reducao de emissoes. Politica Nacional sobre Mudanca do Clima (Lei 12.187/09).</p>`
  },
  {
    titulo: "Direitos Humanos - Flavia Piovesan",
    conteudo: `<h3>Fundamentos e Caracteristicas</h3>
<p><strong>Direitos Humanos:</strong> conjunto de direitos e faculdades que garantem a dignidade da pessoa humana.</p>
<p><strong>Caracteristicas:</strong> universalidade, interdependencia, indivisibilidade, irrenunciabilidade, imprescritibilidade, inalienabilidade, aplicabilidade imediata (art. 5 ss 1 CF).</p>
<p><strong>Geracoes:</strong> 1a (liberdades individuais), 2a (direitos sociais, economicos, culturais), 3a (solidariedade, fraternidade, desenvolvimento, meio ambiente, paz).</p>

<h3>Sistema Global (ONU)</h3>
<p><strong>Carta da ONU (1945):</strong> promocao dos direitos humanos como proposito fundamental.</p>
<p><strong>Declaracao Universal dos Direitos Humanos (1948):</strong> marco juridico, consensual, nao vinculante, mas de forca moral e politica.</p>
<p><strong>PIDCP (1966):</strong> direitos civis e politicos. Comite de Direitos Humanos (monitoramento). Protocolos Facultativos.</p>
<p><strong>PIDESC (1966):</strong> direitos economicos, sociais e culturais. Comite DESC. Protocolo Facultativo com sistema de peticao individual.</p>
<p><strong>Convencoes especificas:</strong> eliminacao do racismo (CERD), discriminacao contra a mulher (CEDAW), tortura (CAT), crianca (CRC), trabalhadores migrantes, pessoas com deficiencia, desaparicao forcada.</p>

<h3>Sistema Interamericano (OEA)</h3>
<p><strong>CADH (Pacto de San Jose da Costa Rica, 1969):</strong> direitos protegidos. Art. 29: clausula de interpretacao pro homine. Art. 27: suspensao de garantias.</p>
<p><strong>Orgaos:</strong> Comissao Interamericana de Direitos Humanos (CIDH) e Corte Interamericana de Direitos Humanos (Corte IDH).</p>
<p><strong>Controle de convencionalidade:</strong> exercido pelos orgaos do sistema e tambem pelos juizes nacionais (de oficio).</p>

<h3>Direito Internacional dos Direitos Humanos no Brasil</h3>
<p><strong>Incorporacao:</strong> tratados anteriores a EC 45/05 (paridade de lei ordinaria). Posteriores, se aprovados por 3/5 em 2 turnos (EC 45/05), equivalem a emenda constitucional (art. 5 ss 3).</p>
<p><strong>Controle de convencionalidade:</strong> juizes brasileiros devem aplicar a norma mais favoravel a pessoa humana.</p>

<h3>Grupos Vulneraveis e Direitos Tematicos</h3>
<p><strong>Mulheres:</strong> Convencao CEDAW, Lei Maria da Penha (11.340/06). Igualdade genero.</p>
<p><strong>Crianca e adolescente:</strong> Convencao CRC, ECA (Lei 8.069/90). Protecao integral.</p>
<p><strong>Pessoas com deficiencia:</strong> Convencao (status constitucional), Lei 13.146/15 (LBI).</p>
<p><strong>Populacao LGBTQIA+:</strong> ADO 26 e MI 4733 (STF equiparou homofobia a racismo). Caso da ADPF 132 (uniao estavel homoafetiva).</p>
<p><strong>Idosos:</strong> Estatuto do Idoso (Lei 10.741/03).</p>
<p><strong>Imigrantes, refugiados e apatridas:</strong> Lei 13.445/17 (migracao), Lei 9.474/97 (refugio).</p>`
  },
  {
    titulo: "Hermeneutica Juridica - Carlos Maximiliano",
    conteudo: `<h3>Conceito e Finalidade</h3>
<p><strong>Hermeneutica:</strong> ciencia da interpretacao. Revela o sentido e o alcance das normas juridicas.</p>
<p><strong>Interpretacao:</strong> atividade de compreensao e explicacao do direito.</p>
<p><strong>Finalidade:</strong> realizar a justica no caso concreto, adaptar a norma a realidade social.</p>

<h3>Metodos de Interpretacao (Savigny)</h3>
<p><strong>Gramatical ou literal:</strong> sentido das palavras, conexao, pontuacao, etimologia.</p>
<p><strong>Logico ou racional:</strong> raciocinio, deducao, argumento, silogismo juridico. Raciocinio a contrario sensu, analogico, a fortiori.</p>
<p><strong>Sistematico:</strong> norma integrada no ordenamento juridico como um todo coerente e sem antinomias.</p>
<p><strong>Historico:</strong> origem, evolucao, contexto da elaboracao da norma, trabalhos preparatorios, exposicao de motivos.</p>
<p><strong>Teleologico ou sociologico:</strong> finalidade social da norma, funcao do direito na sociedade, consequencias praticas.</p>

<h3>Escolas de Interpretacao</h3>
<p><strong>Exegese (seculo XIX):</strong> apego a letra da lei. Codigo Napoleao.</p>
<p><strong>Historico-evolutiva (Savigny):</strong> direito como produto historico do espirito do povo.</p>
<p><strong>Jurisprudencia dos interesses (Ihering):</strong> direito como luta, ponderacao de interesses.</p>
<p><strong>Jurisprudencia dos valores (Alexy, Dworkin):</strong> ponderacao e proporcionalidade.</p>
<p><strong>Realismo juridico:</strong> direito e o que os tribunais dizem que e.</p>
<p><strong>Sociologica (Ehrlich):</strong> direito vivo da sociedade.</p>

<h3>Instrumentos de Integracao (LINDB art. 4)</h3>
<p><strong>Analogia:</strong> casos semelhantes, mesma razao.</p>
<p><strong>Costumes:</strong> quando a lei e omissa, pratica reiterada com conviccao de obrigatoriedade.</p>
<p><strong>Principios gerais de direito:</strong> justica, equidade, boa-fe, moralidade, proporcionalidade.</p>

<h3>Antinomias e Conflitos</h3>
<p><strong>Criterios:</strong> hierarquico (lei superior prevalece), cronologico (lei posterior revoga anterior), especialidade (lei especial prevalece sobre geral).</p>
<p><strong>Lacunas:</strong> integracao via analogia, costumes, principios gerais.</p>
<p><strong>Equidade:</strong> justica do caso concreto, adaptacao da norma geral a situacao particular.</p>`
  },
  {
    titulo: "Teoria Geral do Processo - Candido Rangel Dinamarco",
    conteudo: `<h3>Fundamentos</h3>
<p><strong>Processo:</strong> instrumento para o exercicio da jurisdicao. Metodo de composicao de litigios.</p>
<p><strong>Litigio:</strong> conflito de interesses qualificado por uma pretensao resistida.</p>
<p><strong>Lide:</strong> conflito de interesses submetido ao processo.</p>

<h3>Principios Processuais</h3>
<p><strong>Devido processo legal (art. 5 LIV CF):</strong> nucleo basico do processo justo.</p>
<p><strong>Contraditorio e ampla defesa (art. 5 LV):</strong> participacao efetiva, paridade de armas, possibilidade de influenciar na decisao.</p>
<p><strong>Inercia da jurisdicao (art. 2 CPC):</strong> juiz nao age de oficio, depende de provocacao.</p>
<p><strong>Publicidade (art. 5 LX, art. 11 CPC):</strong> atos processuais publicos, exceto seguranca, intimidade, interesse social.</p>
<p><strong>Motivacao das decisoes (art. 93 IX CF, art. 489 CPC):</strong> juiz deve fundamentar todas as decisoes.</p>
<p><strong>Duracao razoavel (art. 5 LXXVIII CF):</strong> processo em tempo adequado, sem dilacoes indevidas.</p>
<p><strong>Boa-fe e lealdade (art. 5 CPC):</strong> litigancia de ma-fe, dever de cooperacao.</p>
<p><strong>Economia processual:</strong> maximo resultado com minimo de atos.</p>
<p><strong>Instrumentalidade:</strong> processo nao e fim em si mesmo, e meio para realizacao do direito substancial.</p>

<h3>Jurisdicao</h3>
<p><strong>Elementos:</strong> substitutividade (Estado substitui vontade das partes), inercia (provocacao), definitividade (coisa julgada), investidura (juiz investido), indeclinabilidade (nao pode fugir ao julgamento).</p>
<p><strong>Caracteristicas:</strong> una e indivisivel, mas dividida em especializacoes (civil, penal, trabalhista, eleitoral, etc.).</p>
<p><strong>Alternativas:</strong> arbitragem, mediacao, conciliacao, negociacao, autocomposicao.</p>

<h3>Acao</h3>
<p><strong>Teorias:</strong> concreta (Wach), abstrata (Bulow, Degenkolb), como direito a tutela jurisdicional (Liebmans, Dinamarco).</p>
<p><strong>Condicoes:</strong> possibilidade juridica do pedido, legitimidade para a causa, interesse processual.</p>
<p><strong>Classificacao:</strong> condenatoria, constitutiva, declaratoria, executiva, mandamental (Ponte de Miranda).</p>

<h3>Excecao</h3>
<p><strong>Processual:</strong> incompetencia, impedimento, suspeicao, conexao, litispendencia, coisa julgada (arts. 337-342 CPC).</p>
<p><strong>Substancial (merito):</strong> defesa indireta do direito material.</p>

<h3>Processo</h3>
<p><strong>Relacao juridica processual:</strong> juiz-autor-reu. Autonomo, instrumental, complexo, publico, dinâmico, progressivo.</p>
<p><strong>Pressupostos processuais:</strong> juiz competente e imparcial, partes capazes e representadas, peticao inicial apta.</p>
<p><strong>Objeto do processo:</strong> pretensao do autor. Pedido imediato (provimento) e mediato (bem juridico).</p>`
  },
  {
    titulo: "Execucao Civil - Humberto Theodoro Jr.",
    conteudo: `<h3>Teoria Geral da Execucao</h3>
<p><strong>Conceito:</strong> atividade jurisdicional destinada a realizar o direito ja reconhecido (titulo executivo).</p>
<p><strong>Principios:</strong> patrimonialidade (art. 789 CPC), utilidade, disponibilidade, efetividade, menor onerosidade (art. 805 CPC), tipicidade, autonomia, no retrocesso.</p>

<h3>Tipos de Execucao</h3>
<p><strong>Por quantia certa:</strong> contra devedor solvente (art. 824 CPC). Penhora, expropriacao, pagamento.</p>
<p><strong>Para entrega de coisa:</strong> certa ou incerta. Busca e apreensao, imissao na posse.</p>
<p><strong>Para pagamento de prestacao de fazer ou nao fazer:</strong> tutela especifica, multa coercitiva (astreintes - art. 536 CPC), conversao em perdas e danos.</p>

<h3>Titulo Executivo</h3>
<p><strong>Judicial (art. 515 CPC):</strong> sentenca condenatoria, decisoes homologatorias de autocomposicao (judicial e extrajudicial), sentenca penal condenatoria, sentenca arbitral, decisoes de tribunais estrangeiros, decisoes de orgaos judiciais.</p>
<p><strong>Extrajudicial (art. 784 CPC):</strong> letra de cambio, nota promissoria, duplicata, cheque, escritura publica, contrato de hipoteca, certidao de divida ativa, contrato de seguro, credito de servicos notariais.</p>

<h3>Penhora (arts. 830-904 CPC)</h3>
<p><strong>Ordem preferencial (art. 835):</strong> dinheiro, veiculo, imovel, navio, semovente, joia, direito crediticio, empresa, salario e rendimentos (parcial), quotas de sociedade.</p>
<p><strong>Impenhorabilidades (art. 833):</strong> bens de familia (Lei 8.009/90), salarios (regra), ferramentas de trabalho, seguros, aposentadoria (ate 50 salarios minimos), livros e materiais de estudo, pequena propriedade rural.</p>

<h3>Expropriacao</h3>
<p>Adjudicacao (art. 876), alienacao por iniciativa particular (art. 880), leilao eletronico ou presencial (arts. 881-903), usufruto de bem imovel (art. 876 II).</p>

<h3>Embargos (arts. 914-939)</h3>
<p>Embargos do executado: via de defesa na execucao. Prazo: 15 dias (art. 915). Efeito suspensivo (art. 919).</p>

<h3>Execucao Fiscal (Lei 6.830/80)</h3>
<p>Divida ativa da Fazenda Publica. CDAs. Prescricao. Penhora. Excecao de pre-executividade. Embargos a execucao fiscal. Garantia: penhora, fianca bancaria, seguro garantia.</p>

<h3>Execucao de Alimentos</h3>
<p>Prisao civil (art. 528 CPC, art. 5 LXVII CF - depositario infiel nao mais, S 419 STF). Rito especial: protesto, desconto em folha, penhora, prisao por 1 a 3 meses (reclusao).</p>`
  },
  {
    titulo: "Direito Previdenciario - Wladimir Novaes Martinez",
    conteudo: `<h3>Regime Geral de Previdencia Social (RGPS - Lei 8.213/91)</h3>
<p><strong>Principios:</strong> contributividade, solidariedade, universalidade de cobertura e atendimento, uniformidade e equivalencia de beneficios, seletividade e distributividade, irredutibilidade do valor dos beneficios, equidade na forma de participacao no custeio, diversidade da base de financiamento, carater democratico e descentralizado.</p>

<h3>Segurados (art. 11 Lei 8.213/91)</h3>
<p><strong>Obrigatorios:</strong> empregado (urbano, rural, domestico), empregado domestico (art. 12 LC 150/15), trabalhador avulso, contribuinte individual, segurado especial (produtor rural, pescador artesanal, indigena, posseiro).</p>
<p><strong>Facultativo:</strong> maior de 14 anos que nao exerce atividade remunerada (estudante, dona de casa, desempregado).</p>

<h3>Beneficios (arts. 18-47 Lei 8.213/91)</h3>
<p><strong>Aposentadoria por idade (art. 48):</strong> homem 65 anos, mulher 62 anos (EC 103/19). Carência: 180 contribuicoes.</p>
<p><strong>Aposentadoria por tempo de contribuicao (art. 52):</strong> homem 35 anos, mulher 30 anos (regra de transicao apos EC 103/19).</p>
<p><strong>Aposentadoria especial (art. 57):</strong> 15, 20 ou 25 anos de exposicao a agentes nocivos. Reforma EC 103/19 alterou para idade minima + pontos.</p>
<p><strong>Aposentadoria por incapacidade permanente (invalidez - art. 42):</strong> incapacidade total e permanente para o trabalho, insuscetivel de reabilitacao.</p>
<p><strong>Aposentadoria da pessoa com deficiencia (LC 142/13):</strong> tempo reduzido em 20-40%.</p>
<p><strong>Auxilio por incapacidade temporaria (doenca - art. 59):</strong> incapacidade temporaria superior a 15 dias consecutivos.</p>
<p><strong>Auxilio-acidente (art. 86):</strong> indenizacao por sequelas permanentes que reduzam capacidade laboral.</p>
<p><strong>Salario-maternidade (arts. 71-73):</strong> 120 dias. Segurada empregada, domestica, contribuinte individual, facultativa, especial, desempregada.</p>
<p><strong>Salario-familia (arts. 64-71):</strong> baixa renda, por filho menor de 14 anos ou invalido.</p>
<p><strong>Pensao por morte (arts. 74-79):</strong> dependentes (arts. 16). Cotas familiares.</p>
<p><strong>Auxilio-reclusao (arts. 80-81):</strong> dependentes de segurado de baixa renda recolhido a prisao.</p>

<h3>Custeio (Lei 8.212/91)</h3>
<p><strong>Contribuicoes sociais:</strong> empresa (20% + RAT, SAT), empregado (7,5%-14%), contribuinte individual (11-20%), facultativo (5-11%).</p>
<p><strong>Outras fontes:</strong> PIS/PASEP, COFINS, CSLL, concurso de prognosticos, receita de concursos.</p>

<h3>Prescricao e Decadencia</h3>
<p><strong>Decadencia (art. 103 Lei 8.213/91):</strong> 10 anos para revisao do ato de concessao.</p>
<p><strong>Prescricao (art. 103 paragrafo unico):</strong> 5 anos para cobranca de prestacoes vencidas.</p>`
  },
  {
    titulo: "Estatuto da Crianca e do Adolescente - Jose Paulo Netto",
    conteudo: `<h3>Doutrina da Protecao Integral (Lei 8.069/90)</h3>
<p><strong>Fundamento:</strong> Convencao ONU Direitos da Crianca (1989), art. 227 CF. Crianca e adolescente como sujeitos de direito, prioridade absoluta, condicao peculiar de pessoa em desenvolvimento.</p>

<h3>Direitos Fundamentais (arts. 7-69 ECA)</h3>
<p><strong>Vida e saude (arts. 7-14):</strong> atendimento pre-natal, aleitamento materno, vacinacao, atendimento medico, saude mental.</p>
<p><strong>Liberdade, respeito e dignidade (arts. 15-18):</strong> opiniao, crenca, brincar, participar. Protecao contra negligencia, violencia, exploracao, crueldade.</p>
<p><strong>Convivencia familiar e comunitaria (arts. 19-52):</strong> direito a familia natural ou substituta (guarda, tutela, adocao). Familia extensa. Adocao: nacional e internacional, requisitos, estagio de convivencia.</p>
<p><strong>Educacao, cultura, esporte e lazer (arts. 53-59):</strong> acesso ao ensino obrigatorio e gratuito, atendimento educacional especializado, programa suplementar.</p>
<p><strong>Profissionalizacao e protecao do trabalho (arts. 60-69):</strong> proibicao de trabalho antes dos 16 anos (excecao: aprendiz a partir dos 14).</p>

<h3>Prevencao (arts. 70-85)</h3>
<p><strong>Obrigacao de todos:</strong> prevenir ocorrencia de ameaca ou violacao dos direitos. Informacao, educacao, campanhas. Entidades governamentais e nao governamentais.</p>

<h3>Medidas de Protecao (arts. 98-102)</h3>
<p>Aplicaveis quando direitos violados ou ameacados. Encaminhamento aos pais, orientacao, matricula, inclusao em programa, acolhimento institucional, abrigo emergencial.</p>

<h3>Ato Infracional (arts. 103-128)</h3>
<p><strong>Conceito (art. 103):</strong> conduta descrita como crime ou contravencao penal.</p>
<p><strong>Garantias processuais:</strong> devido processo, ampla defesa, contraditorio, defesa tecnica por advogado.</p>
<p><strong>Medidas socioeducativas (art. 112):</strong> advertencia, obrigacao de reparar dano, prestacao de servicos a comunidade, liberdade assistida, semiliberdade, internacao (privativa de liberdade, excepcional e provisoria).</p>
<p><strong>Internacao (arts. 121-128):</strong> principio da excepcionalidade, brevidade, reavaliacao a cada 6 meses. Prazo maximo: 3 anos (art. 121 ss 3).</p>

<h3>Conselho Tutelar (arts. 131-140)</h3>
<p>Orgao permanente e autonomo, nao jurisdicional. 5 membros eleitos pela comunidade. Aplicacao de medidas de protecao, requisicao de servicos, assessoramento.</p>

<h3>Justica da Infancia e Juventude (arts. 146-193)</h3>
<p>Competencia. Procedimentos: perda ou suspensao do poder familiar, adocao, apuracao de ato infracional. Recursos: apelacao, agravo, embargos. Crimes previstos no ECA (arts. 225-258).</p>`
  },
  {
    titulo: "Lei de Introducao as Normas do Direito Brasileiro - LINDB",
    conteudo: `<h3>Estrutura e Funcao (Decreto-Lei 4.657/42)</h3>
<p><strong>Natureza:</strong> norma de sobredireito. Regula a aplicacao das demais normas juridicas no tempo e no espaco.</p>

<h3>Vigencia e Eficacia (arts. 1-6)</h3>
<p><strong>Entrada em vigor (art. 1):</strong> 45 dias apos publicacao no Brasil (ou 3 meses no exterior), salvo disposicao em contrario. Periodo de vacatio legis.</p>
<p><strong>Revogacao (art. 2):</strong> lei posterior (cronologico), salvo se incompativel ou quando expressamente disposto. Lei especial nao e revogada por geral.</p>
<p><strong>Repristinacao (art. 2 ss 3):</strong> nao se admite, salvo disposicao expressa.</p>

<h3>Aplicacao da Lei (arts. 3-6)</h3>
<p><strong>Obediencia (art. 3):</strong> ninguem se escusa de cumprir a lei alegando que nao a conhece.</p>
<p><strong>Integracao (art. 4):</strong> quando omissa, juiz recorre a analogia, costumes e principios gerais de direito.</p>
<p><strong>Finalidade social da lei (art. 5):</strong> juiz atende aos fins sociais e exigencias do bem comum.</p>

<h3>Conflito de Leis no Espaco (arts. 7-19)</h3>
<p><strong>Estatuto pessoal:</strong> lei do pais de domicilio da pessoa. Capacidade, direitos de familia, sucessao.</p>
<p><strong>Bens:</strong> lei do pais da situacao (lex rei sitae).</p>
<p><strong>Obrigacoes:</strong> lei do pais onde se constituirem.</p>
<p><strong>Forma dos atos:</strong> lei do pais onde se realizarem (lex loci celebrationis).</p>
<p><strong>Prova e prescricao:</strong> lei do pais da obrigacao (lex causae).</p>

<h3>Garantias da Seguranca Juridica (arts. 20-30, alterados pela Lei 13.655/18)</h3>
<p><strong>Motivacao das decisoes (art. 20):</strong> consequencias praticas da decisao devem ser consideradas.</p>
<p><strong>Proporcionalidade (art. 21):</strong> obstaculos e dificuldades reais do gestor publico.</p>
<p><strong>Nova orientacao (art. 24):</strong> seguranca juridica na mudanca de interpretacao.</p>
<p><strong>Compromisso de solucao consensual (art. 26):</strong> mediacao e conciliacao na administracao publica.</p>

<h3>Pessoa Juridica de Direito Privado Estrangeira (arts. 11-13)</h3>
<p>Autorizacao para funcionar no Brasil. Dependencia de aprovacao, registro, publicacao. Sucursais, filiais, agencias.</p>`
  },
  {
    titulo: "Teoria da Constituicao - J.J. Gomes Canotilho",
    conteudo: `<h3>Conceito e Evolucao Historica</h3>
<p><strong>Constitucionalismo antigo:</strong> Magna Carta (1215), Petition of Rights (1628), Habeas Corpus (1679), Bill of Rights (1689).</p>
<p><strong>Constitucionalismo moderno:</strong> revolucoes americana (1787) e francesa (1791). Constituicao escrita como norma suprema, separacao de poderes, direitos fundamentais.</p>
<p><strong>Constitucionalismo contemporaneo:</strong> positivacao dos direitos sociais, neoconstitucionalismo, forca normativa da constituicao.</p>

<h3>Classificacao das Constituicoes</h3>
<p><strong>Quanto a origem:</strong> outorgada, promulgada (popular, democratica), cesarista, pactuada.</p>
<p><strong>Quanto a forma:</strong> escrita, costumeira, mista.</p>
<p><strong>Quanto ao conteudo:</strong> material e formal.</p>
<p><strong>Quanto a alterabilidade:</strong> rigida, flexivel, semiflexivel, superrigida, imutavel.</p>
<p><strong>Brasileira (1988):</strong> promulgada, escrita, analitica, rigida, dirigente, compromissoria, social, humanista, pluralista.</p>

<h3>Poder Constituinte</h3>
<p><strong>Originario (art. 1 ss unico):</strong> inicial, autonomo, incondicionado, ilimitado (soberano), permanente. Assembleia Nacional Constituinte. Caracteristicas: poder de fato, nao submetido a limites juridicos pre-existentes.</p>
<p><strong>Derivado:</strong> reformador (EC - art. 60 CF, limites formais, materiais, circunstanciais, procedimentais); decorrente (constituicoes estaduais, LO DF); revisor (art. 3 ADCT - ja realizado em 1993).</p>
<p><strong>Limites ao poder constituinte derivado:</strong> clausulas petreas (art. 60 ss 4): forma federativa de Estado, voto direto secreto periodico e universal, separacao de poderes, direitos e garantias fundamentais.</p>

<h3>Forca Normativa (Konrad Hesse)</h3>
<p><strong>Constituicao como norma juridica vinculante:</strong> forca ativa (determina realidade) e forca limitativa (a realidade condiciona a aplicacao). Mutacao constitucional: alteracao informal do sentido sem mudanca do texto.</p>

<h3>Interpretacao Constitucional</h3>
<p><strong>Metodos:</strong> juridico (classico), topico (Viehweg), hermeneutico-concretizador (Hesse), cientifico-espiritual (Smend), normativo-estruturante (Muller), comparacao constitucional.</p>
<p><strong>Principios:</strong> unidade da constituicao, maxima efetividade, concordancia pratica (ou harmonizacao), forca normativa, proporcionalidade e razoabilidade, interpretacao conforme a constituicao, presuncao de constitucionalidade.</p>

<h3>Principios Estruturantes</h3>
<p><strong>Estado de Direito:</strong> legalidade, seguranca juridica, protecao da confianca.</p>
<p><strong>Estado Democratico:</strong> soberania popular, pluralismo, participacao.</p>
<p><strong>Estado Social:</strong> direitos sociais, justica distributiva, reducao de desigualdades.</p>
<p><strong>Separacao de Poderes (art. 2):</strong> freios e contra-pesos (checks and balances).</p>
<p><strong>Federalismo Cooperativo:</strong> reparticao de competencias, colaboracao entre entes.</p>`
  },
  {
    titulo: "Contratos em Especie - Orlando Gomes",
    conteudo: `<h3>Teoria Geral dos Contratos (arts. 421-480 CC)</h3>
<p><strong>Principios:</strong> funcao social do contrato, boa-fe objetiva, equilbrio economico, forca obrigatoria dos contratos (revisao por onerosidade excessiva), relatividade dos efeitos, consensualismo.</p>

<h3>Compra e Venda (arts. 481-532)</h3>
<p><strong>Elementos:</strong> coisa, preco, consentimento. Vicios redibitorios e eviccao. Clausulas especiais: retrovenda, venda a contento, preempcao ou preferencia, venda com reserva de dominio.</p>

<h3>Doacao (arts. 538-564)</h3>
<p>Contrato unilateral, gratuito. Modalidades: pura e simples, remuneratoria, condicional, com encargo, em forma de liberalidade. Revogacao por ingratidao do donatario ou descumprimento de encargo.</p>

<h3>Locacao (arts. 565-578 CC e Lei 8.245/91)</h3>
<p>Locacao de coisas e de predios urbanos (Lei do Inquilinato). Direitos e deveres do locador e locatario, garantias locaticias (fianca, caução, seguro), acao de despejo, renovacao e revisional.</p>

<h3>Empreitada (arts. 610-626)</h3>
<p>Contrato de obra. Empreitada de lavor (mao de obra) e mista (material). Responsabilidade civil do empreiteiro. Prazo decadencial de 5 anos (art. 618).</p>

<h3>Mandato (arts. 653-692)</h3>
<p>Representacao voluntaria. Mandato geral e especial. Obrigacoes do mandatario e mandante. Extincao: revogacao, renuncia, morte, interdição, mudanca de estado.</p>

<h3>Deposito (arts. 627-652)</h3>
<p>Voluntario e necessario. Obrigacoes do depositario: guarda e restituicao. Deposito irregular.</p>

<h3>Comodato (arts. 579-585)</h3>
<p>Emprestimo de uso, gratuito, de coisa infungivel. Direito de uso, nao de disposicao. Comodante pode exigir a coisa a qualquer tempo.</p>

<h3>Mutuo (arts. 586-592)</h3>
<p>Emprestimo de consumo (dinheiro ou coisas fungiveis). Gratuito (presumido entre parentes) ou oneroso (juros). Contrato real (entrega efetiva).</p>

<h3>Fianca (arts. 818-839)</h3>
<p>Garantia pessoal, acessoria, solidaria ou subsidiaria (beneficio de ordem). Direitos do fiador (sub-rogacao, acao regressiva, exoneração).</p>

<h3>Transacao (arts. 840-850)</h3>
<p>Autocomposicao por concessoes reciprocas. Natureza juridica: extingue obrigacao e previne litigio. Coisa julgada entre as partes.</p>`
  },
  {
    titulo: "Responsabilidade Civil - Sergio Cavalieri Filho",
    conteudo: `<h3>Evolucao Historica</h3>
<p><strong>Fases:</strong> vinganca privada, lei de talião, composicao pecuniaria, responsabilidade subjetiva (Lex Aquilia), responsabilidade objetiva (Revolucao Industrial, teoria do risco, sociedade de massa).</p>

<h3>Elementos da Responsabilidade Civil</h3>
<p><strong>Conduta humana:</strong> acao ou omissao voluntaria, negligencia, imprudencia, impericia.</p>
<p><strong>Dano:</strong> material (emergente e lucro cessante, art. 402 CC) e moral (dor, sofrimento, vexame, art. 5 V e X CF). Requisitos: certeza, atualidade e subsistencia. Dano estetico e reflexo (em ricochete).</p>
<p><strong>Nexo causal:</strong> ligacao entre conduta e dano. Teorias: equivalencia das condicoes, causalidade adequada, causalidade direta e imediata (art. 403 CC), dano direto e indireto.</p>

<h3>Modalidades</h3>
<p><strong>Contratual:</strong> descumprimento de obrigacao prevista em contrato (arts. 389-393 CC).</p>
<p><strong>Extracontratual (aquiliana):</strong> violacao de dever juridico geral de nao causar dano a outrem (art. 927 CC).</p>
<p><strong>Subjetiva (art. 927 caput):</strong> dolo ou culpa (impericia, imprudencia, negligencia).</p>
<p><strong>Objetiva (art. 927 paragrafo unico):</strong> independe de culpa. Teoria do risco (criado, proveito, atividade normalmente perigosa).</p>

<h3>Excludentes e Atenuantes</h3>
<p><strong>Excludentes de nexo causal:</strong> caso fortuito e forca maior, fato exclusivo da vitima, fato de terceiro, clausula de nao indenizar (licita), estado de necessidade e legitima defesa (CC art. 929-930).</p>
<p><strong>Excludentes de ilicitude:</strong> legitima defesa, estado de necessidade, exercicio regular de direito, estrito cumprimento do dever legal.</p>
<p><strong>Culpa concorrente da vitima:</strong> atenuacao da indenizacao.</p>

<h3>Responsabilidade Civil do Estado (art. 37 ss 6 CF)</h3>
<p><strong>Objetiva (risco administrativo):</strong> pessoas juridicas de direito publico e de direito privado prestadoras de servico publico.</p>
<p><strong>Excludentes:</strong> culpa exclusiva da vitima, caso fortuito externo (tempestade, raio).</p>
<p><strong>Responsabilidade por omissao:</strong> subjetiva (culpa administrativa, falta do servico).</p>
<p><strong>Acao regressiva:</strong> contra agente em caso de dolo ou culpa.</p>

<h3>Responsabilidade por Ato de Terceiro</h3>
<p><strong>Pais (art. 932 I, 933):</strong> por filhos menores. Objetiva.</p>
<p><strong>Tutor e curador (art. 932 II):</strong> por pupilos e curatelados.</p>
<p><strong>Empregador (art. 932 III):</strong> por ato de empregado no exercicio do trabalho.</p>
<p><strong>Dono da obra (art. 934):</strong> por empreiteiro (apenas se houve culpa na escolha ou fiscalizacao).</p>

<h3>Indenizacao (arts. 944-954 CC)</h3>
<p><strong>Dano material:</strong> reparacao integral, atualizacao monetaria, juros de mora. Lucro cessante: o que razoavelmente deixou de lucrar.</p>
<p><strong>Dano moral:</strong> indenizacao por arbitramento (juiz considera circunstancias, gravidade, duracao, condicao das partes). Jurisprudencia do STJ e STF.</p>`
  },
  {
    titulo: "Processo Penal - Aury Lopes Jr.",
    conteudo: `<h3>Sistemas Processuais Penais</h3>
<p><strong>Inquisitorio:</strong> juiz ativo, secreto, escrito, sem contraditorio, prova tarifada, acusador e julgador na mesma pessoa.</p>
<p><strong>Acusatorio:</strong> juiz passivo, partes iguais, publico, oral, contraditorio, ampla defesa, separacao entre acusacao e julgamento.</p>
<p><strong>Misto:</strong> fase inquisitoria (policia) + fase acusatoria (judicial). Modelo brasileiro atual: acusatorio com residuos inquisitorios.</p>

<h3>Princípios</h3>
<p><strong>Presuncao de inocencia (art. 5 LVII CF):</strong> ninguem sera considerado culpado ate o transito em julgado. Principio do favor rei, in dubio pro reo.</p>
<p><strong>Contraditorio e ampla defesa (art. 5 LV):</strong> plenitude de defesa, autodefesa e defesa tecnica. Nulidade se sem defensor.</p>
<p><strong>Juiz natural (art. 5 LIII):</strong> juiz competente e imparcial.</p>
<p><strong>Iniciativa das partes:</strong> juiz nao pode agir de oficio (excecao: provas de oficio no CPP, art. 156).</p>
<p><strong>Publicidade (art. 5 LX):</strong> atos processuais publicos.</p>

<h3>Inquerito Policial (arts. 4-23 CPP)</h3>
<p><strong>Natureza:</strong> procedimento administrativo, inquisitorial, escrito, sigiloso (relativamente), presidido pela autoridade policial.</p>
<p><strong>Inicio:</strong> de oficio (acao penal publica incondicionada), requisicao, requerimento da vitima, auto de prisao em flagrante, portaria.</p>
<p><strong>Prazos:</strong> indiciado preso: 10 dias (30 dias custodia). Solto: 30 dias (prorrogavel). Quebra de sigilo bancario e fiscal, interceptacao telefonica (Lei 9.296/96).</p>

<h3>Acao Penal</h3>
<p><strong>Publica (arts. 24-62 CPP):</strong> incondicionada (MP age de oficio) e condicionada (representacao da vitima ou requisicao do Ministro).</p>
<p><strong>Privada (arts. 29-36):</strong> exclusivamente (queixa-crime, prazo 6 meses) e subsidiaria da publica (art. 5 LIX CF).</p>

<h3>Provas (arts. 155-251 CPP)</h3>
<p><strong>Sistema:</strong> livre convencimento motivado. Prova emprestada, prova ilicita (art. 5 LVI CF, art. 157 CPP). Provas em especie: pericial, testemunhal, documental, interrogatorio, reconhecimento, acareacao, confissao.</p>

<h3>Prisões Cautelares (arts. 282-350 CPP)</h3>
<p><strong>Prisao em flagrante (arts. 301-310):</strong> obrigatoria, qualquer pessoa pode prender. Flagrante obrigatorio, facultativo, presumido (art. 302).</p>
<p><strong>Prisao preventiva (arts. 311-316):</strong> garantia da ordem publica, economica, conveniencia da instrucao criminal, assegurar aplicacao da lei penal. Fumus commissi delicti e periculum libertatis (art. 312).</p>
<p><strong>Temporaria (Lei 7.960/89):</strong> 5 dias prorrogaveis por mais 5 (ou 30 dias, hediondos).</p>

<h3>Recursos (arts. 574-667 CPP)</h3>
<p>Recurso em sentido estrito, apelacao, embargos de declaracao e infringentes, carta testemunhavel, recurso especial e extraordinario (art. 102 e 105 CF). Revisao criminal (arts. 621-631).</p>

<h3>Nulidades (arts. 563-573 CPP)</h3>
<p><strong>Relativas:</strong> precluem se nao alegadas no momento oportuno. Interesse processual.</p>
<p><strong>Absolutas:</strong> incompetencia, suspeicao, falta de defesa tecnica, inobservancia de formalidade essencial. Podem ser reconhecidas de oficio a qualquer tempo.</p>`
  },
  {
    titulo: "Direito Eleitoral - Jose Jairo Gomes",
    conteudo: `<h3>Justica Eleitoral (CF arts. 118-121)</h3>
<p><strong>Orgaos:</strong> TSE, TREs, Juizes Eleitorais, Juntas Eleitorais. Funcoes: jurisdicional, administrativa, normativa, consultiva.</p>

<h3>Alistamento Eleitoral (arts. 14 a 16 CF)</h3>
<p><strong>Obrigatorio:</strong> maiores de 18 e menores de 70 anos.</p>
<p><strong>Facultativo:</strong> analfabetos, maiores de 70, maiores de 16 e menores de 18.</p>
<p><strong>Vedado:</strong> estrangeiros e conscritos (durante servico militar obrigatorio).</p>

<h3>Partidos Politicos (Lei 9.096/95)</h3>
<p><strong>Criacao:</strong> livre, mas com carater nacional. Registro no TSE. Funcionamento parlamentar. Fidelidade partidaria. Fundo partidario. Propaganda partidaria gratuita.</p>

<h3>Coligacoes e Federações</h3>
<p><strong>Coligacao:</strong> proibida em eleicoes proporcionais (EC 97/2017).</p>
<p><strong>Federacao partidaria:</strong> uniao de partidos por 4 anos, funcionando como um unico partido.</p>

<h3>Sistemas Eleitorais</h3>
<p><strong>Majoritario:</strong> presidente, governador, prefeito, senador. Maioria absoluta (2 turnos) ou simples (1 turno).</p>
<p><strong>Proporcional:</strong> vereadores, deputados estaduais e federais. Quociente eleitoral e partidario. Sobras.</p>

<h3>Inelegibilidades (LC 64/90)</h3>
<p><strong>Absolutas:</strong> inalistaveis e analfabetos (art. 14 ss 4 CF).</p>
<p><strong>Relativas:</strong> cargo eletivo anterior, parentesco (ss 7), funcional (militar, magistrado, MP), idade minima (art. 14 ss 3 VI). Lei da Ficha Limpa (LC 135/2010): condenacao por orgao colegiado, prazo de 8 anos.</p>

<h3>Propaganda Eleitoral (Lei 9.504/97)</h3>
<p><strong>Regras:</strong> inicio a partir de 15 de agosto do ano eleitoral. Propaganda extemporanea (antes do prazo) e ilegal. Impulsionamento, internet, radio, TV. Pesquisas, boca de urna, direito de resposta.</p>

<h3>Abuso de Poder e Captacao Ilícita</h3>
<p><strong>Abuso do poder economico e politico (LC 64/90 art. 22):</strong> AIME, AICE. Cassacao de mandato.</p>
<p><strong>Captacao iicita de sufrágio (art. 41-A Lei 9.504/97):</strong> compra de votos. Cassacao do registro ou diploma.</p>
<p><strong>Caixa 2 e gastos ilicitos (arts. 29, 30, 31 Lei 9.504/97):</strong> prestacao de contas, desaprovacao. Crime eleitoral (art. 350 CE).</p>

<h3>Crimes Eleitorais (CE arts. 289-354)</h3>
<p>Corrupcao eleitoral (art. 299), conduta vedada a agente publico (art. 73 Lei 9.504/97), propaganda irregular, nao prestacao de contas.</p>`
  },
  {
    titulo: "Direito Notarial e Registral - Walter Ceneviva",
    conteudo: `<h3>Atividade Notarial e Registral (Lei 8.935/94)</h3>
<p><strong>Natureza:</strong> servico publico delegado a particular (art. 236 CF).</p>
<p><strong>Ingresso:</strong> concurso publico de provas e titulos.</p>
<p><strong>Delegatario:</strong> titular de serventia notarial ou registral, responsavel pela organizacao tecnica e administrativa.</p>

<h3>Tabelionatos</h3>
<p><strong>Tabelionato de Notas (art. 6 Lei 8.935/94):</strong> escrituras publicas, procuracoes, testamentos, atas notariais, autenticacoes, reconhecimento de firma.</p>
<p><strong>Tabelionato de Protesto:</strong> protesto de titulos e documentos de divida.</p>
<p><strong>Tabelionato de Contratos Maritimos:</strong> registro especial.</p>

<h3>Registro Civil das Pessoas Naturais (arts. 29-43 Lei 6.015/73)</h3>
<p>Nascimento, casamento, obito, emancipacao, interdição, ausencia, natimorto, opcao de nacionalidade. Efeitos juridicos, certidoes, retificacao de registro.</p>

<h3>Registro Civil das Pessoas Juridicas (arts. 114-121)</h3>
<p>Sociedades civis, associacoes, fundacoes, partidos politicos, organizacoes religiosas. Inscricao, averbacao, cancelamento.</p>

<h3>Registro de Imoveis (arts. 167-289 Lei 6.015/73)</h3>
<p><strong>Principios:</strong> insercao (registro como condicao), publicidade, continuidade, especialidade, prioridade, legalidade, forca probante.</p>
<p><strong>Atos:</strong> matricula (unica para cada imovel), registro, averbacao. Hipoteca, penhora, usufruto, servidao, promessa de compra e venda.</p>

<h3>Registro de Titulos e Documentos (arts. 127-166)</h3>
<p>Documentos que nao exigem registro imobiliario ou civil. Contratos, convencoes, garantias, credito rural e industrial.</p>

<h3>Escrituras e Testamentos (arts. 215-216 CC)</h3>
<p><strong>Escritura publica:</strong> forma solene, declaracao de vontade perante tabeliao. Elementos essenciais: data, partes, testemunhas, certificacao do tabeliao.</p>
<p><strong>Testamento publico:</strong> escrito pelo tabeliao, lido ao testador na presenca de 2 testemunhas.</p>`
  },
  {
    titulo: "Mediacao e Arbitragem - Selma Ferreira Lemes",
    conteudo: `<h3>Meios de Solucao de Conflitos</h3>
<p><strong>Autotutela:</strong> imposicao pela forca (vedada como regra).</p>
<p><strong>Autocomposicao:</strong> negociacao, mediacao, conciliacao. Com ou sem intervencao de terceiro.</p>
<p><strong>Heterocomposicao:</strong> jurisdicao estatal, arbitragem.</p>

<h3>Mediacao (Lei 13.140/2015)</h3>
<p><strong>Conceito:</strong> tecnica de solucao consensual de conflitos, com participacao de terceiro imparcial (mediador) que facilita o dialogo entre as partes.</p>
<p><strong>Principios:</strong> consensualidade, confidencialidade, autonomia da vontade, oralidade, informalidade, boa-fe, flexibilidade, competencia, imparcialidade, empowerment das partes.</p>
<p><strong>Mediacao judicial:</strong> realizada no ambito do Poder Judiciario (CEJUSC). Mediador inscrito em cadastro do tribunal.</p>
<p><strong>Mediacao extrajudicial:</strong> contratada livremente pelas partes.</p>

<h3>Arbitragem (Lei 9.307/96)</h3>
<p><strong>Conceito:</strong> forma de solucao de conflitos por arbitro(s) escolhido(s) pelas partes, com base em convencao de arbitragem (clausula compromissoria ou compromisso arbitral).</p>
<p><strong>Requisitos:</strong> partes capazes e conflito versando sobre direitos patrimoniais disponiveis (art. 1).</p>
<p><strong>Clausula compromissoria (art. 4):</strong> pacto antecedente ao litigio, indicando que futuras controversias serao resolvidas por arbitragem.</p>
<p><strong>Compromisso arbitral (art. 9):</strong> convencao apos o surgimento do litigio.</p>
<p><strong>Arbitros:</strong> qualquer pessoa capaz e da confianca das partes. Impedimentos e suspeicao (art. 14). Poderes: instrucao, conciliacao, decisao (art. 18).</p>
<p><strong>Processo:</strong> principios do contraditorio, igualdade, imparcialidade, livre convencimento. Prazo para sentenca: 6 meses (art. 23).</p>
<p><strong>Sentenca arbitral (arts. 23-33):</strong> mesmo efeito de sentenca judicial. Titulo executivo judicial (art. 515 III CPC).</p>
<p><strong>Impugnacao:</strong> acao anulatoria (art. 32 Lei 9.307/96): nulidade da sentenca arbitral (incompetencia, nulidade da convencao, prevaricacao, preclusao, ausencia de fundamentacao, ofensa a ordem publica).</p>

<h3>Conciliação (art. 165 CPC, Resolucao CNJ 125/2010)</h3>
<p>Diferenca da mediacao: conciliador propoe solucoes, mediador apenas facilita o dialogo. Ampla utilizacao nos juizados especiais civeis e criminais (Lei 9.099/95).</p>`
  },
  {
    titulo: "Direito do Consumidor - Claudia Lima Marques",
    conteudo: `<h3>Principios do CDC (Lei 8.078/90)</h3>
<p><strong>Vulnerabilidade do consumidor (art. 4 I):</strong> presuncao absoluta. Consumidor e a parte fragil na relacao de consumo.</p>
<p><strong>Boa-fe objetiva (art. 4 III):</strong> dever de lealdade e transparencia nas relacoes de consumo.</p>
<p><strong>Equilibrio nas relacoes:</strong> nulidade de clausulas abusivas.</p>
<p><strong>Hipossuficiencia:</strong> facilita a defesa do consumidor em juizo.</p>

<h3>Relação de Consumo (arts. 2-3 CDC)</h3>
<p><strong>Consumidor (art. 2):</strong> toda pessoa fisica ou juridica que adquire ou utiliza produto ou servico como destinatario final.</p>
<p><strong>Fornecedor (art. 3):</strong> toda pessoa fisica ou juridica que desenvolve atividade de producao, montagem, criacao, construcao, transformacao, importacao, exportacao, distribuicao ou comercializacao de produtos ou prestacao de servicos.</p>
<p><strong>Produto (art. 3 ss 1):</strong> qualquer bem, moveis ou imoveis, material ou imaterial.</p>
<p><strong>Servico (art. 3 ss 2):</strong> qualquer atividade fornecida no mercado de consumo, com excecao das decorrentes de relacoes de carater trabalhista.</p>

<h3>Direitos Basicos (art. 6 CDC)</h3>
<p>Protecao da vida e saude; educacao sobre consumo; informacao adequada; protecao contra publicidade enganosa e abusiva; modificacao de clausulas contratuais desproporcionais; prevencao e reparacao de danos; acesso a justica; facilitação da defesa (inversao do onus da prova); adequada prestacao dos servicos.</p>

<h3>Responsabilidade pelo Fato e Vicio</h3>
<p><strong>Fato do produto/servico (arts. 12-17):</strong> defeito que causa acidente de consumo. Responsabilidade objetiva do fornecedor (art. 12). Prazo decadencial: 5 anos (art. 27).</p>
<p><strong>Vicio do produto/servico (arts. 18-25):</strong> inadequacao, ma qualidade, quantidade diversa. Fornecedor deve sanar em 30 dias. Prazo: 30 dias para reclamacao (servico duravel), imediato (nao duravel). Decaimento: 90 dias (duravel), 30 dias (nao duravel).</p>

<h3>Publicidade (arts. 29-38 CDC)</h3>
<p>Enganosa (falsa informacao), abusiva (discriminacao, violencia, meio ambiente, aproveitamento da deficiencia de julgamento da crianca). Publicidade enganosa por omissao. Oferta vinculante (art. 30). Toda informacao e suficiente e clara. Publicidade comparativa.</p>

<h3>Praticas Abusivas (arts. 39-41)</h3>
<p>Condicionar fornecimento a aquisicao de outro produto (venda casada), recusar atendimento, executar servico sem orcamento, enviar produto sem solicitacao, aproveitar-se da fraqueza do consumidor.</p>

<h3>Protecao Contratual (arts. 46-54)</h3>
<p>Clausulas abusivas (art. 51): nulas de pleno direito. Contratos de adesao. Revisao contratual por onerosidade excessiva. Direito de arrependimento (7 dias fora do estabelecimento).</p>`
  },
  {
    titulo: "Direito Bancario - Arnoldo Wald",
    conteudo: `<h3>Instituicoes Financeiras (Lei 4.595/64)</h3>
<p><strong>Conceito:</strong> pessoas juridicas publicas ou privadas que tenham como atividade principal a intermediacao de recursos financeiros proprios ou de terceiros.</p>
<p><strong>Classificacao:</strong> bancos comerciais, multiplos, de investimento, de desenvolvimento, CEF, cooperativas de credito, sociedades de credito, financiamento e investimento, corretoras, distribuidoras.</p>

<h3>Contratos Bancarios</h3>
<p><strong>Deposito bancario:</strong> contrato pelo qual o cliente entrega quantia ao banco, que a guarda e restitui na forma ajustada. Deposito a vista (conta corrente) e a prazo (CDB, RDB).</p>
<p><strong>Conta corrente:</strong> depositos, saques, transferencias, cheque. Cheque especial (limite de credito).</p>
<p><strong>Emprestimo e financiamento:</strong> mutuo bancario com juros. CDC, credito pessoal, credito consignado, credito imobiliario, credito rural.</p>
<p><strong>Arrendamento mercantil (leasing):</strong> aluguel com opcao de compra ao final. Leasing financeiro, operacional, lease-back.</p>

<h3>Juros e Comissoes</h3>
<p><strong>Limites legais:</strong> Lei de Usura (Decreto 22.626/33) x sistema financeiro (STJ S 382, STF). Juros remuneratorios e moratorios. Capitalizacao de juros. Comissao de permanencia.</p>

<h3>Cheque (Lei 7.357/85)</h3>
<p><strong>Natureza:</strong> ordem de pagamento a vista. Requisitos essenciais e formais. Endosso, aval, cruzamento, cheque administrativo, cheque visado. Prazo de apresentacao: 30 dias (mesma cidade), 60 dias (outra cidade). Prescricao: 6 meses.</p>

<h3>Cartao de Credito</h3>
<p><strong>Natureza:</strong> meio de pagamento eletronico. Relacao juridica: emissor, bandeira, estabelecimento, portador. Anuidade, rotativo, parcelamento, juros. Superendividamento (Lei 14.181/21).</p>

<h3>Responsabilidade Bancaria</h3>
<p><strong>Objetiva (CDC art. 14):</strong> banco responde por falhas na prestacao do servico. Fraudes, golpes, clonagem, saques indevidos.</p>
<p><strong>Inclusao em cadastro de inadimplentes:</strong> comunicacao previa ao consumidor. Responsabilidade por inscricao indevida.</p>
<p><strong>Sigilo bancario (LC 105/2001):</strong> dever de confidencialidade, quebra por ordem judicial, CPI, Receita Federal (casos legais).</p>`
  },
  {
    titulo: "Propriedade Intelectual - Denis Borges Barbosa",
    conteudo: `<h3>Divisao da Propriedade Intelectual</h3>
<p><strong>Direitos autorais (Lei 9.610/98):</strong> obras literarias, artisticas, cientificas, programas de computador.</p>
<p><strong>Propriedade industrial (Lei 9.279/96):</strong> marcas, patentes, desenho industrial, indicacao geografica.</p>
<p><strong>Outros direitos sui generis:</strong> topografia de circuitos integrados (Lei 11.484/07), cultivares (Lei 9.456/97).</p>

<h3>Patentes (Lei 9.279/96 arts. 6-95)</h3>
<p><strong>Requisitos (art. 8):</strong> novidade, atividade inventiva, aplicacao industrial.</p>
<p><strong>Prazo (art. 40):</strong> 20 anos (patente de invencao) e 15 anos (modelo de utilidade).</p>
<p><strong>Nao sao patenteaveis (art. 10 e 18):</strong> descobertas, teorias cientificas, metodos matematicos, seres vivos (exceto transgenicos), obras intelectuais, regras de jogo, tecnicas cirurgicas, materia contraria a moral, substancias obtidas por transformacao nuclear.</p>

<h3>Marcas (Lei 9.279/96 arts. 122-175)</h3>
<p><strong>Tipos:</strong> de produto, servico, coletiva, de certificacao, notoria (art. 126), de alto renome (art. 125).</p>
<p><strong>Registro:</strong> INPI. Prazo: 10 anos, renovavel por periodos iguais e sucessivos (art. 133).</p>
<p><strong>Impedimentos (art. 124):</strong> sinais genericos, necessarios, comuns, oficiais, enganosos, de terceiros, protegidos por registro anterior.</p>

<h3>Desenho Industrial (arts. 95-121)</h3>
<p><strong>Requisitos:</strong> novidade, originalidade, aplicacao industrial.</p>
<p><strong>Prazo:</strong> 10 anos, prorrogavel por 3 periodos de 5 anos (max 25 anos).</p>

<h3>Indicacao Geografica (arts. 176-182)</h3>
<p><strong>Indicacao de procedencia:</strong> nome geografico conhecido como centro de producao.</p>
<p><strong>Denominacao de origem:</strong> qualidades ou caracteristicas do produto se devem ao meio geografico.</p>

<h3>Direitos Autorais (Lei 9.610/98)</h3>
<p><strong>Obra intelectual:</strong> criacoes do espirito expressas por qualquer meio. Direito moral (autor) e patrimonial (exploracao economica).</p>
<p><strong>Prazo:</strong> 70 anos contados de 1 de janeiro do ano subsequente ao falecimento do autor (art. 41).</p>
<p><strong>Software (Lei 9.609/98):</strong> protegido como direito autoral. Prazo: 50 anos.</p>
<p><strong>Liberdades (arts. 46-48):</strong> reproducao privada, citacao, parodia, obras em dominio publico.</p>`
  },
  {
    titulo: "Direito Maritimo e Portuario - Eduardo Sa Pessoa",
    conteudo: `<h3>Fontes e Principios</h3>
<p><strong>Fontes:</strong> Convencoes internacionais (SOLAS, MARPOL, STCW, UNCLOS), Codigo Comercial (arts. 457-796), Lei 2.180/54 (Comando da Marinha), Lei 8.630/93 (Portos atualizada pela Lei 12.815/2013).</p>
<p><strong>Principios:</strong> liberdade dos mares, pavilhao do Estado (jurisdicao sobre o navio), seguranca da navegacao, protecao ao meio ambiente marinho.</p>

<h3>Embarcacoes</h3>
<p><strong>Natureza juridica:</strong> bem moveis (art. 7 Codigo Comercial). Registro: propriedade, hipoteca, transferencia. Nacionalidade (bandeira). Classificacao: mercantes, de guerra, de pesca, de recreio, de apoio.</p>

<h3>Contratos Maritimos</h3>
<p><strong>Frete maritimo:</strong> transporte de carga por mar. Conhecimento de embarque (Bill of Lading).</p>
<p><strong>Afretamento:</strong> por viagem (voyage charter), por tempo (time charter), casco nu (bareboat charter).</p>
<p><strong>Contrato de salvaguarda:</strong> salvamento de pessoas, carga e navio.</p>

<h3>Responsabilidade do Armador</h3>
<p><strong>Objetiva:</strong> por danos a carga, avarias, poluicao. Limitacao de responsabilidade (Convencao de Londres 1976).</p>
<p><strong>Avarias:</strong> comuns/grossas (sacrificio voluntario para salvar navio e carga) e particulares/simples (danos nao compartilhados).</p>

<h3>Seguros Maritimos</h3>
<p>Seguro do casco e maquinas (Hull & Machinery), seguro de responsabilidade civil (P&I Clubs), seguro de carga (cargo insurance).</p>

<h3>Portos (Lei 12.815/2013)</h3>
<p><strong>Organizacao portuaria:</strong> autoridade portuaria, operadores, trabalhadores portuarios (OGMO).</p>
<p><strong>Concessoes e arrendamentos:</strong> exploracao de terminais por iniciativa privada.</p>
<p><strong>Regulacao:</strong> Antaq (Agencia Nacional de Transportes Aquaviarios).</p>`
  },
  {
    titulo: "Direito Aeronautico - Jose Carlos de Magalhaes",
    conteudo: `<h3>Fontes e Principios</h3>
<p><strong>Fontes:</strong> Convencao de Chicago (1944 - OACI), Convencao de Varsovia (1929), Convencao de Montreal (1999), Codigo Brasileiro de Aeronautica (Lei 7.565/86).</p>
<p><strong>Principios:</strong> soberania sobre o espaco aereo (art. 1 Convencao de Chicago), liberdade de voo, seguranca da navegacao aerea.</p>

<h3>Aeronaves</h3>
<p><strong>Natureza juridica:</strong> bem moveis registrados. Classificacao: civil, militar, privada, publica. Nacionalidade: registro aeronautico brasileiro (RAB), matricula (prefixo).</p>

<h3>Contratos de Transporte Aereo</h3>
<p><strong>Passageiro:</strong> contrato de transporte de pessoas e bagagem.</p>
<p><strong>Carga:</strong> conhecimento de transporte aereo (AWB).</p>

<h3>Responsabilidade do Transportador</h3>
<p><strong>Convencao de Montreal (1999):</strong> responsabilidade objetiva do transportador por danos a passageiros.</p>
<p><strong>Danos pessoais:</strong> limite de 100.000 DES (Direitos Especiais de Saque). Danos a bagagem: 1.000 DES. Danos a carga: 17 DES/kg.</p>
<p><strong>Convencao de Varsovia (modificada):</strong> sistema misto de responsabilidade por culpa presumida.</p>

<h3>Infraestrutura Aeronautica</h3>
<p><strong>Orgaos:</strong> Comando da Aeronautica (Decea, Cindacta), ANAC (regulacao), Infraero (aeroportos), SAC (Secretaria de Aviacao Civil).</p>
<p><strong>Aeroportos:</strong> classificacao, concessoes, operacao, tarifas aeroportuarias.</p>
<p><strong>Navegacao aerea:</strong> servicos de trafego aereo, cartas aeronauticas, auxilios a navegacao.</p>`
  },
  {
    titulo: "Direito Militar - Jorge Cesar de Assis",
    conteudo: `<h3>Organizacao das Forcas Armadas (CF arts. 142-144)</h3>
<p><strong>Marinha, Exercito e Aeronautica:</strong> instituicoes nacionais permanentes e regulares, organizadas com base na hierarquia e disciplina (art. 142 caput).</p>
<p><strong>Policias Militares e Corpos de Bombeiros Militares (art. 144 ss 5-6):</strong> forcas auxiliares e reserva do Exercito. Subordinacao aos Governadores de Estado.</p>

<h3>Direitos e Deveres do Militar</h3>
<p><strong>Patente (art. 142 ss 3):</strong> garantida em plenitude. Oficiais so perdem por sentenca transitada em julgado.</p>
<p><strong>Remuneracao:</strong> subsidio, indenizacoes, gratificacoes, adicionais.</p>
<p><strong>Proibicoes:</strong> sindicalizacao e greve (art. 142 ss 3 IV).</p>

<h3>Codigo Penal Militar (Decreto-Lei 1.001/69)</h3>
<p><strong>Crimes militares em tempo de paz:</strong> proprios e improprios. Crimes militares dolosos contra a vida (competencia do Tribunal do Juri, com ressalvas).</p>
<p><strong>Penas:</strong> reclusao, detencao, prisao, suspensao do exercicio do posto, reforma, exclusao das Forcas Armadas.</p>
<p><strong>Extincao da punibilidade:</strong> morte, prescricao, renuncia, perdao, anistia, graca, indulto.</p>

<h3>Codigo de Processo Penal Militar (Decreto-Lei 1.002/69)</h3>
<p><strong>Justica Militar:</strong> STM (Superior Tribunal Militar), Auditorias Militares.</p>
<p><strong>Procedimentos:</strong> inquerito policial militar (IPM), acao penal, recursos.</p>`
  },
  {
    titulo: "Direito Urbanistico - Edesio Fernandes",
    conteudo: `<h3>Estatuto da Cidade (Lei 10.257/2001)</h3>
<p><strong>Natureza:</strong> norma federal de ordem publica e interesse social que regulamenta os arts. 182-183 CF.</p>
<p><strong>Diretrizes (art. 2):</strong> funcao social da cidade e da propriedade, gestao democratica, ordenacao territorial, justa distribuicao dos beneficios e onus da urbanizacao, sustentabilidade ambiental.</p>

<h3>Instrumentos Urbanisticos</h3>
<p><strong>Plano Diretor (arts. 39-42):</strong> instrumento basico da politica de desenvolvimento e expansao urbana. Obrigatorio para cidades com mais de 20 mil habitantes. Conteudo: usos do solo, zoneamento, areas especiais, sistema viario.</p>
<p><strong>Parcelamento do Solo (Lei 6.766/79):</strong> loteamento e desmembramento. Requisitos urbanisticos, infraestrutura, areas publicas. Projetos e aprovacao municipal.</p>
<p><strong>Outorga onerosa do direito de construir (art. 28):</strong> contrapartida pelo aproveitamento de potencial construtivo adicional.</p>
<p><strong>Transferencia do direito de construir (art. 35):</strong> proprietario de imovel em area de preservacao pode transferir potencial construtivo.</p>
<p><strong>Direito de preempcao (arts. 25-27):</strong> preferencia do municipio na aquisicao de imovel urbano.</p>
<p><strong>Consorcio imobiliario (art. 46):</strong> parceria entre proprietario e poder publico.</p>

<h3>Usucapiao Especial Urbana (arts. 183 CF, 9-14 Estatuto)</h3>
<p><strong>Individual (art. 183 CF):</strong> area ate 250m2, posse por 5 anos ininterruptos, sem oposicao, para moradia do posseiro ou familia, nao sendo proprietario de outro imovel.</p>
<p><strong>Coletiva (art. 10 Estatuto):</strong> area urbana com mais de 250m2, possuidores de baixa renda, impossibilidade de identificar terrenos individuais, posse por 5 anos.</p>

<h3>Funcao Social da Propriedade (arts. 5 XXIII, 170 III, 182 ss 2 CF)</h3>
<p>Propriedade urbana so cumpre funcao social quando atende as exigencias do Plano Diretor.</p>
<p><strong>Instrumentos de compulsoriedade (arts. 5-8 Estatuto):</strong> parcelamento ou edificacao compulsorios, IPTU progressivo no tempo, desapropriacao com pagamento em titulos.</p>

<h3>Regularizacao Fundiaria (Lei 13.465/2017, REURB)</h3>
<p>Regularizacao fundiaria urbana (REURB): interesses social (REURB-S) e especifico (REURB-E). Instrumentos: demarcacao urbanistica, legitimacao fundiaria, CRF (Certidao de Regularizacao Fundiaria).</p>`
  },
  {
    titulo: "Criminologia - Antonio Garcia-Pablos de Molina",
    conteudo: `<h3>Conceito e Objeto</h3>
<p><strong>Criminologia:</strong> ciencia empirica e interdisciplinar que estuda o crime, o criminoso, a vitima e o controle social do comportamento delitivo.</p>
<p><strong>Objeto:</strong> delito (fato social), delinquente (pessoa), vitima (sujeito passivo), controle social (reacoes formais e informais ao crime).</p>

<h3>Metodos</h3>
<p>Empiricos: estatisticos, observacao, experimentais, estudos de caso, biograficos, longitudinais, transversais.</p>

<h3>Teorias Criminologicas</h3>
<p><strong>Classica (Beccaria, Bentham):</strong> livre arbítrio, proporcionalidade da pena, contrato social.</p>
<p><strong>Positiva (Lombroso, Ferri, Garofalo):</strong> determinismo biologico, criminoso nato, tipologia criminal.</p>
<p><strong>Sociologicas (Durkheim):</strong> crime como fato social normal. Anomia (Merton), associacao diferencial (Sutherland).</p>
<p><strong>Criticas (Labelling approach):</strong> etiquetamento, reacao social, criminalizacao primaria e secundaria.</p>
<p><strong>Controle social (Hirschi):</strong> vinculos sociais previnem o crime: afeto, compromisso, envolvimento, crenca.</p>

<h3>Prevencao do Crime</h3>
<p><strong>Primaria:</strong> direcionada a causas gerais. Educacao, emprego, habitacao.</p>
<p><strong>Secundaria:</strong> identificacao de areas e grupos de risco. Policiamento comunitario.</p>
<p><strong>Terciaria:</strong> reincidencia. Reinsercao social do condenado.</p>

<h3>Vitimologia</h3>
<p>Vitima: classificacao (Von Hentig: inocente, culpavel, provocadora, voluntaria, agressora). Movimento de reparacao a vitima. Justica restaurativa.</p>

<h3>Penas Alternativas e Justica Restaurativa</h3>
<p>Penas restritivas de direito (Lei 9.714/98): prestacao de servicos, limitacao de fim de semana, multa. Justica restaurativa: dialogo entre vitima, ofensor e comunidade para reparacao do dano.</p>`
  },
  {
    titulo: "Filosofia do Direito - Miguel Reale / Alysson Mascaro",
    conteudo: `<h3>Conceito e Objeto</h3>
<p><strong>Filosofia do Direito:</strong> reflexao critica e radical sobre o fenomeno juridico. Investigacao dos fundamentos, principios e finalidades do direito.</p>

<h3>Teoria Tridimensional do Direito (Miguel Reale)</h3>
<p><strong>Tres dimensoes:</strong> fato (dimensao sociologica), valor (dimensao axiologica), norma (dimensao juridico-formal). Integracao dialetica: fato-valor-norma como momentos inseparaveis.</p>

<h3>Positivismo Juridico (Kelsen, Hart, Bobbio)</h3>
<p><strong>Kelsen (Teoria Pura do Direito):</strong> direito como norma, piramide normativa, norma fundamental hipotetica, validade independente da moral.</p>
<p><strong>Hart (O Conceito de Direito):</strong> regras primarias e secundarias, texto aberto, regra de reconhecimento.</p>
<p><strong>Bobbio:</strong> positivismo como teoria formal, nao valorativa. Direito como conjunto de normas postas pelo poder soberano.</p>

<h3>Jusnaturalismo</h3>
<p><strong>Clássico (Aristoteles, Tomas de Aquino):</strong> direito natural superior ao direito positivo. Principios imutaveis e universais.</p>
<p><strong>Moderno (Grotius, Hobbes, Locke, Rousseau, Kant):</strong> direitos naturais do individuo (vida, liberdade, propriedade), contrato social, razao como fonte.</p>
<p><strong>Contemporaneo (Finnis, Fuller, Alexy):</strong> direito natural procedimental, principios morais como condicao de validade do direito.</p>

<h3>Teoria Critica do Direito</h3>
<p><strong>Marxismo (Pachukanis, Mascaro):</strong> direito como superestrutura, forma juridica vinculada a forma mercadoria. Direito e expressao das relacoes capitalistas.</p>
<p><strong>Escola de Frankfurt (Habermas):</strong> direito como medium entre sistema e mundo da vida. Agir comunicativo, discurso juridico.</p>

<h3>Neoconstitucionalismo e Pos-Positivismo (Alexy, Dworkin)</h3>
<p><strong>Alexy:</strong> teoria dos direitos fundamentais, principio da proporcionalidade (adequacao, necessidade, proporcionalidade em sentido estrito), ponderacao entre principios.</p>
<p><strong>Dworkin:</strong> integridade do direito, juiz Hercules, principios como normas (diferenca entre regras e principios). Resposta correta para casos dificais.</p>`
  }
];
