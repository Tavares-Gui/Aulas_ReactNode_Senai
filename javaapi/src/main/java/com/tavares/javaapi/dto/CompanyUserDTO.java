package com.tavares.javaapi.dto;

import com.tavares.javaapi.model.CompanyModel;
import com.tavares.javaapi.model.UserModel;

import lombok.Data;
import java.util.List;

@Data
public class CompanyUserDTO {
    private UserModel user;
    private List<UserModel> userList;
    private CompanyModel company;
}