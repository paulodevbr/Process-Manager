package com.softplan.process.server.model;

import lombok.Getter;
import lombok.Setter;

public class UserLogin {

    @Getter
    @Setter
    private String email;

    @Getter
    @Setter
    private String password;
}
