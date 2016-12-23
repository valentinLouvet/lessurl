/**
 * Created by valentinlouvet on 22/12/2016.
 */


import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReducerComponent} from './reducer.component'
import {RedirectComponent} from './redirect.component'

const routes: Routes = [
  { path: '',  component: ReducerComponent },
  { path: ':shortUrl', component: RedirectComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}
