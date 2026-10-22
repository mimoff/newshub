package ru.otus.project.newshub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import ru.otus.project.newshub.dto.CategoryDto;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MediaSourceDto {
    private Long id;

    private String name;

    private String type;

    private String url;

    private CategoryDto categoryDto;
}
