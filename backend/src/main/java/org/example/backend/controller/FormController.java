package org.example.backend.controller;


import lombok.RequiredArgsConstructor;
import org.example.backend.dao.FormDao;
import org.example.backend.model.FormModel;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/form")
public class FormController {

    private final FormDao formDao;

    @PostMapping()
    public FormModel createForm(@RequestBody FormModel formModel){
        return formDao.create(formModel);

    }
}
