import { Component, Input, OnInit } from '@angular/core';
import { users } from '../datamodel';

import { Http } from "@angular/http/src";
import { FormGroup } from "@angular/forms";
import { Validators, FormBuilder, FormArray ,FormControl} from "@angular/forms";
import { userservice } from '../services/userservice'
import { userservice1 } from '../services/adduserservice'


declare var componentHandler: any;



@Component({
  selector: 'app-addcustomerdetail',
  templateUrl: './adddetails.html',
 
   styleUrls: ['./adddetails.css'],

  providers: [userservice, userservice1],
})

export class Adddetails implements OnInit {
    users3: users[];
   
ngAfterViewInit(){
     componentHandler.upgradeAllRegistered();
    }



  currentuser1: string;

firstName:string;
  users2: users[];

  errorMessage: any;
  selecteduser: users;
  currentuser: users;


  userform: FormGroup;
  


  constructor(private builder1: FormBuilder, private userser: userservice, private userser1: userservice1,) 
  {}


  submit() {
    alert("successul");
    this.userser.insert(this.userform.value);
   this.users2 = this.userser.getall();//put latr in get all
  
    
     this.users3= JSON.parse(localStorage.getItem('hello'));
 
     console.log('localStorage',JSON.parse(localStorage.getItem('hello'))); 


  }
  ngOnInit() {
 
this.userform = this.builder1.group({
      name: ['', [Validators.required,]],
      age: ['', [Validators.required]],

      street: ['', [Validators.required]],
      city: ['', [Validators.required]],

      yoe: ['', [Validators.required]],
    });
  
}

  
  select(u: users) {
    this.selecteduser = u;
  }
  

getname(currentuser: string) {

    for (let user of this.users2)
      if (user.name == currentuser)
      this.currentuser1 = user.name;
     
  }


}


