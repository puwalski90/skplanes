import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Crew, Flight} from "../../models/flight.model";
import {additionalInfoValidator, codeValidator} from "./formValidators";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Input() editMode = false;
  form!: FormGroup;
  jobs = [
    {label: 'Stewardess', value: 'stewardess'},
    {label: 'Pilot', value: 'pilot'},
    {label: 'Mechanic', value: 'mechanic'},
    {label: 'Senior Cabin Crew', value: 'senior_cabin_crew'},
    {label: 'Co-Pilot', value: 'co-pilot'},
  ]

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  get f() {
    return this.form.controls;
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      code: ['SK', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(7),
          codeValidator
        ] } ],
      origin: ['', { validators: [Validators.required] } ],
      destination: ['', { validators: [Validators.required] } ],
      departureTime: ['', { validators: [Validators.required] } ],
      returnTime: ['', { validators: [Validators.required] }],
      additionalInfo: ['', { validators: [additionalInfoValidator] }],
      discount: false,
      crew: this.formBuilder.array(this.editMode ? [] : [this.buildCrewMember()])
    })
  }

  buildCrewMember(crewMember: Crew = {} as Crew): FormGroup {
    return this.formBuilder.group({
      name: crewMember.name || '',
      job: crewMember.job || ''
    })
  }

  removeCrewMember(i: number): void {
    this.crew.removeAt(i);
  }

  get crew(): FormArray {
    return this.form.get('crew') as FormArray;
  }

  addCrewMember(crewMember?: Crew) {
    this.crew.push(this.buildCrewMember(crewMember))
  }

  setFlight(flight: Flight) {
    // destrukturyzacja
    const {key, ...formData} = flight; // tworzy zmienna formData i przypisuje mu wartość flight usuwając z niej key
    this.form.patchValue(formData);

    formData?.crew?.forEach(crewMember => this.addCrewMember(crewMember));
  }

}
