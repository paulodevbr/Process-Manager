package com.softplan.process.server.controller;

import com.softplan.process.server.dto.ProcessDTO;
import com.softplan.process.server.exception.UserNotFoundException;
import com.softplan.process.server.model.User;
import com.softplan.process.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @RequestMapping(method = RequestMethod.GET)
    public List<ProcessDTO> getAll() {
        return new ArrayList<ProcessDTO>();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<User> getUserById(@PathVariable long id) {
        ResponseEntity<User> response;

        try{
            response = new ResponseEntity<>(this.service.getById(id), HttpStatus.OK);
        } catch(UserNotFoundException e){
            response = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return response;
    }

    @RequestMapping(value = "/group/{group}", method = RequestMethod.GET)
    public List<User> getAllByGroup(@PathVariable String group) {
        return this.service.getAllByGroup(group);
    }
}
