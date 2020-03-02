import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { AbstractFlightService } from './abstract-flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight;

  constructor(private flightService: AbstractFlightService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => this.flights = flights,
        err => console.error('Error on loading Flights', err)
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
