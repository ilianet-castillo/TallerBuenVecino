import {Component, OnInit} from '@angular/core';
import {Activity} from '../activity.model';
import {ActivityService} from '../activity.service';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {
  displayedColumns: string[] = ['action', 'name', 'date', 'noInvoice'];
  activitys: Activity[];

  constructor(private activityService: ActivityService) {
  }

  ngOnInit(): void {
    this.activityService.requestList().toPromise().then(value => {
      this.activitys = (value as Activity[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.activityService.add();
  }

  show(activity: Activity): void {
    this.activityService.show(activity);
  }

}
