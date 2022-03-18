import { Component, OnInit } from '@angular/core';

export interface tabelaTurmaMatriculada {
  turma: string;
  disciplina: string;
  tipo_matricula: string;
  conceito: string;
  plano_curso?: string;
}

const ELEMENT_DATA: tabelaTurmaMatriculada[] = [
  {
    turma: 'COMP001',
    disciplina: 'Introdução a Computação',
    tipo_matricula: 'Regular',
    conceito: 'Matriculado',
  },
  {
    turma: 'COMP002',
    disciplina: 'Inglês Instrumental',
    tipo_matricula: 'Regular',
    conceito: 'Matriculado',
  },
  {
    turma: 'COMP003',
    disciplina: 'Cálculo I',
    tipo_matricula: 'Regular',
    conceito: 'Matriculado',
  },
  {
    turma: 'COMP004',
    disciplina: 'Geometria Analítica',
    tipo_matricula: 'Regular',
    conceito: 'Matriculado',
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string = 'Wilamis Micael de Araujo Aviz';
  displayedColumns: string[] = [
    'turma',
    'disciplina',
    'tipo_matricula',
    'conceito',
    'plano_curso',
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
