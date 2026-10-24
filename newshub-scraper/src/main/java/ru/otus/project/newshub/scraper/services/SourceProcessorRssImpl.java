package ru.otus.project.newshub.scraper.services;

import com.rometools.rome.feed.synd.SyndEntry;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import ru.otus.project.newshub.queue.dto.ScraperTaskDto;
import ru.otus.project.newshub.queue.dto.StoryCreateDto;

import java.io.IOException;
import java.net.URL;
import java.time.ZoneId;
import java.util.List;

@Component("rss")
@RequiredArgsConstructor
@Slf4j
public class SourceProcessorRssImpl implements SourceProcessor {
    @Override
    public List<StoryCreateDto> process(ScraperTaskDto scraperTaskDto) {
        log.info("process source: " + scraperTaskDto);
        try {
            URL feedSource = new URL(scraperTaskDto.getUrl());
            SyndFeedInput input = new SyndFeedInput();
            SyndFeed feed = input.build(new XmlReader(feedSource));
            var stories = feed.getEntries().stream()
                    .map(SourceProcessorRssImpl::convertToStory)
                    .peek(story -> story.setMediaSourceId(scraperTaskDto.getMediaSourceId()))
                    .toList();

            return stories;
        } catch (IOException | FeedException e) {
            throw new RuntimeException(e);
        }
    }

    private static StoryCreateDto convertToStory(SyndEntry syndEntry) {
        StoryCreateDto storyCreateDTO = new StoryCreateDto();
        storyCreateDTO.setTitle(syndEntry.getTitle());
        storyCreateDTO.setDescription(syndEntry.getDescription().getValue());
        storyCreateDTO.setUrl(syndEntry.getLink());
        storyCreateDTO.setPublicationTime(syndEntry.getPublishedDate()
                .toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime());

        return storyCreateDTO;
    }
}
