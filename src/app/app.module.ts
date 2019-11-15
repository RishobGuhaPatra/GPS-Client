import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { ActivityService } from './services/activity.service';
import { MapService } from './services/map.service';
import { WpsTableComponent } from './wps-table/wps-table.component';


// Material Components

import { MaterialModule } from './material';
import { MapModule } from './map/map.module';
import { InputFormModule } from './form/inputform.module';


//this was messy- use Modules to organize code as opposed to declaring everything in the root module
@NgModule({
  declarations: [
    AppComponent,
    WpsTableComponent
  ],
  imports: [
    BrowserModule,
    InputFormModule,
    MapModule,
    MaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
