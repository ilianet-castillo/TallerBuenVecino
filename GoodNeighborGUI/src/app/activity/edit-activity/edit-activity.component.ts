import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Client} from '../../client/client.model';
import {Coin} from '../../coin/coin.model';
import {ActivityService} from '../activity.service';
import {Activity} from '../activity.model';


@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {
  editForm: FormGroup;
  clients: Client[];
  coins: Coin[];

  constructor(private activityService: ActivityService) {
    this.activityService.getClient().toPromise().then(value => {
      this.clients = (value as Client[]).sort((a, b) => a.enterpriseName > b.enterpriseName ? 1 : -1);
    }).catch(reason => alert(reason));

    this.activityService.getCoin().toPromise().then(value => {
      this.coins = (value as Coin[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {
    this.editForm = this.activityService.getForm();
    this.activityService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.activityService.requestUpdate(this.editForm);
  }

  cancel(): void {
    this.activityService.show(this.editForm.value);
  }

  isClientSelect(client: Client): boolean {
    return (this.editForm.value as Activity).client.id === client.id;
  }

  isCoinSelect(coin: Coin): boolean {
    return (this.editForm.value as Activity).coin.id === coin.id;
  }
}
