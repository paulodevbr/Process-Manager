package com.softplan.process.server.controller;

import com.softplan.process.server.dto.ProcessDTO;
import com.softplan.process.server.exception.UserNotFoundException;
import com.softplan.process.server.model.User;
import com.softplan.process.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService service;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    @PreAuthorize("hasUserGroup('ADMIN')")
    public List<User> getAll() {
        return this.service.getAll();
    }

    @RequestMapping(value = "/email/{email}", method = RequestMethod.GET)
//    @PostAuthorize("returnObject.getBody().getEmail() == authentication.principal.username")
    public  ResponseEntity<User> getByEmail(@PathVariable String email) {
        ResponseEntity<User> response;
        try{
            response = new ResponseEntity<>(this.service.getByEmail(email), HttpStatus.OK);
        } catch(UserNotFoundException e){
            response = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return response;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<User> getById(@PathVariable long id) {
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
