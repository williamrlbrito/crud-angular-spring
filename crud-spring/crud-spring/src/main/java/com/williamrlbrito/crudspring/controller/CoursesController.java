package com.williamrlbrito.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.williamrlbrito.crudspring.model.Course;
import com.williamrlbrito.crudspring.repository.CoursesRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CoursesController {

    private final CoursesRepository coursesRepository;

    @GetMapping
    public List<Course> list() {
        return coursesRepository.findAll();
    }
}
