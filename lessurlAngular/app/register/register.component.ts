import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  register() {
    this.loading = true;
    this.authenticationService.register(this.model.username,this.model.email, this.model.password)
      .subscribe(result => {
        if (result.username) {
          // register successful
          this.router.navigate(['/login']);
        }
        else {
          this.loading = false;
          this.error = "there was an error"
        }
      });
  }
}
