import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {
  @Input() item: Flight;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  select(): void {
    this.selected = true;
  }

  deselect(): void {
    this.selected = false;
  }
}
