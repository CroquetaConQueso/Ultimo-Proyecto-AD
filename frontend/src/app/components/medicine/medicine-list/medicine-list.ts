import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { Medicine } from '../../../models';

@Component({
  selector: 'app-medicine-list',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './medicine-list.html',
  styleUrl: './medicine-list.css',
})
export class MedicineList implements OnInit {
  medicines: Medicine[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadMedicines();
  }

  loadMedicines() {
    this.api.getMedicines().subscribe(data => {
      this.medicines = data;
    });
  }

  deleteMedicine(id: string | undefined) {
    if (id && confirm('Are you sure?')) {
      this.api.deleteMedicine(id).subscribe(() => {
        this.loadMedicines();
      });
    }
  }
}
