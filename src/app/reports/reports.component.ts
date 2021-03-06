import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Helper } from '../helper';
declare var JsBarcode:any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

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
  rootSearch = 'Search By Branch';
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
  serchCodeStore: any;
  serchCode00: any;
  images: any = '';
  countImage: any;
  countImage0: any;
  arrImage: any;
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
   payno: any;
   paynoArr: any;
   paynoU: any;
   codeOut: any;
   codeOutU: any;
   oldSupplier: any;
   placeSearch = 'Search By Branch';
   placeSearchStore = 'Search By Branch';
   searchsupplier = 'Search By Supplier'
   searchsupplierBar = 'Search By Supplier'
   piNo: any = 0;
   go = false;
   dateorder: any;
   datereceipt: any;
   rootSa: any;
   excel: any;
   imageShowU = false;
   imageShowA = true;
   arrI: any;
   imgget =  false;
   categoryPrint: any;
   dimPrint: any;
   pricePrint: any;
   OrderDate00 = true;
   OrderDate01 = false;
   OrderDate000 = true;
   OrderDate010 = false;
   searchPINO: any = 'PI NO';
   selectpin: any = 'PI NO';
   selectpinBar: any = 'PI NO';
   pi: any = [];
   discoundPrint: any;
   valDis: any;
   pricePrint0: any;
   dis = false;
   www: any;
   goImg: any = false;
   categorySearch: any;
   defect: any;
   defectU: any;
   notes: any;
   notesU: any;
   customer_id: any = 'undefined';
   arreCustomer: any;
   arreReportCustomer: any;
   arrePayment: any;
   arreParcode: any;
   arreStore: any;
   dateFrom: any = 'All';
   dateTo: any;
   OrderDate000S: any = true;
   OrderDate000S0: any = false;
   OrderDate000SS: any = true;
   OrderDate000SS0: any = false;
   dateFromSu: any = 'All';
   dateToSu: any;
   OrderDate000SSu: any = true;
   OrderDate000S0Su: any = false;
   OrderDate000SSSu: any = true;
   OrderDate000SS0Su: any = false;
   arreNo00: any;
   yarbs: any = null;
   yarbs000: any = 'All';
   yarbsS: any = 'All';
   dateFromCustomer: any = 'All';
   dateToCustomer: any;
   OrderDate000SCustomer: any = true;
   OrderDate000S0Customer: any = false;
   OrderDate000SSCustomer: any = true;
   OrderDate000SS0Customer: any = false;
   dateFromStore: any = 'All';
   dateToStore: any;
   OrderDate000SStore: any = true;
   OrderDate000S0Store: any = false;
   OrderDate000SSStore: any = true;
   OrderDate000SS0Store: any = false;
   dateFromBarcode: any = 'All';
   dateToBarcode: any;
   OrderDate000SBarcode: any = true;
   OrderDate000S0Barcode: any = false;
   OrderDate000SSBarcode: any = true;
   OrderDate000SS0Barcode: any = false;
   nameSubPri: any = 'All';
   nameStore: any = 'All';
   namePr: any = 'All';
   cityPr: any = 'All';
   adressPr: any = 'All';
  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent ) {
    this._AppComponent.activeU = '';
    this._AppComponent.activeR = '';
    this._AppComponent.activeS = '';
    this._AppComponent.activeC = '';
    this._AppComponent.activeI = '';
    this._AppComponent.activeP = '';
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
    this._AppComponent.activeHReport = 'active';
    this._ApiService.allCustomerNot().subscribe((res)=>{
      if(res.check === true){
        this.arreNo00 = res.data;
        this.ngOnInit();
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
      }
    })
    this._ApiService.allpaynoPay().subscribe((res)=>{
      this.arrePayment = res;
      this.ngOnInit();
    })
    this._ApiService.allpayno().subscribe((res)=>{
      this.paynoArr = res;
      this.ngOnInit();
    })
    this._ApiService.allSC0().subscribe((res)=>{
      if(res.check === true){
        this.arreCustomer = res.data;
        this.ngOnInit();
      } else{
        alert('error')
      }
    })
    this._ApiService.allCa().subscribe((res)=>{
      this.allCa = res;
      this.ngOnInit();
    })
    this._ApiService.allS().subscribe((res)=>{
      if(res.check === true){
        this.supplierA = res.data;
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

        //this._Router.navigate([''])
        this.show = false;
      }
    })
    this._ApiService.allI().subscribe((res)=>{
      if(res.check === true){
        this.arre = res.data;
        this.arreParcode = res.data;
        this.arreStore = res.data;
        this.ngOnInit();
        $('.loading').css({display: 'none'});
      } else{

        alert('error')
      }
    })
    this._ApiService.allIB().subscribe((res)=>{
      if(res.check === true){
        this.arreReportCustomer = res.data;
        this.ngOnInit();
      } else{

        alert('error')
      }
    })
    this._AppComponent.goProfile();
   }
   sho(arr: any , id: any){
     arr.forEach((element: any) => {
       if(element.id == id){
         this.piNo = element.pinoS;
         this.go = true;
       }

     });
   }
   closeUpI(){
    $('#upd-up').css({display: 'none'});
    this.descriptionU = '';
    this.dimensionsU = '';
    this.fabricU = '';
    this.categoryU = '';
    this.qtyU = '';
    this.priceU = '';
    this.supplierU = '';
    this.rootU0 = '';
    this.paynoU = '';
    // this.codeOutU = '';
    this.oldSupplier = '';
    this.arrI = '';
    this.imgget = false;
    this.images = '';
    this.defectU = '';
    $(`.but0`).css({display: 'none'})
  }
  upI(data: any){
    this.imageShowU = true;
    this.imageShowA = false;
    this.descriptionU = data.description;
    this.dimensionsU = data.dimensions;
    this.fabricU = data.fabric;
    this.categoryU = data.category;
    this.qtyU = data.qty;
    this.priceU = data.price;
    this.supplierU = data.supplier;
    this.rootU0 = data.place;
    this.idUpI = data.id;
    this.paynoU = data.piNo;
    this.defectU= data.defect;
    this.notesU = data.notes;

    this.arrI = data.images;
    // this.codeOutU = data.codeOut;
    this.oldSupplier = data.supplier;
    $('#upd-up').css({display: 'block'});
    this.imgget = true;
    /*this._ApiService.allIm({id: data.id}).subscribe((res)=>{
      if(res.data.length == 0) {
        $('.loading').css({display: 'none'});
      } else{
         this.arrI = res.data;
         this.imgget = true;
        $('.loading').css({display: 'none'});
      }
    })*/
  }
  okUp(data: any){
    data.id = this.idUpI;
    data.oldSupplier = this.oldSupplier;
    if(this.descriptionU == '' || this.dimensionsU == '' || this.fabricU == '' || this.rootU0 == '' || this.descriptionU == undefined || this.dimensionsU == undefined || this.fabricU == undefined || this.rootU0 == undefined || this.qtyU == undefined ) {
      alert('Please enter all data completely');
    } else {
      $('.loading').css({display: 'block'});
      const formdata = new FormData();
      formdata.append('descriptionU', this.descriptionU);
      formdata.append('dimensionsU', this.dimensionsU);
      formdata.append('fabricU', this.fabricU);
      formdata.append('rootU0', this.rootU0);
      formdata.append('qtyU', this.qtyU);
      formdata.append('id', this.idUpI);
      formdata.append('defectU', this.defectU);
      formdata.append('notesU', this.notesU);

      for (let x of this.images) {
        formdata.append('images', x);
      }
    this._ApiService.updateI(formdata).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allI().subscribe((res)=>{
          this.arre = res.data;
          // alert('Updated Done Successfully');
          this.closeUpI();
        $('.loading').css({display: 'none'});
        })
      } else {
        alert("Updated Don't Successfully");
        this.closeUpI();
        $('.loading').css({display: 'none'});

      }
    })
    }
  }
   delI(id: any){
    $('#upd-dd').css({display: 'block'});
    this.idDI = id;
  }
  closedd(){
    $('#upd-dd').css({display: 'none'});
    this.idDI = '';
  }
  ok(){
    $('.loading').css({display: 'block'});
    var x = this.idDI;
    this._ApiService.delI({id: x}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allI().subscribe((res)=>{
          this.arre = res.data;
          alert('Deleted Done Successfully');
          this.closedd();
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('Deleted Not Successfully\nPlease, if you want to delete this Item, you must delete all his pre request on the site');
        this.closedd();
        $('.loading').css({display: 'none'});
      }
    })
  }
  addI(){
    this.imageShowU = false;
    this.imageShowA = true;
    $('#upd').css({display: 'block'});
  }
  close(){
    $('#upd').css({display: 'none'});
    this.OrderDate00 = true;
    this.OrderDate01 = false;
    this.OrderDate000 = true;
    this.OrderDate010 = false;
    this.description = '';
    this.dimensions = '';
    this.fabric = '';
    this.category = '';
    this.qty = '';
    this.price = '';
    this.supplier = '';
    this.root = '';
    this.images = '';
    this.payno ='';
    this.codeOut = '';
    this.defect = '';
    this.notes = '';
    $('#select00I0').val('undefined').trigger('change.select2');
    $('#select00I').val('undefined').trigger('change.select2');
    $('#select00I00').val('undefined').trigger('change.select2');
    this.piNo = 0;
    $(`.but`).css({display: 'none'})
    this._ApiService.allS().subscribe((res)=>{
      if(res.check === true){
        this.supplierA = res.data;
        setTimeout(() => {
          $('#select00I').val('undefined').trigger('change.select2');
        }, 400);
      } else{

        alert('error')
      }
    })
  }
  OrderDate001() {
    this.OrderDate00 = false;
    this.OrderDate01 = true;
  }
  OrderDate0010() {
    this.OrderDate000 = false;
    this.OrderDate010 = true;
  }
  OrderDate00100() {
    $('#im0').trigger('click');
  }
  OrderDate001000() {
    $('#im0').trigger('click');
  }
  OrderDate0010000() {
    $('#im00').trigger('click');
  }
  OrderDate00100000() {
    $('#im00').trigger('click');
  }
  addS0(data: any){
    if(this.description == '' || this.dimensions == '' || this.fabric == '' || $('#select00I0').val() == '' || $('#select00I00').val() == '' || this.qty == '' || this.price == '' || $('#select00I').val() == '' || this.images == '' || this.dateorder == '' || this.datereceipt == '' || this.codeOut == '' || this.description == undefined || this.dimensions == undefined || this.fabric == undefined || $('#select00I0').val() == undefined || $('#select00I00').val() == undefined || this.qty == undefined || this.price == undefined || $('#select00I').val() == undefined || this.images == undefined || this.dateorder == undefined || this.codeOut == undefined || this.datereceipt == undefined ) {
      alert('Please enter all data completely');
    } else {
      $('.loading').css({display: 'block'});
      const formdata = new FormData();
      formdata.append('description', data.description);
      formdata.append('dimensions', data.dimensions);
      formdata.append('fabric', data.fabric);
      formdata.append('category', $('#select00I0').val());
      formdata.append('qty', data.qty);
      formdata.append('price', data.price);
      formdata.append('supplier', $('#select00I').val());
      formdata.append('root', $('#select00I00').val());
      formdata.append('payno', data.payno);
      formdata.append('codeOut', data.codeOut);
      formdata.append('dateorder', data.dateorder);
      formdata.append('datereceipt', data.datereceipt);
      formdata.append('defect', data.defect);
      formdata.append('notes', data.notes);
      for (let x of this.images) {
        formdata.append('images', x);
      }
    this._ApiService.addI(formdata).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allI().subscribe((res0)=>{
          if(res0.check === true){
            this.arre = res0.data;
            this.serchCode = this.arre[0].code
            this.serchCode00 = this.arre[0].code;
            // alert('Added successfully');
            this.close();
            $('.loading').css({display: 'none'});
          } else{
            alert('error');

          }
        })
      } else {
        alert('Not added successfully');
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
  img0(event: any){
    this.countImage0 = $('#im00')[0].files;
    for(let x = 0 ; x < $('#im00')[0].files.length ; x++){
      const file = new FileReader();
      file.readAsDataURL($('#im00')[0].files[x]);
      file.onload = (oo: any)=>{
      $(`#put440${x}`).attr('src', oo.target.result);
      $(`#but0${x} i`).css('display', 'none');
      $(`.but0`).css({display: 'inline-block'})
    }
    }
    this.images = event.target.files;
  }
  showpho(data: any){
    $('.loading').css({display: 'block'});
    this._ApiService.allIm({id: data}).subscribe((res)=>{
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

  goFile(event: any){
    this.excel = event.target.files;
  }

  addIF(){
    $('#updF').css({display: 'block'});
  }
  closeF(){
    $('#updF').css({display: 'none'});
    this.supplier = '';
    this.excel = '';
    this.OrderDate00 = true;
    this.OrderDate01 = false;
    this.OrderDate000 = true;
    this.OrderDate010 = false;
    this.piNo = 0;
    this._ApiService.allS().subscribe((res)=>{
      if(res.check === true){
        this.supplierA = res.data;
        setTimeout(() => {
          $('#select00IJJ').val('undefined').trigger('change.select2');
        }, 400);
      } else{

        alert('error')
      }
    })
  }

  al(value: any) {
    alert(value);
  }

  addS0F(data: any){
    let supplier: string = $('.addSoClassName').val();
    this.supplier = supplier;
    data.supplier = supplier;
    //
    if($('#select00IJJ').val() == '' || this.excel == '' || this.dateorder == '' || this.datereceipt == '' || $('#select00IJJ').val() == undefined || this.excel == undefined || this.dateorder == undefined || this.datereceipt == undefined ) {
      alert('Please enter all data completely');
    } else {
      $('.loading').css({display: 'block'});
      const formdata = new FormData();
      formdata.append('supplier', $('#select00IJJ').val());
      formdata.append('dateorder', data.dateorder);
      formdata.append('datereceipt', data.datereceipt);
      formdata.append('excel', this.excel[0]);
    this._ApiService.addIF(formdata).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allI().subscribe((res0)=>{
          if(res0.check === true){
            this.arre = res0.data;
            this.serchCode = '';
            this.serchCode00 = '';
            this.searchsupplier = this.arre[0].supplier;
            this.selectpin = this.arre[0].pino;
            // alert('تم الأضافه');
            this.closeF();
            $('.loading').css({display: 'none'});
          } else{
            alert('error');

          }
        })
      } else {
        alert('لم تتم الأضافة');
        this.closeF();
        $('.loading').css({display: 'none'});

      }
    })
    }
  }
  deleteImage(id: any ,  f: any) {
    $('.loading').css({display: 'block'});
    this._ApiService.deleteImage({id}).subscribe((res0)=>{
      if(res0 === true) {
        $(`.asd00${f}`).css({display: 'none'});
        alert('تم مسح الصورة');
        $('.loading').css({display: 'none'});
      }

    })
  }
  closeddP(){
    this.discoundPrint = '';
    $('#upd-ddO00').css({display: 'none'});
  }
  barcode(data: any) {
    JsBarcode("#barcode", `${data.code}`);
    this.categoryPrint = data.categoryname;
    this.dimPrint = data.dimensions;
    this.pricePrint = data.price;
    $('#upd-ddO00').css({display: 'block'});
  }
  dishav() {
    this.pricePrint0 = this.pricePrint - this.valDis ;
    this.discoundPrint = (1 - (this.pricePrint0 / this.pricePrint)) * 100;
  }
  dishav0() {
    this.pricePrint0 = this.pricePrint - (this.pricePrint * (this.discoundPrint / 100) ) ;
    this.valDis = this.pricePrint - this.pricePrint0 ;
  }
  okP() {
    if(this.discoundPrint == '' || this.discoundPrint == undefined) {
      $('.printch').hide();
    $('.supplierto').show();
      this.closeddP();
      $('#printall').css({display: 'block'});
      setTimeout(() => {
        window.print();
        $('.printch').show();
      $('.supplierto').hide();
        $('#printall').css({display: 'none'});
      }, 400);
    } else {
      this.pricePrint0 = this.pricePrint - (this.pricePrint * (this.discoundPrint / 100) ) ;
      this.dis = true;
      $('.printch').hide();
    $('.supplierto').show();
      this.closeddP();
      $('#printall').css({display: 'block'});
      setTimeout(() => {
        window.print();
        $('.printch').show();
      $('.supplierto').hide();
        $('#printall').css({display: 'none'});
      }, 400);
    }
  }
  goDateBarcode() {
    this.dateToBarcode = $('#toDGBarcode').val();
    this.dateFromBarcode = $('#fromDGBarcode').val();
    // $('.loading').css({display: 'block'});
    // this._ApiService.allID({from: $('#fromDG').val(), to: $('#toDG').val()}).subscribe((res)=>{
    //   if(res.check === true){
    //     this.arre = res.data;
    //     $('.loading').css({display: 'none'});
    //   } else{
    //     alert('error')
    //     $('.loading').css({display: 'none'});

    //   }
    // })
  }
  goDateStore() {
    this.dateToStore = $('#toDGStore').val();
    this.dateFromStore = $('#fromDGStore').val();
    // $('.loading').css({display: 'block'});
    // this._ApiService.allID({from: $('#fromDG').val(), to: $('#toDG').val()}).subscribe((res)=>{
    //   if(res.check === true){
    //     this.arre = res.data;
    //     $('.loading').css({display: 'none'});
    //   } else{
    //     alert('error')
    //     $('.loading').css({display: 'none'});

    //   }
    // })
  }
  goDate000() {
    this.dateTo = $('#toDGStore').val();
    this.dateFrom = $('#fromDGStore').val();
    // $('.loading').css({display: 'block'});
    // this._ApiService.allID({from: $('#fromDG').val(), to: $('#toDG').val()}).subscribe((res)=>{
    //   if(res.check === true){
    //     this.arre = res.data;
    //     $('.loading').css({display: 'none'});
    //   } else{
    //     alert('error')
    //     $('.loading').css({display: 'none'});

    //   }
    // })
  }
  OrderDate0010S() {
    this.OrderDate000S = false;
    this.OrderDate000S0 = true;
    setTimeout(() => {
      $('.fromDAStore').val(new Date().toJSON().slice(0,10))
    }, 100);

  }
  OrderDate0010SS(){
    this.OrderDate000SS = false;
    this.OrderDate000SS0 = true;
    setTimeout(() => {
      $('.toDAStore').val(new Date().toJSON().slice(0,10));
    }, 100);
  }
  goDate() {
    this.dateToSu = $('#toDG').val();
    this.dateFromSu = $('#fromDG').val();
    // $('.loading').css({display: 'block'});
    // this._ApiService.allID({from: $('#fromDG').val(), to: $('#toDG').val()}).subscribe((res)=>{
    //   if(res.check === true){
    //     this.arre = res.data;
    //     $('.loading').css({display: 'none'});
    //   } else{
    //     alert('error')
    //     $('.loading').css({display: 'none'});

    //   }
    // })
  }
  OrderDate0010SSu() {
    this.OrderDate000SSu = false;
    this.OrderDate000S0Su = true;
    setTimeout(() => {
      $('.fromDA').val(new Date().toJSON().slice(0,10))
    }, 100);

  }
  OrderDate0010SSSu(){
    this.OrderDate000SSSu = false;
    this.OrderDate000SS0Su = true;
    setTimeout(() => {
      $('.toDA').val(new Date().toJSON().slice(0,10));
    }, 100);
  }
  goDate1() {
    this.dateToCustomer = $('#toDG1').val();
    this.dateFromCustomer = $('#fromDG1').val();
    // $('.loading').css({display: 'block'});
    // this._ApiService.allIBD({from: $('#fromDG1').val(), to: $('#toDG1').val()}).subscribe((res)=>{
    //   if(res.check === true){
    //     this.arreReportCustomer = res.data;
    //     $('.loading').css({display: 'none'});
    //   } else{
    //     alert('error')
    //     $('.loading').css({display: 'none'});

    //   }
    // })
  }
  OrderDate0010SCustomer() {
    this.OrderDate000SCustomer = false;
    this.OrderDate000S0Customer = true;
    setTimeout(() => {
      $('.fromDA1').val(new Date().toJSON().slice(0,10))
    }, 100);

  }
  OrderDate0010SSCustomer(){
    this.OrderDate000SSCustomer = false;
    this.OrderDate000SS0Customer = true;
    setTimeout(() => {
      $('.toDA1').val(new Date().toJSON().slice(0,10));
    }, 100);
  }
  goDate2() {
    $('.loading').css({display: 'block'});
    this._ApiService.allIBDP({from: $('#fromDG2').val(), to: $('#toDG2').val()}).subscribe((res)=>{
      if(res.check === true){
        this.arreParcode = res.data;
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
        $('.loading').css({display: 'none'});

      }
    })
  }
  OrderDate0010SStore() {
    this.OrderDate000SStore = false;
    this.OrderDate000S0Store = true;
    setTimeout(() => {
      $('.fromDAStore').val(new Date().toJSON().slice(0,10))
    }, 100);

  }
  OrderDate0010SSStore(){
    this.OrderDate000SSStore = false;
    this.OrderDate000SS0Store = true;
    setTimeout(() => {
      $('.toDAStore').val(new Date().toJSON().slice(0,10));
    }, 100);
  }
  OrderDate0010SBarcode() {
    this.OrderDate000SBarcode = false;
    this.OrderDate000S0Barcode = true;
    setTimeout(() => {
      $('.fromDABarcode').val(new Date().toJSON().slice(0,10))
    }, 100);

  }
  OrderDate0010SSBarcode(){
    this.OrderDate000SSBarcode = false;
    this.OrderDate000SS0Barcode = true;
    setTimeout(() => {
      $('.toDABarcode').val(new Date().toJSON().slice(0,10));
    }, 100);
  }
  goDate3() {
    $('.loading').css({display: 'block'});
    this._ApiService.allID({from: $('#fromDG3').val(), to: $('#toDG3').val()}).subscribe((res)=>{
      if(res.check === true){
        this.arreParcode = res.data;
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
        $('.loading').css({display: 'none'});

      }
    })
  }
  goPic(v: any){
    this.goImg = true;
    this.www = v;
  }
  goPic0(){
    this.goImg = false;
    this.www = '';
  }
  printert(){
    $('#printall').css({display: 'none !important'})
    $('#printAll1').css({display: 'block !important'})
    window.print();
  }
  sfr(){
    // this.arre = [];
    this.serchCode = '0';
    this.serchCode00 = '0';
    this.searchsupplier = 'Search By Supplier';
    this.selectpin = 'undefined';
    this.pi = [];
  }
  sfr0(){
    this.serchCode = '';
    this.serchCode00 = '';
    $('.selectsearchroot000').val('undefined').trigger('change.select2');
    this.searchsupplier = 'Search By Supplier';
    this.pi = [];
    this.selectpin = 'undefined';
    $('.selectpin').val('undefined').trigger('change.select2');
    $('.selectsearchsupplier').val('Search By Supplier').trigger('change.select2');
    // this._ApiService.allI().subscribe((res)=>{
    //   if(res.check === true){
    //     this.arre = res.data;
    //   } else{
    //     Helper.redirect(res, this._ApiService, this._Router, (res: any) =>{ this.sfr0() });
    //   }
    // })
  }
  printSupplier(){
    $('.printch').hide();
    $('.supplierto').show();
    setTimeout(() => {
      window.print();
      $('.printch').show();
      $('.supplierto').hide();
    }, 400);
  }
  printCustomer(){
    $('.printch').hide();
    $('.supplierto').show();
    $('.printCustomer').show();
    setTimeout(() => {
      window.print();
      $('.printch').show();
      $('.supplierto').hide();
    }, 400);
  }
  piDestroy(){
    this.pi = [];
  }

  ngOnInit(): void {
    let self = this;
    // setTimeout(() => {
      $('.select2, .js-example-basic-multiple').select2();
      $('.selectpin0').on('select2:select', function (e: any) {
        self.categorySearch = $('.selectpin0').val();
      });
      $('#select00I').on('select2:select', function (e: any) {
        self.sho(self.supplierA, $('#select00I').val());
      });
      $('#select00IJJ').on('select2:select', function (e: any) {
        self.sho(self.supplierA, $('#select00IJJ').val());
      });
      $('.selectsearchsupplier').on('select2:select', function (e: any) {
        self.pi = [];
        $('.selectpin').val('undefined').trigger('change.select2');
        self.selectpin = 'All';
        self.searchsupplier = $('.selectsearchsupplier').val()
        self.supplierA.forEach((element: any) => {
          if(element.id == $('.selectsearchsupplier').val()){
            self.nameSubPri = element.name;
            for(var i = 0 ; i < element.pinoS ; i++) {
              self.pi.push(' ');
            }
          } else if ($('.selectsearchsupplier').val() === 'All') {
            self.nameSubPri = 'All';
          }
        });
      });
      $('.selectsearchsupplierBar').on('select2:select', function (e: any) {
        self.pi = [];
        $('.selectpinBar').val('undefined').trigger('change.select2');
        self.selectpinBar = 'All';
        self.searchsupplierBar = $('.selectsearchsupplierBar').val()
        self.supplierA.forEach((element: any) => {
          if(element.id == $('.selectsearchsupplierBar').val()){
            for(var i = 0 ; i < element.pinoS ; i++) {
              self.pi.push(' ');
            }
          }
        });
      });
      $('.selectsearchroot').on('select2:select', function (e: any) {
        self.placeSearch = $('.selectsearchroot').val()
      });
      $('.placeSearchStore').on('select2:select', function (e: any) {
        self.placeSearchStore = $('.placeSearchStore').val()
        self.rootA.forEach((element: any) => {
          if(element.id == $('.placeSearchStore').val()){
            self.nameStore = element.name;
          } else if($('.placeSearchStore').val() === 'All') {
            self.nameStore = 'All';
          }
        });
      });
      $('.selectpin').on('select2:select', function (e: any) {
        self.selectpin = $('.selectpin').val()
      });
      $('.selectpinBar').on('select2:select', function (e: any) {
        self.selectpinBar = $('.selectpinBar').val()
      });
      $('.selectsearchroot000').on('select2:select', function (e: any) {
        self.serchCode = $('.selectsearchroot000').val()
      });
      $('.serchCodeStore').on('select2:select', function (e: any) {
        self.serchCodeStore = $('.serchCodeStore').val()
      });
      $('.selectsearchroot00000').on('select2:select', function (e: any) {
        self.serchCode00 = $('.selectsearchroot00000').val()
      });
    // }, 500);
    $('.fromDA').val(new Date().toJSON().slice(0,10));
    $('.toDA').val(new Date().toJSON().slice(0,10));
    $('.fromDA1').val(new Date().toJSON().slice(0,10));
    $('.toDA1').val(new Date().toJSON().slice(0,10));
    $('.fromDA2').val(new Date().toJSON().slice(0,10));
    $('.toDA2').val(new Date().toJSON().slice(0,10));
    $('.fromDA3').val(new Date().toJSON().slice(0,10));
    $('.toDA3').val(new Date().toJSON().slice(0,10));
    this.datereceipt = new Date().toJSON().slice(0,10);
    this.dateorder = new Date().toJSON().slice(0,10);
    $('.goQN009').on('select2:select', function (e: any) {
      self.yarbs = $('.goQN009').val();})
      $('.goQN').on('select2:select', function (e: any) {
        self.yarbsS = $('.goQN').val();
        self.arreCustomer.forEach((element: any) => {
          if(element.id == $('.goQN').val()) {
            self.namePr = element.customername;
            self.cityPr = element.customername;
            self.adressPr = element.customername;

          } else {
            self.namePr = 'All';
            self.cityPr = 'All';
            self.adressPr = 'All';

          }
        });
      })
      $('.select2Q').on('select2:select', function (e: any) {
        self.yarbs000 = $('.select2Q').val();})

  }

}
