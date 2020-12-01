
import { style } from '@angular/animations';
import { Component } from '@angular/core';



@Component({
  selector: 'app-property-card',
 // template: `<h1>Hi This is a card</h1>`,
 templateUrl: 'property-card.component.html',
// styles:  [``]
styleUrls:['property-card.component.css']

}
)
export class ProperyCardComponent{
  Property :any ={
    "Id" : 1,
    "Type": "House",
    "Name": "Rocks House",
    "Price":12000

  }
}
