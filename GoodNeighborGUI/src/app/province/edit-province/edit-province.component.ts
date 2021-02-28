import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ProvinceService} from '../province.service';

@Component({
  selector: 'app-edit-province',
  templateUrl: './edit-province.component.html',
  styleUrls: ['./edit-province.component.css']
})
export class EditProvinceComponent implements OnInit {

  editForm: FormGroup;

  constructor(private provinceService: ProvinceService) {
  }

  ngOnInit(): void {
    this.editForm = this.provinceService.getForm();
    this.provinceService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.provinceService.requestUpdate(this.editForm);
  }

  cancel() {
    this.provinceService.show(this.editForm.value);
  }

}
