package ru.otus.project.newshub.repositories;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import ru.otus.project.newshub.TestUtils;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Репозиторий на основе Jpa для работы с категориями")
@DataJpaTest
@Transactional(propagation = Propagation.NEVER)
class CategoryRepositoryTest {

    @Autowired
    private CategoryRepository repositoryJpa;

    @DisplayName("должен загружать список всех категорий")
    @Test
    void shouldReturnCorrectCategoriesList() {
        var actualCategories = repositoryJpa.findAll();
        var expectedCategories = TestUtils.getDbCategories();

        assertThat(actualCategories).containsExactlyElementsOf(expectedCategories);
        actualCategories.forEach(System.out::println);
    }

}