package br.com.cafedamanha.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.cafedamanha.model.CafeModel;
import br.com.cafedamanha.repository.CafeRepository;
import br.com.cafedamanha.service.CafeService;

/**
 * @author Bruno Luna
 * @version 1.0
 */

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/cafe")
public class CafeController {
	
	@Autowired
	private CafeRepository cafeRepository;
	
	@Autowired
	private CafeService cafeService;
	
	@GetMapping("/listartodos")
	public ResponseEntity<List<CafeModel>> getAllCafe(){
		List<CafeModel> cafeList = cafeRepository.findAll();
		
		if(cafeList.isEmpty()) {
			return ResponseEntity.status(204).build();
		} else {
			return ResponseEntity.status(200).body(cafeList);
		}
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<CafeModel> getByIdCafe(@PathVariable(value = "id") Long id){
		Optional<CafeModel> objetoCafe = cafeRepository.findById(id);

	        if (objetoCafe.isPresent()) {
	            return ResponseEntity.status(200).body(objetoCafe.get());
	        } else {
	            return ResponseEntity.status(204).build();
	        }
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<CafeModel>> getAllByName(@PathVariable(value = "nome") String nome){
		List<CafeModel> objetoNome = cafeRepository.findAllByNomeContainingIgnoreCase(nome);
		
		 if(objetoNome.isEmpty()) {
	            return ResponseEntity.status(204).build();
	        }else{
	            return ResponseEntity.status(200).body(objetoNome);
	        }
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Object> salvarCafe(@Valid @RequestBody CafeModel novoCafe) {
		return cafeService.cadastrarCafe(novoCafe).map(resp -> ResponseEntity.status(201).body(resp))
				.orElseThrow(() -> {
					throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
							"CPF ou Café existente!.");
				});
}
	
	@PutMapping("/atualizar")
	public ResponseEntity<CafeModel> atualizarCafe(@Valid @RequestBody CafeModel cafeUpdate){
		return ResponseEntity.status(202).body(cafeRepository.save(cafeUpdate)); 
	}
	
	@DeleteMapping("deletar/{id}")
    public void deletarCafe(@PathVariable(value = "id") Long id) {
		cafeRepository.deleteById(id);
    }

}
