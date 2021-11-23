package br.com.cafedamanha.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.br.CPF;

/**
 * @author Bruno Luna
 * @version 1.0
 */

@Entity
public class CafeModel {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Campo obrigatório.")
	private String nome;
	
	@CPF
	@NotBlank(message = "Campo obrigatório.")
	private String cpf;
	
	@NotBlank(message = "Campo obrigatório.")
	private String cafe;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getCafe() {
		return cafe;
	}

	public void setCafe(String cafe) {
		this.cafe = cafe;
	}
	
}
