import {Invoice} from '../invoice/invoice.model';

export class Description {

  id: number;
  no: number;
  workDescription: string;
  amount: number;
  invoice: Invoice;
}
