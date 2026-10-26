package ru.otus.project.newshub.repositories;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import ru.otus.project.newshub.TestUtils;
import ru.otus.project.newshub.models.MediaSource;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Репозиторий на основе Jpa для работы с источниками ")
@DataJpaTest
class MediaSourceRepositoryTest {

    @Autowired
    private MediaSourceRepository repositoryJpa;

    @DisplayName("должен загружать источник по id")
    @ParameterizedTest
    @MethodSource("ru.otus.project.newshub.TestUtils#getDbMediaSources")
    void shouldReturnCorrectMediaSourceById(MediaSource expectedMediaSource) {
        var actualMediaSource = repositoryJpa.findById(expectedMediaSource.getId());
        assertThat(actualMediaSource).isPresent()
                .get()
                .usingRecursiveComparison()
                .isEqualTo(expectedMediaSource);

//        System.out.println(mediaSourceConverter.mediaSourceToString(actualMediaSource.get()));
    }

    @DisplayName("должен загружать список всех источников")
    @Test
    void shouldReturnCorrectMediaSourcesList() {
        var actualMediaSources = repositoryJpa.findAll();
        var expectedMediaSources = TestUtils.getDbMediaSources();

        assertThat(actualMediaSources).containsExactlyElementsOf(expectedMediaSources);
//        actualMediaSources.stream().map(mediaSourceConverter::mediaSourceToString).forEach(System.out::println);
    }

    @DisplayName("должен сохранять новый источник")
    @Test
    void shouldSaveNewMediaSource() {
        var expectedMediaSource = new MediaSource(0, "MediaSourceTitle_10500", "type", "url",
                TestUtils.getDbCategories().get(1));
        var returnedMediaSource = repositoryJpa.save(expectedMediaSource);
        assertThat(returnedMediaSource).isNotNull()
                .matches(mediaSource -> mediaSource.getId() > 0)
                .usingRecursiveComparison().ignoringExpectedNullFields().isEqualTo(expectedMediaSource);

        assertThat(repositoryJpa.findById(returnedMediaSource.getId()))
                .isPresent()
                .get()
                .isEqualTo(returnedMediaSource);
    }

    @DisplayName("должен сохранять измененную книгу")
    @Test
    void shouldSaveUpdatedMediaSource() {
        var expectedMediaSource = new MediaSource(1L, "MediaSourceTitle_10500", "type", "url",
                TestUtils.getDbCategories().get(1));

        var actualMediaSource = repositoryJpa.findById(expectedMediaSource.getId());
        assertThat(actualMediaSource)
                .isPresent()
                .get()
                .usingRecursiveComparison()
                .ignoringExpectedNullFields()
                .isNotEqualTo(expectedMediaSource);

        var returnedMediaSource = repositoryJpa.save(expectedMediaSource);
        assertThat(returnedMediaSource).isNotNull()
                .matches(mediaSource -> mediaSource.getId() > 0)
                .usingRecursiveComparison()
                .ignoringExpectedNullFields()
                .isEqualTo(expectedMediaSource);

        assertThat(repositoryJpa.findById(returnedMediaSource.getId()))
                .isPresent()
                .get()
                .usingRecursiveComparison()
                .ignoringExpectedNullFields()
                .isEqualTo(returnedMediaSource);
    }

    @DisplayName("должен удалять книгу по id ")
    @Test
    void shouldDeleteMediaSource() {
        assertThat(repositoryJpa.findById(1L)).isPresent();
        repositoryJpa.deleteById(1L);
        assertThat(repositoryJpa.findById(1L)).isEmpty();
    }

}