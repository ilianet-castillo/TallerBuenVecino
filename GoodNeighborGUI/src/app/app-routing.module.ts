import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListContactComponent} from './contact/list-contact/list-contact.component';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {ShowContactComponent} from './contact/show-contact/show-contact.component';
import {EditContactComponent} from './contact/edit-contact/edit-contact.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {AddEmployeeComponent} from './employee/add-employee/add-employee.component';
import {ListTypeComponent} from './type/list-type/list-type.component';
import {AddTypeComponent} from './type/add-type/add-type.component';
import {ShowTypeComponent} from './type/show-type/show-type.component';
import {EditTypeComponent} from './type/edit-type/edit-type.component';
import {ListPositionComponent} from './position/list-position/list-position.component';
import {AddPositionComponent} from './position/add-position/add-position.component';
import {ShowPositionComponent} from './position/show-position/show-position.component';
import {EditPositionComponent} from './position/edit-position/edit-position.component';
import {ShowEmployeeComponent} from './employee/show-employee/show-employee.component';
import {EditEmployeeComponent} from './employee/edit-employee/edit-employee.component';
import {ListClientComponent} from './client/list-client/list-client.component';
import {AddClientComponent} from './client/add-client/add-client.component';
import {ShowClientComponent} from './client/show-client/show-client.component';
import {EditClientComponent} from './client/edit-client/edit-client.component';
import {ListInvoiceComponent} from './invoice/list-invoice/list-invoice.component';
import {AddInvoiceComponent} from './invoice/add-invoice/add-invoice.component';
import {ShowInvoiceComponent} from './invoice/show-invoice/show-invoice.component';
import {EditInvoiceComponent} from './invoice/edit-invoice/edit-invoice.component';
import {ListDescriptionComponent} from './description/list-description/list-description.component';
import {AddDescriptionComponent} from './description/add-description/add-description.component';
import {ShowDescriptionComponent} from './description/show-description/show-description.component';
import {EditDescriptionComponent} from './description/edit-description/edit-description.component';
import {ListVehicleComponent} from './vehicle/list-vehicle/list-vehicle.component';
import {AddVehicleComponent} from './vehicle/add-vehicle/add-vehicle.component';
import {ShowVehicleComponent} from './vehicle/show-vehicle/show-vehicle.component';
import {EditVehicleComponent} from './vehicle/edit-vehicle/edit-vehicle.component';
import {ListOrderWorkshopComponent} from './order-workshop/list-order-workshop/list-order-workshop.component';
import {AddOrderWorkshopComponent} from './order-workshop/add-order-workshop/add-order-workshop.component';
import {ShowOrderWorkshopComponent} from './order-workshop/show-order-workshop/show-order-workshop.component';
import {EditOrderWorkshopComponent} from './order-workshop/edit-order-workshop/edit-order-workshop.component';
import {ListOrderWorkshopStateComponent} from './order-workshop-state/list-order-workshop-state/list-order-workshop-state.component';
import {AddOrderWorkshopStateComponent} from './order-workshop-state/add-order-workshop-state/add-order-workshop-state.component';
import {ShowOrderWorkshopStateComponent} from './order-workshop-state/show-order-workshop-state/show-order-workshop-state.component';
import {EditOrderWorkshopStateComponent} from './order-workshop-state/edit-order-workshop-state/edit-order-workshop-state.component';
import {EditOrderWorkshopTypeComponent} from './order-workshop-type/edit-order-workshop-type/edit-order-workshop-type.component';
import {ListOrderWorkshopTypeComponent} from './order-workshop-type/list-order-workshop-type/list-order-workshop-type.component';
import {AddOrderWorkshopTypeComponent} from './order-workshop-type/add-order-workshop-type/add-order-workshop-type.component';
import {ShowOrderWorkshopTypeComponent} from './order-workshop-type/show-order-workshop-type/show-order-workshop-type.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list-contact', component: ListContactComponent},
  {path: 'add-contact', component: AddContactComponent},
  {path: 'show-contact', component: ShowContactComponent},
  {path: 'edit-contact', component: EditContactComponent},
  {path: 'list-employee', component: ListEmployeeComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'show-employee', component: ShowEmployeeComponent},
  {path: 'edit-employee', component: EditEmployeeComponent},
  {path: 'list-type', component: ListTypeComponent},
  {path: 'add-type', component: AddTypeComponent},
  {path: 'show-type', component: ShowTypeComponent},
  {path: 'edit-type', component: EditTypeComponent},
  {path: 'list-position', component: ListPositionComponent},
  {path: 'add-position', component: AddPositionComponent},
  {path: 'show-position', component: ShowPositionComponent},
  {path: 'edit-position', component: EditPositionComponent},
  {path: 'list-client', component: ListClientComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'show-client', component: ShowClientComponent},
  {path: 'edit-client', component: EditClientComponent},
  {path: 'list-invoice', component: ListInvoiceComponent},
  {path: 'add-invoice', component: AddInvoiceComponent},
  {path: 'show-invoice', component: ShowInvoiceComponent},
  {path: 'edit-invoice', component: EditInvoiceComponent},
  {path: 'list-description', component: ListDescriptionComponent},
  {path: 'add-description', component: AddDescriptionComponent},
  {path: 'show-description', component: ShowDescriptionComponent},
  {path: 'edit-description', component: EditDescriptionComponent},
  {path: 'list-vehicle', component: ListVehicleComponent},
  {path: 'add-vehicle', component: AddVehicleComponent},
  {path: 'show-vehicle', component: ShowVehicleComponent},
  {path: 'edit-vehicle', component: EditVehicleComponent},
  {path: 'list-order-workshop', component: ListOrderWorkshopComponent},
  {path: 'add-order-workshop', component: AddOrderWorkshopComponent},
  {path: 'show-order-workshop', component: ShowOrderWorkshopComponent},
  {path: 'edit-order-workshop', component: EditOrderWorkshopComponent},
  {path: 'list-order-workshop-state', component: ListOrderWorkshopStateComponent},
  {path: 'add-order-workshop-state', component: AddOrderWorkshopStateComponent},
  {path: 'show-order-workshop-state', component: ShowOrderWorkshopStateComponent},
  {path: 'edit-order-workshop-state', component: EditOrderWorkshopStateComponent},
  {path: 'list-order-workshop-type', component: ListOrderWorkshopTypeComponent},
  {path: 'add-order-workshop-type', component: AddOrderWorkshopTypeComponent},
  {path: 'show-order-workshop-type', component: ShowOrderWorkshopTypeComponent},
  {path: 'edit-order-workshop-type', component: EditOrderWorkshopTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
