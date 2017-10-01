import { Form } from './../../form-constructor/shared/form';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class FormCreaterService {

  private basePath: string = '/formsConstuctor/';
  private formsResult: string = '/formsResult';
  form: FirebaseObjectObservable<Form> = null; // single form

  constructor(private db: AngularFireDatabase) {}
  getForm(key: string): FirebaseObjectObservable<Form> {
    const itemPath =  `${this.basePath}/${key}`;
    this.form = this.db.object(itemPath)
    return this.form 
  }
  //Reset inputs
  resetForm(formId: string){
    Array.prototype.slice.call(
      document.getElementById(formId).getElementsByClassName('form-control'))
      .forEach(function (el) {
        el.value = '';
    });
  }
  //Simple validation
  checkForm(form:Form){
    Array.prototype.slice.call(
      document.getElementById(form.id).getElementsByClassName('form-control'))
      .forEach(function (el) {
        if(el.hasAttribute('required')){
          if(!el.value) {
            el.classList.add('error');
          }
        }
    });
    if(document.getElementsByClassName('error').length == 0){
    this.saveForm(form)
    }
  }
  private saveForm(form: Form) {
    //Save result to db
    form.timeStamp = new Date().getTime();
    this.db.list(`${this.formsResult}/${form.$key}`).push(form)
      .catch(error => this.handleError(error));
  //Msg to user
    let myContainer = <HTMLElement> document.getElementById(form.id);
    myContainer.innerHTML = '<div class="text-center"><h4 class="green">Form was sent.<br>Thanks!</h4></div>';
  }
   //  error handling 
   private handleError(error) {
    console.log(error)
  }
}
