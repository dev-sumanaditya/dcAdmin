import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class StartModule { }
