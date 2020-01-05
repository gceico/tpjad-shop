package com.tpjad.shop.payment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

@RequiredArgsConstructor
public class PaymentService {
    private final PaymentRespository PaymentRespository;

    public List<Payment> findAll() {
        return PaymentRespository.findAll();
    }

    public Optional<Payment> findById(Long id) {
        return PaymentRespository.findById(id);
    }

    public Payment save(Payment stock) {
        return PaymentRespository.save(stock);
    }

    public void deleteById(Long id) {
        PaymentRespository.deleteById(id);
    }
}
