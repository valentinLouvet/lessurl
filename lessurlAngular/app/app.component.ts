import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<!-- main app container -->
<h1>{{name}}</h1>
<div class="jumbotron">
    <div class="container">
        <div class="col-sm-8 col-sm-offset-2">
            <router-outlet></router-outlet>
        </div>
    </div>
</div>
   
`,
})
export class AppComponent  {
  name = 'Lessurl';
}
