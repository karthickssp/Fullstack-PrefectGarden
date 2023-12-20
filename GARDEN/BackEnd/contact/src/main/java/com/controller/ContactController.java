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

import com.entity.Contact;
import com.service.ContactService;

@RestController
@RequestMapping("/contact")
public class ContactController {
	@Autowired
	private ContactService contactService;

	@GetMapping("/getall")
	public Optional<List<Contact>> GetAllContact()   
	{  
		return contactService.getAllContact();  
	}  

	@GetMapping("/getid/{id}")
	public ResponseEntity<Optional<Contact>> GetContact(@PathVariable long id)
	{  
		Optional<Contact> con = contactService.getContact(id); 
		return ResponseEntity.ok(con);
	}  

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> DeleteContact(@PathVariable long id)   
	{  
		contactService.deleteContact(id);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/post")
	public Contact SaveContact(@RequestBody Contact c)   
	{  
		return contactService.saveContact(c);  
	}  
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Contact> UpdateContact(@PathVariable long id,@RequestBody Contact con)   
	{  
		Contact c = contactService.updateContact(con);  
		return ResponseEntity.ok(c); 
	} 

}
