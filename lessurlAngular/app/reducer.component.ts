/**
 * Created by valentinlouvet on 22/12/2016.
 */

import { Component, OnInit } from '@angular/core';
import {ReducedUrl} from './reducedUrl'
import {ReducerService} from './reducer.service'


@Component({
  moduleId : module.id,
  selector: 'my-reducer',
  templateUrl: 'reducer.component.html',
})

export class ReducerComponent implements OnInit{
  constructor( private reducerService : ReducerService) { }

  ngOnInit():void {

  }
  reducedUrl: ReducedUrl;



  reduce(longUrl: string) : void{
    longUrl = longUrl.trim();
    if(!longUrl) { return;}
    this.reducerService.reduce(longUrl)
      .subscribe(
        ReducedUrl => {this.reducedUrl = ReducedUrl;
          this.reducedUrl.shortUrl = this.reducedUrl.shortUrl;
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      )


  }

}
