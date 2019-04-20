import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HubsComponent} from './hubs/hubs.component';
import {SensorsComponent} from './sensors/sensors.component';
import {SensorDetailComponent} from './sensor-detail/sensor-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/hubs', pathMatch: 'full'},
  { path: 'hubs', component: HubsComponent},
  { path: 'sensors', component: SensorsComponent},
  { path: 'sensor/:sensorID', component: SensorDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
