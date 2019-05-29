package com.softplan.process.server.dto;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.softplan.process.server.model.LegalProcess;
import lombok.Getter;
import lombok.Setter;
import java.time.format.DateTimeFormatter;

public class LegalProcessCompactDTO {

    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private String title;

    @Getter
    @Setter
    private String dateOfCreation;

    @Getter
    @Setter
    @JsonIgnore
    private String author;

    public LegalProcessCompactDTO(){}

    public LegalProcessCompactDTO(final LegalProcess process){
        this.id = process.getId();
        this.title = process.getTitle();
        this.author = process.getAuthor().getName();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

        this.dateOfCreation = process.getDateOfCreation().format(formatter);
    }

}
