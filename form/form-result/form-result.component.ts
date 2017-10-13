import { Form } from './../form-constructor/shared/form';
import { FirebaseListObservable } from 'angularfire2/database';
import { FormResultService } from './shared/form-result.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.css']
})
export class FormResultComponent implements OnInit, OnDestroy  {

  protected formsRes: object[];
  constructor(private formSvc: FormResultService) {}
  ngOnInit() { 
    this.formSvc.getFormsResultsList({orderByChild:'priority',limitToFirst:4}).subscribe(res => this.formsRes = res);
  }

  deleteItems() {
    let conf = confirm("Are you sure ?");
    if (conf){  this.formSvc.deleteAll()}
  }
  loadMore(){
    let length:number = this.formsRes.length + 4;

    this.formSvc.getFormsResultsList({orderByChild:'priority',limitToFirst:length}).subscribe(res=> this.formsRes = res);

  }
  ngOnDestroy(){}
}
////////////////
/*
function Ninja(){
  this.swung = false;
  //same name
  this.swingSword = function(){
    return "AAAAAAA!";
  }
}
//same name
Ninja.prototype.swingSword = function(){
  return "BBBBBBBB!"
}

let ninja = new Ninja();
//console.log(ninja.swingSword())
*/
///////////////////////////////////////
/*
function Ninja(){
  this.swung = false;
  //same name
}
let ninja = new Ninja();
//same name
Ninja.prototype.swingSword = function(){
  return "BBBBBBBB!"
}
console.log(ninja.swingSword())
*/
