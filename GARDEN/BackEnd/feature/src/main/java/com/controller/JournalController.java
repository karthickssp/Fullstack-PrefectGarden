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

import com.entity.Journal;
import com.service.JournalService;

@RestController
@RequestMapping("/extra/journal")
public class JournalController {
	
	@Autowired
	private JournalService journalService;

	@GetMapping("/getall")
	public Optional<List<Journal>> GetAllJournal()   
	{  
		return journalService.getAllJournal();  
	}  

	@GetMapping("/getid/{id}")
	public ResponseEntity<Optional<Journal>> GetJournal(@PathVariable long id)
	{  
		Optional<Journal> con = journalService.getJournal(id); 
		return ResponseEntity.ok(con);
	}  

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> DeleteJournal(@PathVariable long id)   
	{  
		journalService.deleteJournal(id);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/post")
	public Journal SaveJournal(@RequestBody Journal c)   
	{  
		return journalService.saveJournal(c);  
	}  
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Journal> UpdateJournal(@PathVariable long id,@RequestBody Journal con)   
	{  
		Journal c = journalService.updateJournal(con);  
		return ResponseEntity.ok(c); 
	} 

}
