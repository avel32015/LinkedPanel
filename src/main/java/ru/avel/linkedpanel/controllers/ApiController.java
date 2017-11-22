package ru.avel.linkedpanel.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ru.avel.linkedpanel.domains.Item;
import ru.avel.linkedpanel.services.ItemService;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private ItemService itemService;
	
	@GetMapping("/items")
	public List<Item> getItems() {
		return itemService.list();
	}
	
	@GetMapping("/items/{Id}")
	public Item getItem(@PathVariable Integer id) {
		return itemService.get(id);
	}

}
