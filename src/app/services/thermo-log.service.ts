import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Hub} from '../models/hub';
import {catchError} from 'rxjs/operators';
import {Sensor} from '../models/sensor';

@Injectable({
  providedIn: 'root'
})

export class ThermoLogService {


  private HTTP_OPTIONS = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private thermoLogUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  getHubs(): Observable<Hub[]> {
    return this.http.get<Hub[]>(`${this.thermoLogUrl}/hubs`)
      .pipe(catchError(this.handleError<Hub[]>('getHeroes')));
  }

  getSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`${this.thermoLogUrl}/sensors`)
      .pipe(catchError(this.handleError<Sensor[]>('getSensors')));
  }

  getSensor(sensorID): Observable<Sensor> {
    return this.http.get<Sensor>(`${this.thermoLogUrl}/sensors/${sensorID}`)
      .pipe(catchError(this.handleError<Sensor>('getSensor')));
  }

  updateSensor(sensor: Sensor): Observable<any> {
    return this.http.put(`${this.thermoLogUrl}/sensors/${sensor.id}`, sensor, this.HTTP_OPTIONS)
      .pipe(catchError(this.handleError<any>('updatedSensor')));
  }
}
