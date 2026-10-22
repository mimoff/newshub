package ru.otus.project.newshub.scraper.services;

import ru.otus.project.newshub.queue.dto.StoryCreateDto;

public interface StorySender {
    public void sendStory(StoryCreateDto storyCreateDTO);
}
