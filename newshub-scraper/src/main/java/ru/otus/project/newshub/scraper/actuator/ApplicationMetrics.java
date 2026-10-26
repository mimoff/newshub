package ru.otus.project.newshub.scraper.actuator;

import io.micrometer.core.instrument.MeterRegistry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ru.otus.project.newshub.queue.dto.ScraperTaskDto;

import java.time.Duration;

@Component
@RequiredArgsConstructor
public class ApplicationMetrics {
    private final MeterRegistry meterRegistry;

    public void taskProcessed(ScraperTaskDto scraperTaskDto, Duration duration) {
        meterRegistry.timer("scraper.tasks",
                        "source", scraperTaskDto.getMediaSourceName(),
                        "type", scraperTaskDto.getType()
                )
                .record(duration);
    }

    public void storyProcessed(ScraperTaskDto scraperTaskDto) {
        meterRegistry.counter("scraper.stories",
                        "source", scraperTaskDto.getMediaSourceName(),
                        "type", scraperTaskDto.getType()
                )
                .increment();
    }
}
