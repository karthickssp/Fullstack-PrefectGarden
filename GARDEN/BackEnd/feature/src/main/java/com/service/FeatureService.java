package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Feature;
import com.repository.FeatureRepository;

@Service

public class FeatureService {
	@Autowired
	FeatureRepository featureRepository;
	
	public Optional<List<Feature>> getAllFeature()   
	{  
		return Optional.of(featureRepository.findAll());
	}  
	
	public Optional<Feature> getFeature(long id)   
	{  
		return featureRepository.findById(id);
	}
	
	public void deleteFeature(long id)   
	{  
		featureRepository.deleteById(id);
	}
	
	public Feature saveFeature(Feature c)   
	{  
		return featureRepository.save(c);
	}
	
	public Feature updateFeature(Feature c)   
	{  
		featureRepository.save(c);
		return c;  
	}

	
}
