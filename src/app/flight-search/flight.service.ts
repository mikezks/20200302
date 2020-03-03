import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { AbstractFlightService } from './abstract-flight.service';

@Injectable()
export class FlightService implements AbstractFlightService {

  flights: Flight[] = [];
  
  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('accept', 'application/json');

    return this.http
      .get<Flight[]>(url, { params, headers })
      .pipe(
        tap(flights => this.flights = flights)
      );
  }
}
