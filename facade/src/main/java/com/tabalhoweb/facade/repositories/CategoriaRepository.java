package com.tabalhoweb.facade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tabalhoweb.facade.entities.Categoria;
@Repository
public interface CategoriaRepository extends JpaRepository<Categoria,Long> {
    
}
