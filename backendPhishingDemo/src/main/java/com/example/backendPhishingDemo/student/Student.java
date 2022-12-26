package com.example.backendPhishingDemo.student;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity

public class Student {

    @Id

    private  String email;
    private  String password;

    public Student() {
    }

    public Student(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String toString() {
        return "Student{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
