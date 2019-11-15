import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

    constructor(private dataService: DataService) { }


}
