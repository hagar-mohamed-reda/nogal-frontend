import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

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
  rootSearchType = 'Searching By Branch Type';
  notes: any;
  typeofroot: any = undefined;
  typeofrootA: any;
  idDR: any;
  typeofrootU: any;
  notesU: any;
  idUpR: any;
  city: any;
  location: any;
  cityU: any;
  locationU: any;

  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent ) {
    this._AppComponent.activeU = '';
    this._AppComponent.activeS = '';
    this._AppComponent.activeR = 'active';
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
      $('.loading').css({display: 'none'});

    })
    this._ApiService.getTypeOfRoot().subscribe((res)=>{
      this.typeofrootA = res;
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
    this._AppComponent.goProfile();
   }
   closeUp(){
    $('#upd-up').css({display: 'none'});
    this.nameU = '';
    this.typeofrootU = '';
    this.notesU = '';
    this.idUpR = '';
    this.cityU = '';
    this.locationU = '';
    this.phoneU = '';
  }
  upR(data: any){
    this.nameU = data.name;
    this.typeofrootU = data.typeofroot;
    this.notesU = data.notes;
    this.idUpR = data.id;
    this.cityU = data.city;
    this.locationU = data.location;
    this.phoneU = '0' + data.phone;
    $('.typeofrootUselect').val(data.typeofroot);
    $('.typeofrootUselect').val(data.typeofroot).trigger('change.select2');
    $('#upd-up').css({display: 'block'});
  }
  okUp(data: any){
    if($('.typeofrootUselect').val() == '' || this.locationU == ''|| this.locationU == undefined ) {
      alert('Please . Make sure the Adress and the Type of Branch are entered');
    } else {
      data.typeofrootU = $('.typeofrootUselect').val();
      $('.loading').css({display: 'block'});
    this._ApiService.updateR({nameU: this.nameU, typeofrootU: $('.typeofrootUselect').val(), notesU: this.notesU , id: this.idUpR , locationU: this.locationU , cityU: this.cityU , phoneU: this.phoneU}).subscribe((res)=> {
      if(res === true) {
        this._ApiService.getRoots().subscribe((res)=>{
          this.rootA = res;
          alert('Updated Done Successfully');
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
   delR(id: any){
    $('#upd-dd').css({display: 'block'});
    this.idDR = id;
  }
  closedd(){
    $('#upd-dd').css({display: 'none'});
    this.idDR = '';
  }
  ok(){
    $('.loading').css({display: 'block'});
    var x = this.idDR;
    this._ApiService.delR({id: x}).subscribe((res)=>{
      if(res === true){
        this._ApiService.getRoots().subscribe((res)=>{
          this.rootA = res;
          alert('Deleted Done Successfully');
          this.closedd();
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('Deleted Not Successfully\nPlease, if you want to delete this Branch, you must delete all his pre request on the site');
        this.closedd();
        $('.loading').css({display: 'none'});
      }
    })
  }
  addRoot(){
    $('#upd').css({display: 'block'});
  }
  addRoot0(data: any){
    if($('.typerootselect').val() == ''|| this.location == '' || $('.typerootselect').val() == undefined || this.location == undefined ) {
      alert('Please . Make sure the Adress and the Type of Branch are entered');
    } else {
      data.typeofroot = $('.typerootselect').val();
      $('.loading').css({display: 'block'});
    this._ApiService.addRoot(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.getRoots().subscribe((res)=>{
          this.rootA = res;
          alert('Added successfully');
          this.close();
          $('.loading').css({display: 'none'});
        })
      } else {
        alert('Not added successfully');
        this.close();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  close(){
    $('#upd').css({display: 'none'});
    this.name = '';
    this.notes = '';
    this.typeofroot = '';
    this.city = '';
    this.location = '';
    this.phone = '';
  }
  addUser0(data: any){
    if(this.name == '' || this.email == '' || this.password == '' || this.adress == '' || this.root == '' || this.phone == '' || this.control == '' || this.name == undefined || this.email == undefined || this.password == undefined || this.adress == undefined || this.root == undefined || this.phone == undefined || this.control == undefined ) {
      alert('من فضلك أدخل جميع البيانات بالكامل');
    } else {
      $('.loading').css({display: 'block'});
    this._ApiService.addUser(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allUsers().subscribe((res0)=>{
          if(res0.check === true){
            this.arre = res0.data;
            alert('تم الأضافه');
            this.close();
            $('.loading').css({display: 'none'});
          } else{
            alert('error');
          }
        })
      } else {
        alert('لم تتم الأضافة');
        this.close();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }


  ngOnInit(): void {
    // setTimeout(() => {
      $('.select2, .js-example-basic-multiple').select2();
    // }, 500);
  }

}
