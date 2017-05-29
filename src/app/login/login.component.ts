import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

username:string;
password:string;

  form1:FormGroup;
    constructor( private formbuilder:FormBuilder,private route:Router)
    {}
    
ngOnInit()
{
        this.form1=this.formbuilder.group
        ({ 
            name:['',[Validators.required]],
            pwd:['',Validators.minLength(6)]
        })
}



login()
  {
    if((this.username=="sowmithran")&&(this.password=="admin"))
    {
         this.route.navigate(['/home']);
         alert("successful login");
        
    }
  }

}
