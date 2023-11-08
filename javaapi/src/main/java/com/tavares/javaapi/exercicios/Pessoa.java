package com.tavares.javaapi.exercicios;

import lombok.Getter;
import lombok.Setter;

public class Pessoa {
    
    @Getter @Setter public String nome;
    @Getter @Setter public int idade;
    @Getter @Setter public String cpf;

    public Pessoa(String nome, int idade, String cpf)
    {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

}
