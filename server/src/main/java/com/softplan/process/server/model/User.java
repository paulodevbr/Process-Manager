package com.softplan.process.server.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
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
    @JsonIgnore
    private LocalDateTime dateOfCreation;


    @ManyToOne(fetch = FetchType.EAGER)
    @Getter
    @Setter
    private UserGroup userGroup;

    @OneToMany
    @Getter
    @Setter
    @JsonIgnore
    private List<LegalProcess> legalProcessList;

    @OneToMany
    @Getter
    @Setter
    @JsonIgnore
    private List<PendingReport> pendingReports;

//    @OneToMany
//    @Getter
//    @Setter
//    @JsonIgnore
//    private List<Report> reportList;

}
