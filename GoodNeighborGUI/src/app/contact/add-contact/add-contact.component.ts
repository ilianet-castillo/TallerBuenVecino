import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  addForm: FormGroup;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.addForm = this.contactService.getForm();

  }

  onSubmit() {
    this.contactService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.contactService.list();
  }

}
