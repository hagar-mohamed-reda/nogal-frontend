import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {

  arre: any;
  show = false;
  name: any;
  email: any;
  password: any;
  adress: any;
  root: any = undefined;
  phone: any;
  control: any = undefined;
  idDU: any;
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
  rootSearch = 'Search By Root';
  controlSearch = 'Search By Permission';
  type: any = 'Type';
  notes: any;
  OrderDate000S: any = true;
  OrderDate000S0: any = false;
  OrderDate000SS: any = true;
  OrderDate000SS0: any = false;
  dateFrom: any = 'All';
  dateTo: any;
  arrayAll: any;
  salaryafter: any;
  daynumber: any;
  workday: any;
  hourday: any;
  workhour: any;
  allhour: any;
  hourmonth: any;
  salary: any;

  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent ) {
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
    this._AppComponent.activeSEB = '';
    this._AppComponent.activeCuO = '';
    this._AppComponent.activeCuOStore = '';
    this._AppComponent.activeHRE = '';
    this._AppComponent.activeHReport = '';
    this._AppComponent.activeCVV = '';
    this._AppComponent.activeCVEm = '';
    this._AppComponent.activeCVEmAttendances = '';
    this._AppComponent.activeCVEmAttendancesSalary = 'active';
    this._ApiService.allemployees().subscribe((res)=>{
      if(res.check === true){
        this.rootA = res.data;
        this.ngOnInit();
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
      }
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
    this._ApiService.allAttendSalary().subscribe((res)=>{
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
   closeUp(){
    $('#upd-up').css({display: 'none'});
    this.nameU = '';
    this.emailU = '';
    this.passwordU = '';
    this.phoneU = '';
    this.adressU = '';
    this.controlU = '';
    this.idUp = '';
    this.rootU = '';
  }
  upP(data: any){
    this.nameU = data.name;
    this.emailU = data.email;
    this.passwordU = data.password;
    this.phoneU = '0' + data.phone;
    this.adressU = data.adress;
    this.idUp = data.id;
    this.controlU = data.control;
    this.rootU = data.root;
    $('.controlSelectU').val(data.control).trigger('change.select2');
    $('.rootSelectU').val(data.root).trigger('change.select2');
    $('.rootSelectU').val(data.root);
    $('.controlSelectU').val(data.control);
    $('#upd-up').css({display: 'block'});

      }
  okUp(data: any){
    if(this.passwordU == '' || $('.rootSelectU').val() == '' || $('.controlSelectU').val() == '' || this.passwordU == undefined || this.nameU == undefined || this.nameU == '') {
      alert('Please . Make sure the name , the password, the Branch, and the Permission are entered');
    } else {
      $('.loading').css({display: 'block'});
    this._ApiService.updateUser({nameU: this.nameU, emailU: this.emailU, passwordU: this.passwordU, phoneU: this.phoneU, adressU: this.adressU , id: this.idUp, controlU: $('.controlSelectU').val(), rootU: $('.rootSelectU').val()}).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allUsers().subscribe((res)=>{
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
   delU(id: any){
    $('#upd-dd').css({display: 'block'});
    this.idDU = id;
  }
  closedd(){
    $('#upd-dd').css({display: 'none'});
    this.idDU = '';
  }
  ok(){
    $('.loading').css({display: 'block'});
    var x = this.idDU;
    this._ApiService.delU({id: x}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allUsers().subscribe((res)=>{
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
  addUser(){
    $('#upd').css({display: 'block'});
    this.daynumber = 30;
    this.workday = this.salary / this.daynumber;
  }
  close(){
    $('#upd').css({display: 'none'});
    this.name = '';
    this.email = '';
    this.password = '';
    this.adress = '';
    this.root = '';
    this.phone = '';
    this.control = '';
    this.salaryafter = '';
    this.daynumber = '';
    this.workday = '';
    this.hourday = '';
    this.workhour = '';
    this.allhour = '';
    this.hourmonth = '';
    this.salary = '';
  }
  addUser0(data: any){
    if(this.salary == '' || $('.rootSelect').val() == '' || this.salary == undefined || $('.rootSelect').val() == undefined ) {
      alert('Please . Make sure the Employee and the Salary are entered');
    } else {
      $('.loading').css({display: 'block'});
      data.root = $('.rootSelect').val();
      // data.control = $('.controlSelect').val();
    this._ApiService.addAttenSalary(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allAttendSalary().subscribe((res0)=>{
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
        alert('This user already exists');
        this.close();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  printert(){
    window.print();
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
  arrayDate(array: any){
    this.arrayAll = [];
    var attendDeparture = 0;
    var attendPresence = 0;
    this.rootA.forEach((element0: any) => {
      attendDeparture = 0;
      attendPresence = 0;
      array.forEach((element: any) => {
        if(element0.id === element.employee_id ){
          if(element.type === 'Presence'){
          attendDeparture = attendDeparture + 1;
          } else {
            attendPresence = attendPresence + 1;
          }
        }
      });
      this.arrayAll.push({attendDeparture , attendPresence})
    });
    array.forEach((element0: any) => {
      array.forEach((element: any) => {
        if(element0.date === element.date && element0.employee_id === element.employee_id && element0.type === 'Presence' ){

        }
      });
    });
  }
  ngOnInit(): void {
    setTimeout(() => {
      $('.select2, .js-example-basic-multiple').select2();
    }, 500);
  }

}
