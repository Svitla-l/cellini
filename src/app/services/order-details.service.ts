import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export  class OrderDetailsService {
 foodDetails = [
    {
      id:1,
      foodName:"Салат Неаполі ",
      foodDetails:"Салат айсберг, цибуля парей, морква,маслини,оливки,горіхи,сир гауда, соус бальзаміко",
      foodPrice:"175грн",
      foodWeight:"400г",
      foodImg: `/assets/image/place1-1.jpeg`
    },
    {
      id:2,
      foodName:"Млинці з ягодами",
      foodDetails:"Млинці з сезонними ягодами",
      foodPrice:"149грн",
      foodWeight:"400г",
      foodImg:`/assets/image/place8.jpeg`
    },
    {
      id:3,
      foodName:"Сендвіч з шинкою",
      foodDetails:"Тост, сир філадельфія, салат айсберг, шинка,",
      foodPrice:"69грн",
      foodWeight:"150г",
      foodImg:`/assets/image/place10.jpeg`
    },
    {
      id:4,
      foodName:"Спагетті De-amore",
      foodDetails:"Спагетті твердих сортів, креветки, кальмари, мідіЇ, соус часниково-вершковий",
      foodPrice:"200г",
      foodWeight:"600г",
      foodImg:`/assets/image/place7.jpeg`
    },
    {
      id:5,
      foodName:"Брускетти з томатами та руколою",
      foodDetails:"Запашний цільно зерновий хліб Чіабатта, стиглі томати, рукола, соус моцарелла,перец чіллі ",
      foodPrice:"125грн",
      foodWeight:"200г",
      foodImg:`/assets/image/place5.jpeg`
    },
    {
      id:6,
      foodName:"Пене з соусом болоньєзе",
      foodDetails:"Пене, томати, фарш яловичини. соус болоньєзе, часник",
      foodPrice:"160грн",
      foodWeight:"430г",
      foodImg:`/assets/image/place11.jpeg`
    },
    {
      id:7,
      foodName:"Гамбургер Великий Батько",
      foodDetails:"Запашна зернова булочка, цибуля, томати,огірки мариновані сир чедер,котлета з яловичини,бекон, салат Айберг, соус тартар",
      foodPrice:"170грн",
      foodWeight:"700г",
      foodImg:`/assets/image/place9.jpeg`
    },
    {
      id:8,
      foodName:"Авокадо тост з яйцем пашот",
      foodDetails:"Авокадо, тост, яйце, бейбі шпинат, прошутто",
      foodPrice:"120грн",
      foodWeight:"300г",
      foodImg:`/assets/image/place3-3.jpeg`
    }

  ]
}
