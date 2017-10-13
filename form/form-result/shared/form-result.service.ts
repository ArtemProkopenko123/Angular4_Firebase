import { Form } from './../../form-constructor/shared/form';
import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FormResultService {

  protected basePath: string = '/formsResult';
  
  formsRes: FirebaseListObservable<Form[]> = null; // list of objects

  constructor(private db: AngularFireDatabase) {}

  getFormsResultsList(query={}): FirebaseListObservable<Form[]> {
    this.formsRes = this.db.list(this.basePath, {
      query: query
    })
    return this.formsRes
  }
  changeStatus(key:string, newStatus:any){
    this.formsRes.update(key, newStatus)
  }
   // Deletes a single item
  deleteResult(key: string): void {
    this.formsRes.remove(key)
        .catch(error => this.handleError(error))
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
