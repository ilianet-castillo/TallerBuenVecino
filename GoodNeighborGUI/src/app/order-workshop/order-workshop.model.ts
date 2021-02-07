import {Employee} from '../employee/employee.model';

export class OrderWorkshop {
  id: number;
  dateOrder: Date;
  dateEntrance: Date;
  dateExit: Date;
  type: string;
  state: string;
  employee: Employee;
}
