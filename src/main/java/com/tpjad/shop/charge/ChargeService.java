package com.tpjad.shop.charge;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

@RequiredArgsConstructor
public class ChargeService {
    private final ChargeRespository chargeRespository;

    public List<Charge> findAll() {
        return chargeRespository.findAll();
    }

    public Optional<Charge> findById(Long id) {
        return chargeRespository.findById(id);
    }

    public Charge save(Charge stock) {
        return chargeRespository.save(stock);
    }

    public void deleteById(Long id) {
        chargeRespository.deleteById(id);
    }
}
