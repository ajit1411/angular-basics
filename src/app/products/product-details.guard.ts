import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {
  constructor(private router: Router) {};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const productId = Number(route.paramMap.get("id"));
    if(isNaN(productId) || productId < 1){
      this.router.navigate(["/not-found"]);
      return false;
    }
    return true;
  }

}
