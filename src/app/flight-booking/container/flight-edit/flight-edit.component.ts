import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateCity, validateCityWithParams } from '../../../shared/validators/city-validator';
import { AbstractFlightService } from '../../services/abstract-flight.service';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private flightService: AbstractFlightService) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: [0],
      from: [
        'Graz',
        [
          Validators.required,
          validateCity
        ]
      ],
      to: [
        'Hamburg',
        [
          Validators.required,
          validateCityWithParams([
            'Wien',
            'Berlin'
          ])
        ]
      ],
      date: [
        new Date().toISOString()
      ]
    });

    this.flightService.find('Graz', '')
      .subscribe();
    
    this.editForm.valueChanges
      .subscribe(value => console.log('changed form value', value));
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }

  updateForm(): void {
    const firstFlight = this.flightService.flights[0];
    this.editForm.patchValue(firstFlight);
  }
}
