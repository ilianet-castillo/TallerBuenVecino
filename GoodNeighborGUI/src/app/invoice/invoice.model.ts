import {Type} from '../type/type.model';
import {Contact} from '../contact/contact.model';
import {Activity} from '../activity/activity.model';
import {Employee} from '../employee/employee.model';
import {Client} from '../client/client.model';

export class Invoice {

  id: number;
  date: Date;
  signature: string;
  type: Type;
  contact: Contact;
  activity: Activity;
  employee: Employee;
  client: Client;
}
