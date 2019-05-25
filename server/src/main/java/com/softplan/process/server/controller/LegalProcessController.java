package com.softplan.process.server.controller;

import com.softplan.process.server.dto.ProcessDTO;
import com.softplan.process.server.exception.LegalProcessNotFoundException;
import com.softplan.process.server.model.LegalProcess;
import com.softplan.process.server.service.LegalProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/process")
public class LegalProcessController {

    @Autowired
    private LegalProcessService service;

    @RequestMapping( method = RequestMethod.GET)
    public List<ProcessDTO> getAllProcess() {
        return new ArrayList<ProcessDTO>();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<LegalProcess> getProcessById(@PathVariable int id) {
        ResponseEntity<LegalProcess> response;

        try{
            response = new ResponseEntity<>(this.service.getById(id), HttpStatus.OK);
        } catch(LegalProcessNotFoundException e){
            response = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return response;
    }
}
