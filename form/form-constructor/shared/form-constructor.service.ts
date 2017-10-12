import { Form } from './form';
import { Injectable } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
@Injectable()
export class FormConstructorService {
  protected basePath: string = '/formsConstuctor/';
  
  constructor(private db: AngularFireDatabase) {}

  saveForm(form:Form)  {
    this.db.list(`${this.basePath}`).set(form.id,form)
      .catch(error => this.handleError(error));
      return true;
  }

   //  error handling 
  private handleError(error) {
    console.log(error)
  }
}



