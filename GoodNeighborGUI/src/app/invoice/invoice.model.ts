import {TypeModel} from '../type/type.model';
import {ContactModel} from '../contact/contact.model';
import {ClientModel} from '../client/client.model';
import {VehicleModel} from '../vehicle/vehicle.model';
import {CoinModel} from '../coin/coin.model';
import {EmployeeModel} from '../employee/employee.model';
import {DescriptionModel} from '../description/description.model';

export class InvoiceModel {

  jsonId: number;
  id: number;
  invoiceType: TypeModel;
  contact: ContactModel;
  activityName: string;
  activityClient: ClientModel;
  activityVehicle: VehicleModel;
  activityNuInvoice: number;
  activityReferenceOt: number;
  activityNuReferenceOt: number;
  activityDate: Date;
  activityCoin: CoinModel;
  descriptions: DescriptionModel[];
  employeeInvoice: EmployeeModel;
  employeeReceive: EmployeeModel;
  date: Date;

}
