package com.jwt.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jwt.demo.repository.dashboardRepository;
import com.jwt.demo.entity.UserEntity;

@Service
public class GetAllUser {

    @Autowired
    private dashboardRepository dashboard;


    public List<UserEntity> findAll(){
        return dashboard.findAll();
    }
}
