import { Form, FormInput } from './shared/form';
import { Component } from '@angular/core';

@Component({
  selector: 'form-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.css']
})

export class FormConstructorComponent {

  form: Form = new Form(); // initialize Form class
  newField= Array(); //for new field
  private count:number = 0; //count of filds

  constructor() {}

  addInput(){
    this.newField.push({
      count: this.count,
      propNewField: new FormInput(), 
    });
    this.form.inputs.push(this.newField);
    this.count++;
  }
}
