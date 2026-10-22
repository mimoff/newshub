package ru.otus.project.newshub;

import ru.otus.project.newshub.models.Category;
import ru.otus.project.newshub.models.MediaSource;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

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

/*    public static List<Author> getDbAuthors() {
        return IntStream.range(1, 4).boxed()
                .map(id -> new Author(id, "Author_" + id))
                .toList();
    }

    private static List<Book> getDbBooks(List<Author> dbAuthors, List<Category> dbCategories) {
        return IntStream.range(1, 4).boxed()
                .map(id -> new Book(id,
                        "BookTitle_" + id,
                        dbAuthors.get(id - 1),
                        dbCategories.subList((id - 1) * 2, (id - 1) * 2 + 2)
                ))
                .toList();
    }

    public static List<Book> getDbBooks() {
        var dbAuthors = getDbAuthors();
        var dbCategories = getDbCategories();
        return getDbBooks(dbAuthors, dbCategories);
    }

    public static List<BookDto> getDbBooksDto() {
        var dbAuthors = getDbAuthors();
        var dbCategories = getDbCategories();
        return getDbBooks(dbAuthors, dbCategories).stream().map(BookDto::fromDomainObject).collect(Collectors.toList());
    }

    public static List<Comment> getDbComments() {
        return IntStream.range(1, 7).boxed()
                .map(id -> new Comment(id, "Comment_" + id, getDbBooks().get((id-1)/2)))
                .toList();
    }*/
}
