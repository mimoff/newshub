package ru.otus.project.newshub;

import ru.otus.project.newshub.dto.CategoryDto;
import ru.otus.project.newshub.dto.MediaSourceDto;
import ru.otus.project.newshub.models.Category;
import ru.otus.project.newshub.models.MediaSource;

import java.util.List;

final public class TestUtils {
    public static List<Category> getDbCategories() {
        return List.of(
                new Category(1L,"News"),
                new Category(2L,"Computer"));
    }

    public static List<MediaSource> getDbMediaSources() {
        return List.of(
                new MediaSource(1L, "RBC", "rss", "https://rssexport.rbc.ru/rbcnews/news/30/full.rss", getDbCategories().get(0)),
                new MediaSource(2L, "GITHUB", "rss", "https://github.blog/feed/", getDbCategories().get(1))
        );
    }

    private static MediaSourceDto toMediaSourceDTO(MediaSource mediaSource) {
        return new MediaSourceDto(mediaSource.getId(), mediaSource.getName(), mediaSource.getType(),
                mediaSource.getUrl(),
                new CategoryDto(mediaSource.getCategory().getId(), mediaSource.getCategory().getName()));
    }

    public static List<MediaSourceDto> getDbMediaSourcesDto() {
        return getDbMediaSources().stream().map(TestUtils::toMediaSourceDTO).toList();
    }
}
