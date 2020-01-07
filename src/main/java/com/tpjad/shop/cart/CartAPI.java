package com.tpjad.shop.cart;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import com.tpjad.shop.lineItem.LineItem;
import com.tpjad.shop.lineItem.LineItemService;
import com.tpjad.shop.product.Product;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/carts")
@Slf4j
@RequiredArgsConstructor
public class CartAPI {
    private final CartService cartService;
    private final LineItemService lineItemService;

    @PostMapping("/{id}")
    public ResponseEntity create(@PathVariable Long id, @Valid @RequestBody Product product) {
        if (!cartService.findById(id).isPresent()) {
            cartService.save(null);
            return ResponseEntity.ok().build();
        }
        
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<LineItem>>  findById(@PathVariable Long id) {
        List<LineItem> lineItems = lineItemService.findByCartId(id);
        return ResponseEntity.ok(lineItems);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LineItem> update(@PathVariable Long id, @Valid @RequestBody LineItem lineItem) {
        if (!cartService.findById(id).isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(lineItemService.save(lineItem));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id, @RequestParam("itemId") Long itemId) {
        if (!cartService.findById(id).isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        lineItemService.deleteById(itemId);

        return ResponseEntity.ok().build();
    }
}
