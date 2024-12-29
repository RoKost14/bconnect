package org.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Table(name = "form")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FormModel {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(name = "company")
    private String companyName;

    @Column(name = "telephone")
    private String telephone;

    @Column(name = "employees")
    private String employees;

    @Column(name = "coc")
    private String coc;

    @Column(name = "vat")
    private String vat;

    @Column(name = "iban")
    private String iban;

    @Column(name = "budget")
    private int budget;

    @Column(name = "description")
    private String description;
}
