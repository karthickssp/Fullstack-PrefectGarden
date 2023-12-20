package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Contact;
import com.repository.ContactRepository;

@Service
public class ContactService {
	
	@Autowired
	ContactRepository contactRepository;
	
	public Optional<List<Contact>> getAllContact()   
	{  
		return Optional.of(contactRepository.findAll());
	}  
	
	public Optional<Contact> getContact(long id)   
	{  
		return contactRepository.findById(id);
	}
	
	public void deleteContact(long id)   
	{  
		contactRepository.deleteById(id);
	}
	
	public Contact saveContact(Contact c)   
	{  
		return contactRepository.save(c);
	}
	
	public Contact updateContact(Contact c)   
	{  
		contactRepository.save(c);
		return c;  
	}
}
