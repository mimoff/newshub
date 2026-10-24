package ru.otus.project.newshub.services;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import ru.otus.project.newshub.TestUtils;
import ru.otus.project.newshub.dto.MediaSourceCreateDto;
import ru.otus.project.newshub.dto.MediaSourceDto;
import ru.otus.project.newshub.dto.MediaSourceUpdateDto;
import ru.otus.project.newshub.exceptions.EntityNotFoundException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@DisplayName("Сервис для работы с источниками данных ")
@DataJpaTest
@Transactional(propagation = Propagation.NEVER)
@Import({MediaSourceServiceImpl.class})
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class MediaSourceServiceImplTest {

    @Autowired
    private MediaSourceService mediaSourceService;

    @DisplayName("должен загружать источник по id и позволять использовать связи вне транзакции сервиса")
    @ParameterizedTest
    @MethodSource("ru.otus.project.newshub.TestUtils#getDbMediaSourcesDto")
    void shouldReturnMediaSourceByIdAndAllowRelationsAccessOutsideServiceTransaction(MediaSourceDto expectedMediaSource) {
        var actualMediaSource = mediaSourceService.findById(expectedMediaSource.getId());

        assertThat(actualMediaSource)
                .usingRecursiveComparison()
                .isEqualTo(expectedMediaSource);

        assertThatCode(() -> {
            actualMediaSource.getCategoryDto();
        }).doesNotThrowAnyException();
    }

    @DisplayName("должен загружать все источники и позволять использовать связи вне транзакции сервиса")
    @Test
    void shouldReturnAllMediaSourcesAndAllowRelationsAccessOutsideServiceTransaction() {
        var actualMediaSources = mediaSourceService.findAll();
        var expectedMediaSources = TestUtils.getDbMediaSourcesDto();

        assertThat(actualMediaSources).containsExactlyElementsOf(expectedMediaSources);

        assertThatCode(() -> actualMediaSources.forEach(mediaSource -> {
            mediaSource.getCategoryDto().getName();
        })).doesNotThrowAnyException();
    }

    @DisplayName("должен сохранять новый источник и позволять использовать его связи вне транзакции сервиса")
    @Test
    void shouldInsertMediaSourceAndAllowRelationsAccessOutsideServiceTransaction() {
        var expectedMediaSource = new MediaSourceCreateDto("MediaSourceTitle_Updated", "type", "url", 2L);
        var actualMediaSource = mediaSourceService.insert(expectedMediaSource);

        assertThat(actualMediaSource).isNotNull()
                .matches(mediaSource -> mediaSource.getId() > 0)
                .usingRecursiveComparison()
                .ignoringExpectedNullFields()
                .isEqualTo(expectedMediaSource);

        assertThatCode(() -> {
            actualMediaSource.getCategoryDto().getName();
        }).doesNotThrowAnyException();
    }

    @DisplayName("должен обновлять источник и позволять использовать его связи вне транзакции сервиса")
    @Test
    void shouldUpdateMediaSourceAndAllowRelationsAccessOutsideServiceTransaction() {
        var expectedMediaSource = new MediaSourceUpdateDto(1L,"MediaSourceTitle_Updated", "type", "url", 2L);

        var actualMediaSource = mediaSourceService.findById(expectedMediaSource.getId());
        assertThat(actualMediaSource)
                .usingRecursiveComparison()
                .ignoringExpectedNullFields()
                .isNotEqualTo(expectedMediaSource);

        var returnedMediaSource = mediaSourceService.update(expectedMediaSource);

        assertThat(returnedMediaSource).isNotNull()
                .matches(mediaSource -> mediaSource.getId() > 0)
                .usingRecursiveComparison()
                .ignoringExpectedNullFields()
                .isEqualTo(expectedMediaSource);

        assertThatCode(() -> {
            returnedMediaSource.getCategoryDto().getName();
        }).doesNotThrowAnyException();
    }

    @DisplayName("должен удалять источник по id")
    @Test
    void shouldDeleteMediaSourceById() {
        var mediaSourceCreate = new MediaSourceCreateDto("MediaSourceTitle_ToDelete", "type", "url", 2L);
        var createdMediaSource = mediaSourceService.insert(mediaSourceCreate);
        assertThat(mediaSourceService.findById(createdMediaSource.getId())).isNotNull();

        mediaSourceService.deleteById(createdMediaSource.getId());

        assertThatThrownBy(() -> mediaSourceService.findById(createdMediaSource.getId()))
                .isInstanceOf(EntityNotFoundException.class);

    }
}
