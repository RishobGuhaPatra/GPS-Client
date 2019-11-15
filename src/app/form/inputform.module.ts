import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { MapModule } from '../map/map.module';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material';
import { MaterialModule } from '../material';

@NgModule({
    declarations: [
        FormComponent
    ],
  imports: [
      CommonModule,
      FormsModule,
      MaterialModule, //Later on, we would store this inside a Shared module that we import so we dont have to constantly import MaterialModule on all our modules
      MapModule
    ],
  exports: [FormComponent]
})
export class InputFormModule { }
