package com.hospital.controller;

import com.hospital.model.Patient;
import com.hospital.service.PatientService;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;
=======
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

>>>>>>> 138c42e (Uwaaa)
import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {
    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
    }

    @GetMapping
<<<<<<< HEAD
    public List<Patient> getAll() {
        return service.findAll();
=======
    public List<Patient> getAll(@RequestParam(value = "q", required = false) String q) {
        return service.search(q);
    }

    @GetMapping("/{id}")
    public Patient getById(@PathVariable String id) {
        return service.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Paciente no encontrado: " + id));
>>>>>>> 138c42e (Uwaaa)
    }

    @PostMapping
    public Patient create(@RequestBody Patient patient) {
<<<<<<< HEAD
=======
        patient.setId(null);
        return service.save(patient);
    }

    @PutMapping("/{id}")
    public Patient update(@PathVariable String id, @RequestBody Patient patient) {
        service.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Paciente no encontrado: " + id));
        patient.setId(id);
>>>>>>> 138c42e (Uwaaa)
        return service.save(patient);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.deleteById(id);
    }
<<<<<<< HEAD
=======

    @DeleteMapping
    public void deleteMany(@RequestBody List<String> ids) {
        service.deleteMany(ids);
    }
>>>>>>> 138c42e (Uwaaa)
}
