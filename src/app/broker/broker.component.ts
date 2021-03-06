import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router , ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit {

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
  arre0987: any;
  allMoney: any = 0;
  from: any;
  to: any;
  idGodate: any;

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
    this._AppComponent.activeCV = '';
    this._AppComponent.activeSE = '';
    this._AppComponent.activeSEB = 'active';
    this._AppComponent.activeCuO = '';
    this._AppComponent.activeCuOStore = '';
    this._AppComponent.activeHRE = '';
    this._AppComponent.activeHReport = '';
    this._AppComponent.activeCVV = '';
    this._AppComponent.activeCVEm = '';
    this._AppComponent.activeCVEmAttendances = '';
    this._AppComponent.activeCVEmAttendancesSalary = '';

    this._ApiService.Profile().subscribe((res)=>{
      if(res.check === true) {
        this._AppComponent.refreshNotification()
        this.show = true;
      } else {
        this._Router.navigate([''])
        this.show = false;
      }
    })
    this._ApiService.allSC0sB().subscribe((res)=>{
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
  }
  upU(data: any){
    this.nameU = data.name;
    this.emailU = data.email;
    this.phoneU = '0' + data.phone;
    this.adressU = data.adress;
    this.idUS = data.id;
    this.cityU = data.city;
    this.phone2U = '0'+data.phone2
    $('#upd-up').css({display: 'block'});
  }
  okUp(data: any){
    if(this.nameU == '' || this.nameU == undefined ) {
      alert('Please . Make sure the Name Is entered');
    } else {
      data.id = this.idUS;
      $('.loading').css({display: 'block'});
    this._ApiService.updateSC0sB(data).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allSC0sB().subscribe((res)=>{
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
    this._ApiService.delSC0sB({id: x , name: this.nameD}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allSC0sB().subscribe((res)=>{
          this.arre = res.data;
          alert('Deleted Done Successfully');
          this.closedd();
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('Deleted Not Successfully\nPlease, if you want to delete this Broker, you must delete all his pre request on the site');
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
    this._ApiService.addSCNsB(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allSC0sB().subscribe((res0)=>{
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
        alert('This Broker already exists');
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
    this._ApiService.addSCN0sB(formdata).subscribe((res)=>{
      if(res.check === true) {
        this._ApiService.allSC0sB().subscribe((res0)=>{
          if(res0.check === true){
            this.arre = res0.data;
            // alert('Added successfully');
            $('.loading').css({display: 'none'});
          } else{
            alert('error');
          }
        })
      } else{
        alert('This Broker already exists');
      }
    })
  }
  trigger(){
    $('#excel').trigger('click');
  }
  gototo(){
    let date = new Date();
    let x = $('#fromDG').val().slice(5, 7);
    let y = $('#fromDG').val().slice(0, 4)
    $('#toDG').val(`${y}-${x}-${30}`);
  }
  gotofrom(){
    let date = new Date();
    let x = $('#toDG').val().slice(5, 7);
    let y = $('#fromDG').val().slice(0, 4)
    $('#fromDG').val(`${y}-${x}-0${1}`);
  }
  goDate() {
    this.allMoney = 0;
    $('.loading').css({display: 'block'});
    this._ApiService.getItemBooked000BDate({id: this.idGodate,from: $('#fromDG').val(), to: $('#toDG').val()}).subscribe((res)=>{
      if(res.check === true){
        this.arre0987 = res.data;
        this.arre0987.forEach((element: any) => {
          this.allMoney = this.allMoney + element.pay;
        });
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
        $('.loading').css({display: 'none'});
      }
    })
  }
  delS000(id: any){
    this.allMoney = 0;
    let date = new Date();
    this.from = `${date.getFullYear()}-0${date.getMonth()+1}-0${1}`;
    this.to = `${date.getFullYear()}-0${date.getMonth()+1}-${30}`;
    this.idGodate = id;
    $('#fromDG').val(this.from)
    $('#toDG').val(this.to)
    $('.loading').css({display: 'block'});
    this._ApiService.getItemBooked000B({id: id}).subscribe((res)=>{
      this.arre0987 = res;
      this.arre0987.forEach((element: any) => {
        this.allMoney = this.allMoney + element.pay;
      });
      $('#upd023').css({display: 'block'});
      $('.loading').css({display: 'none'});
    })
  }
  close0093(){
    this.allMoney = 0;
    $('#upd023').css({display: 'none'});
  }

  ngOnInit(): void {
  }

}
