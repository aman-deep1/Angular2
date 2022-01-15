import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product : any=[];

  constructor() { }

  ngOnInit(): void {
  }

  public process(Name:any,Price:any,Company:any,Image:any)
  {
   
    let name = Name.value
    let price = Price.value
    let company = Company.value
    let image = Image.value
    this.Product.push({name,price,company,image});
    console.log(this.Product)
    
  }
  delete(P:any){
    this.Product.splice(this.Product.indexOf(P),1);
  //  this.Product=[...this.Product];
  }
  public updateImage(P:any,ImageUpdate:any){
    P.image=ImageUpdate.value;

  }
}