package ru.otus.project.newshub.scraper.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import ru.otus.project.newshub.queue.dto.ScraperTaskDto;
import tools.jackson.databind.ObjectMapper;

import static ru.otus.project.newshub.queue.config.RabbitConfig.SCRAPER_TASK_ROUTING_KEY;

@Service
@RequiredArgsConstructor
@Slf4j
public class ScraperTaskListener {
    private final ObjectMapper objectMapper;

    private final ScraperService scraperService;

    @RabbitListener(queues = SCRAPER_TASK_ROUTING_KEY)
    public void processScraperTask(String message) {
        log.info("RECEIVED FROM {}: {}", SCRAPER_TASK_ROUTING_KEY, message);

        var scraperTaskDto = objectMapper.readValue(message, ScraperTaskDto.class);
        scraperService.process(scraperTaskDto);
    }
}
