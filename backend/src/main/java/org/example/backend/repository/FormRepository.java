package org.example.backend.repository;


import org.example.backend.model.FormModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FormRepository extends JpaRepository<FormModel, UUID> {
}
