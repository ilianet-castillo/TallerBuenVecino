import { Component, OnInit } from '@angular/core';
import {Activity} from '../activity.model';
import {ActivityService} from '../activity.service';
import {Employee} from '../../employee/employee.model';

@Component({
  selector: 'app-show-activity',
  templateUrl: './show-activity.component.html',
  styleUrls: ['./show-activity.component.css']
})
export class ShowActivityComponent implements OnInit {
activity: Activity;
  constructor(private activityService: ActivityService) { }

  ngOnInit(): void { this.activityService.requestGet().toPromise().then(value => {
    this.activity = value as Activity;
  }).catch(reason => alert(reason));
  }

  edit(): void {
    this.activityService.edit(this.activity);
  }

  cancel(): void {
    this.activityService.list();
  }

}
