package com.softplan.process.server.service;

import com.softplan.process.server.dto.LegalProcessCompactDTO;
import com.softplan.process.server.exception.LegalProcessNotFoundException;
import com.softplan.process.server.model.LegalProcess;
import com.softplan.process.server.repository.LegalProcessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LegalProcessService {
    private final LegalProcessRepository repository;

    public LegalProcessService(LegalProcessRepository repository) {
        this.repository = repository;
    }

    public List<LegalProcessCompactDTO> getAll(){
        return repository.findAll().stream().map(LegalProcessCompactDTO::new).collect(Collectors.toList());
    }

    public LegalProcess create(LegalProcess process){
        return this.repository.save(process);
    }

    public LegalProcess getById(final long id){
       return this.repository
               .findById(id)
               .orElseThrow(() -> new LegalProcessNotFoundException("Legal process with id "+ id + " was not found"));
    }
}
