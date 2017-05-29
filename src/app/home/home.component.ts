import { Component, } from '@angular/core';

declare var componentHandler: any;

@Component({
  selector: 'app-home',
   
  templateUrl: './home.component.html',
 
  styleUrls: ['./home.component.css']
})


export class HomeComponent  {
  
 ngAfterViewInit(){
   componentHandler.upgradeAllRegistered();
   componentHandler.upgradeDom();
 }
}
