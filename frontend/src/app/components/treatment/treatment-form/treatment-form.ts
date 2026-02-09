<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { Treatment, Patient, Staff, Medicine } from '../../../models';
import { forkJoin } from 'rxjs';
=======
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { Treatment } from '../../../models';
>>>>>>> 138c42e (Uwaaa)

@Component({
  selector: 'app-treatment-form',
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule, NgFor],
  templateUrl: './treatment-form.html',
  styleUrl: './treatment-form.css',
})
export class TreatmentForm implements OnInit {
  patients: Patient[] = [];
  staffList: Staff[] = [];
  medicines: Medicine[] = [];

=======
  imports: [FormsModule, DatePipe],
  templateUrl: './treatment-form.html',
  styleUrl: './treatment-form.css'
})
export class TreatmentForm {
>>>>>>> 138c42e (Uwaaa)
  treatment: Treatment = {
    patientId: '',
    staffId: '',
    medicineId: '',
<<<<<<< HEAD
=======
    description: '',
    date: new Date().toISOString().split('T')[0],
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
>>>>>>> 138c42e (Uwaaa)
    notes: ''
  };

  constructor(private api: ApiService, private router: Router) { }

<<<<<<< HEAD
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
=======
  save() {
>>>>>>> 138c42e (Uwaaa)
    this.api.createTreatment(this.treatment).subscribe(() => {
      this.router.navigate(['/treatments']);
    });
  }
<<<<<<< HEAD
}
=======

  cancel() {
    this.router.navigate(['/treatments']);
  }
}
>>>>>>> 138c42e (Uwaaa)
