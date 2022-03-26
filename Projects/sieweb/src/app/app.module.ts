import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { CommonHistoricComponent } from './components/enrollment/common-historic/common-historic.component';
import { SemesterEnrollmentComponent } from './components/enrollment/semester-enrollment/semester-enrollment.component';
import { MatSelectModule } from '@angular/material/select';
import { TranspalFormComponent } from './components/enrollment/transpal-form/transpal-form.component';
import { GradeReportComponent } from './components/documents/grade-report/grade-report.component';
import { AcademicRecordComponent } from './components/documents/academic-record/academic-record.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    EditProfileComponent,
    PreferencesComponent,
    CurriculumComponent,
    CommonHistoricComponent,
    SemesterEnrollmentComponent,
    TranspalFormComponent,
    GradeReportComponent,
    AcademicRecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
