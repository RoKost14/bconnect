package org.example.backend.dao;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.FormModel;
import org.example.backend.repository.FormRepository;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class FormDao {
    private final FormRepository formRepository;

    public FormModel create(FormModel formModel){
        return formRepository.save(formModel);
    }
}
