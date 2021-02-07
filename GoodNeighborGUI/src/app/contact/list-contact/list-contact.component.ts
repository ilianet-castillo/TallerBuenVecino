import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  displayedColumns: string[] = ['action', 'name', 'phone', 'email'];
  contacts: Contact[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.requestList().toPromise().then(value => {
      this.contacts = (value as Contact[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.contactService.add();
  }

  show(contact: Contact): void {
    this.contactService.show(contact);
  }

}
