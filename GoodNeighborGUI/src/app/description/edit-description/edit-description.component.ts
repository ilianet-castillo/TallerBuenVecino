import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InvoiceModel} from '../../invoice/invoice.model';
import {DescriptionService} from '../description.service';
import {DescriptionModel} from '../description.model';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.css']
})
export class EditDescriptionComponent implements OnInit {

  editForm: FormGroup;
  invoices: InvoiceModel[];

  constructor(private descriptionService: DescriptionService) {
    this.descriptionService.getInvoice().toPromise().then(value => {
      this.invoices = (value as InvoiceModel[]).sort((a, b) => a.activityDate > b.activityDate ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {
    this.editForm = this.descriptionService.getForm();
    this.descriptionService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.descriptionService.requestUpdate(this.editForm);
  }

  cancel(): void {
    this.descriptionService.show(this.editForm.value);
  }

  isInvoiceSelect(invoice: InvoiceModel): boolean {
    return (this.editForm.value as DescriptionModel).invoice.id === invoice.id;
  }

}
