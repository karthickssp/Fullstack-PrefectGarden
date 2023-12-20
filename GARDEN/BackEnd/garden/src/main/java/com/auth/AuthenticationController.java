package com.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/garden/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/admin/register")
    public String adminregister(@RequestBody RegisterRequest request){
        AuthenticationResponse token =  service.adminregister(request);
        String createdmessage ="";
        if(token!=null){
             createdmessage = "Admin Created";
        }else{
             createdmessage = "SomeThing Went Wrong";
        }
        return createdmessage;
    }

    @PostMapping("/admin/authenticate")
    public ResponseEntity<AuthenticationResponse> adminAuthenticate(@RequestBody AuthenticationRequest adminrequest){
        return ResponseEntity.ok(service.adminAuthenticate(adminrequest));
    }
    
    //user controller
    @PostMapping("/user/register")
    public String userregister(@RequestBody RegisterRequest request){
        AuthenticationResponse token =  service.userregister(request);
        String createdmessage ="";
        if(token!=null){
             createdmessage = "User Created";
        }else{
             createdmessage = "SomeThing Went Wrong";

        }
        return createdmessage;
    }
    
    @PostMapping("/user/authenticate")
    public ResponseEntity<AuthenticationResponse> userAuthenticate(@RequestBody AuthenticationRequest userrequest){
        return ResponseEntity.ok(service.userauthenticate(userrequest));
    }
}