package com.softplan.process.server.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class LegalProcess {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private String title;

    @Getter
    @Setter
    private String description;

    @Getter
    @Setter
    @JsonIgnore
    private LocalDateTime dateOfCreation;

    @ManyToOne
    @Getter
    @Setter
    @JsonIgnore
    private User author;

    @OneToMany
    @Getter
    @Setter
    @JsonIgnore
    private List<Report> reportList;

    @OneToMany
    @Getter
    @Setter
    @JsonIgnore
    private List<User> usersToAccomplish;

    @OneToMany
    @Getter
    @Setter
    private List<PendingReport> pendingReport;
}
