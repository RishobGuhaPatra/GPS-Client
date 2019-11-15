import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MapService } from '../services/map.service';
import { ActivatedRoute } from '@angular/router';
import { tileLayer, latLng, Map, LeafletMouseEvent } from 'leaflet';
declare const L: any;
import 'leaflet-draw';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {

    

    @Output() messageEvent = new EventEmitter<LeafletMouseEvent>();

  constructor(private mapService: MapService,
        private route: ActivatedRoute) { }

    //possibly have two different states for viewing maps. If form is set to Sync mode, immediately display route. If not, set new flags to limit OnClick functions and just display routes returned.
    options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        ],
        zoom: 13,
        center: latLng(38.89207512, -77.02599612)
    };




    ngOnInit() {
        // Initialise the FeatureGroup to store editable layers

  }

    ngAfterViewInit() {
      //may need to do some map cleanup; see asymmetrik github doc
  }

    
    onMapReady(map: Map) {

        var drawnItems = new L.FeatureGroup();
        var drawControl = new L.Control.Draw({
            position: 'topright',
            draw: {
                polyline: {
                    shapeOptions: {
                        color: '#f357a1',
                        weight: 10
                    }
                },
                polygon: {
                    allowIntersection: false, // Restricts shapes to simple polygons
                    drawError: {
                        color: '#e1e100', // Color the shape will turn when intersects
                        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                    },
                    shapeOptions: {
                        color: '#bada55'
                    }
                },
                circle: false, // Turns off this drawing tool
                rectangle: false
            },
            edit: {
                featureGroup: drawnItems,
          remove:false
            }
        });

        map.addControl(drawControl);



        map.doubleClickZoom.disable(); 
        //method to handle double clicks
        map.on('dblclick', <LeafletMouseEvent>(e) => {
            this.messageEvent.emit(e.latlng);
        });
        //put another method here to handle drawing obstacles
        map.on(L.Draw.Event.CREATED, function (e) {
            //pull polygon coords here and insert into RouteModel

        });
    }

} 