package ru.otus.project.newshub.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import ru.otus.project.newshub.dto.StoryFilter;
import ru.otus.project.newshub.queue.dto.StoryCreateDto;
import ru.otus.project.newshub.dto.StoryDto;

import java.util.List;

public interface StoryService {
    void upload(StoryCreateDto storyCreateDto);

    Page<StoryDto> searchByFilter(StoryFilter filter, Pageable pageable);
}
