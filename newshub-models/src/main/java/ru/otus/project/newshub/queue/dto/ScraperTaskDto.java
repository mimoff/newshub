package ru.otus.project.newshub.queue.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ScraperTaskDto {
    @NotNull
    private Long mediaSourceId;

    @NotBlank
    private String mediaSourceName;

    @NotBlank
    private String type;

    @NotBlank
    private String url;
}
