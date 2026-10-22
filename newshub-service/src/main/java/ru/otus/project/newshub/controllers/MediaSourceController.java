package ru.otus.project.newshub.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.otus.project.newshub.dto.MediaSourceDto;
import ru.otus.project.newshub.services.MediaSourceService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/mediasources")
@CrossOrigin
public class MediaSourceController {
    private final MediaSourceService mediaSourceService;

    @GetMapping
    public List<MediaSourceDto> findAll() {
        return mediaSourceService.findAll();
    }

/*    @GetMapping
    public List<MediaSourceResponse> getAll() { ... }

    @PostMapping
    public MediaSourceResponse create(@RequestBody @Valid MediaSourceRequest request) { ... }

    @PutMapping("/{id}")
    public MediaSourceResponse update(@PathVariable Long id,
                                      @RequestBody @Valid MediaSourceRequest request) { ... }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { ... }*/
}
