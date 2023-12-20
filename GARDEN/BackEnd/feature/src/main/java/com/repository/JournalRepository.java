package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Journal;

public interface JournalRepository extends JpaRepository<Journal, Long>{

}
