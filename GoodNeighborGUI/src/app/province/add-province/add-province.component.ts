import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ProvinceService} from '../province.service';

@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.css']
})
export class AddProvinceComponent implements OnInit {

  addForm: FormGroup;

  constructor(private provinceService: ProvinceService) {
  }

  ngOnInit(): void {
    this.addForm = this.provinceService.getForm();
  }

  onSubmit() {
    this.provinceService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.provinceService.list();
  }

}
