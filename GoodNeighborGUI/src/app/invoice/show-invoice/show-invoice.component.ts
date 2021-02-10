import {Component, OnInit} from '@angular/core';
import {Invoice} from '../invoice.model';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-show-invoice',
  templateUrl: './show-invoice.component.html',
  styleUrls: ['./show-invoice.component.css']
})
export class ShowInvoiceComponent implements OnInit {
  invoice: Invoice;

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.invoiceService.requestGet().toPromise().then(value => {
      this.invoice = value as Invoice;
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
