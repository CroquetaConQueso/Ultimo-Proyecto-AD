import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
=======
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
>>>>>>> 138c42e (Uwaaa)
import { ApiService } from '../../../services/api.service';
import { Patient } from '../../../models';

@Component({
  selector: 'app-patient-list',
  standalone: true,
<<<<<<< HEAD
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
=======
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css'
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];
  filtered: Patient[] = [];
  selected: Set<string> = new Set();

  searchTerm = '';
  isLoading = false;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.api.getPatients().subscribe({
      next: (data) => {
        this.patients = data ?? [];
        this.filtered = [...this.patients];
        this.selected.clear();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Error al cargar pacientes');
      }
    });
  }

  onSearchInput(): void {
    const q = (this.searchTerm || '').toLowerCase().trim();
    if (!q) {
      this.filtered = [...this.patients];
      return;
    }

    this.filtered = this.patients.filter(p =>
      (p.name ?? '').toLowerCase().includes(q) ||
      String(p.age ?? '').includes(q) ||
      (p.medicalHistory ?? '').toLowerCase().includes(q)
    );

    const visibleIds = new Set(this.filtered.map(p => p.id).filter(Boolean) as string[]);
    for (const id of Array.from(this.selected)) {
      if (!visibleIds.has(id)) this.selected.delete(id);
    }
  }

  toggleSelection(id: string): void {
    if (this.selected.has(id)) this.selected.delete(id);
    else this.selected.add(id);
  }

  isSelected(id: string): boolean {
    return this.selected.has(id);
  }

  allVisibleSelected(): boolean {
    const visibleIds = this.filtered.map(p => p.id).filter(Boolean) as string[];
    return visibleIds.length > 0 && visibleIds.every(id => this.selected.has(id));
  }

  toggleSelectAll(): void {
    const visibleIds = this.filtered.map(p => p.id).filter(Boolean) as string[];
    const allSel = visibleIds.length > 0 && visibleIds.every(id => this.selected.has(id));

    if (allSel) visibleIds.forEach(id => this.selected.delete(id));
    else visibleIds.forEach(id => this.selected.add(id));
  }

  createNew(): void {
    this.router.navigate(['/patients/new']);
  }

  editSelected(): void {
    if (this.selected.size !== 1) {
      alert('Selecciona EXACTAMENTE 1 paciente para editar.');
      return;
    }
    const id = Array.from(this.selected)[0];
    this.router.navigate(['/patients/edit', id]);
  }

  inspectSelected(): void {
    if (this.selected.size !== 1) {
      alert('Selecciona EXACTAMENTE 1 paciente para inspeccionar.');
      return;
    }
    const id = Array.from(this.selected)[0];
    this.router.navigate(['/patients/edit', id], { queryParams: { mode: 'view' } });
  }

  viewSelected(): void {
    if (this.selected.size === 0) {
      alert('No hay elementos seleccionados.');
      return;
    }
    const details = this.patients.filter(p => p.id && this.selected.has(p.id));
    alert(details.map(p => `• ${p.name} (${p.age}) - ${p.medicalHistory ?? ''}`).join('\n'));
  }

  editRow(id: string): void {
    this.router.navigate(['/patients/edit', id]);
  }

  viewRow(id: string): void {
    this.router.navigate(['/patients/edit', id], { queryParams: { mode: 'view' } });
  }

  deleteOne(id: string): void {
    if (!confirm('¿Eliminar este paciente?')) return;
    this.api.deletePatient(id).subscribe({
      next: () => this.load(),
      error: () => alert('No se pudo eliminar.')
    });
  }

  deleteSelected(): void {
    if (this.selected.size === 0) {
      alert('Selecciona al menos 1 paciente para eliminar.');
      return;
    }
    const ids = Array.from(this.selected);
    if (!confirm(`¿Eliminar ${ids.length} paciente(s) seleccionado(s)?`)) return;

    this.api.deletePatientsMany(ids).subscribe({
      next: () => this.load(),
      error: () => alert('No se pudo eliminar el/los paciente(s).')
    });
  }

  refresh(): void {
    this.searchTerm = '';
    this.load();
  }
>>>>>>> 138c42e (Uwaaa)
}
