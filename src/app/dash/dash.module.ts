import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { PanelComponent } from './panel/panel.component';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    RouterModule,
  ]
})
export class DashModule { }
