package ru.otus.project.newshub.repositories;

import org.springframework.data.jpa.domain.Specification;
import ru.otus.project.newshub.models.Story;

import java.time.LocalDate;
import java.util.List;

public final class StorySpecifications {

    public static Specification<Story> byCategories(List<Long> categoryIds) {
        return (root, query, cb) -> {
            if (categoryIds == null || categoryIds.isEmpty()) {
                return null;
            }
            return root.get("mediaSource").get("category").get("id").in(categoryIds);
        };
    }

    public static Specification<Story> byMediaSources(List<Long> sourceIds) {
        return (root, query, cb) -> {
            if (sourceIds == null || sourceIds.isEmpty()) {
                return null;
            }
            return root.get("mediaSource").get("id").in(sourceIds);
        };
    }

    public static Specification<Story> byDateRange(LocalDate from, LocalDate to) {
        return (root, query, cb) -> {
            if (from == null && to == null) {
                return null;
            }
            if (from != null && to != null) {
                return cb.between(root.get("publicationTime"),
                        from.atStartOfDay(), to.atTime(23, 59, 59));
            }
            if (from != null) {
                return cb.greaterThanOrEqualTo(root.get("publicationTime"), from.atStartOfDay());
            }
            return cb.lessThanOrEqualTo(root.get("publicationTime"), to.atTime(23, 59, 59));
        };
    }

    public static Specification<Story> byKeyword(String keyword) {
        return (root, query, cb) -> {
            if (keyword == null || keyword.isBlank()) {
                return null;
            }
            String pattern = "%" + keyword.toLowerCase() + "%";
            return cb.or(
                    cb.like(cb.lower(root.get("title")), pattern),
                    cb.like(cb.lower(root.get("description")), pattern)
            );
        };
    }
}