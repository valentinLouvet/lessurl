

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReducerComponent} from './redirect/reducer.component';
import {RedirectComponent} from './redirect.component';
import { LoginComponent } from './login/login.component';
import { StatsComponents} from './stats/stats.component'
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
  { path: '',  component: ReducerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'stats', component: StatsComponents},
  { path: 'register', component: RegisterComponent},

  { path: ':shortUrl', component: RedirectComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}
