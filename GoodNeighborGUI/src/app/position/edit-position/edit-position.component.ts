import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {PositionService} from '../position.service';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent implements OnInit {

  editForm: FormGroup;

  constructor(private positionService: PositionService) {
  }

  ngOnInit(): void {
    this.editForm = this.positionService.getForm();
    this.positionService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.positionService.requestUpdate(this.editForm);
  }

  cancel() {
    this.positionService.show(this.editForm.value);
  }

}
