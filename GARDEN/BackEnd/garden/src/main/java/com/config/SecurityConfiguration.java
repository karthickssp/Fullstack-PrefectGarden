package com.config;

import static com.entity.enumerate.Permission.USER_CREATE;
import static com.entity.enumerate.Permission.USER_DELETE;
import static com.entity.enumerate.Permission.USER_READ;
import static com.entity.enumerate.Permission.USER_UPDATE;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.entity.enumerate.Permission;
import com.entity.enumerate.Role;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {
    
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;


    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
       http
       .csrf(csrf -> csrf.disable())
       .authorizeHttpRequests(authorize -> authorize.requestMatchers("/garden/auth/**").permitAll()
       //Roles & Permissions
       .requestMatchers("/garden/user/**").hasRole( Role.USER.name())
       
       .requestMatchers(HttpMethod.GET, "/garden/user/**").hasAnyAuthority(USER_READ.name())
       .requestMatchers(HttpMethod.PUT, "/garden/user/**").hasAnyAuthority(USER_UPDATE.name())
       .requestMatchers(HttpMethod.DELETE, "/garden/user/**").hasAnyAuthority(USER_DELETE.name())
       
        .requestMatchers("/garden/admin/**").hasRole(Role.ADMIN.name())
        .requestMatchers(HttpMethod.GET, "/garden/admin/**").hasAuthority(Permission.ADMIN_READ.name())
        .requestMatchers(HttpMethod.POST, "/garden/admin/**").hasAuthority(Permission.ADMIN_CREATE.name())
        .requestMatchers(HttpMethod.PUT, "/garden/admin/**").hasAuthority(Permission.ADMIN_UPDATE.name())
        .requestMatchers(HttpMethod.DELETE, "/garden/admin/**").hasAuthority(Permission.ADMIN_DELETE.name())
       
        .requestMatchers("/garden/plant/**").hasAnyRole(Role.ADMIN.name(),Role.USER.name())
        .requestMatchers(HttpMethod.GET, "/garden/plant/**").hasAnyAuthority(Permission.ADMIN_READ.name(),USER_READ.name())
        .requestMatchers(HttpMethod.POST, "/garden/plant/**").hasAuthority(Permission.ADMIN_CREATE.name())
        .requestMatchers(HttpMethod.PUT, "/garden/plant/**").hasAuthority(Permission.ADMIN_UPDATE.name())
        .requestMatchers(HttpMethod.DELETE, "/garden/plant/**").hasAuthority(Permission.ADMIN_DELETE.name())
        
        .requestMatchers("/garden/feedback/**").hasAnyRole(Role.ADMIN.name(), Role.USER.name())
        .requestMatchers(HttpMethod.GET, "/garden/feedback/**").hasAuthority(Permission.ADMIN_READ.name())
        .requestMatchers(HttpMethod.POST, "/garden/feedback/**").hasAnyAuthority(Permission.ADMIN_CREATE.name(),USER_CREATE.name())
        .requestMatchers(HttpMethod.PUT, "/garden/feedback/**").hasAuthority(Permission.ADMIN_UPDATE.name())
        .requestMatchers(HttpMethod.DELETE, "/garden/feedback/**").hasAuthority(Permission.ADMIN_DELETE.name())
        
       .anyRequest().authenticated())
       .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
       .authenticationProvider(authenticationProvider)
       .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();

    }
    
}