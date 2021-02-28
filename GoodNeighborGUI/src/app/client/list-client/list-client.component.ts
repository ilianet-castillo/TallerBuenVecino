import {Component, OnInit} from '@angular/core';
import {ClientModel} from '../client.model';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  displayedColumns: string[] = ['action', 'enterpriseName', 'phone'];
  clients: ClientModel[];

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.requestList().toPromise().then(value => {
      this.clients = (value as ClientModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.clientService.add();
  }

  show(client: ClientModel): void {
    this.clientService.show(client);
  }

}
