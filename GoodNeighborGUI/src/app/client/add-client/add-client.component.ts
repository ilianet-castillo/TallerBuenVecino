import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  addForm: FormGroup;

  constructor(private clientService: ClientService) {
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
