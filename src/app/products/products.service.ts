import { Injectable } from "@angular/core";
import { IProducts } from "./interfaces";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
@Injectable({
    providedIn: "root"
})
export class ProductService {
    private reqResAPI_Users = "https://reqres.in/api/uses?page=2";
    constructor(private http: HttpClient) { }
    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.reqResAPI_Users).pipe(
            tap(data => {}),
            catchError(this.handleError)
        )
    }
    handleError(err: HttpErrorResponse){
        let errorMessage = "";
        if(err.error instanceof ErrorEvent){
            errorMessage = `Error: ${err.error.message}`;
        }
        else{
            errorMessage = `Error: Status >> ${err.status} with messag >> ${err.message}`
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
    getProducts(): IProducts[] {
        return [
            {
                "id": 1,
                "code": "abc-1",
                "name": "Hammer",
                "available": 12,
                "price": 4.85,
                'rating': 4.5,
                "imageUrl": "assets/images/hammer.png"
            },
            {
                "id": 2,
                "code": "abc-2",
                "name": "Saw",
                "available": 45,
                "price": 4.68,
                "rating": 2.5,
                "imageUrl": "assets/images/saw.png"
            },
            {
                "id": 3,
                "code": "abc-3",
                "name": "Controller",
                "available": 45,
                "price": 14.68,
                "rating": 4.5,
                "imageUrl": "assets/images/xbox-controller.png"
            },
            {
                "id": 4,
                "code": "abc-4",
                "name": "Leaf Rake",
                "available": 15,
                "price": 20.68,
                "rating": 3.5,
                "imageUrl": "assets/images/leaf_rake.png"
            }
        ]
    };
}