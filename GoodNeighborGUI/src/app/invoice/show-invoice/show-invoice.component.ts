import {Component, OnInit} from '@angular/core';
import {InvoiceModel} from '../invoice.model';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-show-invoice',
  templateUrl: './show-invoice.component.html',
  styleUrls: ['./show-invoice.component.css']
})
export class ShowInvoiceComponent implements OnInit {
  invoice: InvoiceModel;

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.invoiceService.requestGet().toPromise().then(value => {
      this.invoice = value as InvoiceModel;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.invoiceService.edit(this.invoice);
  }

  exportPDF(): void {
    this.invoiceService.getInvoicePDF(this.invoice.id);
  }

  cancel(): void {
    this.invoiceService.list();
  }

}
