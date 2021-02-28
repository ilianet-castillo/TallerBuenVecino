import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  editForm: FormGroup;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.editForm = this.clientService.getForm();
    this.clientService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.clientService.requestUpdate(this.editForm);
  }

  cancel(): void {
    this.clientService.show(this.editForm.value);
  }

}
