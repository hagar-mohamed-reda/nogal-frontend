import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { SearchNamePipe } from './search-name.pipe';
import { RootSearchPipe } from './root-search.pipe';
import { ControlSearchPipe } from './control-search.pipe';
import { RootComponent } from './root/root.component';
import { RootSearchTypePipe } from './root-search-type.pipe';
import { SupsuppliersComponent } from './supsuppliers/supsuppliers.component';
import { ItemsComponent } from './items/items.component';
import { SerchCodePipe } from './serch-code.pipe';
import { CategoryComponent } from './category/category.component';
import { PaynoComponent } from './payno/payno.component';
import { CustomerComponent } from './customer/customer.component';
import { RequestComponent } from './request/request.component';
import { PlaceSearchPipe } from './place-search.pipe';
import { SerchCodeSupplierPipe } from './serch-code-supplier.pipe';
import { HistoryComponent } from './history/history.component';
import { NameSearchWhoPipe } from './name-search-who.pipe';
import { PaymentComponent } from './payment/payment.component';
import { PutmoneyComponent } from './putmoney/putmoney.component';
import { VisitComponent } from './visit/visit.component';
import { SearchSupplierPipe } from './search-supplier.pipe';
import { SheetComponent } from './sheet/sheet.component';
import { SelectpinPipe } from './selectpin.pipe';
import { SellerComponent } from './seller/seller.component';
import { BrokerComponent } from './broker/broker.component';
import { CustomerIdPipe } from './customer-id.pipe';
import { CategorySearchPipe } from './category-search.pipe';
import { OrderComponent } from './order/order.component';
import { StoreComponent } from './store/store.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReturnComponent } from './return/return.component';
import { QuotationPipe } from './quotation.pipe';
import { ReportsComponent } from './reports/reports.component';
import { ClientVisetorComponent } from './client-visetor/client-visetor.component';
import { DateComPipe } from './date-com.pipe';
import { SamedatePipe } from './samedate.pipe';
import { QuotationBillPipe } from './quotation-bill.pipe';
import { IdCustomerPipe } from './id-customer.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { Itemmin0Pipe } from './itemmin0.pipe';
import { AttendanceComponent } from './attendance/attendance.component';
import { SearchEmployeePipe } from './search-employee.pipe';
import { SalaryComponent } from './salary/salary.component';
import { From0Pipe } from './from0.pipe';
import { ItemSearchReqPipe } from './item-search-req.pipe';
import { To0Pipe } from './to0.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    SearchNamePipe,
    RootSearchPipe,
    ControlSearchPipe,
    RootComponent,
    RootSearchTypePipe,
    SupsuppliersComponent,
    ItemsComponent,
    SerchCodePipe,
    CategoryComponent,
    PaynoComponent,
    CustomerComponent,
    RequestComponent,
    PlaceSearchPipe,
    SerchCodeSupplierPipe,
    HistoryComponent,
    NameSearchWhoPipe,
    PaymentComponent,
    PutmoneyComponent,
    VisitComponent,
    SearchSupplierPipe,
    SheetComponent,
    SelectpinPipe,
    SellerComponent,
    BrokerComponent,
    CustomerIdPipe,
    CategorySearchPipe,
    OrderComponent,
    StoreComponent,
    ReturnComponent,
    QuotationPipe,
    ReportsComponent,
    ClientVisetorComponent,
    DateComPipe,
    SamedatePipe,
    QuotationBillPipe,
    IdCustomerPipe,
    EmployeeComponent,
    Itemmin0Pipe,
    AttendanceComponent,
    SearchEmployeePipe,
    SalaryComponent,
    From0Pipe,
    ItemSearchReqPipe,
    To0Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [{ provide: LocationStrategy , useClass:  HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
