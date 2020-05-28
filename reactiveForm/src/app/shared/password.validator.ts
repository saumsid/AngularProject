import { AbstractControl } from "@angular/forms";
import { Key } from 'protractor';

export function passwordValidator(control : AbstractControl): {[Key :string]:boolean} | null
{
    const password = control.get('password');
    const confpassword = control.get('confpassword');
    return password && confpassword && password.value !== confpassword.value ?
    { 'misMatch' : true} : 
    null;
}