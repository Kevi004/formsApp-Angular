import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/validators/validators';

@Component({
  // selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  public myForm:FormGroup = this.fb.group({
    name:['', [Validators.required]],
    email:['', [Validators.required]],
    username:['', [Validators.required, cantBeStrider]],
    password:['', [Validators.required, Validators.minLength(3)]],
    password2:['', [Validators.required]],
  })

  constructor(private fb: FormBuilder){}

  isValidField( field: string ){
    // Obtener validacion desde un servicio
  }

  onSubmit(){
    this.myForm.markAllAsTouched();

  }

}
