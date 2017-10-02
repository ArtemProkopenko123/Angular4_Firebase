import { Form } from './../form-constructor/shared/form';
import { FirebaseListObservable } from 'angularfire2/database';
import { FormResultService } from './shared/form-result.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.css']
})
export class FormResultComponent implements OnInit  {

  formsRes: FirebaseListObservable<Form[]>;

  constructor(private formSvc: FormResultService) { }
  ngOnInit() {
    this.formsRes = this.formSvc.getFormsResultsList({limitToLast: 10});
    
  }

  deleteItems() {
    let conf = confirm("Are you sure ?");
    if (conf){  this.formSvc.deleteAll()}
  }
}
