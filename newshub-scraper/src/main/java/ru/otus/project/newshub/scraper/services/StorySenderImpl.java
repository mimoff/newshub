package ru.otus.project.newshub.scraper.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;
import ru.otus.project.newshub.queue.dto.StoryCreateDto;
import tools.jackson.databind.ObjectMapper;

@Service
@RequiredArgsConstructor
@Slf4j
public class StorySenderImpl implements StorySender{
    private static final String STORY_ROUTING_KEY = "story.queue";

    private final RabbitTemplate rabbitTemplate;
    private final ObjectMapper objectMapper;

    @Override
    public void sendStory(StoryCreateDto storyCreateDTO) {
        log.info("send to {}: {}", STORY_ROUTING_KEY, storyCreateDTO);
        rabbitTemplate.convertAndSend(STORY_ROUTING_KEY, objectMapper.writeValueAsString(storyCreateDTO));
    }
}
