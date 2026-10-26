package ru.otus.project.newshub.services;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.otus.project.newshub.dto.LoginRequest;
import ru.otus.project.newshub.dto.LoginResponse;
import ru.otus.project.newshub.exceptions.UserAlreadyExistsException;
import ru.otus.project.newshub.models.User;
import ru.otus.project.newshub.repositories.UserRepository;
import ru.otus.project.newshub.security.JwtService;

@Service
@RequiredArgsConstructor
public class UserSeviceImpl implements UserService {
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    @Override
    public LoginResponse register(LoginRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new UserAlreadyExistsException("Username already taken");
        }
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("USER");                       // все новые пользователи — USER
        userRepository.save(user);

        String token = jwtService.generateToken(user);
        return new LoginResponse(token);
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        User user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        return new LoginResponse(jwtService.generateToken(user));
    }
}
