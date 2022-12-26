package com.example.backendPhishingDemo.controller;

import com.example.backendPhishingDemo.service.StudentService;
import com.example.backendPhishingDemo.student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class StudentController {
    @Autowired
    StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    @PostMapping("/students")
    public Student saveStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }
    @GetMapping("/students/list")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
}
