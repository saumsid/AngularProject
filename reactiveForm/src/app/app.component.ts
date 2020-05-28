import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';
import { RegistraionService } from "./registraion.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registrationForm:FormGroup;
 
  get name()
  {
    return this.registrationForm.get('name');
  }
  get email()
  {
    return this.registrationForm.get('email');
  }
 
constructor(private fb:FormBuilder,private _registrationservice:RegistraionService){}

ngOnInit(){
  this.registrationForm=this.fb.group({

    name: ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/admin/)]],
    email: [''],
    subscribe:[false],
    password: [''],
  confpassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalcode: ['']
    })

  ,} ,{validator : passwordValidator});


  this.registrationForm.get('subscribe').valueChanges
  .subscribe(checkedValue =>
    {
      const email= this.registrationForm.get('email');
      if(checkedValue){
        email.setValidators(Validators.required)
       }else{
         email.clearValidators();
       }
       email.updateValueAndValidity();
    });

}

  
  //   name: new FormControl('saum'),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confpassword: new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     postalcode : new FormControl('')
  //   })
 


onLoadData()
{
  this.registrationForm.patchValue({
    name: 'ss',
    email: 'ss@g.com',
    password: 'ss',
    confpassword: 'ss'
    
  });
}

onSubmit()
{
  console.log(this.registrationForm.value);
  
  this._registrationservice.register(this.registrationForm.value).subscribe(
    response => console.log('success',response),
    error => console.log('Error',error)
  );
}




}
