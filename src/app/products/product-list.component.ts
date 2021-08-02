import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs";
import { IProducts } from "./interfaces"
import { ProductService } from "./products.service";

@Component({
    templateUrl: "./product-list.component.html",
})

export class ProductList implements OnInit, OnDestroy {
    pageTitle: String = "My Product List";
    showImages: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 2;
    private _listFilter: string = "";
    productSub!: Subscription;
    get listFilter(): string {
        return this._listFilter
    };
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.filterProducts(value);
    }
    filteredProducts: IProducts[] = [];
    products: IProducts[] = [];
    constructor(private productService: ProductService) { };
    filterProducts(filterBy: string): IProducts[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProducts) => product.name.toLowerCase().includes(filterBy));
    };
    toggleShowImage(): void {
        this.showImages = !this.showImages;
    };
    ngOnInit(): void {
        this.listFilter = "";
        this.products = this.productService.getProducts();
        this.filteredProducts = this.productService.getProducts();
        this.productSub = this.productService.getUsers().subscribe({
            next: data => console.log(data),
            error: err => console.log(err)
        })
    };
    ngOnDestroy(): void{
        this.productSub.unsubscribe();
    }
    updateRating(value: string): void {
        this.pageTitle = "My Products: " + value;
    };
}