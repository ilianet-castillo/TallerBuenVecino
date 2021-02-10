import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {PositionService} from '../position.service';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})
export class AddPositionComponent implements OnInit {
  addForm: FormGroup;

  constructor(private positionService: PositionService) {
  }

  ngOnInit(): void {
    this.addForm = this.positionService.getForm();
  }

  onSubmit() {
    this.positionService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.positionService.list();
  }

}
