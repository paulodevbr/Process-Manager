package com.softplan.process.server.exception;

public class UserNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public UserNotFoundException(String errorMessage, Throwable err) {
        super(errorMessage, err);
    }

    public UserNotFoundException(String errorMessage) {
        super(errorMessage);
    }
}
