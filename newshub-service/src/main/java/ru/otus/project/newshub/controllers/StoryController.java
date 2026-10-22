package ru.otus.project.newshub.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.otus.project.newshub.dto.StoryDto;
import ru.otus.project.newshub.dto.StoryFilter;
import ru.otus.project.newshub.services.StoryService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/stories")
@CrossOrigin
public class StoryController {
    private final StoryService storyService;

/*    @GetMapping
    public List<StoryDto> findAll(String keyword) {
        return storyService.findByKeyword(keyword);
    }*/

    @GetMapping
    public Page<StoryDto> search(StoryFilter storyFilter, Pageable pageable) {
        return storyService.searchByFilter(storyFilter, pageable);
    }
}
