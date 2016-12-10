import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class AsyncValidatorService {

  constructor(private _http:Http) { }

  checkEmail(v){
    let heroesUrl = 'http://localhost/test.php?email='+v;
    return this._http.get(heroesUrl)
        .map((response:Response) => response.json());
  }

}
