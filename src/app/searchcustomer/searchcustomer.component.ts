import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { users } from '../datamodel'
import { userservice1 } from '../services/adduserservice';
import { Adddetails } from '../addcustomer/adddetails.component';
import { userservice } from "app/services/userservice";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";


declare var componentHandler: any;


@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css'],
  providers: [userservice1],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchcustomerComponent implements OnInit {
  errorMessage: any;
  users3: users[]=[];
  currentuser1: users[]=[];

  currentuser: users[]=[];
cu:string;


 /* ngOnInit() {
    this.users3=this.userser1.getall();
      this.currentuser=JSON.parse(localStorage.getItem('hello'));
      //this.users3= JSON.parse(localStorage.getItem('hello'));
      console.log(this.currentuser);
    
  }




  getname(currentuser:any) {

    for (let user of this.currentuser)
      if (user.name == currentuser)
        this.currentuser1 = this.currentuser;
        console.log('namessd',this.currentuser1);
       this.cu= JSON.stringify(this.currentuser1);
        console.log(this.cu);
      
     
  }*/


  //firebase code
  items: FirebaseListObservable<any>;
  allemp: users[];
filtered: users[];
    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase)
     {
        this.items = af.list('/sample');
      }
      

      ngOnInit() {
this.af.list('/sample')
.map(users.fromJsonList)
.subscribe(
lessons => this.allemp = lessons
)
}

filtering(myfilter:any) {
this.filtered = this.allemp.filter(lesson => users.name.includes(myfilter) );
console.log(this.filtered);
}

ngAfterViewInit(){
   componentHandler.upgradeAllRegistered();
   componentHandler.upgradeDom();
 }
}


