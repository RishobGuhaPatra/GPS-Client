import { Component, OnInit } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { RouteService } from '../services/route.service';


@Component({
  selector: 'app-wps-table',
  templateUrl: './wps-table.component.html',
  styleUrls: ['./wps-table.component.css']
})
export class WpsTableComponent implements OnInit {

  activities: IActivity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;

  constructor(private routeService: RouteService) { }

  ngOnInit() {

  }

}
