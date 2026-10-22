package ru.otus.project.newshub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MediaSourceUpdateDto {
    private Long id;

    private String name;

    private String type;

    private String url;

    private Long categoryId;
}
