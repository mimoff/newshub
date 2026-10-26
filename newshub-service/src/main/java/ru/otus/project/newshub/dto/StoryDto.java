package ru.otus.project.newshub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StoryDto {
    private Long id;

    private String title;

    private String description;

    private LocalDateTime publicationTime;

    private String url;

    private String mediaSourceName;

    private String categoryName;
}
