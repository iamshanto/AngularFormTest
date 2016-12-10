import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    username: 'Samiul',
    email: 'samiul@emicrograph.com',
    password: 123456
  };

  onFormSubmit(ngForm){
    console.log(ngForm);
  }
  onReset(ngForm){
    ngForm.reset();
  }
}