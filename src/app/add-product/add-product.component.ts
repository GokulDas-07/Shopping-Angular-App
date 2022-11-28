import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  title=""
  image=""
  description=""
  rate=""
  seller=""
  quantity=""


  readValues=()=>
  {
    let data:any={"title":this.title,"image":this.image,"description":this.description,"rate":this.rate,"seller":this.seller,"quantity":this.quantity}
    console.log(data)
  }




}
