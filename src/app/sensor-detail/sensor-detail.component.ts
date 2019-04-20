import {Component, Input, OnInit} from '@angular/core';
import {Sensor} from '../models/sensor';
import {ActivatedRoute} from '@angular/router';
import {ThermoLogService} from '../services/thermo-log.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.less']
})
export class SensorDetailComponent implements OnInit {

  @Input() sensor: Sensor;

  constructor(private route: ActivatedRoute,
              private thermoLogService: ThermoLogService,
              private location: Location) { }

  getSensor() {
    const sensorID = this.route.snapshot.paramMap.get('sensorID');
    this.thermoLogService.getSensor(sensorID)
      .subscribe(sensor => this.sensor = sensor);
  }

  ngOnInit() {
    this.getSensor();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.thermoLogService.updateSensor(this.sensor)
      .subscribe(() => this.goBack());
  }

}
