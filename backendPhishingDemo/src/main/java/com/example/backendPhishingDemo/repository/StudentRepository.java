package com.example.backendPhishingDemo.repository;

import com.example.backendPhishingDemo.student.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student ,String> {
}
