package ru.otus.project.newshub.controllers.admin;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.otus.project.newshub.dto.MediaSourceCreateDto;
import ru.otus.project.newshub.dto.MediaSourceDto;
import ru.otus.project.newshub.dto.MediaSourceUpdateDto;
import ru.otus.project.newshub.services.MediaSourceService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/admin/mediasources")
@CrossOrigin
@PreAuthorize("hasRole('ADMIN')")
public class AdminMediaSourceController {
    private final MediaSourceService mediaSourceService;

    @GetMapping
    public List<MediaSourceDto> findAll() {
        return mediaSourceService.findAll();
    }

    @PostMapping
    public MediaSourceDto create(@RequestBody @Valid MediaSourceCreateDto request) {
        return mediaSourceService.insert(request);
    }

    @PutMapping("/{id}")
    public MediaSourceDto update(@PathVariable Long id, @RequestBody @Valid MediaSourceUpdateDto request) {
        return mediaSourceService.update(request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        mediaSourceService.deleteById(id);
    }
}
