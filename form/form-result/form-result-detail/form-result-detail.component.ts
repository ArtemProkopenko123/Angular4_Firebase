import { FirebaseObjectObservable } from 'angularfire2/database';
import { FormResultService } from './../shared/form-result.service';
import { Form } from './../../form-constructor/shared/form';
import { Component, OnInit, Input } from '@angular/core';

FormResultService
@Component({
  selector: 'form-result-detail',
  templateUrl: './form-result-detail.component.html',
  styleUrls: ['./form-result-detail.component.css']
})
export class FormResultDetailComponent implements OnInit {
  
  @Input() formResult: FirebaseObjectObservable<Form[]>;
  resultVal = Array();
  constructor(private formSvc: FormResultService) { }

  ngOnInit() {
    for(let val in this.formResult){
      this.formResult[val].$key = val;
      this.resultVal.push( this.formResult[val]);  
    };
  }
  deleteResult(formId:string,key:string){
    this.formSvc.deleteResult(formId,key)
  }
}
