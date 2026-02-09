import { Injectable } from '@angular/core';
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
}
