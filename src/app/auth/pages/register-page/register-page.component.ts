import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidators } from '../../../shared/validators/email-validators.service';
// import * as customValidators from '../../../shared/validators/validators';

@Component({
  // selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  public myForm:FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    // email:['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)],[new EmailValidator()]],
    email:['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)],[this.emailValidators]],
    username:['', [Validators.required, this.validatorsService.cantBeStrider]],
    password:['', [Validators.required, Validators.minLength(3)]],
    password2:['', [Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidators: EmailValidators,
  ){}

  isValidField( field: string ){
    return this.validatorsService.isValidField(this.myForm, field)
  }

  onSubmit(){
    this.myForm.markAllAsTouched();

  }

}
