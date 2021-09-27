package com.bpmapi.model.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class UserVo {

    @JsonProperty("name")
    private String name;

    @JsonProperty("phone")
    private String phone;

    @JsonProperty("birth_date")
    private Date birthDate;

    @JsonProperty("user_type")
    private boolean userType;

}
