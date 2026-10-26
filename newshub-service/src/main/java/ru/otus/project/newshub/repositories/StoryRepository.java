package ru.otus.project.newshub.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import ru.otus.project.newshub.models.Story;

import java.util.List;

public interface StoryRepository extends JpaRepository<Story,Long>, JpaSpecificationExecutor<Story> {
    List<Story> findByUrl(String url);

    boolean existsByUrl(String url);
}
