import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Medicine } from '../../../models';

@Component({
  selector: 'app-medicine-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './medicine-form.html',
  styleUrl: './medicine-form.css',
})
export class MedicineForm {
  medicine: Medicine = {
    name: '',
    quantity: 0
  };

  constructor(private api: ApiService, private router: Router) { }

  save() {
    this.api.createMedicine(this.medicine).subscribe(() => {
      this.router.navigate(['/medicines']);
    });
  }
}
