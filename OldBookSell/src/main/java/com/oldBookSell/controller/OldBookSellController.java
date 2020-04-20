package com.oldBookSell.controller;

import java.security.Principal;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oldBookSell.dto.OldBookSellDTO;
import com.oldBookSell.dto.SellOrderRequestDTO;
import com.oldBookSell.model.UserDetails;
import com.oldBookSell.service.OldBookSellServices;
import com.oldBookSell.service.SellOrderRequestService;

@RestController
@RequestMapping
@CrossOrigin
public class OldBookSellController {
	
		@Autowired
		OldBookSellServices oldBookSellServices;
		
		@Autowired
		SellOrderRequestService sellOrderRequestService;
		
		@GetMapping("/hello")
		public  String hello(Principal principal) {
			return "hello fundtion excute sucessfully";
		}
		
		@RequestMapping("/add")
		public OldBookSellDTO createUser(@RequestBody OldBookSellDTO userDetail) {
			return  oldBookSellServices.createUser(userDetail);
		}
		
		
		@RequestMapping("/bookDetailsRequest")
		public SellOrderRequestDTO addBookDetails(@RequestBody SellOrderRequestDTO sellOrderRequestDTO) {
			int deliveryId=oldBookSellServices.getDeliveryPerson();
			sellOrderRequestDTO.setDileveryPersonId(deliveryId);
			return sellOrderRequestService.bookRequest(sellOrderRequestDTO);
		}
		
		@RequestMapping("/addAddress")
		public UserDetails addAddress(@RequestBody OldBookSellDTO userDetail) {
			return  oldBookSellServices.addAddress(userDetail);
		}
		
		@GetMapping("/getAddress")
		public UserDetails getAddress() {
			return oldBookSellServices.getAddress();
		}
		
		@GetMapping("/getRole")
		public String getRole() {
			return oldBookSellServices.getRole();
		}
		
}
