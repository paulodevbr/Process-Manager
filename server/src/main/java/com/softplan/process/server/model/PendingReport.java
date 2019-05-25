package com.softplan.process.server.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class PendingReport {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private Boolean pending;

    @Getter
    @Setter
    @NotNull
    @ManyToOne
    private User user;

    @Getter
    @Setter
    @NotNull
    @ManyToOne
    private LegalProcess legalProcess;

}
