import {
    MatButtonModule, MatCheckboxModule, 
    MatRadioModule, MatExpansionModule, MatFormFieldModule,
    MatInputModule, MatOptionModule, MatSelectModule, MatListModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatListModule
    ],
})
export class MaterialModule {}
