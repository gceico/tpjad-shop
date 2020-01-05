package com.tpjad.shop.session;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

@RequiredArgsConstructor
public class SessionService {
    private final SessionRespository SessionRespository;

    public List<Session> findAll() {
        return SessionRespository.findAll();
    }

    public Optional<Session> findById(Long id) {
        return SessionRespository.findById(id);
    }

    public Session save(Session stock) {
        return SessionRespository.save(stock);
    }

    public void deleteById(Long id) {
        SessionRespository.deleteById(id);
    }
}
