import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import {ReducerComponent} from './redirect/reducer.component'
import {RedirectComponent} from './redirect.component'
import { ReducerService }          from './_services/reducer.service';

import { AuthenticationService }          from './_services/authentication.service';
import { UserService }          from './_services/user.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { StatsComponents} from './stats/stats.component';
import { RegisterComponent } from './register/register.component';





import { AppRoutingModule }     from './app-routing.module';




@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule , FormsModule],
  declarations: [ AppComponent, ReducerComponent, RedirectComponent, LoginComponent, StatsComponents, RegisterComponent],
  providers: [AuthGuard, AuthenticationService, ReducerService, UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
