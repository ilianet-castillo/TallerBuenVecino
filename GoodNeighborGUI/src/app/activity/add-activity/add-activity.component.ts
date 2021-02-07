import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Client} from '../../client/client.model';
import {Coin} from '../../coin/coin.model';
import {ActivityService} from '../activity.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {

  addForm: FormGroup;
  clients: Client[];
  coins: Coin[];

  constructor(private activityService: ActivityService) {
    this.activityService.getClient().toPromise().then(value => {
      this.clients = (value as Client[]).sort((a, b) => a.enterpriseName > b.enterpriseName ? 1 : -1);

      console.log(this.clients);
    }).catch(reason => alert(reason));

    this.activityService.getCoin().toPromise().then(value => {
      this.coins = (value as Coin[]).sort((a, b) => a.name > b.name ? 1 : -1);
      console.log(this.coins);
    }).catch(reason => alert(reason));
  }


  ngOnInit(): void {
    this.addForm = this.activityService.getForm();
  }

  onSubmit() {
    this.activityService.requestAdd(this.addForm);
  }

  getDate(): Date {
    return this.activityService.getDate();
  }

  cancel(): void {
    this.activityService.list();
  }


}
