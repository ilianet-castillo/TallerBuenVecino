import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TypeService} from '../type.service';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})
export class EditTypeComponent implements OnInit {
  editForm: FormGroup;

  constructor(private typeService: TypeService) {
  }

  ngOnInit(): void {
    this.editForm = this.typeService.getForm();
    this.typeService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.typeService.requestUpdate(this.editForm);
  }

  cancel() {
    this.typeService.show(this.editForm.value);
  }

}
