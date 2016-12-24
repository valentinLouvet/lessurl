
import {ReducedUrl} from '../_models/reducedUrl'
import { Injectable }    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import { AuthenticationService } from './authentication.service';

import 'rxjs/Rx';



@Injectable()
export class ReducerService{

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8000/reducer/';  // URL to web api



  reduce(longUrl: string) {
    //post the long url and return the code for the short url
    if(this.authenticationService.token){
    //if the user is authenticated, set te JWT token in the header
    this.headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.authenticationService.token });
    }


    return this.http
      .post(this.url, JSON.stringify({longUrl: longUrl}), {headers: this.headers})
      .map(res => res.json())
      .share();
  }

  getLongUrl(shortUrl: string) {
    //give the long url linked to a short url code before redirection
    return this.http
      .get(this.url + shortUrl + "/", {headers: this.headers} )
      .map(res => res.json())
      .share()
  }




}
