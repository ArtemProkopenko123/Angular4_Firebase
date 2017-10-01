import { Form } from './../../form-constructor/shared/form';
import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FormResultService {

  private basePath: string = '/formsResult';
  
  formsRes: FirebaseListObservable<Form[]> = null; // list of objects
  formRes: FirebaseObjectObservable<Form> = null; // single object
    
  constructor(private db: AngularFireDatabase) {}

  getFormsResultsList(query={}): FirebaseListObservable<Form[]> {
    this.formsRes = this.db.list(this.basePath, {
      query: query
    });
    return this.formsRes
  }
  // Deletes the entire list of items
  deleteAll(): void {
    this.formsRes.remove()
        .catch(error => this.handleError(error))
  }
  //  error handling 
  private handleError(error) {
    console.log(error)
  }
}
