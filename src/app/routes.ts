import { Routes } from '@angular/router'
import { FormComponent } from '../app/form/form.component';
import { MapComponent } from '../app/map/map.component';
import { WpsTableComponent } from './wps-table/wps-table.component';


export const appRoutes: Routes = [
  { path: 'Form', component: FormComponent },
  { path: 'wps-table', component: WpsTableComponent },
  { path: 'map/:id', component: MapComponent },
  { path: '', redirectTo: '/wps-table', pathMatch: 'full' }
]