package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Feature;

public interface FeatureRepository extends JpaRepository<Feature, Long>{

}
