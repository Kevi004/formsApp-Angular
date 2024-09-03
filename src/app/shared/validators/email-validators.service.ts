
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, Validator } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidators implements AsyncValidator {

  constructor() { }
  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({email});

  //   return of({
  //     emailTaken: true
  //   })
  // }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
      console.log({email});
      if(email === 'kebal@gmail.com'){
        subscriber.next({emailTake: true});
        subscriber.complete()
      }
      subscriber.next(null);
      subscriber.complete();

    });
    return httpCallObservable;
  }


}
