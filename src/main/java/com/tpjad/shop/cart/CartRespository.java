package com.tpjad.shop.cart;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRespository extends JpaRepository<Cart, Long> {
}
