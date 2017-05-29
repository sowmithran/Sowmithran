import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{ReactiveFormsModule} from '@angular/forms';
import{Router} from'@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import{RoutingRoutes} from './routing';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component'
import { Adddetails } from './addcustomer/adddetails.component'
import{userservice } from './services/userservice'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';



import { LoginComponent } from './login/login.component';






import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { AllcustomerComponent } from './allcustomer/allcustomer.component';

export const firebaseConfig = {
 apiKey: "AIzaSyCIFxooMUYxwDE3nLb7-A8VK8PTaut8iS4",
    authDomain: "sample-c736a.firebaseapp.com",
    databaseURL: "https://sample-c736a.firebaseio.com",
    projectId: "sample-c736a",
    storageBucket: "sample-c736a.appspot.com",
    messagingSenderId: "713611643990"
};





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    AddcustomerComponent,
    SearchcustomerComponent,
    Adddetails,
    LoginComponent,
    
    
    DeletecustomerComponent,
    AllcustomerComponent,
   
    
  ],
  imports: [
    BrowserModule, FormsModule,HttpModule,RoutingRoutes,ReactiveFormsModule, 
    
      AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    ],

  providers: [userservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
