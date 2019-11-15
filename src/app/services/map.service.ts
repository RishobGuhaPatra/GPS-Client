import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../services/activity.service';
import { SAVED_ACTIVITIES, ROUTE } from '../shared/activities';

const apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [40, -80];
const defaultZoom = 8;

@Injectable()
export class MapService {

  constructor() { }

  getActivity(id: number) {
    return SAVED_ACTIVITIES.slice(0).find(map => map.id === id);
  }

  plotActivity(id: number) {
    const myStyle = {
      color: '#db041d',
      weight: 10,
      opacity: 0.1
    };

    var map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.light',
      accessToken: apiToken
    }).addTo(map);

    const customLayer = L.geoJson(null, {
      style: myStyle
    });

    const gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(map => map.id === id).gpxData, null, customLayer)
      .on('ready', function () {
        map.fitBounds(gpxLayer.getBounds());
      }).addTo(map);

      
    // const geoJsonLayer = L.geoJSON(ROUTE.slice(0).find(map => map.id === id).geojson, {
    //   style: customLayer
    // }).addTo(map);

  
      
  }

}
