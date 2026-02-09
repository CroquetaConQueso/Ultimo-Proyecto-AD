import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { Treatment, Patient, Staff, Medicine } from '../../../models';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-treatment-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './treatment-form.html',
  styleUrl: './treatment-form.css',
})
export class TreatmentForm implements OnInit {
  patients: Patient[] = [];
  staffList: Staff[] = [];
  medicines: Medicine[] = [];

  treatment: Treatment = {
    patientId: '',
    staffId: '',
    medicineId: '',
    notes: ''
  };

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    forkJoin({
      patients: this.api.getPatients(),
      staff: this.api.getStaff(),
      medicines: this.api.getMedicines()
    }).subscribe(data => {
      this.patients = data.patients;
      this.staffList = data.staff;
      this.medicines = data.medicines;
    });
  }

  save() {
    this.treatment.date = new Date().toISOString();
    this.api.createTreatment(this.treatment).subscribe(() => {
      this.router.navigate(['/treatments']);
    });
  }
}
