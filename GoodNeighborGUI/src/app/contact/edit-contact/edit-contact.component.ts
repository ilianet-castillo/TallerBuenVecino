import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  editForm: FormGroup;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.editForm = this.contactService.getForm();
    this.contactService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.contactService.requestUpdate(this.editForm);
  }

  cancel() {
    this.contactService.show(this.editForm.value);
  }

}
