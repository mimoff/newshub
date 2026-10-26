package ru.otus.project.newshub.queue.config;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.QueueBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {

    public static final String SCRAPER_TASK_ROUTING_KEY = "scraper-task.queue";

    public static final String STORY_ROUTING_KEY = "story.queue";

    @Bean
    public Queue scraperTaskQueue() {
        return QueueBuilder.durable(SCRAPER_TASK_ROUTING_KEY).build();
    }

    @Bean
    public Queue storyQueue() {
        return QueueBuilder.durable(STORY_ROUTING_KEY).build();
    }
}