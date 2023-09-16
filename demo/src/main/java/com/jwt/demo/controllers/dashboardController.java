package com.jwt.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jwt.demo.entity.UserEntity;
import com.jwt.demo.services.GetAllUser;

@RestController
@CrossOrigin(origins = "*")
public class dashboardController {

    @Autowired
    private GetAllUser findAllUser;

    @GetMapping("/getAllUser")
    private List<UserEntity> getAllUser(){
        return findAllUser.findAll();
    }
}
