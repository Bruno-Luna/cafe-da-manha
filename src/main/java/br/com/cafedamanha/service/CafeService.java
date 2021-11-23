package br.com.cafedamanha.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cafedamanha.model.CafeModel;
import br.com.cafedamanha.repository.CafeRepository;


/**
 * @author Bruno Luna
 * @version 1.0
 */

@Service
public class CafeService {
	
	@Autowired 
	private CafeRepository cafeRepository;
	
	public Optional<Object> cadastrarCafe(CafeModel cafeCadastrar) {
		return cafeRepository.findByCpf(cafeCadastrar.getCpf()).map(usuarioExistente -> {
			return Optional.empty();
		}).orElseGet(() -> {
			cafeCadastrar.setCpf(cafeCadastrar.getCpf());
			
		return cafeRepository.findByCafe(cafeCadastrar.getCafe()).map(usuarioExistente -> {
			return Optional.empty();
		}).orElseGet(() -> {
			cafeCadastrar.setCafe(cafeCadastrar.getCafe());
			return Optional.ofNullable(cafeRepository.save(cafeCadastrar));
			});
		});
	}
}
