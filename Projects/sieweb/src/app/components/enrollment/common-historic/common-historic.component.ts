import { Component, OnInit } from '@angular/core';

export interface tabelaHistoricoComum {
  ano: number;
  periodo: string;
  codigo: string;
  turma: string;
  disciplina: string;
  ch: string;
  tipo_matricula: string;
  media_final: string;
  conceito: string;
  plano_curso?: string;
}

const ELEMENT_DATA: tabelaHistoricoComum[] = [
  {
    ano: 2021,
    periodo: '2º semestre',
    codigo: 'COMP001',
    turma: 'M',
    disciplina: 'Introdução a Computação',
    ch: '60h',
    tipo_matricula: 'Regular',
    media_final: '7,45',
    conceito: 'Aprovado',
  },
];

@Component({
  selector: 'app-common-historic',
  templateUrl: './common-historic.component.html',
  styleUrls: ['./common-historic.component.css'],
})
export class CommonHistoricComponent implements OnInit {
  displayedColumns: string[] = [
    'ano',
    'periodo',
    'codigo',
    'turma',
    'disciplina',
    'ch',
    'tipo_matricula',
    'media_final',
    'conceito',
    'plano_curso',
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
