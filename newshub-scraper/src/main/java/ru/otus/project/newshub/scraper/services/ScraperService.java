package ru.otus.project.newshub.scraper.services;

import ru.otus.project.newshub.queue.dto.ScraperTaskDto;

import java.time.Instant;

public interface ScraperService {
    public void process(ScraperTaskDto scraperTaskDTO);

    public Instant getTaskTimestamp();
}
