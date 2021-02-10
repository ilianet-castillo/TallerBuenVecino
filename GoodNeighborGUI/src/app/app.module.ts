import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ListContactComponent} from './contact/list-contact/list-contact.component';
import {MatTableModule} from '@angular/material/table';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListContactComponent,
    AddContactComponent,
    ShowContactComponent,
    EditContactComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    ListTypeComponent,
    AddTypeComponent,
    ShowTypeComponent,
    EditTypeComponent,
    ListCoinComponent,
    AddCoinComponent,
    ShowCoinComponent,
    EditCoinComponent,
    ListPositionComponent,
    AddPositionComponent,
    ShowPositionComponent,
    EditPositionComponent,
    ListProvinceComponent,
    AddProvinceComponent,
    ShowProvinceComponent,
    EditProvinceComponent,
    ShowEmployeeComponent,
    EditEmployeeComponent,
    ListClientComponent,
    AddClientComponent,
    ShowClientComponent,
    EditClientComponent,
    ListActivityComponent,
    AddActivityComponent,
    ShowActivityComponent,
    EditActivityComponent,
    ListInvoiceComponent,
    AddInvoiceComponent,
    ShowInvoiceComponent,
    EditInvoiceComponent,
    ListDescriptionComponent,
    AddDescriptionComponent,
    ShowDescriptionComponent,
    EditDescriptionComponent,
    ListVehiculeComponent,
    AddVehiculeComponent,
    ShowVehiculeComponent,
    EditVehiculeComponent,
    ListOrderWorkshopComponent,
    AddOrderWorkshopComponent,
    ShowOrderWorkshopComponent,
    EditOrderWorkshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
