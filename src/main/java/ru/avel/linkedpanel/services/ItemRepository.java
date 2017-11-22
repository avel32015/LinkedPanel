package ru.avel.linkedpanel.services;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ru.avel.linkedpanel.domains.Item;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {

}
