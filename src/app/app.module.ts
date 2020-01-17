import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Instructions ---->
// Replace configPlaceholder with your firebase credentials
import { environment } from '../environments/environment';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { PasswordlessAuthComponent } from './passwordless-auth/passwordless-auth.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { BusinessFormComponent } from './business-form/business-form.component';

@NgModule({
  declarations: [AppComponent, DropzoneDirective, UploaderComponent, UploadTaskComponent, PasswordlessAuthComponent, PersonalFormComponent, BusinessFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {}
