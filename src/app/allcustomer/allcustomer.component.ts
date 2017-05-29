import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.css']
})
export class AllcustomerComponent {
    selecteduser: any;

  

 
 items: FirebaseListObservable<any>;
    constructor(private db: AngularFireDatabase) {
        this.items = db.list('/sample');
      }


 
  select(u: any) {
    this.selecteduser = u;
  }
}