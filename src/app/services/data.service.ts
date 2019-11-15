import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    //just a service that holds all the HTTP calls made by our application, made generic to parse from Heylx / Skymantics / 
    constructor(private http: HttpClient) {
    }

    url: URL;

    getList(): Observable<JSON> {
        return this.http.get<JSON>(this.url.host);
    }

}
