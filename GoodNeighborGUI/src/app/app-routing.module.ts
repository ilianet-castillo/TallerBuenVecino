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
import {ListCoinComponent} from './coin/list-coin/list-coin.component';
import {AddCoinComponent} from './coin/add-coin/add-coin.component';
import {ShowCoinComponent} from './coin/show-coin/show-coin.component';
import {EditCoinComponent} from './coin/edit-coin/edit-coin.component';
import {ListPositionComponent} from './position/list-position/list-position.component';
import {AddPositionComponent} from './position/add-position/add-position.component';
import {ShowPositionComponent} from './position/show-position/show-position.component';
import {EditPositionComponent} from './position/edit-position/edit-position.component';
import {ListProvinceComponent} from './province/list-province/list-province.component';
import {AddProvinceComponent} from './province/add-province/add-province.component';
import {ShowProvinceComponent} from './province/show-province/show-province.component';
import {EditProvinceComponent} from './province/edit-province/edit-province.component';
import {ShowEmployeeComponent} from './employee/show-employee/show-employee.component';
import {EditEmployeeComponent} from './employee/edit-employee/edit-employee.component';
import {ListClientComponent} from './client/list-client/list-client.component';
import {AddClientComponent} from './client/add-client/add-client.component';
import {ShowClientComponent} from './client/show-client/show-client.component';
import {EditClientComponent} from './client/edit-client/edit-client.component';
import {ListActivityComponent} from './activity/list-activity/list-activity.component';
import {AddActivityComponent} from './activity/add-activity/add-activity.component';
import {ShowActivityComponent} from './activity/show-activity/show-activity.component';
import {EditActivityComponent} from './activity/edit-activity/edit-activity.component';
import {ListInvoiceComponent} from './invoice/list-invoice/list-invoice.component';
import {AddInvoiceComponent} from './invoice/add-invoice/add-invoice.component';
import {ShowInvoiceComponent} from './invoice/show-invoice/show-invoice.component';
import {EditInvoiceComponent} from './invoice/edit-invoice/edit-invoice.component';
import {ListDescriptionComponent} from './description/list-description/list-description.component';
import {AddDescriptionComponent} from './description/add-description/add-description.component';
import {ShowDescriptionComponent} from './description/show-description/show-description.component';
import {EditDescriptionComponent} from './description/edit-description/edit-description.component';
import {ListVehiculeComponent} from './vehicule/list-vehicule/list-vehicule.component';
import {AddVehiculeComponent} from './vehicule/add-vehicule/add-vehicule.component';
import {ShowVehiculeComponent} from './vehicule/show-vehicule/show-vehicule.component';
import {EditVehiculeComponent} from './vehicule/edit-vehicule/edit-vehicule.component';
import {ListOrderWorkshopComponent} from './order-workshop/list-order-workshop/list-order-workshop.component';
import {AddOrderWorkshopComponent} from './order-workshop/add-order-workshop/add-order-workshop.component';
import {ShowOrderWorkshopComponent} from './order-workshop/show-order-workshop/show-order-workshop.component';
import {EditOrderWorkshopComponent} from './order-workshop/edit-order-workshop/edit-order-workshop.component';


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
  {path: 'list-coin', component: ListCoinComponent},
  {path: 'add-coin', component: AddCoinComponent},
  {path: 'show-coin', component: ShowCoinComponent},
  {path: 'edit-coin', component: EditCoinComponent},
  {path: 'list-position', component: ListPositionComponent},
  {path: 'add-position', component: AddPositionComponent},
  {path: 'show-position', component: ShowPositionComponent},
  {path: 'edit-position', component: EditPositionComponent},
  {path: 'list-province', component: ListProvinceComponent},
  {path: 'add-province', component: AddProvinceComponent},
  {path: 'show-province', component: ShowProvinceComponent},
  {path: 'edit-province', component: EditProvinceComponent},
  {path: 'list-client', component: ListClientComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'show-client', component: ShowClientComponent},
  {path: 'edit-client', component: EditClientComponent},
  {path: 'list-activity', component: ListActivityComponent},
  {path: 'add-activity', component: AddActivityComponent},
  {path: 'show-activity', component: ShowActivityComponent},
  {path: 'edit-activity', component: EditActivityComponent},
  {path: 'list-invoice', component: ListInvoiceComponent},
  {path: 'add-invoice', component: AddInvoiceComponent},
  {path: 'show-invoice', component: ShowInvoiceComponent},
  {path: 'edit-invoice', component: EditInvoiceComponent},
  {path: 'list-description', component: ListDescriptionComponent},
  {path: 'add-description', component: AddDescriptionComponent},
  {path: 'show-description', component: ShowDescriptionComponent},
  {path: 'edit-description', component: EditDescriptionComponent},
  {path: 'list-vehicule', component: ListVehiculeComponent},
  {path: 'add-vehicule', component: AddVehiculeComponent},
  {path: 'show-vehicule', component: ShowVehiculeComponent},
  {path: 'edit-vehicule', component: EditVehiculeComponent},
  {path: 'list-order-workshop', component: ListOrderWorkshopComponent},
  {path: 'add-order-workshop', component: AddOrderWorkshopComponent},
  {path: 'show-order-workshop', component: ShowOrderWorkshopComponent},
  {path: 'edit-order-workshop', component: EditOrderWorkshopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}