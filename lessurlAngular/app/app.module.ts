import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ReducerComponent} from './reducer.component'
import {RedirectComponent} from './redirect.component'
import { ReducerService }          from './reducer.service';



import { HttpModule }    from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';




@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, ReducerComponent, RedirectComponent],
  providers: [ReducerService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
