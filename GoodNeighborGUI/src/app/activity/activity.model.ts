import {Client} from '../client/client.model';
import {Coin} from '../coin/coin.model';

export class Activity {
  id: number;
  name: string;
  noInvoice: string;
  noReferenceOt: string;
  referenceOt: string;
  date: Date;
  client: Client;
  coin: Coin;


}
