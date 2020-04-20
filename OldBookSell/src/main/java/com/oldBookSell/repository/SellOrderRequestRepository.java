package com.oldBookSell.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.oldBookSell.model.SellOrderRequest;


public interface SellOrderRequestRepository extends CrudRepository<SellOrderRequest, Integer>{

	@Query(value="select * from sell_order_request where book_name=?1 and authors=?2",nativeQuery = true)
	SellOrderRequest findByBookNameAndAuthor(String BookName,String authors);
	
}
