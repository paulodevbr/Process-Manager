package com.softplan.process.server.service;

import com.softplan.process.server.exception.LegalProcessNotFoundException;
import com.softplan.process.server.model.LegalProcess;
import com.softplan.process.server.repository.LegalProcessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LegalProcessService {
    @Autowired
    private LegalProcessRepository repository;

    public LegalProcess getById(final long id){
       return this.repository
               .findById(id)
               .orElseThrow(() -> new LegalProcessNotFoundException("Legal process with id "+ id + " was not found"));
    }
}
