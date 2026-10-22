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
    List<Long> categoryIds;
    List<Long> mediaSourceIds;
    LocalDate dateFrom;
    LocalDate dateTo;
    String keyword;
}
