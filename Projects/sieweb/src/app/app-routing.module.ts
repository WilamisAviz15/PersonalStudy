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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
