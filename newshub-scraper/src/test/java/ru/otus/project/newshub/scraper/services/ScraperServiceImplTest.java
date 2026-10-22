package ru.otus.project.newshub.scraper.services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ru.otus.project.newshub.queue.dto.ScraperTaskDto;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ScraperServiceImplTest {

    @Autowired
    ScraperService scraperService;

    @Test
    void shouldReadRss() {
        ScraperTaskDto scraperTaskDto = new ScraperTaskDto(
                1L, "test", "rss", "https://rssexport.rbc.ru/rbcnews/news/30/full.rss");

        scraperService.process(scraperTaskDto);
    }

}
