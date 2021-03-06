import { FormConstructorService } from './shared/form-constructor.service';
import { Form, FormInput } from './shared/form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.css']
})

export class FormConstructorComponent implements OnInit {

  form: Form = new Form(); // initialize Form class
  newField = Array(); //for new field
  public success:string;

  constructor(private formSvc: FormConstructorService) {
    this.form.btnSubmitText = "Send";
    this.form.title = "Form title";
    this.form.massageInForm = "Text";
  }
  ngOnInit(){}
  addInput(){
    this.newField.push(new FormInput());
  }
  removeInput(){
    this.newField.splice(-1,1)
  }
  saveForm(){
    if(!this.form.id){
      document.getElementById('idInput').classList.add('error');
    }
    if(!this.form.title){
      document.getElementById('titleInput').classList.add('error');
    }
    if(this.form.id &&this.form.title){
      this.form.inputs = this.newField;
      new Promise((resolve)=> resolve(this.formSvc.saveForm( this.form))).then(()=>{
        this.success = this.form.id;
        this.form = new Form(); 
        this.newField = Array();
        this.form.btnSubmitText = "Send";
        this.form.title = "Form title";
        this.form.massageInForm = "Text";
      })
 
    }
  }
}
