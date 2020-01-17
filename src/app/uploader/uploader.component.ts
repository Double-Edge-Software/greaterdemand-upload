import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})



export class UploaderComponent {


  isHovering: boolean;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    taxYear: new FormControl(''),
  });
  files: File[] = [];

  onSubmit(){
    window.localStorage.setItem("customerName",`${this.profileForm.value.firstName} ${this.profileForm.value.lastName}`);
    window.localStorage.setItem("taxYear",`${this.profileForm.value.taxYear}`);
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }


}
