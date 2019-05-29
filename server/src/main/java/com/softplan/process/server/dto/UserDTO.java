package com.softplan.process.server.dto;

import com.softplan.process.server.model.User;
import com.softplan.process.server.model.UserGroup;
import lombok.Getter;
import lombok.Setter;

public class UserDTO {

    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String email;

    @Getter
    @Setter
    private String password;

    @Getter
    @Setter
    private String userGroup;

    @Getter
    @Setter
    private Long userGroupId;

    public UserDTO(){}

    public UserDTO(User user){
        this.id = user.getId();
        this.email = user.getEmail();
        this.name = user.getName();
        this.password = user.getPassword();
        this.userGroup = user.getUserGroup().getName();
        this.userGroupId = user.getUserGroup().getId();
    }

    public User toUserModel(){
        User user = new User();
        user.setEmail(this.email);
        user.setName(this.name);
        user.setPassword(this.password);

        UserGroup group = new UserGroup();
        group.setId(this.userGroupId);
        group.setName(this.userGroup);

        user.setUserGroup(group);

        return user;
    }
}
