package ru.otus.project.newshub.services;

import ru.otus.project.newshub.dto.CategoryDto;

import java.util.List;

public interface CategoryService {
    List<CategoryDto> findAll();
}
