package ru.otus.project.newshub.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.otus.project.newshub.dto.CategoryDto;
import ru.otus.project.newshub.dto.MediaSourceCreateDto;
import ru.otus.project.newshub.dto.MediaSourceUpdateDto;
import ru.otus.project.newshub.exceptions.EntityNotFoundException;
import ru.otus.project.newshub.models.MediaSource;
import ru.otus.project.newshub.dto.MediaSourceDto;
import ru.otus.project.newshub.repositories.CategoryRepository;
import ru.otus.project.newshub.repositories.MediaSourceRepository;

import java.util.List;

@RequiredArgsConstructor
@Service
public class MediaSourceServiceImpl implements MediaSourceService {
    private final MediaSourceRepository mediaSourceRepository;

    private final CategoryRepository categoryRepository;

    @Override
    @Transactional(readOnly = true)
    public MediaSourceDto findById(long id) {
        var mediaSource = mediaSourceRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("MediaSource with id %d not found".formatted(id)));

        return toMediaSourceDTO(mediaSource);
    }

    @Override
    @Transactional(readOnly = true)
    public List<MediaSourceDto> findAll() {
        return mediaSourceRepository.findAll().stream()
                .map(MediaSourceServiceImpl::toMediaSourceDTO)
                .toList();
    }

    @Override
    @Transactional
    public MediaSourceDto insert(MediaSourceCreateDto mediaSourceCreateDto) {
        var category = categoryRepository.findById(mediaSourceCreateDto.getCategoryId())
                .orElseThrow(() -> new EntityNotFoundException("Category with id %d not found"
                        .formatted(mediaSourceCreateDto.getCategoryId())));

        var mediaSource = new MediaSource(0L, mediaSourceCreateDto.getName(),
                mediaSourceCreateDto.getType(), mediaSourceCreateDto.getUrl(), category);
        var savedMediaSource = mediaSourceRepository.save(mediaSource);

        return toMediaSourceDTO(savedMediaSource);
    }

    @Override
    @Transactional
    public MediaSourceDto update(MediaSourceUpdateDto mediaSourceUpdateDto) {
        var category = categoryRepository.findById(mediaSourceUpdateDto.getCategoryId())
                .orElseThrow(() -> new EntityNotFoundException("Category with id %d not found"
                        .formatted(mediaSourceUpdateDto.getCategoryId())));

        var mediaSource = new MediaSource(mediaSourceUpdateDto.getId(), mediaSourceUpdateDto.getName(),
                mediaSourceUpdateDto.getType(), mediaSourceUpdateDto.getUrl(), category);
        var savedMediaSource = mediaSourceRepository.save(mediaSource);

        return toMediaSourceDTO(savedMediaSource);
    }

    @Override
    @Transactional
    public void deleteById(long id) {
        mediaSourceRepository.deleteById(id);
    }

    private static MediaSourceDto toMediaSourceDTO(MediaSource mediaSource) {
        return new MediaSourceDto(mediaSource.getId(), mediaSource.getName(), mediaSource.getType(),
                mediaSource.getUrl(),
                new CategoryDto(mediaSource.getCategory().getId(), mediaSource.getCategory().getName()));
    }
}
