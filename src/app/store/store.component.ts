import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
declare var JsBarcode:any;
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

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
  serchCode: any = 'undefined';
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
   searchsupplier = 'Search By Supplier'
   piNo: any = 0;
   go = false;
   dateorder: any = '2021-01-19';
   datereceipt: any = '2021-01-26';
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
   pi: any = [];
   discoundPrint: any;
   pricePrint0: any;
   dis = false;
   www: any;
   goImg: any = false;
   categorySearch: any;
   arre0009: any;
   codeShow: any;
   branch: any;
   dateFrom: any = 'All';
   dateTo: any;
   OrderDate000S: any = true;
   OrderDate000S0: any = false;
   OrderDate000SS: any = true;
   OrderDate000SS0: any = false;
   arre0009show: any = [];
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
    this._AppComponent.activeCuOStore = 'active';
    this._AppComponent.activeHRE = '';
    this._AppComponent.activeHReport = '';
    this._AppComponent.activeCVV = '';
    this._AppComponent.activeCVEm = '';
    this._AppComponent.activeCVEmAttendances = '';
    this._AppComponent.activeCVEmAttendancesSalary = '';
    this._ApiService.allpayno().subscribe((res)=>{
      this.paynoArr = res;
      this.ngOnInit();
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
    this._ApiService.allI().subscribe((res)=>{
      if(res.check === true){
        this.arre = res.data;
        this.ngOnInit();
        $('.loading').css({display: 'none'});
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
    $(`.but0`).css({display: 'none'})
  }
  upI(data: any){
    $('.loading').css({display: 'block'});
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
    // this.codeOutU = data.codeOut;
    this.oldSupplier = data.supplier;
    $('#upd-up').css({display: 'block'});
    this._ApiService.allIm({id: data.id}).subscribe((res)=>{
      if(res.data.length == 0) {
        $('.loading').css({display: 'none'});
      } else{
         this.arrI = res.data;
         this.imgget = true;
        $('.loading').css({display: 'none'});
      }
    })
  }
  okUp(data: any){
    data.id = this.idUpI;
    data.oldSupplier = this.oldSupplier;
    if(this.descriptionU == '' || this.dimensionsU == '' || this.fabricU == '' || this.rootU0 == '' || this.qtyU == '' || this.descriptionU == undefined || this.dimensionsU == undefined || this.fabricU == undefined || this.rootU0 == undefined || this.qtyU == undefined) {
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
      for (let x of this.images) {
        formdata.append('images', x);
      }
    this._ApiService.updateI(formdata).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allI().subscribe((res)=>{
          this.arre = res.data;
          alert('Updated Done Successfully');
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
      for (let x of this.images) {
        formdata.append('images', x);
      }
    this._ApiService.addI(formdata).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allI().subscribe((res0)=>{
          if(res0.check === true){
            this.arre = res0.data;
            let x = this.arre;
            this.serchCode = this.arre[0].code
            // alert('Added successfully');
            this.close();
            $('.loading').css({display: 'none'});
          } else{
            // alert('error');
          }
        })
      } else {
        // alert('Not added successfully');
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
            let x = this.arre;
            this.serchCode = this.arre[0].code
            // alert('تم الأضافه');
            this.closeF();
            $('.loading').css({display: 'none'});
          } else{
            alert('error');
          }
        })
      } else {
        // alert('لم تتم الأضافة');
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
  okP() {
    if(this.discoundPrint == '' || this.discoundPrint == undefined) {
      this.closeddP();
      setTimeout(() => {
        window.print();
      }, 400);
    } else {
      this.pricePrint0 = this.pricePrint - (this.pricePrint * (this.discoundPrint / 100) ) ;
      this.dis = true;
      this.closeddP();
      setTimeout(() => {
        window.print();
      }, 400);
    }
  }
  goDate() {
    this.dateTo = $('#toDG').val();
    this.dateFrom = $('#fromDG').val();
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
  print(){
    window.print();
  }
  sfr(){
    this.arre = [];
  }
  sfr0(){
    this.serchCode = '';
    this._ApiService.allI().subscribe((res)=>{
      if(res.check === true){
        this.arre = res.data;
      } else{
        alert('error')
      }
    })
  }
  waw(data: any){
    this.codeShow = data.code;
    this.branch = data.rootname;
    // this.searchsupplier = data.id;
    this._ApiService.allIBooked({id: data.id}).subscribe((res)=>{
      if(res.check === true){
        let f = res.data;
        this.arre0009 = [];
        f.forEach((element: any) => {
          if(element.orderto == 0) {
            this.arre0009.push(element);
          }
        });
        $('#upd023').css({display: 'block'});
      } else{
        alert('error')
      }
    })
  }
  waw0(data: any){
    this.codeShow = data.code;
    this.branch = data.rootname;
    // this.searchsupplier = data.id;
    this._ApiService.allIBooked({id: data.id}).subscribe((res)=>{
      if(res.check === true){
        let f = res.data;
        this.arre0009 = [];
        f.forEach((element: any) => {
          if(element.orderto == 1) {
            this.arre0009.push(element);
          }
        });
        $('#upd023').css({display: 'block'});
      } else{
        alert('error')
      }
    })
  }
  waw0show(data: any){
    // this.searchsupplier = data.id;
    this._ApiService.allCustomerP0({id: data}).subscribe((res)=>{
      if(res.check === true){
        this.arre0009show = res.data;
        $('#upd023show').css({display: 'block'});
      } else{
        alert('error')
      }
    })
  }
  close0093(){
    this.searchsupplier = '';
    // $('.loading').css({display: 'block'});
    // this._ApiService.allCustomer().subscribe((res)=>{
    //   if(res.check === true){
        // this.arre = res.data;
        $('#upd023').css({display: 'none'});
        this.arre0009 = [];
    //     $('.loading').css({display: 'none'});
    //   } else{
    //     alert('error')
    //   }
    // })
  }
  close0093show(){
    // this.searchsupplier = '';
    // $('.loading').css({display: 'block'});
    // this._ApiService.allCustomer().subscribe((res)=>{
    //   if(res.check === true){
        // this.arre = res.data;
        $('#upd023show').css({display: 'none'});
        this.arre0009show = [];
    //     $('.loading').css({display: 'none'});
    //   } else{
    //     alert('error')
    //   }
    // })
  }
  OrderDate0010S() {
    this.OrderDate000S = false;
    this.OrderDate000S0 = true;
    setTimeout(() => {
      $('.fromDA').val(new Date().toJSON().slice(0,10))
    }, 100);

  }
  OrderDate0010SS(){
    this.OrderDate000SS = false;
    this.OrderDate000SS0 = true;
    setTimeout(() => {
      $('.toDA').val(new Date().toJSON().slice(0,10));
    }, 100);
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
            for(var i = 0 ; i < element.pinoS ; i++) {
              self.pi.push(' ');
            }
          }
        });
      });
      $('.selectsearchroot').on('select2:select', function (e: any) {
        self.placeSearch = $('.selectsearchroot').val()
      });
      $('.selectsearchroot000').on('select2:select', function (e: any) {
        self.serchCode = $('.selectsearchroot000').val()
      });
      $('.selectpin').on('select2:select', function (e: any) {
        self.selectpin = $('.selectpin').val()
      });
    // }, 500);
  }

}
