import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { HomeComponent } from './home/home.component';

import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class MembersModule { }
