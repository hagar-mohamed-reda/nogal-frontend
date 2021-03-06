import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-supsuppliers',
  templateUrl: './supsuppliers.component.html',
  styleUrls: ['./supsuppliers.component.scss']
})
export class SupsuppliersComponent implements OnInit {

  arre: any;
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
  serchCodeSupplier: any = 'Search By Code';
  arre0987: any;
  idItem: any;
  arre0009: any = [];
  searchsupplier = 'Search By Supplier'
  selectpin: any = 'PI NO';
  www: any;
  goImg: any = false;
  arrImage: any;
  qwss = false;
  arreQ: any = [];
  pino: any = 1;
  dfgt: any = false;
  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent ) {
    this._AppComponent.activeU = '';
    this._AppComponent.activeR = '';
    this._AppComponent.activeS = 'active';
    this._AppComponent.activeI = '';
    this._AppComponent.activeC = '';
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
    this._AppComponent.activeHReport = '';
    this._AppComponent.activeCVV = '';
    this._AppComponent.activeCVEm = '';
    this._AppComponent.activeCVEmAttendances = '';
    this._AppComponent.activeCVEmAttendancesSalary = '';
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
    this._ApiService.allS().subscribe((res)=>{
      if(res.check === true){
        this.arre = res.data;
        this.ngOnInit();
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
      }
    })
    this._ApiService.allI().subscribe((res)=>{
      if(res.check === true){
        this.arre0009 = res.data;
        this.ngOnInit();
      } else{
        alert('error')
      }
    })
    this._AppComponent.goProfile();
   }
   closeUp(){
    $('#upd-up').css({display: 'none'});
    this.nameU = '';
    this.emailU = '';
    this.notesU = '';
    this.phoneU = '';
    this.adressU = '';
    this.idUS = '';
    this.countryU = '';
  }
  upU(data: any){
    this.nameU = data.name;
    this.emailU = data.email;
    this.notesU = data.notes;
    this.phoneU = '0' + data.phone;
    this.adressU = data.adress;
    this.idUS = data.id;
    this.countryU = data.country;
    $('#upd-up').css({display: 'block'});
  }
  okUp(data: any){
    // if(this.nameU == '' || this.emailU == '' || this.notesU == '' || this.adressU == '' || this.phoneU == '' || this.countryU == '' || this.nameU == undefined || this.emailU == undefined || this.notesU == undefined || this.adressU == undefined || this.phoneU == undefined || this.countryU == undefined ) {
    //   alert('من فضلك أدخل جميع البيانات بالكامل');
    // } else {
      $('.loading').css({display: 'block'});
    this._ApiService.updateS({nameU: this.nameU, emailU: this.emailU, notesU: this.notesU, phoneU: this.phoneU, adressU: this.adressU , id: this.idUS , countryU: this.countryU}).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allS().subscribe((res)=>{
          this.arre = res.data;
          alert('Done Update');
          this.closeUp();
        $('.loading').css({display: 'none'});
        })
      } else {
        alert('Updated Not Successfully');
        this.closeUp();
        $('.loading').css({display: 'none'});
      }
    })
    // }
  }
   delS(id: any , name: any){
    $('#upd-dd').css({display: 'block'});
    this.idDS = id;
    this.nameD = name;
  }
  closedd(){
    $('#upd-dd').css({display: 'none'});
    this.idDS = '';
    this.nameD = '';
  }
  ok(){
    $('.loading').css({display: 'block'});
    var x = this.idDS;
    var e = this.nameD;
    this._ApiService.delS({id: x , name: this.nameD}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allS().subscribe((res)=>{
          this.arre = res.data;
          alert('Delete Done Successfully');
          this.closedd();
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('Deleted Not Successfully\nPlease, if you want to delete this Supplier , you must delete all his pre request on the site');
        this.closedd();
        $('.loading').css({display: 'none'});
      }
    })
  }
  addS(){
    $('#upd').css({display: 'block'});
  }
  close(){
    $('#upd').css({display: 'none'});
    this.name = '';
    this.email = '';
    this.notes = '';
    this.adress = '';
    this.phone = '';
    this.pay = '';
    this.country = '';
  }
  addS0(data: any){
    // if(this.name == '' || this.email == '' || this.notes == '' || this.adress == '' || this.phone == '' || this.country == '' || this.name == undefined || this.email == undefined || this.notes == undefined || this.adress == undefined || this.phone == undefined || this.country == undefined ) {
    //   alert('من فضلك أدخل جميع البيانات بالكامل');
    // } else {
      $('.loading').css({display: 'block'});
    this._ApiService.addS(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allS().subscribe((res0)=>{
          if(res0.check === true){
            this.arre = res0.data;
            alert('Added successfully');
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
    // }
  }
  trigger(){
    $('#excel').trigger('click');
  }
  goFile(event: any){
    $('.loading').css({display: 'block'});
    const formdata = new FormData();
    formdata.append('excel', event.target.files[0])
    this._ApiService.addSF(formdata).subscribe((res)=>{
      if(res.check === true) {
        this._ApiService.allS().subscribe((res0)=>{
          if(res0.check === true){
            this.arre = res0.data;
            alert('Added successfully');
            $('.loading').css({display: 'none'});
          } else{
            alert('error');
          }
        })
      } else{
        alert('Not added successfully');
      }
    })
  }
  printert(){
    window.print();
  }
  printert0(){
    $('.print0P').css({height: '100%'});
    $('.print0N').css({display: 'none'})
    $('.print0').css({display: 'block'})
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        $('.print0N').css({display: 'block'})
        $('.print0').css({display: 'none'})
        $('#printUU').css({display: 'block'})
      }, 100);
    }, 100);
  }
  convert(){
    this.pino = parseInt(this.pino);
  }

  close0093(){
    this.dfgt = false;
    this.arreQ = [];
    this.searchsupplier = '';
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
  waw(data: any){
    $('#upd023').css({display: 'block'});
    this.searchsupplier = data.id;
        for(let x = 0 ; x < data.pinoS ; x++){
          this.arreQ.push({from: this.arre0009[x].dateorder , to: this.arre0009[x].datereceipt});
        }
        this.dfgt = true;
  }
  goPic(v: any){
    this.goImg = true;
    this.www = v;
  }
  goPic0(){
    this.goImg = false;
    this.www = '';
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

  ngOnInit(): void {
    let self = this;
    // setTimeout(() => {
      $('.select2, .js-example-basic-multiple').select2();
      $('.selsea').on('select2:select', function (e: any) {
        self.serchCodeSupplier = $('.selsea').val();
      })
    // }, 500);
  }

}
