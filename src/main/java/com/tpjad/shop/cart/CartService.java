package com.tpjad.shop.cart;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

@RequiredArgsConstructor
public class CartService {
    private final com.tpjad.shop.cart.CartRespository cartRespository;

    public List<Cart> findAll() {
        return cartRespository.findAll();
    }

    public Optional<Cart> findById(Long id) {
        return cartRespository.findById(id);
    }

    public Cart save(Cart stock) {
        return cartRespository.save(stock);
    }

    public void deleteById(Long id) {
        cartRespository.deleteById(id);
    }
}
