import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../entities/flight';
import { AbstractFlightService } from './abstract-flight.service';

@Injectable()
export class DummyFlightService implements AbstractFlightService {
  flights: Flight[] = [];

  constructor() { }

  find(from: string, to: string): Observable<Flight[]> {
    const flights = [
      {
        id: 999,
        from: 'Madrid',
        to: 'London',
        date: new Date().toISOString(),
        delayed: false
      }
    ];

    return of(flights);
  }
}
