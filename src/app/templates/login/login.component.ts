import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  state: string = 'first-access';
  view: string = 'preview';
  form: FormGroup;
  lastUser: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  forgotUser() {
    
  }
  submit() {
    this.validateAllFormFields(this.form);
    if (this.form.valid) {

    } else {
      //TODO go to first invalid field
    }
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  setView(view) {
    this.view = view;
  }
  setState(state) {
    this.state = state;
    switch(state) {
      case 'first-access':
        this.lastUser = null;
        break;
      case 'remembered-user':
        this.lastUser = {username: 'John Doe'};
        break;
    }
  }
}
