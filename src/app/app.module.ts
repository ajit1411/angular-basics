import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './products/not-found/not-found.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "welcome",
        component: WelcomeComponent
      },
      {
        path: "not-found",
        component: NotFoundComponent
      },
      {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full"
      },
      {
        path: "**",
        redirectTo: "welcome"
      }
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
