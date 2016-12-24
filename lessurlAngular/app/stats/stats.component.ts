
import {Component, OnInit} from '@angular/core';
import {ReducedUrl} from '../_models/reducedUrl'
import {UserService} from '../_services/user.service'


@Component({
  moduleId : module.id,
  selector: 'my-stats',
  templateUrl: 'stats.component.html',
})

export class StatsComponents implements OnInit{

  reducedUrls: ReducedUrl[];
  constructor(private userService: UserService) {}


  ngOnInit():void {
    this.userService.getUsersStats()
      .subscribe(
      ReducedUrls => {this.reducedUrls = ReducedUrls;
      },
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    )
  }


}
