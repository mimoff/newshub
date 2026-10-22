package ru.otus.project.newshub.services;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.otus.project.newshub.dto.StoryFilter;
import ru.otus.project.newshub.exceptions.EntityNotFoundException;
import ru.otus.project.newshub.models.Story;
import ru.otus.project.newshub.queue.dto.StoryCreateDto;
import ru.otus.project.newshub.dto.StoryDto;
import ru.otus.project.newshub.repositories.MediaSourceRepository;
import ru.otus.project.newshub.repositories.StoryRepository;
import ru.otus.project.newshub.repositories.StorySpecifications;

import java.util.List;

@RequiredArgsConstructor
@Service
public class StoryServiceImpl implements StoryService {
    private final StoryRepository storyRepository;
    private final MediaSourceRepository mediaSourceRepository;

    @Override
    @Transactional(readOnly = true)
    public List<StoryDto> findAll() {
        return storyRepository.findAll().stream()
                .map(StoryServiceImpl::toStoryDto)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<StoryDto> findByKeyword(String keyword) {
        return storyRepository.findAll().stream()
                .map(StoryServiceImpl::toStoryDto)
                .toList();
    }

    @Override
    @Transactional
    public StoryDto insert(StoryCreateDto storyCreateDto) {
        var storyList = storyRepository.findByUrl(storyCreateDto.getUrl());
        Story story;

        if(!storyList.isEmpty()) {
            story = storyList.get(0);
        }
        else {
            var mediaSource = mediaSourceRepository.findById(storyCreateDto.getMediaSourceId())
                    .orElseThrow(() -> new EntityNotFoundException("MediaSource with id %d not found".formatted(storyCreateDto.getMediaSourceId())));

            var newStory = new Story(0, storyCreateDto.getTitle(), storyCreateDto.getDescription(),
                    storyCreateDto.getPublicationTime(), storyCreateDto.getUrl(), mediaSource);
            story = storyRepository.save(newStory);
        }
        return toStoryDto(story);
    }

    @Override
    @Transactional
    public void upload(StoryCreateDto storyCreateDto) {
        if(!storyRepository.existsByUrl(storyCreateDto.getUrl())) {
            //mediaSourceRepository.getReferenceById(storyCreateDto.getMediaSourceId());

            var mediaSource = mediaSourceRepository.findById(storyCreateDto.getMediaSourceId())
                    .orElseThrow(() -> new EntityNotFoundException("MediaSource with id %d not found".formatted(storyCreateDto.getMediaSourceId())));

            var newStory = new Story(0, storyCreateDto.getTitle(), storyCreateDto.getDescription(),
                    storyCreateDto.getPublicationTime(), storyCreateDto.getUrl(), mediaSource);
            storyRepository.save(newStory);
        }
    }

    @Transactional(readOnly = true)
    @Override
    public Page<StoryDto> searchByFilter(StoryFilter filter, Pageable pageable) {
        Specification<Story> spec = Specification
                .where(StorySpecifications.byCategories(filter.getCategoryIds()))
                .and(StorySpecifications.byMediaSources(filter.getMediaSourceIds()))
                .and(StorySpecifications.byDateRange(filter.getDateFrom(), filter.getDateTo()))
                .and(StorySpecifications.byKeyword(filter.getKeyword()));

        return storyRepository.findAll(spec, pageable).map(StoryServiceImpl::toStoryDto);
    }

    private static StoryDto toStoryDto(Story story) {
        return new StoryDto(
                story.getId(),
                story.getTitle(),
                story.getDescription(),
                story.getPublicationTime(),
                story.getUrl(),
                story.getMediaSource().getName(),
                story.getMediaSource().getCategory().getName()
        );
    }
}
