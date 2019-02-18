import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;
  genders: any[] = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' }
  ];
  maritalStatuses: any[] = [
    { value: 'Soltero/a', label: 'Soltero/a' },
    { value: 'Casado/a', label: 'Casado/a' },
    { value: 'Divorciado/a', label: 'Divorciado/a' },
    { value: 'Viudo/a', label: 'Viudo/a' }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', Validators.required]
    });
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

}
