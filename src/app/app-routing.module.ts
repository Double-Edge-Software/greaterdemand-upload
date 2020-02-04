import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordlessAuthComponent } from './passwordless-auth/passwordless-auth.component';
import { UploaderComponent } from './uploader/uploader.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { IntakeFormComponent } from './intake-form/intake-form.component';

const routes: Routes = [
  {
    path:'',component:PasswordlessAuthComponent
  },
  {
    path:'upload', component: UploaderComponent
  },
  {
    path:'business', component: BusinessFormComponent
  },
  {
    path:'personal',component:PersonalFormComponent
  },
  {
    path: 'intake', component: IntakeFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
