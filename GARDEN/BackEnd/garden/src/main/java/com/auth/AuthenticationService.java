package com.auth;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.config.JwtService;
import com.entity.User;
import com.entity.enumerate.Role;
import com.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse userregister(RegisterRequest request) {
        var user = User.builder()
        .email(request.getEmail())
        .firstName(request.getFirstName())
        .lastName(request.getLastName())
        .mobile(request.getMobile())
        .Dob(request.getDob())
        .gender(request.getGender())
        .experience(request.getExperience())
        .size(request.getSize())
        .interest(request.getInterest())
        .location(request.getLocation())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
    }

    public AuthenticationResponse userauthenticate(AuthenticationRequest request) {
    	authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
       );
        var user = repository.findById(request.getEmail()).orElseThrow();
        var role = user.getRole();
        if(role.toString()=="USER") {
        	var jwtToken = jwtService.generateToken(user);
        	return AuthenticationResponse.builder().token(jwtToken).build();
        }
        else {
        	return null;
        }
    }
    
    public void updatedUser(String email, User updateUser){
        User user = repository.findByEmail(email);
        if(!user.toString().isEmpty()){

            user.setFirstName(updateUser.getFirstName());
            user.setLastName(updateUser.getLastName());
            user.setMobile(updateUser.getMobile());
            user.setDob(updateUser.getDob());
            user.setGender(updateUser.getGender());
            user.setExperience(updateUser.getExperience());
            user.setSize(updateUser.getSize());
            user.setInterest(updateUser.getInterest());
            user.setLocation(updateUser.getLocation());
            user.setRole(Role.USER);
            repository.save(user);
        }
       }
        public void deleteUserByUsername(String email){
            User user = repository.findByEmail(email);
            if(user!=null){
                repository.delete(user);
            }
        }
        
        public Optional<User> getuserById(String email) {
            Optional<User> user = Optional.ofNullable(repository.findByEmail(email));
            return user;
        }

    public AuthenticationResponse adminregister(RegisterRequest request){
        var admin =  User.builder()
        .email(request.getEmail())
        .firstName(request.getFirstName())
        .lastName(request.getLastName())
        .mobile(request.getMobile())
        .Dob(request.getDob())
        .gender("Not_Available")
        .experience("Not_Available")
        .interest("Not_Available")
        .location("Not_Available")
        .size("NOT_AVAILABLE")
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.ADMIN)
        .build();
        repository.save(admin);
        var jwtToken = jwtService.generateToken(admin);
        return AuthenticationResponse.builder()
        .token(jwtToken).build();
    }

    public AuthenticationResponse adminAuthenticate(AuthenticationRequest request){
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        var admin = repository.findById(request.getEmail()).orElseThrow();
        var role = admin.getRole();
        if(role.toString()=="ADMIN") {
        	var adminToken = jwtService.generateToken(admin);
        	return AuthenticationResponse.builder().token(adminToken).build();
        }
        else {
		 return null;
        }
    }
    public Optional<User> getadminById(String email) {
        var admin = repository.findById(email);
        return admin;
    }
}