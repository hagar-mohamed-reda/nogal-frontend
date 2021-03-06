import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router , ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

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
  serchCodeSupplier: any = 'أبحث بالكود';
  city: any;
  cityU: any;
  phone2: any;
  phone2U: any;
  serchCodeVisit: any = null;
  type: any = '';
  typeU: any = '';
  areaU: any;
  area: any;
  arre0987: any;
  serchClient: any;
  arreDate: any;
  quotationNS = 'Search By QUotation No';
  quotationNS0 = 'Search By QUotation No';
  supplierA: any;
  arreDateP: any = [];
  idDaNew: any;
  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent, private _Route: ActivatedRoute ) {
    this._AppComponent.activeU = '';
    this._AppComponent.activeR = '';
    this._AppComponent.activeS = '';
    this._AppComponent.activeI = '';
    this._AppComponent.activeC = '';
    this._AppComponent.activeP = '';
    this._AppComponent.activeCu = '';
    this._AppComponent.activeCR = '';
    this._AppComponent.activeH = '';
    this._AppComponent.activeO = '';
    this._AppComponent.activeCE = '';
    this._AppComponent.activeCV = 'active';
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
    this._ApiService.allCustomer().subscribe((res)=>{
      if(res.check === true){
        this.supplierA = res.data;
        this.ngOnInit();
      } else{
        alert('error')
      }
    })
    this._ApiService.allReturn().subscribe((res)=>{
      if(res.check === true){
        this.arreDate = res.data;
        this.ngOnInit();
      } else{
        alert('error')
      }
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
    this._ApiService.allSC0().subscribe((res)=>{
      if(res.check === true){
        this.arre = res.data;
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
      }
    })
    this._AppComponent.goProfile();

  //   this._Route.params.subscribe(params => {
  //     this.serchCodeVisit = params['data']
  // });
   }
   closeUp(){
    $('#upd-up').css({display: 'none'});
    this.nameU = '';
    this.emailU = '';
    this.phoneU = '';
    this.adressU = '';
    this.idUS = '';
    this.cityU = '';
    this.typeU = '';
    this.areaU = '';
  }
  upU(data: any){
    this.nameU = data.name;
    this.emailU = data.email;
    this.phoneU = '0' + data.phone;
    this.adressU = data.adress;
    this.idUS = data.id;
    this.cityU = data.city;
    this.phone2U = '0'+data.phone2;
    this.typeU = data.type;
    this.areaU = data.area;
    $('#upd-up').css({display: 'block'});
  }
  okUp(data: any){
    if(this.nameU == '' || this.nameU == undefined ) {
      alert('Please . Make sure the Name Is entered');
    } else {
      data.id = this.idUS;
      $('.loading').css({display: 'block'});
    this._ApiService.updateSC0(data).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allSC0().subscribe((res)=>{
          this.arre = res.data;
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
    this._ApiService.delSC0F({id: x , name: this.nameD}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allSC0().subscribe((res)=>{
          this.arre = res.data;
          alert('Deleted Done Successfully');
          this.closedd();
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('Deleted Not Successfully\nPlease, if you want to delete this user, you must delete all his pre request on the site');
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
    this.adress = '';
    this.phone = '';
    this.city = '';
  }
  addS0(data: any){
    if(this.name == '' || this.name == undefined) {
      alert('Please . Make sure the Name Is entered');
    } else {
      $('.loading').css({display: 'block'});
    this._ApiService.addSCN(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allSC0().subscribe((res0)=>{
          if(res0.check === true){
            this.arre = res0.data;
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
  goFile(event: any){
    $('.loading').css({display: 'block'});
    const formdata = new FormData();
    formdata.append('excel', event.target.files[0])
    this._ApiService.addSCN0(formdata).subscribe((res)=>{
      if(res.check === true) {
        this._ApiService.allSC0().subscribe((res0)=>{
          if(res0.check === true){
            this.arre = res0.data;
            // alert('Added successfully');
            $('.loading').css({display: 'none'});
          } else{
            alert('error');
          }
        })
      } else{
        alert('This Customer already exists');
      }
    })
  }
  printert(){
    window.print();
  }
  trigger(){
    $('#excel').trigger('click');
  }
  delS000(id: any){
    // $('.loading').css({display: 'block'});
    // this._ApiService.getPayments({id: id}).subscribe((res)=>{
      // this.arre0987 = res;
      this.serchClient = id;
      $('#upd023').css({display: 'block'});
      // $('.loading').css({display: 'none'});
    // })
  }
  delS000P(id: any){
    this.idDaNew = id;
    $('.loading').css({display: 'block'});
    // this._ApiService.getPayments({id: id}).subscribe((res)=>{
      // this.arre0987 = res;
      this.serchClient = id;
      this._ApiService.allpaymentCustomer({id}).subscribe((res)=>{
        if(res.check === true){
          this.arreDateP = res.data;
          $('#upd023P').css({display: 'block'});
          $('.loading').css({display: 'none'});
        } else{
          alert('error')
          $('.loading').css({display: 'none'});
        }
      })
      // $('.loading').css({display: 'none'});
    // })
  }
  delS000PDate(){
    $('.loading').css({display: 'block'});
    // this._ApiService.getPayments({id: id}).subscribe((res)=>{
      // this.arre0987 = res;
      this.serchClient = this.idDaNew;
      this._ApiService.allpaymentCustomerDate({id: this.idDaNew , from: $('#fromDGP').val(), to: $('#toDGP').val()}).subscribe((res)=>{
        if(res.check === true){
          this.arreDateP = res.data;
          $('#upd023P').css({display: 'block'});
          $('.loading').css({display: 'none'});
        } else{
          alert('error')
          $('.loading').css({display: 'none'});
        }
      })
      // $('.loading').css({display: 'none'});
    // })
  }
  close0093(){
    $('#upd023').css({display: 'none'});
  }
  close0093P(){
    $('#upd023P').css({display: 'none'});
  }
  goDate() {
    $('.loading').css({display: 'block'});
    this._ApiService.allIDReturn({from: $('#fromDG').val(), to: $('#toDG').val()}).subscribe((res)=>{
      if(res.check === true){
        this.arreDate = res.data;
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
        $('.loading').css({display: 'none'});
      }
    })
  }


  ngOnInit(): void {
    let self = this;
    $('.fromDA').val(new Date().toJSON().slice(0,10));
    $('.toDA').val(new Date().toJSON().slice(0,10));
    $('.fromDAP').val(new Date().toJSON().slice(0,10));
    $('.toDAP').val(new Date().toJSON().slice(0,10));
    $('.select2, .js-example-basic-multiple').select2();
    $('.quotationNS').on('select2:select', function (e: any) {
      self.quotationNS = $('.quotationNS').val()
    });
    $('.quotationNS0').on('select2:select', function (e: any) {
      self.quotationNS0 = $('.quotationNS0').val()
    });
  }

}
