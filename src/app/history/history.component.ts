import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  arre: any;
  show = false;
  root: any;
  from: any;
  to: any;
  arre0: any;
  searchName = 'Search By User';
  show22 = false;
  placeSearch = 'Search By Branch';
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
    this._AppComponent.activeH = 'active';
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
    this._ApiService.search(data).subscribe((res)=>{
      this.arre = res;
      this.close();
      $('.loading').css({display: 'none'});
      this.show22 = true;
    })
  }
  printert(){
    window.print();
  }


  ngOnInit(): void {
  }

}
