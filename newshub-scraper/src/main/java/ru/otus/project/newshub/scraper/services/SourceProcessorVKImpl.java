package ru.otus.project.newshub.scraper.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import ru.otus.project.newshub.queue.dto.ScraperTaskDto;
import ru.otus.project.newshub.queue.dto.StoryCreateDto;

import java.util.List;

@Component("vk")
@RequiredArgsConstructor
@Slf4j
public class SourceProcessorVKImpl implements SourceProcessor {
    @Override
    public List<StoryCreateDto> process(ScraperTaskDto scraperTaskDto) {
        log.info("process source VK: " + scraperTaskDto);
        throw new IllegalArgumentException("Not implemented");
    }
}
