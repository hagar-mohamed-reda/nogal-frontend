import { Component } from '@angular/core';
declare var $: any;
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Cache } from './cache';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show = false;
  show2 = true;
  title = 'nogalClient';
  name: any;
  control: any;
  controlA: any;
  activeU: any;
  activeR: any;
  activeS: any;
  activeI: any;
  activeC: any;
  activeP: any;
  activeCu: any;
  activeCR: any;
  activeH: any;
  activeO: any;
  activeCE: any;
  activeCV: any;
  activeSE: any;
  activeSEB: any;
  activeCuO: any;
  activeCuOStore: any;
  activeHRE: any;
  activeHReport: any;
  activeCVV: any;
  activeCVEm: any;
  allCaAnsRFNot: any = [];
  allCaAnsNot: any = [];
  activeCVEmAttendances: any;
  activeCVEmAttendancesSalary: any;
  constructor(private _ApiService: ApiService, private _Router: Router) {
    this._ApiService.getControls().subscribe((res)=>{
      this.controlA = res;
    })
    this._ApiService.Profile().subscribe((res)=>{
      if(res.check === true) {
        this.show2 = false;
        this.show = true;
        this.name = res.name;
        for(var x = 0 ; x<this.controlA.length ; x++){
          if(res.control == this.controlA[x].id){
            this.control = this.controlA[x].name;
          }
        }
        this._ApiService.allRequestRFAns00().subscribe((res)=>{
          this.allCaAnsRFNot = [];
          res.forEach((element: any) => {
            if (element.replay == 0) {
              this.allCaAnsRFNot.push(' ');
            }
          });
        })
        this._ApiService.allRequestRFAns().subscribe((res)=>{
          this.allCaAnsNot = [];
          res.forEach((element: any) => {
            if (element.replay == 0) {
              this.allCaAnsNot.push(' ');
            }
          });
        })
      } else {
        this.show2 = true;
        this.show = false;
      }
    })
   }
   refreshNotification() {
    this._ApiService.allRequestRFAns00().subscribe((res)=>{
      this.allCaAnsRFNot = [];
      res.forEach((element: any) => {
        if (element.replay == 0) {
          this.allCaAnsRFNot.push(' ');
        }
      });
    })
    this._ApiService.allRequestRFAns().subscribe((res)=>{
      this.allCaAnsNot = [];
      res.forEach((element: any) => {
        if (element.replay == 0) {
          this.allCaAnsNot.push(' ');
        }
      });
    })
   }
   goout(){
    $('.loading').css({display: 'block'});
    this._ApiService.goout().subscribe(()=>{
      this.show2 = true;
      this.show = false;
      Cache.remove('login');
      this._Router.navigate(['']);
      Cache.remove('login');
      $('.loading').css({display: 'none'});
    })
  }
   goProfile(){
    this._ApiService.getControls().subscribe((res)=>{
      this.controlA = res;
    })
    this._ApiService.Profile().subscribe((res)=>{
      if(res.check === true) {
        this.show2 = false;
        this.show = true;
        this.name = res.name;
        for(var x = 0 ; x<this.controlA.length ; x++){
          if(res.control == this.controlA[x].id){
            this.control = this.controlA[x].name;
          }
        }
      } else {
        this.show2 = true;
        this.show = false;
      }
    })
   }
  togle() {
    // ------------------------------------------------------- //
    // Side Navbar Functionality
    // ------------------------------------------------------ //
      if ($(window).outerWidth() > 1194) {
          $('nav.side-navbar').toggleClass('shrink');
          $('.page').toggleClass('active');
      } else {
          $('nav.side-navbar').toggleClass('show-sm');
          $('.page').toggleClass('active-sm');
      }
}
}
