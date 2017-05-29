import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { AddcustomerComponent } from "app/addcustomer/addcustomer.component";
import { SearchcustomerComponent } from "app/searchcustomer/searchcustomer.component";
import { Adddetails } from "./addcustomer/adddetails.component";
import { AppComponent } from "app/app.component";
import { LoginComponent } from "app/login/login.component";
import { DeletecustomerComponent } from "app/deletecustomer/deletecustomer.component";
import { AllcustomerComponent } from "app/allcustomer/allcustomer.component";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HomeComponent, children: [
            {path: 'adddetails', component: Adddetails},

            { path: 'searchcustomer', component: SearchcustomerComponent, },
             {path: 'deletecustomer', component: DeletecustomerComponent},
              {path: 'allcustomer', component: AllcustomerComponent},

            ]
    },

]
export const RoutingRoutes = RouterModule.forRoot(routes)


