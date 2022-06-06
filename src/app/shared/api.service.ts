import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pipe } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiServic{
    constructor(private _http : HttpClient){}

    PostUser(data : any){
        return this._http.post<any>("http://localhost:8080/posts", data)
        .pipe(map((res:any)=>{
            return res;
        }))
    }
    GetUser(){
        return this._http.get<any>("http://localhost:8080/posts")
        .pipe(map((res:any)=>{
            return res;
        }))
    }
}