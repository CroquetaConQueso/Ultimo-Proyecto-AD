package com.hospital.repository;

import com.hospital.model.Medicine;
import org.springframework.data.mongodb.repository.MongoRepository;
<<<<<<< HEAD

public interface MedicineRepository extends MongoRepository<Medicine, String> {
=======
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MedicineRepository extends MongoRepository<Medicine, String> {

    /**
     * Búsqueda flexible (case-insensitive) por name.
     */
    @Query("{ 'name': { $regex: ?0, $options: 'i' } }")
    List<Medicine> search(String q);
>>>>>>> 138c42e (Uwaaa)
}
