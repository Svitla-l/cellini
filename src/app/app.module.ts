import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SharepageComponent } from './sharepage/sharepage.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { BasketComponent } from './page/basket/basket.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './page/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FrontendComponent } from './frontend/frontend.component';
import { UsersComponent } from './frontend/users/users.component';
import { SignupComponent } from './frontend/users/signup/signup.component'
import { LoginComponent } from './frontend/users/login/login.component';


const appRoutes: Routes =[
  
];
@NgModule({
  declarations: [
    AppComponent,
    SharepageComponent,
    NavbarComponent,
    FooterComponent,
    PageComponent,
    HomeComponent,
    MenuComponent,
    BasketComponent,
    AboutComponent,
    FrontendComponent,
    UsersComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
