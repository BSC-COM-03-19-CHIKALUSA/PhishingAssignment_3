package com.example.backendPhishingDemo.service;

import com.example.backendPhishingDemo.repository.StudentRepository;
import com.example.backendPhishingDemo.student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }


}
