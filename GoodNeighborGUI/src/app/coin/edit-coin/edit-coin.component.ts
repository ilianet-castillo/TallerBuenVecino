import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CoinService} from '../coin.service';

@Component({
  selector: 'app-edit-coin',
  templateUrl: './edit-coin.component.html',
  styleUrls: ['./edit-coin.component.css']
})
export class EditCoinComponent implements OnInit {
  editForm: FormGroup;

  constructor(private coinService: CoinService) {
  }

  ngOnInit(): void {
    this.editForm = this.coinService.getForm();
    this.coinService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.coinService.requestUpdate(this.editForm);
  }

  cancel() {
    this.coinService.show(this.editForm.value);
  }


}
