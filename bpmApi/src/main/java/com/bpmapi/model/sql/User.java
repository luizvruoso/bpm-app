package com.bpmapi.model.sql;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")         @Getter @Setter
    private String name;

    @Column(name = "phone")        @Getter @Setter
    private String phone;

    @Column(name = "birth_date")   @Getter @Setter
    private Date birthDate;

    @Column(name = "user_type")    @Getter @Setter
    private boolean userType;

    public User() {
        super();
    }
}
