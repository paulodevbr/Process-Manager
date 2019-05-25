package com.softplan.process.server.dto;

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
}
