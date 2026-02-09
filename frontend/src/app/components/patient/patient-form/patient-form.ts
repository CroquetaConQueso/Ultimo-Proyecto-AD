import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Patient } from '../../../models';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.css',
})
export class PatientForm {
  patient: Patient = {
    name: '',
    age: 0,
    medicalHistory: ''
  };

  constructor(private api: ApiService, private router: Router) { }

  save() {
    this.api.createPatient(this.patient).subscribe(() => {
      this.router.navigate(['/patients']);
    });
  }
}
