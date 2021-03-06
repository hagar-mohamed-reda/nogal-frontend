import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-putmoney',
  templateUrl: './putmoney.component.html',
  styleUrls: ['./putmoney.component.scss']
})
export class PutmoneyComponent implements OnInit {
  description: any;
  money: any;
  notes: any;
  show = false;

  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent) {
    this._ApiService.Profile().subscribe((res)=>{
      if(res.check === true) {
        this._AppComponent.refreshNotification()
        this.show = true;
      } else {
        this._Router.navigate([''])
        this.show = false;
      }
    })
    this._AppComponent.activeP = '';
    this._AppComponent.activeU = '';
    this._AppComponent.activeS = '';
    this._AppComponent.activeR = '';
    this._AppComponent.activeI = '';
    this._AppComponent.activeC = '';
    this._AppComponent.activeCu = '';
    this._AppComponent.activeCR = '';
    this._AppComponent.activeH = '';
    this._AppComponent.activeO = '';
    this._AppComponent.activeCE = 'active';
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
   }
   putMoney(data: any){
      if(this.description == '' || this.money == '' || this.notes == '' || this.description == undefined || this.money == undefined || this.notes == undefined ) {
        alert('من فضلك ضع البيانات بالكامل');
      } else {
        this._ApiService.putMoney(data).subscribe((res)=>{
          if(res === true) {
            this.description = '';
            this.money = '';
            this.notes = '';
            alert('تمت العملية بنجاح');
          } else {
            alert('لم تتم العملية بنجاح');
          }
        })

      }
   }

  ngOnInit(): void {
  }

}
