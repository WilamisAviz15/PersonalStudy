import { Component, OnInit } from '@angular/core';

export interface tabelaDisciplinasEletivas {
  codigo: string;
  disciplina: string;
  ch: string;
}

export interface tabelaDisciplinasObrigatoria {
  periodo: number;
  codigo: string;
  disciplina: string;
  ch: string;
}

export interface tabelaDisciplinasPreRequisitos {
  codigo: string;
  disciplina: string;
  ch: string;
  pre_requisito: string;
}

const ELEMENT_DATA: tabelaDisciplinasEletivas[] = [
  {
    codigo: 'COMP001',
    disciplina: 'Introdução a Computação',
    ch: '60h',
  },
  {
    codigo: 'COMP002',
    disciplina: 'Inglês Instrumental',
    ch: '60h',
  },
  {
    codigo: 'COMP003',
    disciplina: 'Cálculo I',
    ch: '60h',
  },
  {
    codigo: 'COMP004',
    disciplina: 'Geometria Analítica',
    ch: '60h',
  },
];

const ELEMENT_DATA2: tabelaDisciplinasObrigatoria[] = [
  {
    periodo: 1,
    codigo: 'COMP001',
    disciplina: 'Introdução a Computação',
    ch: '60h',
  },
  {
    periodo: 1,
    codigo: 'COMP002',
    disciplina: 'Inglês Instrumental',
    ch: '60h',
  },
  {
    periodo: 1,
    codigo: 'COMP003',
    disciplina: 'Cálculo I',
    ch: '60h',
  },
  {
    periodo: 1,
    codigo: 'COMP004',
    disciplina: 'Geometria Analítica',
    ch: '60h',
  },
];

const ELEMENT_DATA3: tabelaDisciplinasPreRequisitos[] = [
  {
    codigo: 'COMP002',
    disciplina: 'Inglês Instrumental',
    ch: '60h',
    pre_requisito: 'Introdução a Computação',
  },
  {
    codigo: 'COMP003',
    disciplina: 'Cálculo I',
    ch: '60h',
    pre_requisito: 'Introdução a Computação',
  },
  {
    codigo: 'COMP004',
    disciplina: 'Geometria Analítica',
    ch: '60h',
    pre_requisito: 'Introdução a Computação',
  },
];

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'disciplina', 'ch'];
  displayedColumns2: string[] = ['periodo', 'codigo', 'disciplina', 'ch'];
  displayedColumns3: string[] = ['codigo', 'disciplina', 'ch', 'pre_requisito'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
  dataSource3 = ELEMENT_DATA3;
  constructor() {}

  ngOnInit(): void {}
}
