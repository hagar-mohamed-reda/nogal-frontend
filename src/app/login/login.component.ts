import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Cache } from '../cache';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private _ApiService: ApiService , private _Router: Router , private _AppComponent: AppComponent) {
    this._ApiService.Profile().subscribe((res)=>{
      if(res.check === true) {
        this._AppComponent.refreshNotification()
        this._AppComponent.show2 = false;
        this._AppComponent.show = true;
      } else {
        this._AppComponent.show2 = true;
        this._AppComponent.show = false;
      }
    })
   }
  login(data: any) {
    $('.loading').css({display: 'block'});
    this._ApiService.login(data).subscribe((res)=>{
      if(res.check === true) {
        $('.loading').css({display: 'none'});
        this._AppComponent.show2 = false;
        this._AppComponent.show = true;
        this._Router.navigate(['/users']);
        this._AppComponent.refreshNotification();
        // cache the creditional
        // Cache.set('login', {email: data.email, password: data.password});

      } else {
        this._AppComponent.show2 = true;
        this._AppComponent.show = false;
        alert('Error In Information');
        $('.loading').css({display: 'none'});
      }
    })
  }

  static performLogin(data: any, service: any, router: any, action: any=null) {
    service.login(data).subscribe((res: any)=>{
      if(res.check === true) {
        // cache the creditional
        Cache.set('login', {email: data.email, password: data.password});
        if (action)
          action(res);

          //let path = window.location.hash.replace("#", "");
          //router.navigateByUrl(path);
        //router.navigate(['/users']);
      } else {
      }
    })
  }

  ngOnInit(): void {
  }

}
