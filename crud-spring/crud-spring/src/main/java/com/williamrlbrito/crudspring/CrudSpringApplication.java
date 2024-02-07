package com.williamrlbrito.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.williamrlbrito.crudspring.model.Course;
import com.williamrlbrito.crudspring.repository.CoursesRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CoursesRepository coursesRepository) {
		return args -> {
			coursesRepository.deleteAll();

			Course c = new Course();

			c.setName("Spring Boot");
			c.setCategory("back-end");

			coursesRepository.save(c);
		};
	}
}
