import { Injectable, Input } from '@angular/core';
import { users } from "app/datamodel";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";


@Injectable()

export class userservice {

    items: FirebaseListObservable<any>;
    constructor(private db: AngularFireDatabase) {
        this.items = db.list('/sample');
    }

    users2: any;
    public users1: users[] = [];



    insert(users: users) {

        this.users1.push(users);
        localStorage.setItem('hello', JSON.stringify(this.users1));


        this.items.push(users);
    }


    getall() {
        return this.users1;
    }

}

  
   




