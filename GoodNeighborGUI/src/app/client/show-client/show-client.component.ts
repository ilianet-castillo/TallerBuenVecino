import { Component, OnInit } from '@angular/core';
import {Client} from '../client.model';
import {ClientService} from '../client.service';
import {Employee} from '../../employee/employee.model';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit {
client: Client;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void { this.clientService.requestGet().toPromise().then(value => {
    this.client = value as Client;
  }).catch(reason => alert(reason));
  }

  edit(): void {
    this.clientService.edit(this.client);
  }

  cancel(): void {
    this.clientService.list();
  }

}
