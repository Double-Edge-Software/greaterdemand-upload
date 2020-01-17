import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs'; 
import { Router } from '@angular/router';

@Component({
  selector: 'passwordless-auth',
  templateUrl: './passwordless-auth.component.html',
  styleUrls: ['./passwordless-auth.component.scss']
})
export class PasswordlessAuthComponent implements OnInit {
  user: Observable<any>;
  email: string;
  emailSent = false;

  errorMessage: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.user = this.afAuth.authState;

    const url = this.router.url;

    this.confirmSignIn(url);
  }


  async sendEmailLink() {
    const actionCodeSettings = { url: 'https://greaterdemand-upload.herokuapp.com/',
    handleCodeInApp:true
  }
    try {
      await this.afAuth.auth.sendSignInLinkToEmail(
        this.email,
        actionCodeSettings
      );
      window.localStorage.setItem('emailForSignIn', this.email);
      this.emailSent = true;
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async confirmSignIn(url) {
    try {
      if (this.afAuth.auth.isSignInWithEmailLink(url)) {
        let email = window.localStorage.getItem('emailForSignIn');
  
        // If missing email, prompt user for it
        if (!email) {
          email = window.prompt('Please provide your email for confirmation');
        }
  
        // Signin user and remove the email localStorage
        const result = await this.afAuth.auth.signInWithEmailLink(email, url);
        window.localStorage.removeItem('emailForSignIn');
      }
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}