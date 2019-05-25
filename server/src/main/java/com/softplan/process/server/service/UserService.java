package com.softplan.process.server.service;

import com.softplan.process.server.exception.UserNotFoundException;
import com.softplan.process.server.model.User;
import com.softplan.process.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User getById(final long id){
        return this.repository
                .findById(id)
                .orElseThrow(() -> new UserNotFoundException(" User with id " + id + "was not found"));
    }

    public List<User> getAllByGroup(final String group){
        return this.repository.findAllByGroup(group);
    }
}
