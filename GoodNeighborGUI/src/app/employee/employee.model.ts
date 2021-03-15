import {PositionModel} from '../position/position.model';
import {OrderWorkshopModel} from '../order-workshop/order-workshop.model';

export class EmployeeModel {

  jsonId: number;
  id: number;
  name: string;
  phone: number;
  identityNumber: number;
  email: string;
  address: string;
  position: PositionModel;
  orderWorkshops: OrderWorkshopModel[];

}
