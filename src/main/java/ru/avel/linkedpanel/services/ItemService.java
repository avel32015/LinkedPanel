package ru.avel.linkedpanel.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ru.avel.linkedpanel.domains.Item;

@Service
public class ItemService {
	
	@Autowired
	ItemRepository itemRepository;
	
	public List<Item> list() {
		List<Item> list = new ArrayList<>();
		itemRepository.findAll().forEach( it -> list.add(it) );
		return list;
	}

	public Item get(Integer id) {
		return itemRepository.findOne(id); 
	}
	

}
