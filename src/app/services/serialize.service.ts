import { Injectable } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { SAVED_ACTIVITIES } from '../shared/activities';
import { FormComponent } from '../form/form.component';
@Injectable({
  providedIn: 'root'
})
export class SerializeService {
  configUrl: string = '';
  Config: any;
  constructor(_FormComponent: FormComponent) { }
form: any = {
  
}
  // This Service is used for reading GeoJSON Data response from the WPS
  // getResponse(): Observable<HttpResponse< >> {
  //   return this.http.get<Config>(
  //     this.configUrl, { observe: 'response' });
  //  }

  //  stringifyJSON() {
  //   const data: any = require('../assets/geojson/3.json');
  //   return JSON.stringify(data);
  // }
}
