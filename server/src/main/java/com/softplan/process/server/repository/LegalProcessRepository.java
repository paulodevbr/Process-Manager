package com.softplan.process.server.repository;

import com.softplan.process.server.model.LegalProcess;
import com.softplan.process.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LegalProcessRepository extends JpaRepository<LegalProcess, Long> {
}
