package com.softplan.process.server.repository;

import com.softplan.process.server.model.LegalProcess;
import com.softplan.process.server.model.UserGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserGroupRepository extends JpaRepository<UserGroup, Long> {
    UserGroup findByName(String name);
}
