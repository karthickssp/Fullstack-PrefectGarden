package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long>{

}
