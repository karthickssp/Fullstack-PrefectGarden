package com.controller;

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

import com.auth.AuthenticationResponse;
import com.auth.AuthenticationService;
import com.auth.RegisterRequest;
import com.entity.User;

@RestController
@RequestMapping("/garden/user")
@PreAuthorize("hasRole('USER')")
public class UserController {
	
	@Autowired
	 AuthenticationService authservice;

	   @GetMapping("/get/{email}")
	   @PreAuthorize("hasAuthority('user:READ')")
	   public Optional<User> getUser(@PathVariable String email){
	    Optional<User> user = authservice.getuserById(email);
	    return user;
	   }
	    @PostMapping("/add")
	    @PreAuthorize("hasAuthority('user:CREATE')")
	    public ResponseEntity<AuthenticationResponse> registerUser(
	        @RequestBody RegisterRequest request
	    ){
	        return ResponseEntity.ok(authservice.userregister(request));
	        
	    }

	    @PutMapping(value = "/user/{email}", produces = "application/json")
	    @PreAuthorize("hasAuthority('user:UPDATE')")
	    public String updateUser(@PathVariable String email, @RequestBody User updatedUser){
	        authservice.updatedUser(email, updatedUser);
	        String updatemessage = "User "+email+ " Updated";
	        return updatemessage;
	    }
	   
	    @DeleteMapping("/delete/{email}")
	    @PreAuthorize("hasAuthority('user:DELETE')")
	    public String  deleteUser(@PathVariable String email){
	        authservice.deleteUserByUsername(email);
	        String message = "User "+email + " Deleted Successfully";
	        return message;
	    }
}
