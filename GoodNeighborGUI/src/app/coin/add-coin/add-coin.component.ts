import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CoinService} from '../coin.service';

@Component({
  selector: 'app-add-coin',
  templateUrl: './add-coin.component.html',
  styleUrls: ['./add-coin.component.css']
})
export class AddCoinComponent implements OnInit {
  addForm: FormGroup;

  constructor(private coinService: CoinService) {
  }

  ngOnInit(): void {
    this.addForm = this.coinService.getForm();
  }

  onSubmit() {
    this.coinService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.coinService.list();
  }

}
