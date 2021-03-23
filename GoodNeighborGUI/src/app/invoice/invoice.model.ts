import {TypeModel} from '../type/type.model';
import {ContactModel} from '../contact/contact.model';
import {ClientModel} from '../client/client.model';
import {VehicleModel} from '../vehicle/vehicle.model';
import {EmployeeModel} from '../employee/employee.model';
import {DescriptionModel} from '../description/description.model';

export class InvoiceModel {

  jsonId: number;
  id: number;
  invoiceType: TypeModel;
  contact: ContactModel;
  activityClient: ClientModel;
  activityVehicle: VehicleModel;
  activityReferenceOt: number;
  activityDate: Date;
  descriptions: DescriptionModel[];
  employeeInvoice: EmployeeModel;

}
