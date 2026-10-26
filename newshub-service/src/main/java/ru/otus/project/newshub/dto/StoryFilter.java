package ru.otus.project.newshub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StoryFilter {

    private List<Long> categoryIds;

    private List<Long> mediaSourceIds;

    private LocalDate dateFrom;

    private LocalDate dateTo;

    private String keyword;
}
