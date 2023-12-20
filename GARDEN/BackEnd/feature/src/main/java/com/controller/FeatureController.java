package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Feature;
import com.service.FeatureService;

@RestController
@RequestMapping("/extra/feature")
public class FeatureController {
	@Autowired
	private FeatureService featureService;

	@GetMapping("/getall")
	public Optional<List<Feature>> GetAllFeature()   
	{  
		return featureService.getAllFeature();  
	}  

	@GetMapping("/getid/{id}")
	public ResponseEntity<Optional<Feature>> GetFeature(@PathVariable long id)
	{  
		Optional<Feature> con = featureService.getFeature(id); 
		return ResponseEntity.ok(con);
	}  

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> DeleteFeature(@PathVariable long id)   
	{  
		featureService.deleteFeature(id);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/post")
	public Feature SaveFeature(@RequestBody Feature c)   
	{  
		return featureService.saveFeature(c);  
	}  
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Feature> UpdateJournal(@PathVariable long id,@RequestBody Feature con)   
	{  
		Feature c = featureService.updateFeature(con);  
		return ResponseEntity.ok(c); 
	} 

}
