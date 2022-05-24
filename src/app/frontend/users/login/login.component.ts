import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  wrongPassword: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onSendPassword(){
  this.router.navigate(["/send"])
}
onSubmitClick(password: string, email: string) {
    if (password === "1111"
    && email ==="admin@gmail.com") {
      this.wrongPassword = false;
      this.router.navigate(["/admin"]);
    } else {
      this.wrongPassword = true;
      setTimeout(() => {
        this.wrongPassword = false;
      }, 1000);
    }
  }
}
