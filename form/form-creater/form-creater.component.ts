import { Component, Input,OnInit } from '@angular/core';
import { Form } from './../form-constructor/shared/form';
import { FormCreaterService } from './shared/form-creater.service';
@Component({
  selector: 'form-creater',
  templateUrl: './form-creater.component.html',
  styleUrls: ['./form-creater.component.css']
})

export class FormCreaterComponent  implements OnInit {

  @Input() formId : string; 

  formValue: Form = new Form;
  
  constructor(private formSvc: FormCreaterService ) {}

  ngOnInit(){
    this.formSvc.getForm(this.formId).subscribe(
      res => {if(res.id){ this.formValue = res} else { console.error("Can not find form by this ID")}}
    );
  }
  resetForm(){
    this.formSvc.resetForm(this.formValue.id);
  }
  focusFunction(event){
     event.target.classList.remove('error');
  }
  checkForm(){
    this.formSvc.checkForm(this.formValue);
  }
}
