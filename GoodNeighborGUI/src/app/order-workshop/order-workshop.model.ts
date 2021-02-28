import {OrderWorkshopStateModel} from '../order-workshop-state/order-workshop-state.model';
import {OrderWorkshopTypeModel} from '../order-workshop-type/order-workshop-type.model';
import {EmployeeModel} from '../employee/employee.model';

export class OrderWorkshopModel {

  id: number;
  dateOrder: Date;
  dateEntrance: Date;
  dateExit: Date;
  orderWorkshopState: OrderWorkshopStateModel;
  orderWorkshopType: OrderWorkshopTypeModel;
  employee: EmployeeModel;

}
