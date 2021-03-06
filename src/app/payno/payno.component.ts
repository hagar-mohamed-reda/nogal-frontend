import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-payno',
  templateUrl: './payno.component.html',
  styleUrls: ['./payno.component.scss']
})
export class PaynoComponent implements OnInit {

  arre: any;
  show = false;
  name: any;
  email: any;
  password: any;
  adress: any;
  root: any = undefined;
  phone: any;
  control: any;
  idDI: any;
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
  description: any;
  dimensions: any;
  fabric: any;
  category: any = undefined;
  qty: any;
  price: any;
  supplier: any = undefined;
  supplierA: any;
  serchCode: any;
  images: any = [];
  countImage: any;
  arrImage: any = [{url: ''}];
  qwss = false;
  descriptionU: any;
  dimensionsU: any;
  fabricU: any;
   categoryU: any;
   qtyU: any;
   priceU: any;
   supplierU: any;
   rootU0: any;
   idUpI: any;
   allCa: any;
   arre0: any;
   dateorder: any;
   datereceipt: any;
   numberofitems: any;
   nameR: any;
   dateorderU: any;
   datereceiptU: any;
   numberofitemsU: any;
   dataGo: any;
   payGo: any;
   notesGo: any;
  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent ) {
    this._AppComponent.activeU = '';
    this._AppComponent.activeR = '';
    this._AppComponent.activeS = '';
    this._AppComponent.activeC = '';
    this._AppComponent.activeI = '';
    this._AppComponent.activeP = 'active';
    this._AppComponent.activeCu = '';
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
    this._ApiService.allpayno().subscribe((res)=>{
      this.arre0 = res;
    })
    this._ApiService.allCa().subscribe((res)=>{
      this.allCa = res;
    })
    this._ApiService.allS().subscribe((res)=>{
      if(res.check === true){
        this.supplierA = res.data;
      } else{
        alert('error')
      }
    })
    this._ApiService.getRoots().subscribe((res)=>{
      this.rootA = res;
    })
    this._ApiService.getControls().subscribe((res)=>{
      this.controlA = res;
    })

    this._ApiService.Profile().subscribe((res)=>{
      if(res.check === true) {
        this._AppComponent.refreshNotification()
        this.show = true;
      } else {
        this._Router.navigate([''])
        this.show = false;
      }
    })
    this._ApiService.allI().subscribe((res)=>{
      if(res.check === true){
        this.arre = res.data;
      } else{
        alert('error')
      }
    })
    this._AppComponent.goProfile();
   }
   closeUpI(){
    $('#upd-up').css({display: 'none'});
    this.descriptionU = '';
    this.dateorderU = '';
    this.datereceiptU = '';
    this.numberofitemsU = '';
    this.priceU = '';
    this.nameU = '';
    this.idUpI = '';
  }
  upI(data: any){
    this.descriptionU = data.description;
    this.dateorderU = data.dateorder;
    this.datereceiptU = data.datereceipt;
    this.numberofitemsU = data.numberofitems;
    this.priceU = data.price;
    this.nameU = data.name;
    this.idUpI = data.id;
    $('#upd-up').css({display: 'block'});
  }
  okUp(data: any){
    data.id = this.idUpI;
    if(this.descriptionU == '' || this.dateorderU == '' || this.datereceiptU == '' || this.numberofitemsU == ''  || this.nameU == '' || this.descriptionU == undefined || this.dateorderU == undefined || this.datereceiptU == undefined || this.numberofitemsU == undefined  || this.nameU == undefined ) {
      alert('من فضلك أدخل جميع البيانات بالكامل');
    } else {
      $('.loading').css({display: 'block'});
    this._ApiService.updateI0(data).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allpayno().subscribe((res)=>{
          this.arre0 = res;
          alert('تم التعديل');
          this.closeUpI();
        $('.loading').css({display: 'none'});
        })
      } else {
        alert('لم يتم التعديل');
        this.closeUpI();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
   delI(id: any, name: any){
    $('#upd-dd').css({display: 'block'});
    this.idDI = id;
    this.nameR = name;
  }
  closedd(){
    $('#upd-dd').css({display: 'none'});
    this.idDI = '';
  }
  ok(){
    $('.loading').css({display: 'block'});
    var x = this.idDI;
    let r = this.nameR;
    this._ApiService.delI0({id: x , name: r}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allpayno().subscribe((res)=>{
          this.arre0 = res;
          alert('تم المسح بنجاح');
          this.closedd();
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('لم يتم المسح بنجاح');
        this.closedd();
        $('.loading').css({display: 'none'});
      }
    })
  }
  addO(){
    $('#upd').css({display: 'block'});
  }
  close(){
    $('#upd').css({display: 'none'});
    this.description = '';
    this.name = '';
    this.numberofitems = '';
    this.datereceipt = '';
    this.dateorder = '';
    this.price = '';
    $(`.but`).css({display: 'none'})
  }
  addS0(data: any){
    if(this.description == '' || this.name == '' || this.numberofitems == '' || this.datereceipt == '' || this.dateorder == '' || this.price == '' || this.description == undefined || this.name == undefined || this.numberofitems == undefined || this.datereceipt == undefined || this.dateorder == undefined || this.price == undefined ) {
      alert('من فضلك أدخل جميع البيانات بالكامل');
     }
    else {
      $('.loading').css({display: 'block'});
    this._ApiService.addP(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allpayno().subscribe((res0)=>{
            this.arre0 = res0;
            alert('تم الأضافه');
            this.close();
            $('.loading').css({display: 'none'});
        })
      } else {
        alert('لم تتم الأضافة');
        this.close();
        $('.loading').css({display: 'none'});
      }
    })
    }
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
  showpho(data: any){
    $('.loading').css({display: 'block'});
    this._ApiService.allIm({id: data}).subscribe((res)=>{
      if(res.data.length == 0) {
        alert('لا يوجد صور لهذا المنتج من فضلك أذهب وضع صور لهذا المنتج');
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
  delSPay(data: any){
    if(data.cashno === 0){
      alert('تم دفع جميع المستحقات');
    } else {
      this.dataGo = data;
      $('#upd-ddGoP').css({display: 'block'});
    }
  }
  closeddGoP(){
    this.dataGo = '';
    this.payGo = '';
    this.notesGo = '';
    $('#upd-ddGoP').css({display: 'none'});
  }
  Go12(data: any){
    if(data.payGo == '' || data.payGo == undefined || data.notesGo == undefined || data.notesGo == '') {
      alert('من فضلك أدخل البيانات بالكامل');
    } else {
      $('.loading').css({display: 'block'});
      if(data.payGo > this.dataGo.cashno || data.payGo < 0) {
        alert('هذا المبلغ خطأ');
        $('.loading').css({display: 'none'});
      } else {
        let rt = this.dataGo.cashno - data.payGo;
        let rt0 = data.payGo + this.dataGo.cashno;
        data.rt = rt;
        data.rt0 = rt0;
        data.id = this.dataGo.id;
        this._ApiService.addPayOrder(data).subscribe((res)=>{
          if(res === true) {
            this._ApiService.allpayno().subscribe((res)=>{
              alert('تمت عملية الدفع بنجاح');
              this.arre0 = res;
              this.closeddGoP();
              $('.loading').css({display: 'none'});
            })
          } else {
              alert('لم تتم عملية الدفع بنجاح');
              this.closeddGoP();
          }
        })
      }
    }
  }


  ngOnInit(): void {
  }

}
