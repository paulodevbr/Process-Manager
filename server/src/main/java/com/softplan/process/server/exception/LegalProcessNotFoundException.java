package com.softplan.process.server.exception;

public class LegalProcessNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public LegalProcessNotFoundException(String errorMessage, Throwable err) {
        super(errorMessage, err);
    }

    public LegalProcessNotFoundException(String errorMessage) {
        super(errorMessage);
    }
}
