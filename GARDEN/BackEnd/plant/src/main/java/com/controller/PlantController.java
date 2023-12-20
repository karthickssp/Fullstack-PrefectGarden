package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Plant;
import com.service.PlantService;

@RestController
@RequestMapping("/gplant")
public class PlantController {
	@Autowired
	PlantService plantService;
	
	@GetMapping("/getall")
	public List<Plant> GetAllPlants()   
	{  
		return plantService.getAllPlant();  
	}  
	
	@GetMapping("/get/{id}")
	public ResponseEntity<Optional<Plant>> GetPlant(@PathVariable long id)
	{  
		Optional<Plant> pl = plantService.getPlant(id); 
		return ResponseEntity.ok(pl);
	}  

}
