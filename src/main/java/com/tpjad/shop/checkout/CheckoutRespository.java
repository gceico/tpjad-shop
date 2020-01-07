package com.tpjad.shop.checkout;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckoutRespository extends JpaRepository<Checkout, Long> {
}
