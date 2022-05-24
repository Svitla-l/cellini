import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-etry',
  templateUrl: './admin-etry.component.html',
  styleUrls: ['./admin-etry.component.css']
})
export class AdminEtryComponent implements OnInit {
 id!: number;
 foodName!: string;
 foodDetails!: string;
 foodPrice!: number;
 foodWeight!: string;
 foodImg!: string

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
