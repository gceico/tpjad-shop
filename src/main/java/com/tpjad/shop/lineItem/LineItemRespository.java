package com.tpjad.shop.lineItem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LineItemRespository extends JpaRepository<LineItem, Long> {
  @Query("SELECT item FROM LineItem item WHERE item.cartId = ?1")
  List<LineItem> findByCartId(Long cartId);
}
