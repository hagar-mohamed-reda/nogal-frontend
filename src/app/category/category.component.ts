import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

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
  rootSearchType = 'أبحث بنوع الفرع';
  notes: any;
  typeofroot: any;
  typeofrootA: any;
  idDCa: any;
  typeofrootU: any;
  notesU: any;
  idUpCa: any;
  city: any;
  location: any;
  cityU: any;
  locationU: any;
  allCa:any;
  selectedCategory: any = null;
  arrRoot: any;
  arrRoot012: any;

  constructor(private _ApiService: ApiService , private _Router: Router, private _AppComponent: AppComponent ) {
    this._AppComponent.activeP = '';
    this._AppComponent.activeU = '';
    this._AppComponent.activeS = '';
    this._AppComponent.activeR = '';
    this._AppComponent.activeI = '';
    this._AppComponent.activeC = 'active';
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
    this._ApiService.allCa0().subscribe((res)=>{
      this.allCa = res;
    })
    this._ApiService.allCaNot().subscribe((res)=>{
      this.arrRoot012 = res;
    })
    this._ApiService.allCa().subscribe((res)=>{
      this.arrRoot = res;
      this.initTree(res);
      $('.loading').css({display: 'none'});
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
    this._AppComponent.goProfile();
   }

   /*
    [
         { "id" : "ajson1", "parent" : "#", "text" : "Simple root node" },
         { "id" : "ajson2", "parent" : "#", "text" : "Root node 2" },
         { "id" : "ajson3", "parent" : "ajson2", "text" : "Child 1" },
         { "id" : "ajson4", "parent" : "ajson2", "text" : "Child 2" },
      ]
   */

   getTreeData(data: any) {
     let treeData: any = [];
     data.forEach((element: any) => {
       let p = element.category_id? element.category_id : '#';
       treeData.push({id: element.id, parent: p+"", text: element.name ,state:{opened:true}});
     });
     return treeData;
   }

   initTree(data: any) {
    let treeData = this.getTreeData(data);
    var self = this;
    $('#using_json_2').jstree('destroy');
    setTimeout(() => {
      $('#using_json_2').jstree({ 'core' : {
        'data' :  treeData
      }});
      $('#using_json_2').on('changed.jstree', function (e: any, data: any) {
        var i, j, r = [];
        for(i = 0, j = data.selected.length; i < j; i++) {
          r.push(data.instance.get_node(data.selected[i]).id);
        }
        $('#event_result').html('The Chosen Code Is : ' + r.join(', '));
        self.selectedCategory = r.join(', ');
      }).jstree();
    }, 500);
   }
   addC00(){
     if(this.selectedCategory == null || this.selectedCategory == '' || this.selectedCategory == undefined) {
      alert('Please choose one category');
     } else {
      $('#upd').css({display: 'block'});
     }
   }


   closeUpCa(){
    $('#upd-up').css({display: 'none'});
    // this.idUpCa = '';
    // this.selectedCategory = null;
    this.nameU = '';
  }
  upCa(){
    if(this.selectedCategory == null || this.selectedCategory == '' || this.selectedCategory == undefined) {
      alert('Please choose one category');
    } else {
      this.idUpCa = this.selectedCategory;
      $('#upd-up').css({display: 'block'});
    }
  }
  okUp(data: any){
    if(this.nameU == '' || this.nameU == undefined ) {
      alert('Please . Make sure the Name are entered');
    } else {
      data.id = this.idUpCa;
      $('.loading').css({display: 'block'});
    this._ApiService.updateCa(data).subscribe((res)=> {
      if(res === true) {
        this._ApiService.allCa().subscribe((res)=>{
          this._ApiService.allCa0().subscribe((res0)=>{
            this._ApiService.allCaNot().subscribe((res1)=>{
              this.arrRoot012 = res1;
              this.allCa = res0;
              this.arrRoot = res;
              this.initTree(res);
              alert('Updated Done Successfully');
              this.closeUpCa();
              $('.loading').css({display: 'none'});
            })
          })
        })
      } else {
        alert("Updated Don't Successfully");
        this.closeUpCa();
        $('.loading').css({display: 'none'});
      }
    })
    }
  }
  delCa(){
    if(this.selectedCategory == null || this.selectedCategory == '' || this.selectedCategory == undefined) {
      alert('Please choose one category');
    } else {
      $('#upd-dd').css({display: 'block'});
      this.idDCa = this.selectedCategory;
    }
  }
  closedC(){
    $('#upd-dd').css({display: 'none'});
    // this.idDCa = '';
    // this.selectedCategory = null;
  }
  ok(){
    $('.loading').css({display: 'block'});
    var x = this.idDCa;
    this._ApiService.delCa({id: x}).subscribe((res)=>{
      if(res === true){
        this._ApiService.allCa().subscribe((res)=>{
          this._ApiService.allCa0().subscribe((res0)=>{
            this._ApiService.allCaNot().subscribe((res1)=>{
              this.arrRoot012 = res1;
              this.allCa = res0;
              this.arrRoot = res;
              this.initTree(res);
          alert('Deleted Done Successfully');
          this.closedC();
          $('.loading').css({display: 'none'});
            })
          })
        })
      } else {
        alert('Deleted Not Successfully\nPlease, if you want to delete this Category , you must delete all his pre request on the site');
        this.closedC();
        $('.loading').css({display: 'none'});
      }
    })
  }
  addC(){
    $('#upd').css({display: 'block'});
    this.selectedCategory = null;
  }
  addCa(data: any){
    if(this.name == '' || this.name == undefined ) {
      alert('Please . Make sure the Name are entered');
    } else {
      $('.loading').css({display: 'block'});
    data.id = this.selectedCategory;
    this._ApiService.addCa(data).subscribe((res)=>{
      if(res.check === true){
        this._ApiService.allCa().subscribe((res)=>{
          this._ApiService.allCa0().subscribe((res0)=>{
            this._ApiService.allCaNot().subscribe((res1)=>{
              this.arrRoot012 = res1;
              this.allCa = res0;
              this.arrRoot = res;
              this.initTree(res);
              // alert('Added successfully');
              this.close();
              $('.loading').css({display: 'none'});
            })
          })
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
    // this.selectedCategory = null;
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
  }

}
