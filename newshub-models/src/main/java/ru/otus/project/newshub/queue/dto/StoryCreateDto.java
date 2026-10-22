package ru.otus.project.newshub.queue.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StoryCreateDto {
    @NotBlank
    private String title;

    private String description;

    @NotNull
    private LocalDateTime publicationTime;

    @NotBlank
    private String url;

    @NotNull
    private Long mediaSourceId;
}
