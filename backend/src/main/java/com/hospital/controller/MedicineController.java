package com.hospital.controller;

import com.hospital.model.Medicine;
import com.hospital.service.MedicineService;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;
=======
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

>>>>>>> 138c42e (Uwaaa)
import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "http://localhost:4200")
public class MedicineController {
    private final MedicineService service;

    public MedicineController(MedicineService service) {
        this.service = service;
    }

    @GetMapping
<<<<<<< HEAD
    public List<Medicine> getAll() {
        return service.findAll();
=======
    public List<Medicine> getAll(@RequestParam(value = "q", required = false) String q) {
        return service.search(q);
    }

    @GetMapping("/{id}")
    public Medicine getById(@PathVariable String id) {
        return service.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Medicina no encontrada: " + id));
>>>>>>> 138c42e (Uwaaa)
    }

    @PostMapping
    public Medicine create(@RequestBody Medicine medicine) {
<<<<<<< HEAD
=======
        medicine.setId(null);
        return service.save(medicine);
    }

    @PutMapping("/{id}")
    public Medicine update(@PathVariable String id, @RequestBody Medicine medicine) {
        service.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Medicina no encontrada: " + id));
        medicine.setId(id);
>>>>>>> 138c42e (Uwaaa)
        return service.save(medicine);
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
