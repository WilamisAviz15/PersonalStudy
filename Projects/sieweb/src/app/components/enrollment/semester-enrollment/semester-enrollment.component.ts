import { Component, OnInit } from '@angular/core';

interface turmas {
  codigo_turma: string;
  vagas: number;
}

export interface tabelaDisciplinasEletivas {
  codigo: string;
  turmas: turmas[];
  disciplina: string;
}

const ELEMENT_DATA: tabelaDisciplinasEletivas[] = [
  {
    codigo: 'COMP001',
    turmas: [
      { codigo_turma: 'M', vagas: 3 },
      { codigo_turma: 'T', vagas: 5 },
    ],
    disciplina: 'Introdução a Computação',
  },
  {
    codigo: 'COMP002',
    turmas: [{ codigo_turma: 'T', vagas: 10 }],
    disciplina: 'Inglês Instrumental',
  },
  {
    codigo: 'COMP003',
    turmas: [{ codigo_turma: 'M', vagas: 20 }],
    disciplina: 'Cálculo 1',
  },
];

@Component({
  selector: 'app-semester-enrollment',
  templateUrl: './semester-enrollment.component.html',
  styleUrls: ['./semester-enrollment.component.css'],
})
export class SemesterEnrollmentComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'turmas', 'disciplina'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
