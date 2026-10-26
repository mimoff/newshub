package ru.otus.project.newshub.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import ru.otus.project.newshub.queue.dto.StoryCreateDto;
import tools.jackson.databind.ObjectMapper;

import static ru.otus.project.newshub.queue.config.RabbitConfig.STORY_ROUTING_KEY;

@Service
@RequiredArgsConstructor
@Slf4j
public class StoryListener {

    private final ObjectMapper objectMapper;

    private final StoryService storyService;

    @RabbitListener(queues = STORY_ROUTING_KEY)
    public void processStory(String message) {
        log.info("RECEIVED FROM {}: {}", STORY_ROUTING_KEY, message);

        var storyCreateDto = objectMapper.readValue(message, StoryCreateDto.class);
        storyService.upload(storyCreateDto);
    }
}
