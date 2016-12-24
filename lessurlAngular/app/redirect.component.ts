
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {ReducerService} from './_services/reducer.service'
import {ReducedUrl} from './_models/reducedUrl'




@Component({
  moduleId : module.id,
  selector: 'my-redirect',
  template: `
  <div *ngIf="reducedUrl">
    redirecting {{reducedUrl.shortUrl}} to {{reducedUrl.longUrl}}
  </div>`

  ,
})

export class RedirectComponent implements OnInit{

  shortUrl : string;

  reducedUrl: ReducedUrl;
  ngOnInit():void {

    this.route.params.subscribe(params => this.shortUrl = params['shortUrl'])

    this.reducerService.getLongUrl(this.shortUrl)
      .subscribe(
        reducedUrl => {
          window.location.href= reducedUrl.longUrl;
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      )


  }

  constructor(
    private route : ActivatedRoute,
    private reducerService : ReducerService
  ) {}



}
