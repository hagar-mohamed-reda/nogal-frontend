import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

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
  city: any;
  type: any;
  typeEmployee: any;

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
    this._AppComponent.activeCVEm = 'active';
    this._AppComponent.activeCVEmAttendances = '';
    this._AppComponent.activeCVEmAttendancesSalary = '';

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
    this._ApiService.allemployees().subscribe((res)=>{
      if(res.check === true){
        this.arre = res.data;
        this.ngOnInit();
        $('.loading').css({display: 'none'});
      } else{
        alert('error')
      }
    })
    this._ApiService.getControlsTypeEmployee().subscribe((res)=>{
      this.typeEmployee = res;
      this.ngOnInit();
    })
    this._AppComponent.goProfile();

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
    this.city = '';
    this.type = '';
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
    this.type = data.type;
    this.city = data.city;
    $('.controlSelectU').val(data.control).trigger('change.select2');
    $('.rootSelectU').val(data.root).trigger('change.select2');
    $('.rootSelectU').val(data.root);
    $('.controlSelectU').val(data.control);
    $('#upd-up').css({display: 'block'});

      }
  okUp(data: any){
    if(this.type == '' || this.type == undefined || this.nameU == undefined || this.nameU == '') {
      alert('Please . Make sure the name and the type are entered');
    } else {
      $('.loading').css({display: 'block'});
    this._ApiService.updateEmployee({nameU: this.nameU, emailU: this.emailU, type: this.type, phoneU: this.phoneU, adressU: this.adressU , id: this.idUp , city : this.city}).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allemployees().subscribe((res)=>{
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
    this._ApiService.delUEmployee({id: x}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allemployees().subscribe((res)=>{
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
  }
  close(){
    $('#upd').css({display: 'none'});
    this.name = '';
    this.email = '';
    this.adress = '';
    this.city = '';
    this.phone = '';
    this.type = '';
  }
  addUser0(data: any){
    if(this.type == '' || this.type == undefined || this.name == undefined || this.name == '' ) {
      alert('Please . Make sure the Type and the Name are entered');
    } else {
      $('.loading').css({display: 'block'});
      data.root = $('.rootSelect').val();
      data.control = $('.controlSelect').val();
    this._ApiService.addEmployee(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allemployees().subscribe((res0)=>{
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


  ngOnInit(): void {
    // setTimeout(() => {
      $('.select2, .js-example-basic-multiple').select2();
    // }, 500);
  }

}
