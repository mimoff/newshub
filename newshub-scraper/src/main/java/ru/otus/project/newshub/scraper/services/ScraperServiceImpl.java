package ru.otus.project.newshub.scraper.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.otus.project.newshub.queue.dto.ScraperTaskDto;
import ru.otus.project.newshub.scraper.actuator.ApplicationMetrics;

import java.time.Duration;
import java.time.Instant;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ScraperServiceImpl implements ScraperService{
    private final Map<String, SourceProcessor> sourceProcessorMap;

    private final StorySender storySender;

    private final ApplicationMetrics applicationMetrics;

    private Instant taskTimestamp = Instant.EPOCH;

    @Override
    public void process(ScraperTaskDto scraperTaskDTO) {
        SourceProcessor sourceProcessor = sourceProcessorMap.get(scraperTaskDTO.getType());
        if(sourceProcessor == null)
            throw new IllegalArgumentException("Unknown SourceProcessor type: " + scraperTaskDTO.getType());

        taskTimestamp = Instant.now();

        var stories = sourceProcessor.process(scraperTaskDTO);

        for (var story: stories) {
            storySender.sendStory(story);
            applicationMetrics.storyProcessed(scraperTaskDTO);
        }

        Duration taskDuration = Duration.between(taskTimestamp, Instant.now());
        applicationMetrics.taskProcessed(scraperTaskDTO, taskDuration);
    }

    @Override
    public Instant getTaskTimestamp() {
        return taskTimestamp;
    }
}
