package ru.otus.project.newshub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class NewshubApplication {

    public static void main(String[] args) {
        SpringApplication.run(NewshubApplication.class, args);
    }

}
