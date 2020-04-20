package com.oldBookSell.service;

import com.oldBookSell.dto.OldBookSellDTO;
import com.oldBookSell.model.UserDetails;

public interface OldBookSellServices {
	public OldBookSellDTO createUser(OldBookSellDTO userDetail);
	public UserDetails addAddress(OldBookSellDTO address);
	public UserDetails getAddress();
	public String getRole();
	public int getDeliveryPerson();
}
