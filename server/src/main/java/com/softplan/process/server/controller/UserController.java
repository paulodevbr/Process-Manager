package com.softplan.process.server.controller;

import com.softplan.process.server.dto.ProcessDTO;
import com.softplan.process.server.dto.UserDTO;
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
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService service;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public ResponseEntity<List<UserDTO>> getAll() {
        return new ResponseEntity<>(this.service.getAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/email/{email}", method = RequestMethod.GET)
//    @PostAuthorize("returnObject.getBody().getEmail() == authentication.principal.username")
    public  ResponseEntity<UserDTO> getByEmail(@PathVariable String email) {
        ResponseEntity<UserDTO> response;
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

    @RequestMapping( method = RequestMethod.POST)
    public UserDTO create(@RequestBody UserDTO user) {
        return new UserDTO(this.service.create(user));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void create(@PathVariable long id) {
        this.service.delete(id);
    }
}
