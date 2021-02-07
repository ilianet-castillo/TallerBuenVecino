import { Component, OnInit } from '@angular/core';
import {Invoice} from '../invoice.model';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {
  displayedColumns: string[] = ['action', 'date', 'signature'];
  invoices: Invoice[];
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.requestList().toPromise().then(value => {
      this.invoices = (value as Invoice[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.invoiceService.add();
  }

  show(invoice: Invoice): void {
    this.invoiceService.show(invoice);
  }

}
