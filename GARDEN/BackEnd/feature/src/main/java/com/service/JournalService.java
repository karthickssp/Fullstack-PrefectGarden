package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Journal;
import com.repository.JournalRepository;

@Service

public class JournalService {
	
	@Autowired
	JournalRepository journalRepository;
	
	public Optional<List<Journal>> getAllJournal()   
	{  
		return Optional.of(journalRepository.findAll());
	}  
	
	public Optional<Journal> getJournal(long id)   
	{  
		return journalRepository.findById(id);
	}
	
	public void deleteJournal(long id)   
	{  
		journalRepository.deleteById(id);
	}
	
	public Journal saveJournal(Journal c)   
	{  
		return journalRepository.save(c);
	}
	
	public Journal updateJournal(Journal c)   
	{  
		journalRepository.save(c);
		return c;  
	}

}
