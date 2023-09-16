package com.jwt.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jwt.demo.entity.UserEntity;

public interface dashboardRepository extends JpaRepository<UserEntity, Integer> {
    List<UserEntity> findAll();
}
