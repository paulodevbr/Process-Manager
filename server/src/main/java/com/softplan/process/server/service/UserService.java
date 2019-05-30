package com.softplan.process.server.service;

import com.softplan.process.server.dto.UserDTO;
import com.softplan.process.server.exception.UserNotFoundException;
import com.softplan.process.server.model.User;
import com.softplan.process.server.model.UserGroup;
import com.softplan.process.server.repository.UserGroupRepository;
import com.softplan.process.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository repository;

    private final UserGroupRepository userGroupRepository;

    private final BCryptPasswordEncoder bcryptEncoder;

    public UserService(UserRepository repository, BCryptPasswordEncoder bcryptEncoder, UserGroupRepository userGroupRepository) {
        this.repository = repository;
        this.bcryptEncoder = bcryptEncoder;
        this.userGroupRepository = userGroupRepository;
    }

    public List<UserDTO> getAllByUserGroup(final String nameUserGroup){
        UserGroup userGroup = this.userGroupRepository.findByName(nameUserGroup);

        return this.repository.findAllByUserGroup(userGroup).stream()
                .map(UserDTO::new)
                .collect(Collectors.toList());
    }

    public List<UserDTO> getAll(){
        return this.repository.findAll().stream()
                .map(UserDTO::new)
                .collect(Collectors.toList());
    }

    public User getById(final long id){
        return this.repository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(" User with id " + id + "was not found"));
    }

    public User create(UserDTO dto){
        dto.setPassword(this.bcryptEncoder.encode((dto.getPassword())));
        User user = dto.toUserModel();
        return this.repository.save(user);
    }

    public void delete(Long id){
        this.repository.deleteById(id);
    }

    public UserDTO getByEmail(final String email){
        User user = this.repository
                .findByEmail(email);

        if (user == null) {
            throw new UserNotFoundException(" User with email " + email + "was not found");
        }
        return new UserDTO(user);
    }

    public List<User> getAllByGroup(final String group){
        return this.repository.findAllByGroup(group);
    }
}
