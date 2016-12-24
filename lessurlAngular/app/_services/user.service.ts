/**
 * Created by valentinlouvet on 23/12/2016.
 */

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './authentication.service';
import { User } from '../_models/user';
import {ReducedUrl} from "../_models/reducedUrl";


@Injectable()
export class UserService{
  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getUsersStats(): Observable<ReducedUrl[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'JWT ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get user's stats from api
    return this.http.get('http://localhost:8000/stats/', options)
      .map((response: Response) => response.json());
  }
}
