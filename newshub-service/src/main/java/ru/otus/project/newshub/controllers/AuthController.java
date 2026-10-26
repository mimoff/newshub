package ru.otus.project.newshub.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.otus.project.newshub.dto.LoginRequest;
import ru.otus.project.newshub.dto.LoginResponse;
import ru.otus.project.newshub.exceptions.UserAlreadyExistsException;
import ru.otus.project.newshub.services.UserService;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid LoginRequest request) {
        try {
            return ResponseEntity.ok(userService.register(request));
        }
        catch (UserAlreadyExistsException e) {
            return ResponseEntity.badRequest().body("Username already taken");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest request) {
        return ResponseEntity.ok(userService.login(request));
    }
}