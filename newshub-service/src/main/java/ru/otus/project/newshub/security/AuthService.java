package ru.otus.project.newshub.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.otus.project.newshub.dto.LoginRequest;
import ru.otus.project.newshub.dto.LoginResponse;
import ru.otus.project.newshub.dto.UserDto;
import ru.otus.project.newshub.models.User;
import ru.otus.project.newshub.repositories.UserRepository;

@RequiredArgsConstructor
@Service
public class AuthService {

    private final AuthenticationManager authenticationManager;

    private final UserRepository userRepository;

    private final JwtService jwtService;

    private final PasswordEncoder passwordEncoder;

    public LoginResponse login(LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
            );
        } catch (BadCredentialsException ex) {
            throw new BadCredentialsException("Неверный логин или пароль");
        }

        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new BadCredentialsException("Пользователь не найден"));

        String token = jwtService.generateToken(user);
        UserDto userDto = new UserDto(user.getId(), user.getUsername());
        return new LoginResponse(token/*, userDto*/);
    }

    public UserDto register(LoginRequest request) {
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            throw new IllegalArgumentException("Пользователь с таким логином уже существует");
        }
        User user = new User(0L,
                request.getUsername(),
                passwordEncoder.encode(request.getPassword()),
                "ROLE_USER"
        );
        userRepository.save(user);
        return new UserDto(user.getId(), user.getUsername());
    }
}