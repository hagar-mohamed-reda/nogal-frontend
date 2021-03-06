import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  arre: any;
  show = false;
  name: any;
  email: any;
  password: any;
  adress: any;
  root: any;
  rootSe2: any;
  rootSe20: any;
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
  rootSearchType = 'أبحث بنوع الفرع';
  notes: any;
  typeofroot: any;
  typeofrootA: any;
  idDCa: any;
  typeofrootU: any;
  notesU: any;
  idUpCa: any;
  city: any;
  location: any;
  cityU: any;
  locationU: any;
  allCa:any;
  item: any = undefined;
  itemR0: any = undefined;
  itemR00: any = undefined;
  items: any;
  adminRoot: any;
  allCa0: any;
  allCaAns: any;
  allCaAnsRF: any;
  qty: any;
  rootname: any;
  ost: any = 'Qty';
  avalQty: any = 0;
  ost1: any = 'Qty';
  avalQty1: any = 0;
  allCaAnsRFNot: any = [];
  allCaAnsNot: any = [];
  pi: any = [];
  selectpin: any = 'PI NO';
  selectpin0: any = 'PI NO';
  searchsupplier = 'Search By Supplier'
  searchsupplier0 = 'Search By Supplier'
  supplierA: any;
  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent ) {
    this._AppComponent.activeP = '';
    this._AppComponent.activeU = '';
    this._AppComponent.activeS = '';
    this._AppComponent.activeR = '';
    this._AppComponent.activeI = '';
    this._AppComponent.activeC = '';
    this._AppComponent.activeCu = '';
    this._AppComponent.activeCR = 'active';
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
    this._ApiService.allS().subscribe((res)=>{
      if(res.check === true){
        this.supplierA = res.data;
        this.ngOnInit();
      } else{

        alert('error')
      }
    })
    this._ApiService.allRequestRFAns00().subscribe((res)=>{
      this.allCaAnsRFNot = [];
      this.allCaAnsRF = res;
      this.allCaAnsRF.forEach((element: any) => {
        if (element.replay == 0) {
          this.allCaAnsRFNot.push(' ');
        }
      });
      this.ngOnInit();
      this._AppComponent.refreshNotification();
    })
    this._ApiService.allRequestRFAns().subscribe((res)=>{
      this.allCaAnsNot = [];
      this.allCaAns = res;
      this.allCaAns.forEach((element: any) => {
        if (element.replay == 0) {
          this.allCaAnsNot.push(' ');
        }
      });
      this.ngOnInit();
    })
    this._ApiService.allRequestRF().subscribe((res)=>{
      this.allCa0 = res;
      this.ngOnInit();
    })
    this._ApiService.allRequest().subscribe((res)=>{
      this.allCa = res;
      this.ngOnInit();
    })
    this._ApiService.allI().subscribe((res)=>{
      if(res.check === true){
        this.items = res.data;
        this.ngOnInit();
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
      }
    })
    this._ApiService.getRoots().subscribe((res)=>{
      this.rootA = res;
      this.ngOnInit();
    })
    this._ApiService.getTypeOfRoot().subscribe((res)=>{
      this.typeofrootA = res;
      this.ngOnInit();
    })

    this._ApiService.Profile().subscribe((res)=>{
      if(res.check === true) {
        this._AppComponent.refreshNotification()
        this.show = true;
        this.adminRoot = res.root;
        this.rootname = res.rootname;
        this.ngOnInit();
      } else {
        this._Router.navigate([''])
        this.show = false;
      }
    })
    this._ApiService.allUsers().subscribe((res)=>{
      if(res.check === true){
        this.arre = res.data;
        this.ngOnInit();
      } else{
        alert('error')
      }
    })
    this._AppComponent.goProfile();
   }
   upCaHH(data: any){
    $('.loading').css({display: 'block'});
    this._ApiService.accept({id: data.id, root: data.from0 , code: data.code , qty: data.qty}).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allRequestRFAns().subscribe((res)=>{
          this.allCaAnsNot = [];
          this.allCaAns = res;
          this.allCaAns.forEach((element: any) => {
            if (element.replay == 0) {
              this.allCaAnsNot.push(' ');
            }
          });
          this._AppComponent.refreshNotification();
          alert('Successfully approved');
          $('.loading').css({display: 'none'});
        })
      }
    })
   }
   upCaHHHH(data: any){
    $('.loading').css({display: 'block'});
    this._ApiService.acceptHH({id: data.id, root: data.to0 , code: data.code , qty: data.qty}).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allRequestRFAns00().subscribe((res)=>{
          this.allCaAnsRFNot = [];
          this.allCaAnsRF = res;
          this.allCaAnsRF.forEach((element: any) => {
            if (element.replay == 0) {
              this.allCaAnsRFNot.push(' ');
            }
          });
          this._AppComponent.refreshNotification();
          alert('Successfully approved');
          $('.loading').css({display: 'none'});
        })
      }
    })
   }
   delCaHH(id: any){
    $('.loading').css({display: 'block'});
    this._ApiService.acceptNo({id: id}).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allRequestRFAns().subscribe((res)=>{
          this.allCaAnsNot = [];
          this.allCaAns = res;
          this.allCaAns.forEach((element: any) => {
            if (element.replay == 0) {
              this.allCaAnsNot.push(' ');
            }
          });
          this._AppComponent.refreshNotification();
          alert('The rejection process is successful');
          $('.loading').css({display: 'none'});
        })
      }
    })
   }
   delCaHHHH(id: any){
    $('.loading').css({display: 'block'});
    this._ApiService.acceptNoHH({id: id}).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allRequestRFAns00().subscribe((res)=>{
          this.allCaAnsRFNot = [];
          this.allCaAnsRF = res;
          this.allCaAnsRF.forEach((element: any) => {
            if (element.replay == 0) {
              this.allCaAnsRFNot.push(' ');
            }
          });
          this._AppComponent.refreshNotification();
          alert('The rejection process is successful');
          $('.loading').css({display: 'none'});
        })
      }
    })
   }
   closeUpCa(){
    $('#upd-up').css({display: 'none'});
    this.root = '';
    this.item = '';
    this.idUpCa = '';
    this.qty = '';
    $('.selectroot0').val('undefined').trigger('change.select2');
    $('.selectitem0').val('undefined').trigger('change.select2');
  }
  upCa(data: any){
    this.root = data.to0;
    this.item = data.item;
    this.idUpCa = data.id;
    this.qty = data.qty;
    $('.selectroot0').val(data.to0).trigger('change.select2');
    $('.selectitem0').val(data.item).trigger('change.select2');
    $('#upd-up').css({display: 'block'});
  }
  upCaRF(data: any){
    this.root = data.from0;
    this.item = data.item;
    this.idUpCa = data.id;
    this.qty = data.qty;
    $('.selectroot000').val(data.to0).trigger('change.select2');
    $('.selectitem000').val(data.item).trigger('change.select2');
    $('#upd-upRF').css({display: 'block'});
  }
  closeUpCaRF(){
    $('#upd-upRF').css({display: 'none'});
    this.root = '';
    this.item = '';
    this.idUpCa = '';
    this.qty = '';
    $('.selectroot000').val('undefined').trigger('change.select2');
    $('.selectitem000').val('undefined').trigger('change.select2');
  }
  okUp(data: any){
    if($('.selectroot0').val() == '' || $('.selectroot0').val() == undefined || $('.selectitem0').val() == '' || $('.selectitem0').val() == undefined || this.qty == '' || this.qty == undefined ) {
      alert('Please enter all data completely');
    } else {
      data.id = this.idUpCa;
      data.root = $('.selectroot0').val();
      data.item = $('.selectitem0').val();
      $('.loading').css({display: 'block'});
    this._ApiService.updateRequestto(data).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allRequest().subscribe((res)=>{
          this.allCa = res;
          alert('Updated Done Successfully');
          this.closeUpCa();
        $('.loading').css({display: 'none'});
        })
      } else {
        alert("Updated Don't Successfully");
        this.closeUpCa();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  okUpRF(data: any){
    if($('.selectroot000').val() == '' || $('.selectroot000').val() == undefined || $('.selectitem000').val() == '' || $('.selectitem000').val() == undefined || this.qty == '' || this.qty == undefined ) {
      alert('Please enter all data completely');
    } else {
      data.id = this.idUpCa;
      data.root = $('.selectroot000').val();
      data.item = $('.selectitem000').val();
      $('.loading').css({display: 'block'});
    this._ApiService.updateRequesttoRF(data).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allRequestRF().subscribe((res)=>{
          this.allCa0 = res;
          alert('Updated Done Successfully');
          this.closeUpCaRF();
        $('.loading').css({display: 'none'});
        })
      } else {
        alert("Updated Don't Successfully");
        this.closeUpCaRF();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  delCa(id: any){
    $('#upd-dd').css({display: 'block'});
    this.idDCa = id;
  }
  delCaRF(id: any){
    $('#upd-ddRF').css({display: 'block'});
    this.idDCa = id;
  }
  closedC(){
    $('#upd-dd').css({display: 'none'});
    this.idDCa = '';
  }
  closedCRF(){
    $('#upd-ddRF').css({display: 'none'});
    this.idDCa = '';
  }
  ok(){
    $('.loading').css({display: 'block'});
    var x = this.idDCa;
    this._ApiService.delRequestto({id: x}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allRequest().subscribe((res)=>{
          this.allCa = res;
          alert('Deleted Done Successfully');
          this.closedC();
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('Deleted Not Successfully\nPlease, if you want to delete this Branch, you must delete all his pre request on the site');
        this.closedC();
        $('.loading').css({display: 'none'});
      }
    })
  }
  okRF(){
    $('.loading').css({display: 'block'});
    var x = this.idDCa;
    this._ApiService.delRequesttoRF({id: x}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allRequestRF().subscribe((res)=>{
          this.allCa0 = res;
          alert('Deleted Done Successfully');
          this.closedCRF();
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('Deleted Not Successfully\nPlease, if you want to delete this Branch, you must delete all his pre request on the site');
        this.closedCRF();
        $('.loading').css({display: 'none'});
      }
    })
  }
  addC(){
    $('#upd').css({display: 'block'});
  }
  addCRF(){
    $('#updRF').css({display: 'block'});
  }
  addCa(data: any){
    var x = 0 ;
    var y = 0;
    if($('.selectitem').val() === 'All' && $('.selectroot').val() != undefined && $('.selectroot').val() != '' &&  this.searchsupplier != 'All' &&  this.searchsupplier != '' &&  this.searchsupplier != undefined &&  this.searchsupplier != 'Search By Supplier') {
      if($('.selectpin').val() === 'All' || $('.selectpin').val() === 'PI NO' || $('.selectpin').val() === null || $('.selectpin').val() == undefined || $('.selectpin').val() == 'undefined') {
        x = this.items.length;
        this.items.forEach((element: any) => {
          y = y + 1
          $('.loading').css({display: 'block'});
          if(element.place == this.adminRoot && element.supplier == this.searchsupplier) {
            data.qty = element.qty;
            data.item = element.id;
            data.root = $('.selectroot').val();
            this._ApiService.addRequestto(data).subscribe((res)=>{
              if(res.check === true){
                console.log(x , y)
                if(x == y ) {
                  console.log(true)
                  this._ApiService.allRequest().subscribe((res)=>{
                    this.allCa = res;
                    // alert('Added successfully');
                    this.close();
                    $('.loading').css({display: 'none'});
                  })
                }
              } else {
                alert('Not added successfully');
                this.close();
                $('.loading').css({display: 'none'});
              }
            })
          }
        });
      } else {
        x = this.items.length;
        this.items.forEach((element: any) => {
          y = y + 1
          $('.loading').css({display: 'block'});
          if(element.place == this.adminRoot && element.supplier == this.searchsupplier && element.pino == $('.selectpin').val() ) {
            data.qty = element.qty;
            data.item = element.id;
            data.root = $('.selectroot').val();
            this._ApiService.addRequestto(data).subscribe((res)=>{
              if(res.check === true){
                console.log(x , y)
                if(x == y ) {
                  console.log(true)
                  this._ApiService.allRequest().subscribe((res)=>{
                    this.allCa = res;
                    // alert('Added successfully');
                    this.close();
                    $('.loading').css({display: 'none'});
                  })
                }
              } else {
                alert('Not added successfully');
                this.close();
                $('.loading').css({display: 'none'});
              }
            })
          }
        });
      }
    } else {
      if($('.selectroot').val() == '' || $('.selectroot').val() == undefined || $('.selectitem').val() == '' || $('.selectitem').val() == undefined || this.qty == '' || this.qty == undefined ) {
        alert('Please enter all data completely');
      } else {
        if(data.qty > this.avalQty) {
          alert('Qty Not Available');
        } else {
          data.root = $('.selectroot').val();
        data.item = $('.selectitem').val();
        $('.loading').css({display: 'block'});
      this._ApiService.addRequestto(data).subscribe((res)=>{
        if(res.check === true){
          this._ApiService.allRequest().subscribe((res)=>{
            this.allCa = res;
            // alert('Added successfully');
            this.close();
            $('.loading').css({display: 'none'});
          })
        } else {
          alert('Not added successfully');
          this.close();
          $('.loading').css({display: 'none'});
        }
      })
        }
      }
    }
  }
  addCaRF(data: any){
    var x = 0 ;
    var y = 0;
    if($('.selectitem00').val() === 'All' && $('.selectroot00').val() != undefined && $('.selectroot00').val() != '' &&  this.searchsupplier0 != 'All' &&  this.searchsupplier0 != '' &&  this.searchsupplier0 != undefined &&  this.searchsupplier0 != 'Search By Supplier') {
      if($('.selectpin0').val() === 'All' || $('.selectpin0').val() === 'PI NO' || $('.selectpin0').val() === null || $('.selectpin0').val() == undefined || $('.selectpin0').val() == 'undefined') {
        x = this.items.length;
        this.items.forEach((element: any) => {
          y = y + 1
          $('.loading').css({display: 'block'});
          if(element.place == $('.selectroot00').val() && element.supplier == this.searchsupplier0) {
            data.root = $('.selectroot00').val();
      data.item = element.id;
      data.qty = element.qty;
      $('.loading').css({display: 'block'});
    this._ApiService.addRequesttoRF(data).subscribe((res)=>{
      if(res.check === true){
        if(x == y ) {
          this._ApiService.allRequestRF().subscribe((res)=>{
            this.allCa0 = res;
            // alert('Added successfully');
            this.closeRF();
            $('.loading').css({display: 'none'});
          })
        }
      } else {
        alert('Not added successfully');
        this.closeRF();
        $('.loading').css({display: 'none'});
      }
    })
          }
        })
      } else {
        x = this.items.length;
        this.items.forEach((element: any) => {
          y = y + 1
          $('.loading').css({display: 'block'});
          if(element.place == $('.selectroot00').val() && element.supplier == this.searchsupplier0 && element.pino == $('.selectpin0').val() ) {
            data.root = $('.selectroot00').val();
      data.item = element.id;
      data.qty = element.qty;
      $('.loading').css({display: 'block'});
    this._ApiService.addRequesttoRF(data).subscribe((res)=>{
      if(res.check === true){
        if(x == y ) {
          this._ApiService.allRequestRF().subscribe((res)=>{
            this.allCa0 = res;
            // alert('Added successfully');
            this.closeRF();
            $('.loading').css({display: 'none'});
          })
        }
      } else {
        alert('Not added successfully');
        this.closeRF();
        $('.loading').css({display: 'none'});
      }
    })
          }
        })
      }
    } else {
    if($('.selectroot00').val() == '' || $('.selectroot00').val() == undefined || $('.selectitem00').val() == '' || $('.selectitem00').val() == undefined || this.qty == '' || this.qty == undefined ) {
      alert('Please enter all data completely');
    } else {
      if(data.qty > this.avalQty1) {
        alert('Qty Not Available');
      } else {
        data.root = $('.selectroot00').val();
      data.item = $('.selectitem00').val();
      $('.loading').css({display: 'block'});
    this._ApiService.addRequesttoRF(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allRequestRF().subscribe((res)=>{
          this.allCa0 = res;
          alert('Added successfully');
          this.closeRF();
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('Not added successfully');
        this.closeRF();
        $('.loading').css({display: 'none'});
      }
    })
      }
    }
  }
  }
  close(){
    $('#upd').css({display: 'none'});
    this.root = '';
    this.item = '';
    this.qty = '';
    $('.selectroot').val('undefined').trigger('change.select2');
    $('.selectitem').val('undefined').trigger('change.select2');
  }
  closeRF(){
      $('#updRF').css({display: 'none'});
      this.root = '';
      this.item = '';
      this.qty = '';
    $('.selectroot00').val('undefined').trigger('change.select2');
    $('.selectitem00').val('undefined').trigger('change.select2');
  }
  addUser0(data: any){
    if(this.name == '' || this.email == '' || this.password == '' || this.adress == '' || this.root == '' || this.phone == '' || this.control == '' || this.name == undefined || this.email == undefined || this.password == undefined || this.adress == undefined || this.root == undefined || this.phone == undefined || this.control == undefined ) {
      alert('من فضلك أدخل جميع البيانات بالكامل');
    } else {
      $('.loading').css({display: 'block'});
    this._ApiService.addUser(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allUsers().subscribe((res0)=>{
          if(res0.check === true){
            this.arre = res0.data;
            alert('تم الأضافه');
            this.close();
            $('.loading').css({display: 'none'});
          } else{
            alert('error');
          }
        })
      } else {
        alert('لم تتم الأضافة');
        this.close();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  refuu(){
    this.searchsupplier = 'Search By Supplier';
    this.searchsupplier0 = 'Search By Supplier';
    this.selectpin = 'PI NO';
    this.selectpin0 = 'PI NO';
    $('.selectpin').val('undefined').trigger('change.select2');
    $('.selectpin0').val('undefined').trigger('change.select2');
    $('.selectsearchsupplier').val('Search By Supplier').trigger('change.select2');
    $('.selectsearchsupplier0').val('Search By Supplier').trigger('change.select2');
  }


  ngOnInit(): void {
    let self = this;
    // setTimeout(() => {
      $('.select2, .js-example-basic-multiple').select2();
      $('.selectroot00').on('select2:select', function (e: any) {
        self.root = $('.selectroot00').val();
      });
      $('.selectroot00R').on('select2:select', function (e: any) {
        self.rootSe2 = $('.selectroot00R').val();
      });
      $('.selectroot00R0').on('select2:select', function (e: any) {
        self.rootSe20 = $('.selectroot00R0').val();
      });
      $('.selectroot000').on('select2:select', function (e: any) {
        self.root = $('.selectroot000').val();
      });
    // }, 500);
    $('.selectitem').on('select2:select', function (e: any) {
      self.items.forEach((element: any) => {
        if(element.id == $('.selectitem').val()) {
          self.avalQty = element.qty;
          self.ost = 'available quantity is ' +  element.qty;
        }
      });
    });
    $('.selectitem00').on('select2:select', function (e: any) {
      self.items.forEach((element: any) => {
        if(element.id == $('.selectitem00').val()) {
          self.avalQty1 = element.qty;
          self.ost1 = 'available quantity is ' +  element.qty;
        }
      });
    });
    $('.selectitem00R').on('select2:select', function (e: any) {
      self.itemR0 = $('.selectitem00R').val();
    });
    $('.selectitem00R0').on('select2:select', function (e: any) {
      self.itemR00 = $('.selectitem00R0').val();
    });
    $('.selectsearchsupplier').on('select2:select', function (e: any) {
      self.pi = [];
      $('.selectpin').val('undefined').trigger('change.select2');
      self.selectpin = 'All';
      self.searchsupplier = $('.selectsearchsupplier').val()
      self.supplierA.forEach((element: any) => {
        if(element.id == $('.selectsearchsupplier').val()){
          for(var i = 0 ; i < element.pinoS ; i++) {
            self.pi.push(' ');
          }
        }
      });
    });
    $('.selectsearchsupplier0').on('select2:select', function (e: any) {
      self.pi = [];
      $('.selectpin0').val('undefined').trigger('change.select2');
      self.selectpin0 = 'All';
      self.searchsupplier0 = $('.selectsearchsupplier0').val()
      self.supplierA.forEach((element: any) => {
        if(element.id == $('.selectsearchsupplier0').val()){
          for(var i = 0 ; i < element.pinoS ; i++) {
            self.pi.push(' ');
          }
        }
      });
    });
    $('.selectpin').on('select2:select', function (e: any) {
      self.selectpin = $('.selectpin').val()
    });
    $('.selectpin0').on('select2:select', function (e: any) {
      self.selectpin0 = $('.selectpin0').val()
    });
  }

}
