package ru.otus.project.newshub.scraper.services;

import ru.otus.project.newshub.queue.dto.ScraperTaskDto;
import ru.otus.project.newshub.queue.dto.StoryCreateDto;

import java.util.List;

public interface SourceProcessor {
    public List<StoryCreateDto> process(ScraperTaskDto scraperTaskDto);
}
