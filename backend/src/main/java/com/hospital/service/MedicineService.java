package com.hospital.service;

import com.hospital.model.Medicine;
import com.hospital.repository.MedicineRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MedicineService {
    private final MedicineRepository repository;

    public MedicineService(MedicineRepository repository) {
        this.repository = repository;
    }

    public List<Medicine> findAll() {
        return repository.findAll();
    }

    public Optional<Medicine> findById(String id) {
        return repository.findById(id);
    }

    public Medicine save(Medicine medicine) {
        return repository.save(medicine);
    }

    public void deleteById(String id) {
        repository.deleteById(id);
    }
}
