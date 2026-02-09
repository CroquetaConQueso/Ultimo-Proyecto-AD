package com.hospital.controller;

import com.hospital.model.Staff;
import com.hospital.service.StaffService;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;
=======
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

>>>>>>> 138c42e (Uwaaa)
import java.util.List;

@RestController
@RequestMapping("/api/staff")
@CrossOrigin(origins = "http://localhost:4200")
public class StaffController {
    private final StaffService service;

    public StaffController(StaffService service) {
        this.service = service;
    }

<<<<<<< HEAD
    @GetMapping
    public List<Staff> getAll() {
        return service.findAll();
=======
    // LIST + SEARCH
    @GetMapping
    public List<Staff> getAll(@RequestParam(value = "q", required = false) String q) {
        return service.search(q);
    }

    @GetMapping("/{id}")
    public Staff getById(@PathVariable String id) {
        return service.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Staff no encontrado: " + id));
>>>>>>> 138c42e (Uwaaa)
    }

    @PostMapping
    public Staff create(@RequestBody Staff staff) {
<<<<<<< HEAD
=======
        // por seguridad, al crear ignoramos id si viene
        staff.setId(null);
        return service.save(staff);
    }

    @PutMapping("/{id}")
    public Staff update(@PathVariable String id, @RequestBody Staff staff) {
        // si no existe -> 404
        service.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Staff no encontrado: " + id));
        staff.setId(id);
>>>>>>> 138c42e (Uwaaa)
        return service.save(staff);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.deleteById(id);
    }
<<<<<<< HEAD
=======

    // BULK DELETE (body: ["id1","id2",...])
    @DeleteMapping
    public void deleteMany(@RequestBody List<String> ids) {
        service.deleteMany(ids);
    }
>>>>>>> 138c42e (Uwaaa)
}
