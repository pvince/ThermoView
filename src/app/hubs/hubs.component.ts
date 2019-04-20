import { Component, OnInit } from '@angular/core';
import {ThermoLogService} from '../services/thermo-log.service';
import {Hub} from '../models/hub';

@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.less']
})
export class HubsComponent implements OnInit {

  hubs: Hub[];

  constructor(private thermoLogService: ThermoLogService) { }

  getHubs(): void {
    this.thermoLogService.getHubs().subscribe(hubs => this.hubs = hubs);
  }

  ngOnInit() {
    this.getHubs();
  }

}
