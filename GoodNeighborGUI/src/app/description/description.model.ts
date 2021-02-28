import {InvoiceModel} from '../invoice/invoice.model';

export class DescriptionModel {

  id: number;
  workDescription: string;
  amount: number;
  invoice: InvoiceModel;

}
