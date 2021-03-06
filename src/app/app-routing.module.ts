import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { BrokerComponent } from './broker/broker.component';
import { CategoryComponent } from './category/category.component';
import { ClientVisetorComponent } from './client-visetor/client-visetor.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { HistoryComponent } from './history/history.component';
import { ItemsComponent } from './items/items.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { PaynoComponent } from './payno/payno.component';
import { PutmoneyComponent } from './putmoney/putmoney.component';
import { ReportsComponent } from './reports/reports.component';
import { RequestComponent } from './request/request.component';
import { ReturnComponent } from './return/return.component';
import { RootComponent } from './root/root.component';
import { SalaryComponent } from './salary/salary.component';
import { SellerComponent } from './seller/seller.component';
import { SheetComponent } from './sheet/sheet.component';
import { StoreComponent } from './store/store.component';
import { SupsuppliersComponent } from './supsuppliers/supsuppliers.component';
import { UsersComponent } from './users/users.component';
import { VisitComponent } from './visit/visit.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'root', component: RootComponent},
  {path: 'suppliers', component: SupsuppliersComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'payno', component: PaynoComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'request', component: RequestComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'operation', component: PaymentComponent},
  {path: 'sheet', component: SheetComponent},
  {path: 'visit', component: VisitComponent},
  {path: 'sellers', component: SellerComponent},
  {path: 'broker', component: BrokerComponent},
  {path: 'order', component: OrderComponent},
  {path: 'store', component: StoreComponent},
  {path: 'returns', component: ReturnComponent},
  {path: 'report', component: ReportsComponent},
  {path: 'visitClient', component: ClientVisetorComponent},
  {path: 'Employees', component: EmployeeComponent},
  {path: 'Attendances', component: AttendanceComponent},
  {path: 'Salary', component: SalaryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
