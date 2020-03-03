import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Injectable({
  providedIn: 'root',
  useClass: FlightService,
  //deps: [HttpClient]
})
export abstract class AbstractFlightService {
  flights: Flight[];

  constructor() { }

  abstract find(from: string, to: string): Observable<Flight[]>;
}
