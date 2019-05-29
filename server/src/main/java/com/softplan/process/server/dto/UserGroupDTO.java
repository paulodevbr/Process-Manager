package com.softplan.process.server.dto;

import com.softplan.process.server.model.UserGroup;
import lombok.Getter;
import lombok.Setter;

public class UserGroupDTO {
    @Setter
    @Getter
    private Long id;

    @Setter
    @Getter
    private String name;

    public UserGroupDTO(){}

    public UserGroupDTO(UserGroup userGroup) {
        this.id = userGroup.getId();
        this.name = userGroup.getName();
    }
}
