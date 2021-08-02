import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../interfaces';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = "Product Details";
  product: IProducts | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { };
  onBack(): void{
    this.router.navigate(["/products"]);
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.pageTitle = `Product Details: ${id}`;
  }

}
