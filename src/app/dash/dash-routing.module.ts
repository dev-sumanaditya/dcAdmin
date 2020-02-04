import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'blog', loadChildren: './pages/blog/blog.module#BlogModule'},
    {path: 'queries', loadChildren: './pages/start/start.module#StartModule'},
    {path: 'applications', loadChildren: './pages/join/join.module#JoinModule'},
    {path: 'members', loadChildren: './pages/members/members.module#MembersModule'},
    {path: 'settings', loadChildren: './pages/settings/settings.module#SettingsModule'},
    {path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
