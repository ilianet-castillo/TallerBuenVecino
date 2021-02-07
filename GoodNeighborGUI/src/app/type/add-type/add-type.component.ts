import {Component, OnInit} from '@angular/core';
import {TypeService} from '../type.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

  addForm: FormGroup;

  constructor(private typeService: TypeService) {
  }

  ngOnInit(): void {
    this.addForm = this.typeService.getForm();
  }

  onSubmit() {
    this.typeService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.typeService.list();
  }

}
