
import { Component, OnInit } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../services/activity.service';
import { RouteModel, Input, MultiPoint, MultiPolygon } from '../shared/route-model';
import { MapService } from '../services/map.service';
import { DeserializeService } from '../services/deserialize.service';
import { latLng, LatLng } from 'leaflet';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  routeModel: RouteModel = new RouteModel(new MultiPoint(), new MultiPolygon());
  submitted = false;
  wps: string;

  syncs: Input[] = [
    { value: 'sync', viewValue: 'sync' },
    { value: 'async', viewValue: 'async' }
  ];


  routingapis: Input[] = [
    { value: 'Routing API', viewValue: 'Routing API' },
    { value: 'WPS', viewValue: 'WPS' }
  ];

  wpss: Input[] = [
    { value: 'skymantics', viewValue: 'Skymantics' },
    { value: 'other', viewValue: 'other' }
  ];

  schemas: Input[] = [
    { value: 'OSM', viewValue: 'OSM' },
    { value: 'NSG', viewValue: 'NSG' },
    { value: 'HERE', viewValue: 'HERE' }
  ];

  algorithms: Input[] = [
    { value: 'A-star', viewValue: 'A-star' },
    { value: 'A-star2', viewValue: 'A-star Bidirectional' },
    { value: 'A-star3', viewValue: 'A-star Contraction' },
    { value: 'Djikstra', viewValue: 'Djikstra' },
    { value: 'Djikstra2', viewValue: 'Djikstra Bidirectional' },
    { value: 'Djikstra3', viewValue: 'Djikstra Contraction' }
  ];

  preferences: Input[] = [
    { viewValue: 'shortest-route', value: 'Shortest Route' },
    { viewValue: 'fastest-route', value: 'Fastest Route' }
  ];


    constructor(private mapService: MapService, private deserializer: DeserializeService) { }

    ngOnInit() {
        this.routeModel.waypoints.type = "MultiPoint"
        this.routeModel.waypoints.coordinates = new Array
    }


    onSubmit() {
        //instantiate obstacles and other assignments as they are optional
        if (this.routeModel.obstacle != null) {
        
}
  }

    getWaypoints($event: LatLng) {
        let latLngArray: number[] = [$event.lat, $event.lng];
        this.routeModel.waypoints.coordinates.push(latLngArray);
    }

    //write method here to get Obstacles from form

}
