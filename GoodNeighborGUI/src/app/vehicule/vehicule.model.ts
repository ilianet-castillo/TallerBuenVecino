import {Client} from '../client/client.model';

export class Vehicule {
  id: number;
  markModel: string;
  sheet: string;
  km: number;
  color: string;
  coment: string;
  client: Client;
}
