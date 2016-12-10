import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  user = {
    username: 'Samiul',
    email: 'samiul@emicrograph.com',
    password: 123456
  };

  myForm:FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'username': new FormControl(this.user.username),
      'email': new FormControl(this.user.email),
      'password': new FormControl()
    });
  }

  ngOnInit() {
  }

  onFormSubmit(){
    console.log(this.myForm);
  }
  onReset(){
    this.myForm.reset();
  }

}
