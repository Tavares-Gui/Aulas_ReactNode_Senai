package com.tavares.javaapi.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tavares.javaapi.model.UserModel;
import com.tavares.javaapi.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel) {
        return this.userRepository.save(userModel);
    }

    public void save(String id, String name, short age) {
        this.userRepository.save(new UserModel(id, name, age));
    }

    public List<UserModel> findAll() {
        return (List<UserModel>) this.userRepository.findAll();
    }

    public List<UserModel> findByName(String name) {
        return (List<UserModel>) this.userRepository.findByName(name);
    }

    public List<UserModel> findByAgeAndName(short age, String name) {
        return (List<UserModel>) this.userRepository.findByAgeAndName(age, name);
    }

    public void delete(String id) {
        this.userRepository.deleteById(id);
    }

}