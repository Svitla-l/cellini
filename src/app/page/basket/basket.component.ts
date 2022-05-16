import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }
  getMenuId:any;
  menuData:any;
  key: any = 'Id'

  storeName(){
      localStorage.setItem(this.key, 'value');
      this.menuData = localStorage.getItem(this.key);
    }
    SpecificDelete() {
      localStorage.removeItem('Id');
    }
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id')
    console.log(this.getMenuId,'getmenu');
    
    if(this.getMenuId){
      this.menuData=this.service.foodDetails.filter((value)=>{
      return value.id==this.getMenuId
      })
    }
  }

}
