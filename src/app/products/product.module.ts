import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductList } from './product-list.component';
import { Rating } from '../shared/rating/rating.component';
import { ConvertToSpacesPipe } from '../shared/Pipes/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductList,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      {
        path: "products",
        component: ProductList
      },
      {
        path: "products/:id",
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
