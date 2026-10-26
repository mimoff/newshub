package ru.otus.project.newshub.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Форвардит все "не-API" GET-запросы на index.html, чтобы работал
 * HTML5 History API в Angular (deep links, refresh на любом маршруте).
 */
@Controller
public class SpaForwardController {

    @GetMapping(value = {
            "/",
            "/{path:^(?!api|h2-console|assets)[^\\.]*}",
            "/{path:^(?!api|h2-console|assets)[^\\.]*}/**"
    })
    public String forward() {
        return "forward:/index.html";
    }
}