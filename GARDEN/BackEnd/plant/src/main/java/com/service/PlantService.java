package com.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.entity.Plant;
import com.repository.PlantRepository;

@Service
public class PlantService {
	
	@Autowired
	PlantRepository plantRepository;
	
	public List<Plant> getAllPlant()   
	{  
		return plantRepository.findAll();
	}  
	
	public Optional<Plant> getPlant(long id)   
	{  
		return plantRepository.findById(id);
	}
}
