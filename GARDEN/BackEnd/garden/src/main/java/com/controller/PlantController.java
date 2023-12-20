package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Plant;
import com.service.PlantService;

@RestController
@RequestMapping("/garden/plant")
@PreAuthorize("hasRole('ADMIN')")
public class PlantController {
	@Autowired
	PlantService plantService;
	
	
	@GetMapping("/getall")
	@PreAuthorize("hasAuthority('user:READ')")
	public List<Plant> GetAllPlants()   
	{  
		return plantService.getAllPlant();  
	}  

	@GetMapping("/get/{id}")
	@PreAuthorize("hasAuthority('user:READ')")
	public ResponseEntity<Optional<Plant>> GetPlant(@PathVariable long id)
	{  
		Optional<Plant> pl = plantService.getPlant(id); 
		return ResponseEntity.ok(pl);
	}  

	@DeleteMapping("/delete/{id}")
	@PreAuthorize("hasAuthority('admin:DELETE')")
	public ResponseEntity<Map<String, Boolean>> DeletePlant(@PathVariable long id)   
	{  
		plantService.deletePlant(id);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/post")
	@PreAuthorize("hasAuthority('admin:CREATE')")
	public String SavePlant(@RequestBody Plant p)   
	{  
		return plantService.savePlant(p);  
	}  
	
	@PutMapping("/update/{id}")
	@PreAuthorize("hasAuthority('admin:UPDATE')")
	public ResponseEntity<String> UpdatePlant(@PathVariable long id,@RequestBody Plant p)   
	{  
		String pl = plantService.updatePlant(id, p);  
		return ResponseEntity.ok(pl); 
	} 

}
