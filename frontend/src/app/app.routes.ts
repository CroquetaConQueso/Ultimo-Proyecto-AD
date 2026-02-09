import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { StaffList } from './components/staff/staff-list/staff-list';
import { StaffForm } from './components/staff/staff-form/staff-form';
import { PatientList } from './components/patient/patient-list/patient-list';
import { PatientForm } from './components/patient/patient-form/patient-form';
import { MedicineList } from './components/medicine/medicine-list/medicine-list';
import { MedicineForm } from './components/medicine/medicine-form/medicine-form';
import { TreatmentList } from './components/treatment/treatment-list/treatment-list';
import { TreatmentForm } from './components/treatment/treatment-form/treatment-form';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: 'staff', component: StaffList },
    { path: 'staff/new', component: StaffForm },
    { path: 'patients', component: PatientList },
    { path: 'patients/new', component: PatientForm },
    { path: 'medicines', component: MedicineList },
    { path: 'medicines/new', component: MedicineForm },
    { path: 'treatments', component: TreatmentList },
    { path: 'treatments/new', component: TreatmentForm }
];
