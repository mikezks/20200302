import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: [0],
      from: [
        'Graz',
        [
          Validators.required
        ]
      ],
      to: [
        'Hamburg',
        []
      ],
      date: [
        new Date().toISOString()
      ]
    });

    this.editForm.valueChanges
      .subscribe(value => console.log('changed form value', value));
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
