package com.tavares.javaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tavares.javaapi.model.CompanyModel;
import com.tavares.javaapi.repository.CompanyRepository;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public void save(CompanyModel companyModel) {
        this.companyRepository.save(companyModel);
    }

    public List<CompanyModel> findAll() {
        return this.companyRepository.findAll();
    }

    public List<CompanyModel> findByUserID(String userId) {
        return this.companyRepository.findByUserID(userId);
    }

    public void delete(String id) {
        this.companyRepository.deleteById(id);
    }

}