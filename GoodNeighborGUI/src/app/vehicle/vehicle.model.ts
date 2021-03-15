import {ClientModel} from '../client/client.model';

export class VehicleModel {

  id: number;
  markModel: string;
  sheet: string;
  color: string;
  comments: string;
  client: ClientModel;

}
