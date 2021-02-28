import {Component, OnInit} from '@angular/core';
import {ContactModel} from '../contact.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {

  contact: ContactModel;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.requestGet().toPromise().then(value => {
      this.contact = value as ContactModel;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.contactService.edit(this.contact);
  }

  cancel(): void {
    this.contactService.list();
  }

}
