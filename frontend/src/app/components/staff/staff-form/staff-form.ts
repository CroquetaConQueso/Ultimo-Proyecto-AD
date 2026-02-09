import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { Staff } from '../../../models';

@Component({
  selector: 'app-staff-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './staff-form.html',
  styleUrl: './staff-form.css',
})
export class StaffForm {
  staff: Staff = {
    name: '',
    role: 'DOCTOR',
    specialization: ''
  };

  constructor(private api: ApiService, private router: Router) { }

  save() {
    this.api.createStaff(this.staff).subscribe(() => {
      this.router.navigate(['/staff']);
    });
  }
}
