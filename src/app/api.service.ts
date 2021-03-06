import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient: HttpClient) { }
  login(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/login', data , {withCredentials: true});
  }
  Profile(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/profile', 'go' , {withCredentials: true})
  }
  allUsers(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allUsers', 'go' , {withCredentials: true})
  }
  allemployees(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allemployees', 'go' , {withCredentials: true})
  }
  addUser(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addUsers', data , {withCredentials: true})
  }
  addAtten(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addAtten', data , {withCredentials: true})
  }
  addEmployee(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addEmployee', data , {withCredentials: true})
  }
  getRoots(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/getRoots', 'go' , {withCredentials: true})
  }
  getControls(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/getControls', 'go' , {withCredentials: true})
  }
  delU(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/deleteU', data , {withCredentials: true})
  }
  delUEmployee(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delUEmployee', data , {withCredentials: true})
  }
  updateUser(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateUser', data , {withCredentials: true})
  }
  updateEmployee(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateEmployee', data , {withCredentials: true})
  }
  getTypeOfRoot(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/getTypeOfRoot', 'go' , {withCredentials: true})
  }
  addRoot(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addRoot', data , {withCredentials: true})
  }
  delR(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/deleteR', data , {withCredentials: true})
  }
  updateR(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateR', data , {withCredentials: true})
  }
  addS(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addS', data , {withCredentials: true})
  }
  allS(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allS', 'go' , {withCredentials: true})
  }
  delS(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delS', data , {withCredentials: true})
  }
  delSC(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delSC', data , {withCredentials: true})
  }
  updateS(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateS', data , {withCredentials: true})
  }
  updateSC(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateSC', data , {withCredentials: true})
  }
  allI(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allI', 'go' , {withCredentials: true})
  }
  allIB(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allIB', 'go' , {withCredentials: true})
  }
  allReturn(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allReturn', 'go' , {withCredentials: true})
  }
  addI(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addI', data , {withCredentials: true})
  }
  addIAnother(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addIAnother', data , {withCredentials: true})
  }
  delI(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delI', data , {withCredentials: true})
  }
  goout(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/goout', 'go' , {withCredentials: true})
  }
  allIm(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allIm', data , {withCredentials: true})
  }
  allImAnother(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allImAnother', data , {withCredentials: true})
  }
  allIm0(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allIm0', data , {withCredentials: true})
  }
  updateI(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateI', data , {withCredentials: true})
  }
  addCa(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addCa', data , {withCredentials: true})
  }
  allCa(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allCa', 'go' , {withCredentials: true})
  }
  delCa(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delCa', data , {withCredentials: true})
  }
  updateCa(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateCa', data , {withCredentials: true})
  }
  allpayno(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allpayno', 'go' , {withCredentials: true})
  }
  allpaynoPay(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allpaynoPay', 'go' , {withCredentials: true})
  }
  addP(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addP', data , {withCredentials: true})
  }
  delI0(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delI0', data , {withCredentials: true})
  }
  updateI0(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateI0', data , {withCredentials: true})
  }
  addSC(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addSC', data , {withCredentials: true})
  }
  allCustomer(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allCustomer', 'go' , {withCredentials: true})
  }
  allCustomerOffer(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allCustomerOffer', 'go' , {withCredentials: true})
  }
  allCustomerPOffer(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allCustomerPOffer', data , {withCredentials: true})
  }
  addPay(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addPay', data , {withCredentials: true})
  }
  addPayOrder(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addPayOrder', data , {withCredentials: true})
  }
  getItemBooked(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/getItemBooked', data , {withCredentials: true})
  }
  closeItemD(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/closeItemD', data , {withCredentials: true})
  }
  addRequestto(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addRequestto', data , {withCredentials: true})
  }
  allRequest(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allRequest', 'go' , {withCredentials: true})
  }
  delRequestto(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delRequestto', data , {withCredentials: true})
  }
  updateRequestto(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateRequestto', data , {withCredentials: true})
  }
  addRequesttoRF(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addRequesttoRF', data , {withCredentials: true})
  }
  allRequestRF(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allRequestRF', 'go' , {withCredentials: true})
  }
  delRequesttoRF(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delRequesttoRF', data , {withCredentials: true})
  }
  updateRequesttoRF(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateRequesttoRF', data , {withCredentials: true})
  }
  allRequestRFAns(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allRequestRFAns', 'data' , {withCredentials: true})
  }
  accept(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/accept', data , {withCredentials: true})
  }
  acceptNo(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/acceptNo', data , {withCredentials: true})
  }
  allRequestRFAns00(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allRequestRFAns00', 'data' , {withCredentials: true})
  }
  acceptHH(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/acceptHH', data , {withCredentials: true})
  }
  acceptNoHH(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/acceptNoHH', data , {withCredentials: true})
  }
  search(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/search', data , {withCredentials: true})
  }
  searchPay(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/searchPay', data , {withCredentials: true})
  }
  searchPay0(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/searchPay0', data , {withCredentials: true})
  }
  searchPay00(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/searchPay00', data , {withCredentials: true})
  }
  putMoney(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/putMoney', data , {withCredentials: true})
  }
  searchPay000(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/searchPay000', data , {withCredentials: true})
  }
  allCa0(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allCa0', 'data' , {withCredentials: true})
  }
  addIF(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addIF', data , {withCredentials: true})
  }
  allSC0(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allSC0', 'go' , {withCredentials: true})
  }
  allSC0s(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allSC0s', 'go' , {withCredentials: true})
  }
  addSCN(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addSCN', data , {withCredentials: true})
  }
  addSCNAnother(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addSCNAnother', data , {withCredentials: true})
  }
  addSCNs(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addSCNs', data , {withCredentials: true})
  }
  delSC0(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delSC0', data , {withCredentials: true})
  }
  delSC0Offer(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delSC0Offer', data , {withCredentials: true})
  }
  delSC0F(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delSC0F', data , {withCredentials: true})
  }
  delSC0s(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delSC0s', data , {withCredentials: true})
  }
  updateSC0(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateSC0', data , {withCredentials: true})
  }
  updateSC0s(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateSC0s', data , {withCredentials: true})
  }
  addSCN0(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addSCN0', data , {withCredentials: true})
  }
  addSCN0s(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addSCN0s', data , {withCredentials: true})
  }
  deleteImage(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/deleteImage', data , {withCredentials: true})
  }
  deleteImageAnother(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/deleteImageAnother', data , {withCredentials: true})
  }
  addSF(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addSF', data , {withCredentials: true})
  }
  allCaNot(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allCaNot', 'go' , {withCredentials: true})
  }
  allCustomerP(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allCustomerP', data , {withCredentials: true})
  }
  addS0CB(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addS0CB', data , {withCredentials: true})
  }
  addS0CBOffer(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addS0CBOffer', data , {withCredentials: true})
  }
  allCustomerP0(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allCustomerP0', data , {withCredentials: true})
  }
  allCustomerP0Offer(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allCustomerP0Offer', data , {withCredentials: true})
  }
  updateSCR(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateSCR', data , {withCredentials: true})
  }
  updateSCR0(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateSCR0', data , {withCredentials: true})
  }
  updateSCR0Offer(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateSCR0Offer', data , {withCredentials: true})
  }
  allID(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allID', data , {withCredentials: true})
  }
  allIBD(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allIBD', data , {withCredentials: true})
  }
  allIDReturn(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allIDReturn', data , {withCredentials: true})
  }
  allID01(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allID01', data , {withCredentials: true})
  }
  getItemBooked000(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/getItemBooked000', data , {withCredentials: true})
  }
  updateSC0sB(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateSC0sB', data , {withCredentials: true})
  }
  allSC0sB(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allSC0sB', 'go' , {withCredentials: true})
  }
  delSC0sB(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delSC0sB', data , {withCredentials: true})
  }
  addSCNsB(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addSCNsB', data , {withCredentials: true})
  }
  addSCN0sB(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addSCN0sB', data , {withCredentials: true})
  }
  getItemBooked000B(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/getItemBooked000B', data , {withCredentials: true})
  }
  updateSC0A(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateSC0A', data , {withCredentials: true})
  }
  updateSC0AOffer(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/updateSC0AOffer', data , {withCredentials: true})
  }
  insertSC0AOrder(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/insertSC0AOrder', data , {withCredentials: true})
  }
  allIBooked(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allItembooked', data , {withCredentials: true})
  }
  delAll(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delAll', data , {withCredentials: true})
  }
  delAllOffer(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/delAllOffer', data , {withCredentials: true})
  }
  orderto(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/orderto', data , {withCredentials: true})
  }
  allCustomerNot(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allCustomerNot', 'data' , {withCredentials: true})
  }
  ordertore(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/ordertore', data , {withCredentials: true})
  }
  addSCOffer(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addSCOffer', data , {withCredentials: true})
  }
  toquotion(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/toquotion', data , {withCredentials: true})
  }
  getPayments(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/getPayments', data , {withCredentials: true})
  }
  returnback(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/returnback', data , {withCredentials: true})
  }
  allIBDP(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allIBDP', data , {withCredentials: true})
  }
  allSC0Visit(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allSC0Visit', 'data' , {withCredentials: true})
  }
  getControlsTypeEmployee(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/getControlsTypeEmployee', 'data' , {withCredentials: true})
  }
  allAttend(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allAttend', data , {withCredentials: true})
  }
  allAttendSalary(): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allAttendSalary', 'data' , {withCredentials: true})
  }
  addAttenSalary(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/addAttenSalary', data , {withCredentials: true})
  }
  getItemBooked000BDate(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/getItemBooked000BDate', data , {withCredentials: true})
  }
  allpaymentCustomer(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allpaymentCustomer', data , {withCredentials: true})
  }
  allpaymentCustomerDate(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:3000/allpaymentCustomerDate', data , {withCredentials: true})
  }

}
