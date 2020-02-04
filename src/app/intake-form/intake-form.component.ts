import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-intake-form',
  templateUrl: './intake-form.component.html',
  styleUrls: ['./intake-form.component.scss']
})
export class IntakeFormComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    taxYear: new FormControl(''),
  });
  constructor(private router: Router) { }


  onSubmit(form: NgForm){
    window.localStorage.setItem("customerName",`${this.profileForm.value.firstName} ${this.profileForm.value.lastName}`);
    window.localStorage.setItem("taxYear",`${this.profileForm.value.taxYear}`);
    alert("Your information has been saved.Please upload your file to complete the process below.")
    form.form.markAsPristine();
    form.resetForm();
    this.router.navigate(['/upload'])
  }

  ngOnInit() {
  }

}
