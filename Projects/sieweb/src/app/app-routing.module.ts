import { AcademicRecordComponent } from './components/documents/academic-record/academic-record.component';
import { GradeReportComponent } from './components/documents/grade-report/grade-report.component';
import { TranspalFormComponent } from './components/enrollment/transpal-form/transpal-form.component';
import { SemesterEnrollmentComponent } from './components/enrollment/semester-enrollment/semester-enrollment.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonHistoricComponent } from './components/enrollment/common-historic/common-historic.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
  },
  {
    path: 'preferencias',
    component: PreferencesComponent,
  },
  {
    path: 'grade-curricular',
    component: CurriculumComponent,
  },
  {
    path: 'matricula/historico-comum',
    component: CommonHistoricComponent,
  },
  {
    path: 'matricula/matricula-semestral',
    component: SemesterEnrollmentComponent,
  },
  {
    path: 'matricula/solicitacao-carteirinha',
    component: TranspalFormComponent,
  },
  {
    path: 'documentos/boletim',
    component: GradeReportComponent,
  },
  {
    path: 'documentos/historico-analitico',
    component: AcademicRecordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
