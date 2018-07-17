import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var $: any;

var PATH = "assets/img/projetos/";

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjetosComponent implements OnInit {

  constructor() { }
  projetos = {
    formacaoEmpreendedora: [{
      src: PATH + "formacaoEmpreendedora/jovem-emp.png",
      projeto: 'JOVEM EMPREENDEDOR PE',
      participantes: 380,
      local: 'Pernambuco'
    }, {
      src: PATH + "formacaoEmpreendedora/jovem-emp.png",
      projeto: 'JOVEM EMPREENDEDOR RN',
      participantes: 380,
      local: 'Pernambuco'
    }, {
      src: PATH + "formacaoEmpreendedora/jovem-emp.png",
      projeto: 'JUVENTUDE EMPREENDEDORA',
      participantes: 380,
      local: 'Pernambuco'
    },],
  };
  ngOnInit() {
  }

}
