import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Position} from '../../position/position.model';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  addForm: FormGroup;
  positions: Position[];

  constructor(private clientService: ClientService) {
    this.clientService.getPosition().toPromise().then(value => {
      this.positions = (value as Position[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));

  }

  ngOnInit(): void {
    this.addForm = this.clientService.getForm();
  }

  onSubmit() {
    this.clientService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.clientService.list();
  }

}
