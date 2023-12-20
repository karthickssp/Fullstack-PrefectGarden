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

import com.entity.Feedback;
import com.service.FeedbackService;

@RestController
@RequestMapping("/garden/feedback")
@PreAuthorize("hasRole('ADMIN')")

public class FeedbackController {
	
	@Autowired
	FeedbackService feedbackService;
	
	
	@GetMapping("/getall")
	@PreAuthorize("hasAuthority('admin:READ')")
	public Optional<List<Feedback>> GetAllFeedback()   
	{  
		return feedbackService.getAllFeedback();  
	}  

	@GetMapping("/getid/{email}")
	@PreAuthorize("hasAuthority('admin:READ')")
	public ResponseEntity<Optional<Feedback>> GetFeedback(@PathVariable String email)
	{  
		Optional<Feedback> feed = feedbackService.getFeedback(email); 
		return ResponseEntity.ok(feed);
	}  

	@DeleteMapping("/delete/{email}")
	@PreAuthorize("hasAuthority('admin:DELETE')")
	public ResponseEntity<Map<String, Boolean>> DeleteFeedback(@PathVariable String email)   
	{  
		feedbackService.deleteFeedback(email);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/post")
	@PreAuthorize("hasAuthority('user:CREATE')")
	public Feedback SaveFeedback(@RequestBody Feedback p)   
	{  
		return feedbackService.saveFeedback(p);  
	}  
	
	@PutMapping("/update/{email}")
	@PreAuthorize("hasAuthority('user:UPDATE')")
	public ResponseEntity<Feedback> UpdateFeedback(@PathVariable String email,@RequestBody Feedback feed)   
	{  
		Feedback fe = feedbackService.updateFeedback(feed);  
		return ResponseEntity.ok(fe); 
	} 
	

}
