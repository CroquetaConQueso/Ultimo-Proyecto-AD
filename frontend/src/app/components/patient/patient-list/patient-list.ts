import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { Patient } from '../../../models';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css',
})
export class PatientList implements OnInit {
  patients: Patient[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.api.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  deletePatient(id: string | undefined) {
    if (id && confirm('Are you sure?')) {
      this.api.deletePatient(id).subscribe(() => {
        this.loadPatients();
      });
    }
  }
}
