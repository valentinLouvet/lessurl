
import { Component, OnInit } from '@angular/core';
import {ReducedUrl} from '../_models/reducedUrl'
import {ReducerService} from '../_services/reducer.service'
import { AuthenticationService } from '../_services/authentication.service';



@Component({
  moduleId : module.id,
  selector: 'my-reducer',
  templateUrl: 'reducer.component.html',
})

export class ReducerComponent implements OnInit{
  constructor(
    private reducerService : ReducerService,
    private authenticationService: AuthenticationService
  ) { }
  private isAuthenticated: string;


  ngOnInit():void {
    this.isAuthenticated = this.authenticationService.token
  }
  reducedUrl: ReducedUrl;

  logout() {
    this.authenticationService.logout();
    this.isAuthenticated = this.authenticationService.token;
  }



  reduce(longUrl: string) : void{
    longUrl = longUrl.trim();
    if(!longUrl) { return;}
    this.reducerService.reduce(longUrl)
      .subscribe(
        ReducedUrl => {this.reducedUrl = ReducedUrl;
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      )


  }

}
