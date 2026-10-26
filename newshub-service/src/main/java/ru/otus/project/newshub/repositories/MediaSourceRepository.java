package ru.otus.project.newshub.repositories;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import ru.otus.project.newshub.models.MediaSource;

import java.util.List;
import java.util.Optional;

public interface MediaSourceRepository extends JpaRepository<MediaSource, Long> {
    @EntityGraph("source-category-graph")
    Optional<MediaSource> findById(long id);

    @EntityGraph("source-category-graph")
    List<MediaSource> findAll();
}
