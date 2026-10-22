package ru.otus.project.newshub.scraper.actuator;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.health.contributor.Health;
import org.springframework.boot.health.contributor.HealthIndicator;
import org.springframework.boot.health.contributor.Status;
import org.springframework.stereotype.Component;
import ru.otus.project.newshub.scraper.services.ScraperService;

import java.time.Duration;
import java.time.Instant;

@Component
@RequiredArgsConstructor
public class ScraperHealthIndicator implements HealthIndicator {
    private final ScraperService scraperService;

    @Override
    public Health health() {
        boolean serverIsDown = Duration.between(scraperService.getTaskTimestamp(), Instant.now()).getSeconds() > 3600L;

        if (serverIsDown) {
            return Health.down()
                    .status(Status.DOWN)
                    .build();
        } else {
            return Health.up().build();
        }
    }
}