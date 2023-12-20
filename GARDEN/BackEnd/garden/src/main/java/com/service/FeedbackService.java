package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Feedback;
import com.repository.FeedbackRepository;

@Service

public class FeedbackService {
	@Autowired
	FeedbackRepository feedbackRepository;
	
	public Optional<List<Feedback>> getAllFeedback()   
	{  
		return Optional.of(feedbackRepository.findAll());
	}  
	
	public Optional<Feedback> getFeedback(String email)   
	{  
		return feedbackRepository.findById(email);
	}
	
	public void deleteFeedback(String email)   
	{  
		feedbackRepository.deleteById(email);
	}
	
	public Feedback saveFeedback(Feedback p)   
	{  
		return feedbackRepository.save(p);
	}
	
	public Feedback updateFeedback(Feedback p)   
	{  
		feedbackRepository.save(p);
		return p;  
	}
}
