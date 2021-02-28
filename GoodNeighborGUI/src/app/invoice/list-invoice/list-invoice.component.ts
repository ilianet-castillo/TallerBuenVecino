import {Component, OnInit} from '@angular/core';
import {InvoiceModel} from '../invoice.model';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {

  displayedColumns: string[] = ['action', 'date', 'type'];
  invoices: InvoiceModel[];

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.invoiceService.requestList().toPromise().then(value => {
      this.invoices = (value as InvoiceModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.invoiceService.add();
  }

  show(invoice: InvoiceModel): void {
    this.invoiceService.show(invoice);
  }

}
