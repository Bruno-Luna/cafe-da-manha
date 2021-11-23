package br.com.cafedamanha.repository;

import org.springframework.stereotype.Repository;

import br.com.cafedamanha.model.CafeModel;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Bruno Luna
 * @version 1.0
 */

@Repository
public interface CafeRepository extends JpaRepository<CafeModel, Long>{
	
	public List<CafeModel> findAllByNomeContainingIgnoreCase(String nome);
	
	public Optional<CafeModel> findByCpf(String cpf);
	
	public Optional<CafeModel> findByCafe (String cafe);

}
