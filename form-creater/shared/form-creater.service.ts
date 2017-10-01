import { Form } from './../../form-constructor/shared/form';
import { Injectable } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class FormCreaterService {

  private basePath: string = '/formsConstuctor/';
  form: FirebaseObjectObservable<Form> = null; // single form

  constructor(private db: AngularFireDatabase) {}
  getForm(key: string): FirebaseObjectObservable<Form> {
    const itemPath =  `${this.basePath}/${key}`;
    this.form = this.db.object(itemPath)
    return this.form 
  }

  resetForm(formId: string){
    Array.prototype.slice.call(
      document.getElementById(formId).getElementsByClassName('form-control'))
      .forEach(function (el) {
        el.value = '';
    });
  }
  checkForm(){
    Array.prototype.slice.call(
      document.getElementsByClassName('form-control'))
      .forEach(function (el) {
        if(el.hasAttribute('required')){
          if(!el.value) {
            el.classList.add('error');
          }
        }
    });
    if(document.getElementsByClassName('error').length == 0){
    this.sendForm()
    }
  }
  sendForm(){
      let myContainer = <HTMLElement> document.querySelector(".formWrap");
      myContainer.innerHTML = '<div class="text-center"><h4 class="green">Form was sent.<br>Thanks!</h4></div>';
  }
}
