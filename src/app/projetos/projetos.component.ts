import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var $: any;

var PATH = "../assets/img/projetos/";

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjetosComponent implements OnInit {

  constructor() { }
  todosProjetos = [
    {
      folder: 'fe',
      nome: 'Formação empreendedora',
      desc: `Objetiva proporcionar aos alunos do Ensino Médio das escolas públicas, via internet e utilizando a tecnologia Wilivro,
      inclusão digital, qualificação em empreendedorismo e plano de negócio. Os alunos que apresentam os melhores planos
      recebem prêmios e financimanto de microcrédito para a montagem do próprio negócio.`,
      projetos: [{
        src: PATH + "fe/fe-emp-juvenil-ce.png",
        nome: 'JOVEM EMPREENDEDOR PE',
        participantes: 380,
        local: 'Ceará'
      }, {
        src: PATH + "fe/fe-jovem-empreendedor-pe.png",
        nome: 'JOVEM EMPREENDEDOR RN',
        participantes: 380,
        local: 'Pernambuco'
      },
      {
        src: PATH + "fe/fe-jovem-empreendedor-rn.png",
        nome: 'JUVENTUDE EMPREENDEDORA',
        participantes: 380,
        local: 'Rio Grande do Norte'
      },
      {
        src: PATH + "fe/fe-juv-empreendedora-digital.png",
        nome: 'JUVENTUDE EMPREENDEDORA',
        participantes: 380,
        local: 'Pernambuco'
      },
      {
        src: PATH + "fe/fe-juventude-empreendedora-al.png",
        nome: 'JUVENTUDE EMPREENDEDORA',
        participantes: 420,
        local: 'Alagoas'
      }]
    },
    {
      folder: 'fmt',
      nome: 'Formação para o mercado de trabalho',
      desc: `Objetiva proporcionar aos alunos do Ensino Médio das escolas públicas, via internet e utilizando a tecnologia Wilivro,
      inclusão digital, qualificação em empreendedorismo e plano de negócio. Os alunos que apresentam os melhores planos
      recebem prêmios e financimanto de microcrédito para a montagem do próprio negócio.`,
      projetos: [{
        src: PATH + "fmt/fmt-al.png",
        nome: ' FORMAÇÃO PARA O MERCADO DE TRABALHO',
        participantes: 187,
        local: 'Alagoas'
      }, {
        src: PATH + "fmt/fmt-bem-receber.png",
        nome: 'BEM RECEBER',
        participantes: 2750,
        local: 'Pernambuco'
      },
      {
        src: PATH + "fmt/fmt-cepid-ades.png",
        nome: 'CEPID - ADES',
        participantes: 380,
        local: 'Ceará'
      },
      {
        src: PATH + "fmt/fmt-pi.png",
        nome: 'FORMAÇÃO PARA O MERCADO DE TRABALHO',
        participantes: 380,
        local: 'Piauí'
      },
      {
        src: PATH + "fmt/fmt-primeiro-passo.png",
        nome: 'PRIMEIRO PASSO',
        participantes: 420,
        local: 'Ceará'
      },
      {
        src: PATH + "fmt/fmt-renda-mais.png",
        nome: 'RENDA MAIS',
        participantes: 420,
        local: 'Rio Grande do Norte'
      },
      {
        src: PATH + "fmt/fmt-taxista-amigo-pe.png",
        nome: 'TAXISTA AMIGO',
        participantes: 420,
        local: 'Pernambuco'
      },
      {
        src: PATH + "fmt/fmt-telecentros-ce.png",
        nome: 'TELECENTROS',
        participantes: 420,
        local: 'Ceará'
      },
      {
        src: PATH + "fmt/fmt-trab-nota-10.png",
        nome: 'TRABALHADOR NOTA 10',
        participantes: 420,
        local: 'Rio Grande do Norte'
      }]
    },
    {
      folder: 'lg',
      nome: 'Lógica para o ensino médio',
      desc: `Visa treinar e aprimorar a capacidade de pensar dos jobens do Ensino Médio, ampliando o potencial para aprendizagem da Matemática,
      interpretação de texto, competência de tomada de decisão no dia a dia e acesso ao mercado de trabalho. O conteúdo dos
      livros didáticos e cursos on-line, foram desenvolvidos para auxiliar o aluno na obtenção de melhor desempenho na prova
      de ENEM que prioriza na formulação de suas questões o raciocínio lógico. Em complementação ao curso, são disponibilizadas
      Videoaulas contendo as resoluções das questões das provas do ENEM dos anos anteriores, numa visão de lógica.`,
      projetos: [{
        src: PATH + "lg/lg-logitec-al.png",
        nome: 'LOGITEC AL',
        participantes: 380,
        local: 'Alagoas'
      }, {
        src: PATH + "lg/lg-logitec-pi.png",
        nome: 'LOGITEC PI',
        participantes: 380,
        local: 'Piauí'
      }]
    },
    {
      folder: 'ept',
      nome: 'Educação para o trânsito',
      desc: `Devido aos Programas estabelecidos pelo Governo Estadual visando à redução de acidentes envolvendo motocicletas, este DETRAN,
      implatará programa educativos e preventivos que busquem a melhoria e segurança de todos que utilizam esses ceículos,
      assim como promover a segurança daqueles que indiretamente são envolvidos em acidente com motocicletas, prevalecendo
      os ideais da formação cidadã dos jovens e adolescentes, estudantes do ensino médio das escolas públicas do estado,
      futuros motoristas.`,
      projetos: [{
        src: PATH + "ept/ept-mototaxista.png",
        nome: 'MOTOTAXISTA E MOTOFRETISTA',
        participantes: 380,
        local: 'Pernambuco'
      }, {
        src: PATH + "ept/ept-piloto-cidadao.png",
        nome: 'PILOTO CIDADÃO',
        participantes: 380,
        local: 'Piauí'
      }]
    },
    {
      folder: 're',
      nome: 'Reforço escolar',
      desc: `Programas de reforço escolar para atender diferentes públicos e áreas, incluindo alfabetização para jovens e adultos com
      uso da tecnologia e preparação de alunoos do ensino fundamental para a Prova Brasil e outros exames de língua portuguesa
      e matemática.`,
      projetos: [{
        src: PATH + "re/re-alfabetizacao.png",
        nome: 'ALFABETIZAÇÃO EJA',
        participantes: 380,
        local: 'Rio Grande do Norte'
      }, {
        src: PATH + "re/re-estuda-mais.png",
        nome: 'ESTUDA MAIS - CLIC ESTUDE',
        participantes: 380,
        local: 'Alagoas'
      }]
    },
    {
      folder: 'op',
      nome: 'Outros Projetos',
      desc: `Outros projetos que usam ou usaram a tecnologia Wilivro`,
      projetos: [{
        src: PATH + "op/op-alimentacao-saudavel.png",
        nome: 'ALIMENTAÇÃO SAUDÁVEL',
        participantes: 380,
        local: 'Brasil'
      }, {
        src: PATH + "op/op-inclusao-digital.png",
        nome: 'INCLUSÃO DIGITAL',
        participantes: 380,
        local: 'Pernambuco'
      }, {
        src: PATH + "op/op-inclusao-digital-al.png",
        nome: 'INCLUSÃO DIGITAL SEBRAE',
        participantes: 380,
        local: 'Alagoas'
      }, {
        src: PATH + "op/op-olodum.png",
        nome: 'ESCOLA OLODUM',
        participantes: 380,
        local: 'Bahia'
      }, {
        src: PATH + "op/op-projeto-esporte-cidadania.png",
        nome: 'PROJETO ESPORTE CIDADANIA',
        participantes: 380,
        local: 'Brasília'
      }]
    },
  ];
  ngOnInit() {
  }

}
