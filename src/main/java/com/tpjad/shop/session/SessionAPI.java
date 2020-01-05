package com.tpjad.shop.session;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/sessions")
@Slf4j
@RequiredArgsConstructor
public class SessionAPI {
    private final SessionService sessionService;

    @GetMapping
    public ResponseEntity<List<Session>> findAll() {
        return ResponseEntity.ok(sessionService.findAll());
    }

    @PostMapping
    public ResponseEntity create(@Valid @RequestBody Session session) {
        return ResponseEntity.ok(sessionService.save(session));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Session> findById(@PathVariable Long id) {
        Optional<Session> stock = sessionService.findById(id);
        if (!stock.isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(stock.get());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Session> update(@PathVariable Long id, @Valid @RequestBody Session session) {
        if (!sessionService.findById(id).isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(sessionService.save(session));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        if (!sessionService.findById(id).isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        sessionService.deleteById(id);

        return ResponseEntity.ok().build();
    }
}


