import { Component, OnInit } from '@angular/core';
import {Sensor} from '../models/sensor';
import {ThermoLogService} from '../services/thermo-log.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.less']
})
export class SensorsComponent implements OnInit {

  sensors: Sensor[];

  constructor(private thermoLogService: ThermoLogService) { }

  getSensors(): void {
    this.thermoLogService.getSensors().subscribe(sensors => this.sensors = sensors);
  }

  ngOnInit() {
    this.getSensors();
  }

}
