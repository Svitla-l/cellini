import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEtryComponent } from './admin-etry/admin-etry.component';
import { LoginComponent } from './login.component';
import { RememberEmailComponent } from './remember-email/remember-email.component';

@NgModule({
  declarations: [
  RememberEmailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
