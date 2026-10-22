package ru.otus.project.newshub.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import ru.otus.project.newshub.queue.dto.ScraperTaskDto;
import tools.jackson.databind.ObjectMapper;

@RequiredArgsConstructor
@Service
@Slf4j
public class ScraperTaskSender {
    private static final String SCRAPER_TASK_ROUTING_KEY = "scraper-task.queue";

    private final RabbitTemplate rabbitTemplate;
    private final MediaSourceService mediaSourceService;
    private final ObjectMapper objectMapper;

    @Scheduled(initialDelay = 10000, fixedRate = 60000)
    public void emitScraperTask(){
        for(var mediaSourceDto: mediaSourceService.findAll()) {
            var scraperTaskDto = new ScraperTaskDto(mediaSourceDto.getId(),
                    mediaSourceDto.getName(), mediaSourceDto.getType(), mediaSourceDto.getUrl());
            String message = objectMapper.writeValueAsString(scraperTaskDto);

            log.info("Send to {}: {}", SCRAPER_TASK_ROUTING_KEY, message);
            rabbitTemplate.convertAndSend(SCRAPER_TASK_ROUTING_KEY, message);
        }
    }
}
