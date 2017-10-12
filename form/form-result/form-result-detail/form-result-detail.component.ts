import { FirebaseObjectObservable } from 'angularfire2/database';
import { FormResultService } from './../shared/form-result.service';
import { Form } from './../../form-constructor/shared/form';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-result-detail',
  templateUrl: './form-result-detail.component.html',
  styleUrls: ['./form-result-detail.component.css']
})
export class FormResultDetailComponent implements OnInit  {
  
  @Input() formResult: FirebaseObjectObservable<Form>;


  constructor(private formSvc: FormResultService) {}

  ngOnInit(){}

  deleteResult(key:string){
    this.formSvc.deleteResult(key);
  }
  changeStatus(key:string, newStatus:string){
    this.formSvc.changeStatus(key,{ status: newStatus });
  }
}