import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { Staff } from '../../../models';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.css',
})
export class StaffList implements OnInit {
  staffList: Staff[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff() {
    this.api.getStaff().subscribe(data => {
      this.staffList = data;
    });
  }

  deleteStaff(id: string | undefined) {
    if (id && confirm('Are you sure?')) {
      this.api.deleteStaff(id).subscribe(() => {
        this.loadStaff();
      });
    }
  }
}
