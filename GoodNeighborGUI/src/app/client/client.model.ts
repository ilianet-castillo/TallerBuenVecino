import {VehicleModel} from '../vehicle/vehicle.model';

export class ClientModel {

  jsonId: number;
  id: number;
  enterpriseName: string;
  address: string;
  phone: number;
  comment: string;
  vehicles: VehicleModel[];

}
