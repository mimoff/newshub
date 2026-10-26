package ru.otus.project.newshub.services;

import ru.otus.project.newshub.dto.LoginRequest;
import ru.otus.project.newshub.dto.LoginResponse;

public interface UserService {
    LoginResponse register(LoginRequest request);
    LoginResponse login(LoginRequest request);
}
