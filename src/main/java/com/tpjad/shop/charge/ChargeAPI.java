package com.tpjad.shop.charge;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/charges")
@Slf4j
@RequiredArgsConstructor
public class ChargeAPI {
    private final ChargeService chargeService;

    @GetMapping
    public ResponseEntity<List<Charge>> findAll() {
        return ResponseEntity.ok(chargeService.findAll());
    }

    @PostMapping
    public ResponseEntity create(@Valid @RequestBody Charge charge) {
        return ResponseEntity.ok(chargeService.save(charge));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Charge> findById(@PathVariable Long id) {
        Optional<Charge> stock = chargeService.findById(id);
        if (!stock.isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(stock.get());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Charge> update(@PathVariable Long id, @Valid @RequestBody Charge charge) {
        if (!chargeService.findById(id).isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(chargeService.save(charge));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        if (!chargeService.findById(id).isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        chargeService.deleteById(id);

        return ResponseEntity.ok().build();
    }
}


