import { Component, OnInit } from '@angular/core';
import { userservice } from '../services/userservice';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

declare var componentHandler: any;

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent  {

 items: FirebaseListObservable<any>;
    constructor(private db: AngularFireDatabase) {
        this.items = db.list('/sample');
      }

delete(data:any)
{
this.items.remove(data);
}


ngAfterViewInit(){
   componentHandler.upgradeAllRegistered();
   componentHandler.upgradeDom();
 }
}
