import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DescriptionService} from '../description.service';
import {Invoice} from '../../invoice/invoice.model';

@Component({
  selector: 'app-add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.css']
})
export class AddDescriptionComponent implements OnInit {
  addForm: FormGroup;
  invoices: Invoice[];

  constructor(private descriptionService: DescriptionService) {
    this.descriptionService.getInvoice().toPromise().then(value => {
      this.invoices = (value as Invoice[]).sort((a, b) => a.date > b.date ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {

    this.addForm = this.descriptionService.getForm();
  }

  onSubmit() {
    this.descriptionService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.descriptionService.list();
  }

}
