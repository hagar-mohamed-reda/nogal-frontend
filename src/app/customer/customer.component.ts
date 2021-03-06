import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  arre: any;
  arre00: any;
  show = false;
  name: any;
  email: any;
  password: any;
  adress: any;
  root: any;
  phone: any;
  control: any;
  rootA: any;
  controlA: any;
  nameU: any;
  emailU: any;
  passwordU: any;
  adressU: any;
  rootU: any;
  phoneU: any;
  controlU: any;
  idUp: any;
  searchName: any;
  rootSearch = 'أبحث بالفرع';
  controlSearch = 'أبحث بالصلاحية';
  notes: any;
  pay: any;
  idDS: any;
  nameD: any;
  idUS: any;
  payU: any;
  notesU: any;
  country: any;
  countryU: any;
  items: any = undefined;
  payment: any;
  paymentno: any;
  allI: any;
  discound: any;
  submit = false;
  submitNumber = true;
  itemsGo: any;
  payGo: any;
  notesGo: any;
  dataGo: any;
  arre0987: any;
  arrayclose: any;
  idItem: any;
  arreCustomer:any;
  Customer: any = 'Customer';
  QUotationNo: any = 'QUotation No';
  choose = false;
  qty: any;
  goQty0 = false;
  QtyAvaliable: any = [];
  rootB: any = undefined;
  arrImage: any;
  qwss = false;
  qtySearch: any;
  paySearch: any;
  itemGo: any;
  amount: any = 0;
  dateAm: any;
  customer_id: any;
  serchCodeVisit: any = null;
  cityU: any;
  areaU: any;
  typeU: any = '';
  phone2U: any;
   www: any;
   goImg: any = false;
   arreCustomer00: any;
   nameUX: any;
   nameUX0: any;
   arreCustomer000: any;
   discoundAll: any;
   payAll: any;
   payAll0: any;
   mo0: any;
   mo01: any;
   id_item: any;
   yarbs: any = null;
   yarbs0: any = false;
   ost: any = 'Qty';
   upS: any = true;
   upS0: any = false;
   date: any;
   PaymentWay: any;
   countImage: any;
   images: any = '';
   nameU0: any;
   emailU0: any;
   phoneU0: any;
   adressU0: any;
   idUS0: any;
   cityU0: any;
   phone2U0: any;
   commision: any;
   commisionafter: any;
   alltotal: any;
   payAll00: any;
   discoundAllValue: any;
   price: any;
   priceSeller: any = 'Price Seller';
   money: any;
   priceseller00: any;
   quota: any;
   choose2: any = false;
  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent ) {
    this._AppComponent.activeU = '';
    this._AppComponent.activeR = '';
    this._AppComponent.activeS = '';
    this._AppComponent.activeI = '';
    this._AppComponent.activeC = '';
    this._AppComponent.activeP = '';
    this._AppComponent.activeCu = 'active';
    this._AppComponent.activeCR = '';
    this._AppComponent.activeH = '';
    this._AppComponent.activeO = '';
    this._AppComponent.activeCE = '';
    this._AppComponent.activeCV = '';
    this._AppComponent.activeSE = '';
    this._AppComponent.activeSEB = '';
    this._AppComponent.activeCuO = '';
    this._AppComponent.activeCuOStore = '';
    this._AppComponent.activeHRE = '';
    this._AppComponent.activeHReport = '';
    this._AppComponent.activeCVV = '';
    this._AppComponent.activeCVEm = '';
    this._AppComponent.activeCVEmAttendances = '';
    this._AppComponent.activeCVEmAttendancesSalary = '';
    this._ApiService.allSC0sB().subscribe((res)=>{
      if(res.check === true){
        this.arreCustomer000 = res.data;
        this.ngOnInit();
      } else{
        alert('error')
      }
    })
    this._ApiService.allSC0s().subscribe((res)=>{
      if(res.check === true){
        this.arreCustomer00 = res.data;
        this.ngOnInit();
      } else{
        alert('error')
      }
    })
    this._ApiService.allSC0().subscribe((res)=>{
      if(res.check === true){
        this.arreCustomer = res.data;
        this.ngOnInit();
      } else{
        alert('error')
      }
    })
    this._ApiService.allI().subscribe((res)=>{
      if(res.check === true){
        this.allI = res.data;
        this.ngOnInit();
      } else{
        alert('error')
      }
    })
    this._ApiService.getRoots().subscribe((res)=>{
      this.rootA = res;
      this.ngOnInit();
    })
    this._ApiService.getControls().subscribe((res)=>{
      this.controlA = res;
      this.ngOnInit();
    })

    this._ApiService.Profile().subscribe((res)=>{
      if(res.check === true) {
        this._AppComponent.refreshNotification()
        this.show = true;
        this.ngOnInit();
      } else {
        this._Router.navigate([''])
        this.show = false;
      }
    })
    this._ApiService.allCustomer().subscribe((res)=>{
      if(res.check === true){
        this.arre = res.data;
        this.ngOnInit();
      } else{
        alert('error')
      }
    })
    this._AppComponent.goProfile();
    this.ngOnInit();
   }
   ref(){
    this.dateAm = ''; this.amount = ''; this.payAll0 = ''; this.discoundAll = ''; this.payAll = '';
    $('.select2Q').val('undefined').trigger('change.select2');
    this.closeUpAnother();
    $('.loading').css({display: 'block'});
    setTimeout(() => {
      $('.loading').css({display: 'none'});
    }, 100);
     this.yarbs = null;
     this.yarbs0 = false;
     $('.select2Q').removeAttr('disabled');
     $('.goQN').val('undefined').trigger('change.select2');
     this.close();
     this.upS = true;
     this.upS0 = false;
     this.nameU0 = '';
     this.phoneU0 = '';
     this.idUS0 = '';
     $('.goQN00').val('undefined').trigger('change.select2');
     $('.goQN00X0').val('undefined').trigger('change.select2');
     this.arre00 = [];
     $('.delall').css({display: 'none'})
     this.alltotal = '';
     this.payAll00 = '';
     this.discoundAllValue = '';
     this.discoundAll = '';
     this.payAll = '';
     this.alltotal = '';
     this.alltotal = '';
     this.commision = '';
     this.commisionafter = '';

   }
   closeUp0(){
    $('#upd-up0').css({display: 'none'});
    $('#upd-up00').css({display: 'block'});
    // this.discound = '';
    this.qty = '';
    // this.pay = '';
    this.idUS = '';
    this.qtySearch = '';
    // this.paySearch = '';
    this.itemGo = '';
    this.mo0 = '';
    this.discound = '';
    this.priceSeller = '';
  }
  upU0(data: any){
    // this.discound = data.discound;
    this.qtySearch = data.qty;
    // this.paySearch = data.pay;
    this.qty = data.qty;
    // this.pay = data.pay;
    this.idUS = data.id;
    this.mo0 = data.itemcode;
    this.mo01 = data.place;
    this.itemGo = data.id_item;
    this.discound = data.discound;
    this.priceSeller = data.priceSeller;
    $('#upd-up0').css({display: 'block'});
    $('#upd-up00').css({display: 'none'});
  }
  okUp0(data: any){
    // if(this.qty == '') {
    //   alert('Please . Make sure the data are entered Correct');
    // } else {
      this.allI.forEach((element: any) => {
        if(element.place == this.mo01 && element.code == this.mo0 ){
          if(this.qty > element.qty + this.qtySearch){
            alert('This Qty Not Available');
          } else {
            $('.loading').css({display: 'block'});
      data.id = this.idUS;
      data.item = this.itemGo;
      data.search = this.qtySearch;
    this._ApiService.updateSCR0(data).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allCustomerP0({id: $('.select2Q').val()}).subscribe((res)=>{
          this.amount = 0;
          res.data.forEach((element: any) => {
            this.amount = this.amount + element.pay
          });
          this.arre00 = res.data;
          $('#gotohill').trigger('click');
          // alert('Done Successfully');
          this.closeUp0();
        $('.loading').css({display: 'none'});
        this._ApiService.allI().subscribe((res)=>{
          if(res.check === true){
            this.allI = res.data;
          } else{
            alert('error')
          }
        })
        })
      } else {
        alert("Don't Successfully");
        this.closeUp();
        $('.loading').css({display: 'none'});
      }
    })
          }
        }
      });
    // }
  }
   closeUp(){
    $('#upd-up').css({display: 'none'});
    this.discound = '';
    this.qty = '';
    this.pay = '';
    this.idUS = '';
    this.qtySearch = '';
    this.paySearch = '';
    this.itemGo = '';
    this.priceseller00 = '';
  }
  upU(data: any){
    this.discound = data.discound;
    this.qtySearch = data.qty;
    this.paySearch = data.pay;
    this.qty = data.qty;
    this.pay = data.pay;
    this.idUS = data.id;
    this.itemGo = data.id_item;
    this.priceseller00 = data.priceSeller;
    $('#upd-up').css({display: 'block'});
  }
  okUp(data: any){
    // || this.pay >  this.paySearch
    // || this.pay == ''
    // || this.pay == undefined
    if(this.qty > this.qtySearch  || this.qty == '' || this.qty == undefined) {
      alert('Please . Make sure the data are entered Correct');
    } else {
      $('.loading').css({display: 'block'});
      data.id = this.idUS;
      data.item = this.itemGo;
      data.priceSeller = this.priceseller00;
    this._ApiService.updateSCR(data).subscribe((res)=> {
      if(res === true) {
        $('#gotohill').trigger('click');
        this._ApiService.allCustomerP0({id: $('.select2Q').val()}).subscribe((res)=>{
          this.amount = 0;
          res.data.forEach((element: any) => {
            this.amount = this.amount + element.pay
          });
          this.arre00 = res.data;
          // alert('Return Quotation Done Successfully');
          this.closeUp();
        $('.loading').css({display: 'none'});
        this._ApiService.allI().subscribe((res)=>{
          if(res.check === true){
            this.allI = res.data;
          } else{
            alert('error')
          }
        })
        })
      } else {
        alert("'Return Quotation Don't Successfully");
        this.closeUp();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  delS(id: any , name: any , qty: any , id_item: any){
    $('#upd-dd').css({display: 'block'});
    this.idDS = id;
    this.nameD = name;
    this.qty = qty;
    this.id_item = id_item;
  }
  closedd(){
    $('#upd-dd').css({display: 'none'});
    this.idDS = '';
    this.nameD = '';
    this.qty = '';
    this.id_item = '';
  }
  ok(){
    $('.loading').css({display: 'block'});
    var x = this.idDS;
    var e = this.nameD;
    this._ApiService.delSC0({id: x , name: this.nameD , qty: this.qty , id_item: this.id_item}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allCustomerP0({id: $('.select2Q').val()}).subscribe((res)=>{
          this.arre00 = res.data;
          $('#gotohill').trigger('click');
          // alert('Deleted Done Successfully');
          this.closedd();
          this._ApiService.allI().subscribe((res)=>{
            if(res.check === true){
              this.allI = res.data;
            } else{
              alert('error')
            }
          })
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('Deleted Not Successfully\nPlease, if you want to delete this user, you must delete all his pre request on the site');
        this.closedd();
        $('.loading').css({display: 'none'});
      }
    })
  }
  async deleteall(){
    $('.loading').css({display: 'block'});
    await this.arre00.forEach((element: any) => {
    var x = element.id;
    var e = element.name;
    this.qty = element.qty;
    this.id_item = element.id_item;
    this._ApiService.delSC0({id: x , name: this.nameD , qty: this.qty , id_item: this.id_item}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allCustomerP0({id: $('.select2Q').val()}).subscribe((res)=>{
          this.arre00 = res.data;
          // alert('Deleted Done Successfully');
          this.closedd();
          this._ApiService.allI().subscribe((res)=>{
            if(res.check === true){
              this.allI = res.data;
            } else{
              alert('error')
            }
          })
        })
      } else {
        alert('Deleted Not Successfully\nPlease, if you want to delete this user, you must delete all his pre request on the site');
        this.closedd();
        $('.loading').css({display: 'none'});
      }
    })
    });
    this._ApiService.delAll({id: $('.select2Q').val()}).subscribe((res)=>{
      if(res == true){
        this._ApiService.allCustomer().subscribe((res)=>{
          if(res.check === true){
            this.arre = res.data;
          } else{
            alert('error')
          }
        })
        $('.loading').css({display: 'none'});
        this.ref();
      }
    })
  }
  closeUpAnother(){
    $('#upd-upAnother').css({display: 'none'});
    this.nameU = '';
    this.emailU = '';
    this.phoneU = '';
    this.adressU = '';
    this.idUS = '';
    this.cityU = '';
    this.areaU = '';
    this.phone2U = '';
    this.typeU = '';
  }
  upUAnother(data: any){
    this.nameU = data.name;
    this.emailU = data.email;
    this.phoneU = '0' + data.phone;
    this.adressU = data.adress;
    this.idUS = data.id;
    this.cityU = data.city;
    this.areaU = data.area;
    this.typeU = data.type;
    this.phone2U = '0'+data.phone2
    $('#upd-upAnother').css({display: 'block'});
  }
  okUpAnother(data: any){
    if(this.nameU == '' || this.nameU == undefined ) {
      alert('Please . Make sure the Name Is entered');
    } else {
      data.id = this.idUS;
      $('.loading').css({display: 'block'});
    this._ApiService.updateSC0(data).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allSC0().subscribe((res)=>{
          this.arreCustomer = res.data;
          // alert('Updated Done Successfully');
          // this.closeUpAnother();
        $('.loading').css({display: 'none'});
        })
      } else {
        alert("Updated Don't Successfully");
        // this.closeUpAnother();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  addS0(data: any){
    if(this.nameU == '' || this.nameU == undefined) {
      alert('Please . Make sure the Name Is entered');
    } else {
      $('.loading').css({display: 'block'});
    data.name = data.nameU;
    data.email = data.emailU;
    data.city = data.cityU;
    data.adress = data.adressU;
    data.phone = data.phoneU;
    data.phone2 = data.phone2U;
    this._ApiService.addSCN(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allSC0().subscribe((res0)=>{
          if(res0.check === true){
            this.arreCustomer = res0.data;
            let self = this;
            this.upS = true;
            this.upS0 = false;
            setTimeout(() => {
              $('.goQN').val(res0.data[res0.data.length - 1].id).trigger('change.select2');
              $('.goQN').val(res0.data[res0.data.length - 1].id).trigger('change.select2');
              self.yarbs0 = false;
              self.yarbs = $('.goQN').val();
              setTimeout(() => {
                self.yarbs0 = true;
              }, 100);
              self.arreCustomer.forEach((element: any) => {
                if(element.id == $('.goQN').val()){

                  self.nameU = element.name;
                  self.emailU = element.email;
                  self.phoneU = '0' + element.phone;
                  self.adressU = element.adress;
                  self.idUS = element.id;
                  self.cityU = element.city;
                  self.areaU = element.area;
                  self.typeU = element.type;
                  self.phone2U = '0'+element.phone2
                  // self.nameUX = element.sellername;
                  // $('.goQN00').val(element.seller_id).trigger('change.select2');
                  // self.nameUX0 = element.brokername;
                  // $('.goQN00X0').val(element.broker_id).trigger('change.select2');
                }
              });
              self.arreCustomer000.forEach((element: any) => {
                if(element.id == $('.goQN00X0').val()){

                  self.nameU0 = element.name;
                  self.emailU0 = element.email;
                  self.phoneU0 = '0' + element.phone;
                  self.adressU0 = element.adress;
                  self.idUS0 = element.id;
                  self.cityU0 = element.city;
                  self.phone2U0 = '0'+element.phone2
                  self.nameUX = element.sellername;
                  // $('.goQN00').val(element.seller_id).trigger('change.select2');
                  // self.nameUX0 = element.brokername;
                  // $('.goQN00X0').val(element.broker_id).trigger('change.select2');
                }
              });
            }, 100);
            // alert('Added successfully');
            this.close();
            $('.loading').css({display: 'none'});
          } else{
            alert('error');
          }
        })
      } else {
        alert('This Customer already exists');
        this.close();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  addS0G(data: any){
    if(data.nameU0 == '' || data.nameU0 == undefined) {
      alert('Please . Make sure the Name Is entered');
    } else {
      data.name = data.nameU0;
      data.phone = data.phoneU0;
      $('.loading').css({display: 'block'});
    this._ApiService.addSCNsB(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allSC0sB().subscribe((res0)=>{
          if(res0.check === true){
            this.arreCustomer000 = res0.data;
            let x = this.arreCustomer000[this.arreCustomer000.length - 1].id;
            setTimeout(() => {
              $('.goQN00X0').val(x).trigger('change.select2');
            }, 400);
            // alert('Added successfully');
            this.close();
            $('.loading').css({display: 'none'});
          } else{
            alert('error');
          }
        })
      } else {
        alert('This Broker already exists');
        this.close();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  addCu(){
    $('.loading').css({display: 'block'});
    this._ApiService.allI().subscribe((res)=>{
      if(res.check === true){
        this.allI = res.data;
        // $('#upd').css({display: 'block'});
        $('.goQN00X0').val('undefined').trigger('change.select2');
        // $('.yaa5y').css({display: 'block'});
        // $('.yaa5y0').css({display: 'none'});
        // $('.yaa5y00').css({display: 'inline-block'});
        $('.select2Q').attr('disabled','disabled');
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
      }
    })
  }
  PlusQ() {
    $('#upd009A').css({display: 'block'});
  }
  closeQ() {
    $('#upd009A').css({display: 'none'});
    this.QtyAvaliable = [];
    this.goQty0 = false;
    this.items = undefined;
    this.rootB = undefined;
    this.qty = '';
    $('.selectPlus').val('undefined').trigger('change.select2');
    $('.selectPlusR').val('undefined').trigger('change.select2');
  }
  addS0CB(data: any){
    let self = this;
    if($('.select2Q').val() == '' || $('.select2Q').val() == undefined ||$('.selectPlus').val() == '' || $('.selectPlusR').val() == '' || this.qty == '' || $('.selectPlus').val() == undefined || $('.selectPlusR').val() == undefined || this.qty == undefined) {
      alert('Make sure your data enter a correct');
    } else {
      this.QtyAvaliable.forEach((element: any) => {
        if(element.place == $('.selectPlusR').val() && element.code == $('.selectPlus').val() ){
          if(this.qty > element.qty){
            alert('This Qty Not Available');
          } else {
            $('.loading').css({display: 'block'});
      this.allI.forEach((element: any) => {
        if($('.selectPlus').val() == element.code && $('.selectPlusR').val() == element.place) {
          data.item = element.id;
          data.customer = $('.select2QC').val();
          data.root = $('.selectPlusR').val();
          data.booked = $('.select2Q').val();
          this._ApiService.addS0CB(data).subscribe((res)=>{
            if(res.check === true){
            this._ApiService.allCustomerP0({id: $('.select2Q').val()}).subscribe((res0)=>{
            if(res0.check === true){
              this.amount = 0;
              res0.data.forEach((element: any) => {
                this.amount = this.amount + element.pay
              });
            this.arre00 = res0.data;
            this.ost = 'Qty';
            this.priceSeller = 'Price Seller';
            // alert('Added successfully');
            self.nameU0 = '';
        self.phoneU0 = '';
        self.idUS0 = '';
        self.arre.forEach((element: any) => {
          if(element.id == $('.select2Q').val()){
            self.nameUX = element.sellername;
            $('.goQN00').val(element.seller_id).trigger('change.select2');
            self.nameUX0 = element.brokername;
            $('.goQN00X0').val(element.broker_id).trigger('change.select2');
            self.arreCustomer000.forEach((element0: any) => {
              if(element0.id == element.broker_id){
                self.nameU0 = element0.name;
                self.emailU0 = element0.email;
                self.phoneU0 = '0' + element0.phone;
                self.adressU0 = element0.adress;
                self.idUS0 = element0.id;
                self.cityU0 = element0.city;
                self.phone2U0 = element0.phone2;
                // self.areaU0 = element.area;
                // self.typeU0 = element.type;
                self.phone2U0 = '0'+element0.phone2;
                // self.nameUX = element.sellername;
                // $('.goQN00').val(element.seller_id).trigger('change.select2');
                // self.nameUX0 = element.brokername;
                // $('.goQN00X0').val(element.broker_id).trigger('change.select2');
              }
            });
          }
        });
        self.amount = 0;
        $('.loading').css({display: 'block'});
        self._ApiService.allCustomerP({id: $('.select2Q').val()}).subscribe((res)=>{
          if(res.check === true){
            let date0 = new Date(res.data[0].date);
            self.dateAm = res.data[0].date
            self.payAll = res.data[0].pay;
            self.commision = res.data[0].commssionbroker;
            setTimeout(() => {
              self.payAll00 = (self.alltotal - (self.alltotal * (self.discoundAll/100)));
              self.discoundAllValue = self.alltotal - self.payAll00;
            }, 100);
            self.alltotal = res.data[0].totalprice;
            self.discoundAll = res.data[0].discound;
            var price = self.alltotal / (1 - (self.commision / 100));
            self.price = price;
            self.commisionafter = price - self.alltotal;
            self._ApiService.allCustomerP0({id: $('.select2Q').val()}).subscribe((res0)=>{
              if(res0.check === true){
                res0.data.forEach((element: any) => {
                  self.amount = self.amount + element.pay
                });
                self.arre00 = res0.data;
                self.payAll0 = self.amount - (self.amount * ( self.discoundAll / 100));
                $('.select2QC').val(res.data[0].customer_id).trigger('change.select2');
                $('.goQN').val(res.data[0].customer_id).trigger('change.select2');
                self.serchCodeVisit = $('.select2QC').val();
                self.choose = true;
                $('#fdgh').css({display: 'block'});
                $('.loading').css({display: 'none'});
              } else{
                alert('error');
                $('.loading').css({display: 'none'});
              }
            })
          } else{
            alert('error');
            $('.loading').css({display: 'none'});
          }
        })
        setTimeout(() => {
          $('#ostr').trigger('click');
        }, 400);
            this.closeQ();
            $('.loading').css({display: 'none'});
            this._ApiService.allI().subscribe((res)=>{
              if(res.check === true){
                this.allI = res.data;
              } else{
                alert('error')
              }
            })
          } else{
            alert('error');
          }
        })
      } else {
        alert('Not added successfully');
        this.closeQ();
        $('.loading').css({display: 'none'});
      }
      })
        }
      });
          }
        }
      });

    }
  }
  close(){
    $('#upd').css({display: 'none'});
    this.discound = '';
    this.pay = '';
    this.name = '';
    this.email = '';
    this.notes = '';
    this.items = undefined;
    this.phone = '';
    this.adress = '';
    this.discound = '';
    this.itemsGo = '';
    this.qty = '';
    $('.submit').css({display: 'none'});
    // $('.submitNumber').css({display: 'block'});
    $('.yaa5y').css({display: 'none'});
    // $('.yaa5y0').css({display: 'block'});
    $('.yaa5y00').css({display: 'none'});
  }
  addS0C(data: any){
    if($('.goQN').val() == '' || $('.goQN').val() == undefined ) {
      alert('Please . Make sure the Customer are entered');
    } else {
      this.addCu()
      $('.loading').css({display: 'block'});
      this._ApiService.addSC({name: $('.goQN').val() , seller: $('.goQN00').val() , broker: $('.goQN00X0').val(),brokerCommision: this.commision }).subscribe((res)=>{
        if(res.check === true){
        this._ApiService.allCustomer().subscribe((res0)=>{
        if(res0.check === true){
          $('#fdgh').css({display: 'none'});
          this.choose = false;
        this.arre = res0.data;
        // $('.goQN').val('undefined').trigger('change.select2');
        // $('.goQN0').val('undefined').trigger('change.select2');
        // $('.goQN00X0').val('undefined').trigger('change.select2');
        $('.select2Q').removeAttr('disabled');
        let x = this.arre.length - 1;
        let r = this.arre[x].id;
        let self = this;
        setTimeout(() => {
          $('.select2Q').val(`${r}`).trigger('change.select2');
          self.arre.forEach((element: any) => {
            if(element.id == $('.select2Q').val()){
              self.nameUX = element.sellername;
              $('.goQN00').val(element.seller_id).trigger('change.select2');
              self.nameUX0 = element.brokername;
              $('.goQN00X0').val(element.broker_id).trigger('change.select2');
            }
          });
          self.amount = 0;
          $('.loading').css({display: 'block'});
          self._ApiService.allCustomerP({id: $('.select2Q').val()}).subscribe((res)=>{
            if(res.check === true){
              let date0 = new Date(res.data[0].date);
              self.dateAm = res.data[0].date
              self.payAll = res.data[0].pay;
              self.commision = res.data[0].commssionbroker;
              self.alltotal = res.data[0].totalprice;
              setTimeout(() => {
                self.payAll00 = (self.alltotal - (self.alltotal * (self.discoundAll/100)));
                self.discoundAllValue = self.alltotal - self.payAll00;
              }, 100);
              self.discoundAll = res.data[0].discound;
              var price = self.alltotal / (1 - (self.commision / 100));
              self.price = price;
              self.commisionafter = price - self.alltotal;
              self._ApiService.allCustomerP0({id: $('.select2Q').val()}).subscribe((res0)=>{
                if(res0.check === true){
                  res0.data.forEach((element: any) => {
                    self.amount = self.amount + element.pay
                  });

                  self.arre00 = res0.data;
                  self.payAll0 = self.amount - (self.amount * ( self.discoundAll / 100));
                  $('.select2QC').val(res.data[0].customer_id).trigger('change.select2');
                  self.serchCodeVisit = $('.select2QC').val();
                  self.choose = true;
                  $('#fdgh').css({display: 'block'});
                  $('.loading').css({display: 'none'});
                } else{
                  alert('error');
                  $('.loading').css({display: 'none'});
                }
              })
            } else{
              alert('error');
              $('.loading').css({display: 'none'});
            }
          })
          setTimeout(() => {
            $('#ostr').trigger('click');
          }, 400);
        }, 400);
        $('.delall').css({display: 'inline-block'})
        // alert('Added successfully');
        this.close();
        $('.loading').css({display: 'none'});
      } else{
        alert('error');
        $('.loading').css({display: 'none'});
      }
    })
  } else {
    alert('Not Added successfully');
    this.close();
    $('.loading').css({display: 'none'});
  }
})
    }
  }
  addS0C1(data: any) {
    this.itemsGo = data;
  }
  goQty() {
    if(this.name == '' || this.email == '' || this.adress == '' || this.phone == '' || this.items == '' || this.name == undefined || this.email == undefined || this.adress == undefined || this.phone == undefined || this.items == undefined ) {
      alert('من فضلك أدخل جميع البيانات بالكامل');
    } else {
      $('.submit').css({display: 'block'});
      $('.submitNumber').css({display: 'none'});
    }
  }
  get self() {
    return this;
  }
  delSPay(){
    // if(data.paymentno === 0){
    //   alert('تم دفع جميع المستحقات');
    // } else {
      // this.dataGo = data;
      $('#upd-ddGoP').css({display: 'block'});
    // }
  }
  closeddGoP(){
    $(`.but`).css({display: 'none'})
    this.images = '';
    this.dataGo = '';
    this.payGo = '';
    this.notesGo = '';
    var date = new Date();

    var day: any = date.getDate();
    var month: any = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#theDate").val(today);
    this.date = today;
    this.PaymentWay = 'undefined';
    $('#upd-ddGoP').css({display: 'none'});
  }
  Go12(data: any){
    if(data.payGo == '' || data.payGo == undefined || this.PaymentWay == 'undefined' || this.PaymentWay == undefined || this.PaymentWay == '' || this.PaymentWay == null) {
      alert('Plz Add Money and Payment way');
    } else {
      $('.loading').css({display: 'block'});
      // if(data.payGo > this.dataGo.paymentno || data.payGo < 0) {
      //   alert('هذا المبلغ خطأ');
      //   $('.loading').css({display: 'none'});
      // } else {
        // let rt = this.dataGo.paymentno - data.payGo;
        // let rt0 = data.payGo + this.dataGo.payment;
        // data.rt = rt;
        // data.rt0 = rt0;
        data.id = $('.select2Q').val();
        const formdata = new FormData();
        formdata.append('payGo', data.payGo);
        formdata.append('id', data.id);
        formdata.append('PaymentWay', data.PaymentWay);
        formdata.append('date', data.date);
      for (let x of this.images) {
        formdata.append('images', x);
      }
        formdata.append('ok', 'ok');
        this._ApiService.addPay(formdata).subscribe((res)=>{
          if(res === true) {
            this._ApiService.getItemBooked({id: data.id}).subscribe((res0)=>{
              this._ApiService.allCustomerP({id: data.id}).subscribe((res1)=>{
                if(res1.check === true){
                  this.payAll = res1.data[0].pay;
                  this.commision = res1.data[0].commssionbroker;
                  this.alltotal = res1.data[0].totalprice;
                  this.payAll00 = (this.alltotal - (this.alltotal * (this.discoundAll/100)));
                this.discoundAllValue = this.alltotal - this.payAll00;
                  var price = this.alltotal / (1 - (this.commision / 100));
                  this.price = price;
                  this.commisionafter = price - this.alltotal;
                  // alert('تمت عملية الدفع بنجاح');
                  this.arre0987 = res0;
                  this.closeddGoP();
                  $('.loading').css({display: 'none'});
                }})
            })
          } else {
              alert('لم تتم عملية الدفع بنجاح');
              this.closeddGoP();
          }
        })
      // }
    }
  }
  items0(id: any , action: any = null){
    if(action != null) {
      if($('.select2Q').val() == 'undefined' || $('.select2Q').val() == undefined || $('.select2Q').val() == '' || $('.select2Q').val() == null){
        alert('Plz Choose QUotation No');
      } else{
      this.idItem = id;
      $('.loading').css({display: 'block'});
      this._ApiService.getItemBooked({id: $('.select2Q').val()}).subscribe((res)=>{
        this.arre0987 = res;
        // $('#upd023').css({display: 'block'});
        $('.loading').css({display: 'none'});
        if(action != null) {
          action();
        }
      })
    }
    } else {
      if($('.select2Q').val() == 'undefined' || $('.select2Q').val() == undefined || $('.select2Q').val() == '' || $('.select2Q').val() == null){
        alert('Plz Choose QUotation No');
      } else{
      this.idItem = id;
      $('.loading').css({display: 'block'});
      this._ApiService.getItemBooked({id: $('.select2Q').val()}).subscribe((res)=>{
        this.arre0987 = res;
        $('#upd023').css({display: 'block'});
        $('.loading').css({display: 'none'});
        if(action != null) {
          action();
        }
      })
    }
    }
  }
  close0093(){
    // $('.loading').css({display: 'block'});
    // this._ApiService.allCustomer().subscribe((res)=>{
    //   if(res.check === true){
        // this.arre = res.data;
        $('#upd023').css({display: 'none'});
        this.arre0987 = [];
        this.idItem = '';
    //     $('.loading').css({display: 'none'});
    //   } else{
    //     alert('error')
    //   }
    // })
  }
  closeitem00(data: any){
    this.arrayclose = data;
    $('#upd-ddClose').css({display: 'block'});
  }
  closeddItem0(){
    this.arrayclose = '';
    $('#upd-ddClose').css({display: 'none'});
  }
  okClose(){
    $('.loading').css({display: 'block'});
    this._ApiService.closeItemD(this.arrayclose).subscribe((res)=>{
      if(res.check === true) {
        this.items0(this.idItem);
        this.arre0987 = res;
        alert(`تم الغاء المنتج بنجاح المبلغ الذى يجب دفعة للعميل هو ${res.money} وتم ارجاع المنتجات لتكون متاحة للبيع`);
        $('#upd-ddClose').css({display: 'none'});
        $('.loading').css({display: 'none'});
      } else {
        alert('لم يتم الغاء المنتج بنجاح');
        $('#upd023').css({display: 'block'});
        $('.loading').css({display: 'none'});
      }
    })
  }
  addCustomer(){
    this.dateAm = ''; this.amount = ''; this.payAll0 = ''; this.discoundAll = ''; this.payAll = '';
    $('.select2Q').val('undefined').trigger('change.select2');
    this.closeUpAnother();
    $('.loading').css({display: 'block'});
    setTimeout(() => {
      $('.loading').css({display: 'none'});
    }, 100);
     this.yarbs = null;
     this.yarbs0 = false;
     $('.select2Q').removeAttr('disabled');
     $('.goQN').val('undefined').trigger('change.select2');
     this.close();
     this.upS = true;
     this.upS0 = false;
    // const url = this._Router.serializeUrl(
    //   this._Router.createUrlTree(['/visit'])
    // )
    // window.open(`${url}`, "", "width=1100,height=600");
    this.upS = false;
    this.upS0 = true;
  }
  UpdateCustomer(){
    const url = this._Router.serializeUrl(
      this._Router.createUrlTree(['/visit' , { 'data': $('.select2QC').val() }])
    )
    window.open(`${url}`, "", "width=1100,height=600");
  }
  showpho(data: any){
    $('.loading').css({display: 'block'});
    this._ApiService.allIm0({id: data}).subscribe((res)=>{
      if(res.data.length == 0) {
        alert('There are no images for this Item. Please go put pictures for this Item');
        $('.loading').css({display: 'none'});
      } else{
        this.arrImage = res.data;
        this.qwss = true;
        $('#updPho').css({display: 'block'});
        $('.loading').css({display: 'none'});
      }
    })
  }
  closePhot(){
    this.qwss = false;
    this.arrImage = '';
    $('#updPho').css({display: 'none'});
  }
  goPic(v: any){
    this.goImg = true;
    this.www = v;
  }
  goPic0(){
    this.goImg = false;
    this.www = '';
  }
  upN5(){
    let self = this;
    let ff = $('.select2Q').val();
      if(this.nameU == '' || this.nameU == undefined ) {
        alert('Please . Make sure the Name Is entered');
      } else {
        var options = { weekday: "long",  year: "numeric",  month: "short", day: "numeric" };
        var newDateFormat = new Date(this.dateAm).toLocaleDateString("en-US");
        $('.loading').css({display: 'block'});
      this._ApiService.updateSC0A({id: $('.select2Q').val(),pay: this.payAll,discound: this.discoundAll , commssionbroker: this.commision, broker_id: $('.goQN00X0').val(), seller_id: $('.goQN00').val() , dateAm: $('#goDate').val()}).subscribe((res)=> {
        if(res === true) {
          this._ApiService.allSC0().subscribe((res)=>{
            this.arreCustomer = res.data;
            // this._ApiService.allCustomer().subscribe((res)=>{
            //   if(res.check === true){
            //     this.arre = res.data;
            //     $('.select2Q').val(ff);
                // alert('Updated Done Successfully');
            // this.closeUpAnother();
            self.nameU0 = '';
            self.phoneU0 = '';
            self.idUS0 = '';
            self.arre.forEach((element: any) => {
              if(element.id == $('.select2Q').val()){
                self.nameUX = element.sellername;
                $('.goQN00').val(element.seller_id).trigger('change.select2');
                self.nameUX0 = element.brokername;
                $('.goQN00X0').val(element.broker_id).trigger('change.select2');
                self.arreCustomer000.forEach((element0: any) => {
                  if(element0.id == element.broker_id){
                    self.nameU0 = element0.name;
                    self.emailU0 = element0.email;
                    self.phoneU0 = '0' + element0.phone;
                    self.adressU0 = element0.adress;
                    self.idUS0 = element0.id;
                    self.cityU0 = element0.city;
                    self.phone2U0 = element0.phone2;
                    // self.areaU0 = element.area;
                    // self.typeU0 = element.type;
                    self.phone2U0 = '0'+element0.phone2;
                    // self.nameUX = element.sellername;
                    // $('.goQN00').val(element.seller_id).trigger('change.select2');
                    // self.nameUX0 = element.brokername;
                    // $('.goQN00X0').val(element.broker_id).trigger('change.select2');
                  }
                });
              }
            });
            self.amount = 0;
            $('.loading').css({display: 'block'});
            self._ApiService.allCustomerP({id: $('.select2Q').val()}).subscribe((res)=>{
              if(res.check === true){
                let date0 = new Date(res.data[0].date);
                self.dateAm = res.data[0].date
                self.payAll = res.data[0].pay;
                self.commision = res.data[0].commssionbroker;
                setTimeout(() => {
                  self.payAll00 = (self.alltotal - (self.alltotal * (self.discoundAll/100)));
                  self.discoundAllValue = self.alltotal - self.payAll00;
                }, 100);
                self.alltotal = res.data[0].totalprice;
                self.discoundAll = res.data[0].discound;
                var price = self.alltotal / (1 - (self.commision / 100));
                self.price = price;
                self.commisionafter = price - self.alltotal;
                self._ApiService.allCustomerP0({id: $('.select2Q').val()}).subscribe((res0)=>{
                  if(res0.check === true){
                    res0.data.forEach((element: any) => {
                      self.amount = self.amount + element.pay
                    });
                    self.arre00 = res0.data;
                    self.payAll0 = self.amount - (self.amount * ( self.discoundAll / 100));
                    $('.select2QC').val(res.data[0].customer_id).trigger('change.select2');
                    $('.goQN').val(res.data[0].customer_id).trigger('change.select2');
                    self.serchCodeVisit = $('.select2QC').val();
                    self.choose = true;
                    $('#fdgh').css({display: 'block'});
                    $('.loading').css({display: 'none'});
                  } else{
                    alert('error');
                    $('.loading').css({display: 'none'});
                  }
                })
              } else{
                alert('error');
                $('.loading').css({display: 'none'});
              }
            })
            setTimeout(() => {
              $('#ostr').trigger('click');
            }, 400);
              $('.loading').css({display: 'none'});
            //   } else{
            //     alert('error')
            //   }
            // })
          })
        } else {
          alert("Updated Don't Successfully");
          // this.closeUpAnother();
          $('.loading').css({display: 'none'});
        }
      })
      }

  }
  items0Order(){
    $('.loading').css({display: 'block'});
    this._ApiService.orderto({id: $('.select2Q').val()}).subscribe((res)=> {
      this._ApiService.allCustomer().subscribe((res)=>{
        if(res.check === true){
          this.arre = res.data;
        } else{
          alert('error')
        }
      })
      this.ref()
      $('.loading').css({display: 'none'});
    })

  }
  OrderDate00100() {
    $('#im0').trigger('click');
  }

  img(event: any){
    this.countImage = $('#im0')[0].files;
    for(let x = 0 ; x < $('#im0')[0].files.length ; x++){
      const file = new FileReader();
      file.readAsDataURL($('#im0')[0].files[x]);
      file.onload = (oo: any)=>{
      $(`#put44${x}`).attr('src', oo.target.result);
      $(`#but${x} i`).css('display', 'none');
      $(`.but`).css({display: 'inline-block'})
    }
    }
    this.images = event.target.files;
  }
  closeUpB(){
    $('#upd-up').css({display: 'none'});
    this.nameU0 = '';
    this.emailU0 = '';
    this.phoneU0 = '';
    this.phone2U0 = '';
    this.adressU0 = '';
    this.idUS0 = '';
    this.cityU0 = '';
  }
  upUB(data: any){
    this.nameU0 = data.name;
    this.emailU0 = data.email;
    this.phoneU0 = '0' + data.phone;
    this.adressU0 = data.adress;
    this.idUS0 = data.id;
    this.cityU0 = data.city;
    this.phone2U0 = data.phone2;
    $('#upd-up').css({display: 'block'});
  }
  okUpB(data: any){
    if(this.nameU0 == '' || this.nameU0 == undefined ) {
      alert('Please . Make sure the Name Is entered');
    } else {
    data.nameU = this.nameU0 ;
    data.emailU = this.emailU0 ;
    data.phoneU = this.phoneU0;
    data.adressU = this.adressU0;
    data.id = this.idUS0;
    data.cityU = this.cityU0;
     data.phone2U = this.phone2U0;
      $('.loading').css({display: 'block'});
    this._ApiService.updateSC0sB(data).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allSC0sB().subscribe((res)=>{
          this.arreCustomer000 = res.data;
          this._ApiService.allSC0sB().subscribe((res)=>{
            if(res.check === true){
              this.arreCustomer000 = res.data;
                $('.goQN00X0').val(this.idUS0).trigger('change.select2');
            } else{
              alert('error')
            }
          })
          // alert('Updated Done Successfully');
          this.closeUp();
        $('.loading').css({display: 'none'});
        })
      } else {
        alert("Updated Don't Successfully");
        this.closeUp();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  changeDis0() {
    this.discoundAll = (this.discoundAllValue * 100) / this.alltotal;
    $('#gotohill').trigger('click');
  }
  changeDis01(){
    $('#gotohill').trigger('click');
  }
  changeDis02(){
    this.commision = (this.commisionafter * 100) / this.price;

    $('#gotohill').trigger('click');
  }
  returnback(){
    $('#upd-upReturnback').css({display: 'block'});
  }
  closeUpreturnback(){
    $('#upd-upReturnback').css({display: 'none'});
    this.money = '';
  }
  okreturnback(data: any){
    $('.loading').css({display: 'block'});
    data.bill = $('.select2Q').val();
    data.customer = $('.goQN').val();
    this._ApiService.returnback(data).subscribe((res)=>{
      if(res === true){
        this.payAll = this.payAll - data.money;
        this.closeUpreturnback();
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
        $('.loading').css({display: 'none'});
      }
    })
  }
  printall(){
    this.items0("l" , ()=>{
      this.quota = $('.select2Q').val();
      $('.choose2').show();
      $('.choose3').hide();
      $('.prinee').css({borderRight: '1px solid black' });
      this.choose2 = true;
      setTimeout(() => {
        window.print();
        $('.choose2').hide();
      $('.choose3').show();
      this.choose2 = false;
      }, 500);
      })
  }
  ngOnInit(): void {
    let self = this;
    // setTimeout(() => {
      $('.select2, .js-example-basic-multiple').select2();
      $('.goQN').on('select2:select', function (e: any) {
        self.yarbs0 = false;
        self.yarbs = $('.goQN').val();
        setTimeout(() => {
          self.yarbs0 = true;
        }, 100);
        self.arreCustomer.forEach((element: any) => {
          if(element.id == $('.goQN').val()){

            self.nameU = element.name;
            self.emailU = element.email;
            self.phoneU = '0' + element.phone;
            self.adressU = element.adress;
            self.idUS = element.id;
            self.cityU = element.city;
            self.areaU = element.area;
            self.typeU = element.type;
            self.phone2U = '0'+element.phone2
            // self.nameUX = element.sellername;
            // $('.goQN00').val(element.seller_id).trigger('change.select2');
            // self.nameUX0 = element.brokername;
            // $('.goQN00X0').val(element.broker_id).trigger('change.select2');
          }
        });
      })
      $('.goQN00X0').on('select2:select', function (e: any) {
        self.arreCustomer000.forEach((element0: any) => {
          if(element0.id == $('.goQN00X0').val()){
            self.nameU0 = element0.name;
            self.emailU0 = element0.email;
            self.phoneU0 = '0' + element0.phone;
            self.adressU0 = element0.adress;
            self.idUS0 = element0.id;
            self.cityU0 = element0.city;
            self.phone2U0 = element0.phone2;
            // self.areaU0 = element.area;
            // self.typeU0 = element.type;
            // self.phone2U0 = '0'+element.phone2
            // self.nameUX = element.sellername;
            // $('.goQN00').val(element.seller_id).trigger('change.select2');
            // self.nameUX0 = element.brokername;
            // $('.goQN00X0').val(element.broker_id).trigger('change.select2');
          }
        });
      })
      $('.select2Q').on('select2:select', function (e: any) {
        self.quota = $('.select2Q').val();
        self.nameU0 = '';
        self.phoneU0 = '';
        self.idUS0 = '';
        $('.delall').css({display: 'inline-block'})
        self.arre.forEach((element: any) => {
          if(element.id == $('.select2Q').val()){
            self.nameUX = element.sellername;
            $('.goQN00').val(element.seller_id).trigger('change.select2');
            self.nameUX0 = element.brokername;
            $('.goQN00X0').val(element.broker_id).trigger('change.select2');
            self.arreCustomer000.forEach((element0: any) => {
              if(element0.id == element.broker_id){
                self.nameU0 = element0.name;
                self.emailU0 = element0.email;
                self.phoneU0 = '0' + element0.phone;
                self.adressU0 = element0.adress;
                self.idUS0 = element0.id;
                self.cityU0 = element0.city;
                self.phone2U0 = element0.phone2;
                // self.areaU0 = element.area;
                // self.typeU0 = element.type;
                self.phone2U0 = '0'+element0.phone2;
                // self.nameUX = element.sellername;
                // $('.goQN00').val(element.seller_id).trigger('change.select2');
                // self.nameUX0 = element.brokername;
                // $('.goQN00X0').val(element.broker_id).trigger('change.select2');
              }
            });
          }
        });
        self.amount = 0;
        $('.loading').css({display: 'block'});
        self._ApiService.allCustomerP({id: $('.select2Q').val()}).subscribe((res)=>{
          if(res.check === true){
            let date0 = new Date(res.data[0].date);
            self.dateAm = res.data[0].date
            self.payAll = res.data[0].pay;
            self.commision = res.data[0].commssionbroker;
            setTimeout(() => {
              self.payAll00 = (self.alltotal - (self.alltotal * (self.discoundAll/100)));
              self.discoundAllValue = self.alltotal - self.payAll00;
            }, 100);
            self.alltotal = res.data[0].totalprice;
            self.discoundAll = res.data[0].discound;
            var price = self.alltotal / (1 - (self.commision / 100));
            self.price = price;
            self.commisionafter = price - self.alltotal;
            self._ApiService.allCustomerP0({id: $('.select2Q').val()}).subscribe((res0)=>{
              if(res0.check === true){
                res0.data.forEach((element: any) => {
                  self.amount = self.amount + element.pay
                });
                self.arre00 = res0.data;
                self.payAll0 = self.amount - (self.amount * ( self.discoundAll / 100));
                $('.select2QC').val(res.data[0].customer_id).trigger('change.select2');
                $('.goQN').val(res.data[0].customer_id).trigger('change.select2');
                self.serchCodeVisit = $('.select2QC').val();
                self.choose = true;
                $('#fdgh').css({display: 'block'});
                $('.loading').css({display: 'none'});
              } else{
                alert('error');
                $('.loading').css({display: 'none'});
              }
            })
          } else{
            alert('error');
            $('.loading').css({display: 'none'});
          }
        })
        setTimeout(() => {
          $('#ostr').trigger('click');
        }, 400);
      });
      $('.selectPlus').on('select2:select', function (e: any) {
        self.QtyAvaliable = [];
        self.allI.forEach((element: any) => {
          if (element.code == $('.selectPlus').val()) {
            self.QtyAvaliable.push(element);
          }
        });
        self.goQty0 = true;
      });
      $('.selectPlusR').on('select2:select', function (e: any) {
        self.QtyAvaliable.forEach((element: any) => {
          if (element.place == $('.selectPlusR').val()) {
            self.ost = 'available quantity is ' +  element.qty;
            self.priceSeller = element.price;
          }
        });
      });
    // }, 500);
    var date = new Date();

    var day: any = date.getDate();
    var month: any = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#theDate").val(today);
    this.date = today;
  }

}
