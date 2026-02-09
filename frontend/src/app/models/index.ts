export interface Staff {
    id?: string;
    name: string;
    role: string;
    specialization?: string;
}

export interface Patient {
    id?: string;
    name: string;
    age: number;
    medicalHistory: string;
}

export interface Medicine {
    id?: string;
    name: string;
    quantity: number;
}

export interface Treatment {
    id?: string;
    patientId: string;
    staffId: string;
    medicineId: string;
    date?: string;
<<<<<<< HEAD
=======
    startDate?: string;
    endDate?: string;
    description?: string;
>>>>>>> 138c42e (Uwaaa)
    notes: string;
}
