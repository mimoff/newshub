package ru.otus.project.newshub.scraper.services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ru.otus.project.newshub.queue.dto.ScraperTaskDto;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class SourceProcessorRssImplTest {
    @Autowired
    private SourceProcessorRssImpl rssSourceProcessor;

    @Test
    void shouldReadRss() {
        ScraperTaskDto scraperTaskDto = new ScraperTaskDto(
                1L, "test", "rss", "https://rssexport.rbc.ru/rbcnews/news/30/full.rss");
        ScraperTaskDto scraperTaskDto2 = new ScraperTaskDto(
                2L, "test", "rss", "https://github.blog/feed/");

        var stories = rssSourceProcessor.process(scraperTaskDto);

        assertThat(stories)
                .isNotEmpty();
    }

}
