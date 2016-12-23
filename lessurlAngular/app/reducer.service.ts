/**
 * Created by valentinlouvet on 22/12/2016.
 */
import {ReducedUrl} from './reducedUrl'
import { Injectable }    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/Rx';



@Injectable()
export class ReducerService{

  constructor(private http: Http) { }
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8000/reducer/';  // URL to web api


  getReducedUrl() {
    return this.http.get(this.url)
      .map(response => response.json())
  }


  reduce(longUrl: string) {
    return this.http
      .post(this.url, JSON.stringify({longUrl: longUrl}), {headers: this.headers})
      .map(res => res.json())
      .share();
  }

  getLongUrl(shortUrl: string) {
    return this.http
      .get(this.url + shortUrl + "/", {headers: this.headers} )
      .map(res => res.json())
      .share()
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




}
