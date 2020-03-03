import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { AbstractFlightService } from '../../services/abstract-flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit, OnDestroy {
  from = 'Hamburg';
  to = 'Graz';
  get flights() {
    return this.flightService.flights;
  }
  selectedFlight: Flight;
  //person = of({ firstname: 'Peter', lastname: 'Müller '});

  constructor(private flightService: AbstractFlightService) { }

  ngOnInit(): void {
    console.log('Component INIT');
  }

  ngOnDestroy(): void {
    console.log('Component DESTROY');
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe();
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
