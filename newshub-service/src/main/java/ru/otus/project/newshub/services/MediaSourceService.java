package ru.otus.project.newshub.services;

import ru.otus.project.newshub.dto.MediaSourceCreateDto;
import ru.otus.project.newshub.dto.MediaSourceDto;
import ru.otus.project.newshub.dto.MediaSourceUpdateDto;

import java.util.List;

public interface MediaSourceService {
    MediaSourceDto findById(long id);

    List<MediaSourceDto> findAll();

    MediaSourceDto insert(MediaSourceCreateDto mediaSourceCreateDto);

    MediaSourceDto update(MediaSourceUpdateDto mediaSourceUpdateDto);

    void deleteById(long id);
}
