package ru.otus.project.newshub.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import ru.otus.project.newshub.models.Category;

import java.util.List;
import java.util.Set;

public interface CategoryRepository extends JpaRepository<Category,Long> {

    //List<Category> findAllByIds(@Param("ids") Set<Long> ids);
}
