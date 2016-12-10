import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from "@angular/forms";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-form-collection',
  templateUrl: './form-collection.component.html',
  styleUrls: ['./form-collection.component.css']
})
export class FormCollectionComponent implements OnInit {

  customerForm:FormGroup;

  constructor(private fb: FormBuilder, private http: Http) {
    this.customerForm = fb.group({
      'name': fb.control('', Validators.required),
      'email': fb.control('', [Validators.required, this.validateEmail], this.asyncEmailValidate.bind(this)),
      'phone': fb.control('', [Validators.minLength(11), Validators.maxLength(11)]),
      'addresses': fb.array([this.createAddressField()])
    });
  }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.customerForm);
  }

  validateEmail(fc: FormControl){
    let EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return EMAIL_REGEXP.test(fc.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }

  addAddress(){
    (<FormArray>this.customerForm.get('addresses')).push(
        this.createAddressField()
    );
  }

  removeAddress(n){
    var controls = <FormArray>this.customerForm.get('addresses');
    controls.removeAt(n);
    console.log(n);
    //controls.removeAt(n);
  }

  createAddressField(){
    return this.fb.group({
      'housreNo': this.fb.control(''),
      'roadNo': this.fb.control(''),
      'area': this.fb.control('')
    })
  }

  emailValidatorSubscribe:Subscription;

  asyncEmailValidate(c: FormControl) {

    /*var promise = new Promise(function(resolve, reject) {
     resolve({'valid': true});
     });

     return promise;*/

    //let _http = this.http;
    /*const promise = new Promise<any>(
     resolve => resolve(null)
     );*/

    /*const promise = new Promise<any>(
     (resolve, reject) => resolve(null);{
     /!*this.emailValidatorSubscribe = this.checkEmail(c.value).subscribe(
     (data) => resolve({'invalid': data.status})
     );*!/
     resolve(null);
     }
     );*/

    return new Promise(function(resolve, reject){
      if (c.value == 'samiul@samiul.com') {
        resolve({'invalid': true});
      }
      resolve(null);
    });
  }

  checkEmail(v){
    let heroesUrl = 'http://localhost/test.php?email='+v;
    return this.http.get(heroesUrl)
        .map((response:Response) => response.json());
  }

  ngOnDestroy(){
    this.emailValidatorSubscribe.unsubscribe();
  }
}