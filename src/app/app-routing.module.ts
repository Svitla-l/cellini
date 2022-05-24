import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { BasketComponent } from './page/basket/basket.component';
import { MenuComponent } from './page/menu/menu.component';
import { LoginComponent } from './frontend/users/login/login.component';
import { SignupComponent } from './frontend/users/signup/signup.component';
import { AdminEtryComponent } from './frontend/users/login/admin-etry/admin-etry.component';
import { RememberEmailComponent } from './frontend/users/login/remember-email/remember-email.component';
import { BasketNullComponent } from './page/basket/basket-null/basket-null.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'menu',component:MenuComponent},
  {path:'basket/:id',component:BasketComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminEtryComponent},
  {path:'signup',component:SignupComponent},
  {path:'send',component:RememberEmailComponent},
  {path:'basket',component:BasketNullComponent},
  

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
