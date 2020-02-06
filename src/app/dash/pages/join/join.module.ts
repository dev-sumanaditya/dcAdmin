import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    JoinRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class JoinModule { }
