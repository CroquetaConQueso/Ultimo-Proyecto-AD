import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff, Patient, Medicine, Treatment } from '../models';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private mainUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) { }

    // Staff
    getStaff(): Observable<Staff[]> {
        return this.http.get<Staff[]>(`${this.mainUrl}/staff`);
    }
    createStaff(staff: Staff): Observable<Staff> {
        return this.http.post<Staff>(`${this.mainUrl}/staff`, staff);
    }
    deleteStaff(id: string): Observable<void> {
        return this.http.delete<void>(`${this.mainUrl}/staff/${id}`);
    }

    // Patients
    getPatients(): Observable<Patient[]> {
        return this.http.get<Patient[]>(`${this.mainUrl}/patients`);
    }
    createPatient(patient: Patient): Observable<Patient> {
        return this.http.post<Patient>(`${this.mainUrl}/patients`, patient);
    }
    deletePatient(id: string): Observable<void> {
        return this.http.delete<void>(`${this.mainUrl}/patients/${id}`);
    }

    // Medicines
    getMedicines(): Observable<Medicine[]> {
        return this.http.get<Medicine[]>(`${this.mainUrl}/medicines`);
    }
    createMedicine(medicine: Medicine): Observable<Medicine> {
        return this.http.post<Medicine>(`${this.mainUrl}/medicines`, medicine);
    }
    deleteMedicine(id: string): Observable<void> {
        return this.http.delete<void>(`${this.mainUrl}/medicines/${id}`);
    }

    // Treatments
    getTreatments(): Observable<Treatment[]> {
        return this.http.get<Treatment[]>(`${this.mainUrl}/treatments`);
    }
    createTreatment(treatment: Treatment): Observable<Treatment> {
        return this.http.post<Treatment>(`${this.mainUrl}/treatments`, treatment);
    }
    getTreatmentsByPatient(patientId: string): Observable<Treatment[]> {
        return this.http.get<Treatment[]>(`${this.mainUrl}/treatments/patient/${patientId}`);
    }
=======
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { Staff, Patient, Medicine, Treatment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private mainUrl = 'http://localhost:8080/api';
  private timeoutMs = 5000;

  constructor(private http: HttpClient) { }

  // -------------------------
  // Staff
  // -------------------------
  getStaff(q?: string): Observable<Staff[]> {
    let params = new HttpParams();
    if (q && q.trim().length > 0) params = params.set('q', q.trim());
    return this.http.get<Staff[]>(`${this.mainUrl}/staff`, { params })
      .pipe(timeout(this.timeoutMs));
  }

  getStaffById(id: string): Observable<Staff> {
    return this.http.get<Staff>(`${this.mainUrl}/staff/${id}`)
      .pipe(timeout(this.timeoutMs));
  }

  createStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(`${this.mainUrl}/staff`, staff);
  }

  updateStaff(id: string, staff: Staff): Observable<Staff> {
    return this.http.put<Staff>(`${this.mainUrl}/staff/${id}`, staff);
  }

  deleteStaff(id: string): Observable<void> {
    return this.http.delete<void>(`${this.mainUrl}/staff/${id}`);
  }

  deleteStaffMany(ids: string[]): Observable<void> {
    return this.http.request<void>('delete', `${this.mainUrl}/staff`, { body: ids });
  }

  // -------------------------
  // Patients
  // -------------------------
  getPatients(q?: string): Observable<Patient[]> {
    let params = new HttpParams();
    if (q && q.trim().length > 0) params = params.set('q', q.trim());
    return this.http.get<Patient[]>(`${this.mainUrl}/patients`, { params })
      .pipe(timeout(this.timeoutMs));
  }

  getPatientById(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.mainUrl}/patients/${id}`)
      .pipe(timeout(this.timeoutMs));
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.mainUrl}/patients`, patient);
  }

  updatePatient(id: string, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.mainUrl}/patients/${id}`, patient);
  }

  deletePatient(id: string): Observable<void> {
    return this.http.delete<void>(`${this.mainUrl}/patients/${id}`);
  }

  deletePatientsMany(ids: string[]): Observable<void> {
    return this.http.request<void>('delete', `${this.mainUrl}/patients`, { body: ids });
  }

  // -------------------------
  // Medicines
  // -------------------------
  getMedicines(q?: string): Observable<Medicine[]> {
    let params = new HttpParams();
    if (q && q.trim().length > 0) params = params.set('q', q.trim());
    return this.http.get<Medicine[]>(`${this.mainUrl}/medicines`, { params })
      .pipe(timeout(this.timeoutMs));
  }

  getMedicineById(id: string): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.mainUrl}/medicines/${id}`)
      .pipe(timeout(this.timeoutMs));
  }

  createMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(`${this.mainUrl}/medicines`, medicine);
  }

  updateMedicine(id: string, medicine: Medicine): Observable<Medicine> {
    return this.http.put<Medicine>(`${this.mainUrl}/medicines/${id}`, medicine);
  }

  deleteMedicine(id: string): Observable<void> {
    return this.http.delete<void>(`${this.mainUrl}/medicines/${id}`);
  }

  deleteMedicinesMany(ids: string[]): Observable<void> {
    return this.http.request<void>('delete', `${this.mainUrl}/medicines`, { body: ids });
  }

  // -------------------------
  // Treatments
  // -------------------------
  getTreatments(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.mainUrl}/treatments`)
      .pipe(timeout(this.timeoutMs));
  }

  createTreatment(treatment: Treatment): Observable<Treatment> {
    return this.http.post<Treatment>(`${this.mainUrl}/treatments`, treatment);
  }

  getTreatmentsByPatient(patientId: string): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.mainUrl}/treatments/patient/${patientId}`)
      .pipe(timeout(this.timeoutMs));
  }

  getTreatmentById(id: string): Observable<Treatment> {
    return this.http.get<Treatment>(`${this.mainUrl}/treatments/${id}`)
      .pipe(timeout(this.timeoutMs));
  }

  updateTreatment(id: string, treatment: Treatment): Observable<Treatment> {
    return this.http.put<Treatment>(`${this.mainUrl}/treatments/${id}`, treatment);
  }

  deleteTreatment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.mainUrl}/treatments/${id}`);
  }
>>>>>>> 138c42e (Uwaaa)
}
