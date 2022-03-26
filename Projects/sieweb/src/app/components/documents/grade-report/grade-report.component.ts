import { Component, OnInit } from '@angular/core';

export interface tabelaSemestresFeitos {
  disciplina: string;
  ch: string;
  turma: string;
  ab1: string;
  ab2: string;
  ra?: string;
  pf?: string;
  mf: string;
  faltas: number;
  conceito: string;
}

const ELEMENT_DATA: tabelaSemestresFeitos[] = [
  {
    disciplina: 'ECOM001 - Introdução a Computação',
    ch: '60h',
    turma: 'M',
    ab1: '7,00',
    ab2: '7,00',
    mf: '7,00',
    faltas: 0,
    conceito: 'AP',
  },
  {
    disciplina: 'ECOM002 - Inglês Instrumental',
    ch: '60h',
    turma: 'M',
    ab1: '6,00',
    ab2: '7,00',
    ra: '8,00',
    mf: '7,00',
    faltas: 5,
    conceito: 'AP',
  },
  {
    disciplina: 'ECOM003 - Cálculo 1',
    ch: '60h',
    turma: 'M',
    ab1: '5,00',
    ab2: '5,00',
    ra: '5,00',
    pf: '6,25',
    mf: '5,50',
    faltas: 12,
    conceito: 'AP',
  },
];

@Component({
  selector: 'app-grade-report',
  templateUrl: './grade-report.component.html',
  styleUrls: ['./grade-report.component.css'],
})
export class GradeReportComponent implements OnInit {
  displayedColumns: string[] = [
    'disciplina',
    'ch',
    'turma',
    'ab1',
    'ab2',
    'ra',
    'pf',
    'mf',
    'faltas',
    'conceito',
  ];

  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
