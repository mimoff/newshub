package ru.otus.project.newshub.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.otus.project.newshub.models.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
