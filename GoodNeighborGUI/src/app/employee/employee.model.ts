import {Position} from '../position/position.model';
import {Province} from '../province/province.model';

export class Employee {

  id: number;
  name: string;
  phone: number;
  identityNumber: number;
  email: string;
  address: string;
  position: Position;
  province: Province;

}
