import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RememberModule } from './remember.module';

@Component({
  selector: 'app-remember-email',
  templateUrl: './remember-email.component.html',
  styleUrls: ['./remember-email.component.css']
})

export class RememberEmailComponent implements OnInit {
notEmail: boolean = false;
okEmail: boolean = false;

  constructor(private router:Router ) { }

  ngOnInit(): void {}
  
  onBack(){
  this.router.navigate(["/home"]);
  }

  onSent(email: string) {
    if (email.trim() !== " " ) {
      this.router.navigate(["/login"]);
    } else {
      this.notEmail = true;
      setTimeout(() => {
      this.notEmail = false;
      }, 1000);
    }
  }
}
