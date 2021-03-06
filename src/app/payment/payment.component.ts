import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  arre: any;
  show = false;
  root: any;
  from: any;
  to: any;
  arre0: any;
  searchName = 'أبحث بالشخص';
  show22 = false;
  arre00: any;
  arre000: any;
  arre0000: any;
  placeSearch = 'أبحث بالفرع';
  rootA: any;
  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent ) {
    this._AppComponent.activeU = '';
    this._AppComponent.activeS = '';
    this._AppComponent.activeR = '';
    this._AppComponent.activeI = '';
    this._AppComponent.activeC = '';
    this._AppComponent.activeP = '';
    this._AppComponent.activeCu = '';
    this._AppComponent.activeCR = '';
    this._AppComponent.activeH = '';
    this._AppComponent.activeO = 'active';
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
    this._ApiService.allUsers().subscribe((res)=>{
      if(res.check === true){
        this.arre0 = res.data;
      } else{
        alert('error')
      }
    })
    this._AppComponent.goProfile();
   }
   search(){
    $('#upd').css({display: 'block'})
  }
  close(){
    $('#upd').css({display: 'none'})
    this.from = '';
    this.to = '';
  }
  search0(data: any){
    $('.loading').css({display: 'block'});
    this._ApiService.searchPay(data).subscribe((res)=>{
      this._ApiService.searchPay0(data).subscribe((res0)=>{
        this._ApiService.searchPay00(data).subscribe((res00)=>{
          this._ApiService.searchPay000(data).subscribe((res000)=>{
            this.arre = res;
            this.arre00 = res0;
            this.arre000 = res00;
            this.arre0000 = res000;
            this.close();
            $('.loading').css({display: 'none'});
            this.show22 = true;

          })
        })
      })
    })
  }


  ngOnInit(): void {
  }

}
