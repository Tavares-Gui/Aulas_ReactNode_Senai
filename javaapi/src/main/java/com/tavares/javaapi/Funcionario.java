package com.tavares.javaapi;

import lombok.Getter;
import lombok.Setter;

public class Funcionario extends Pessoa {
    
    @Getter @Setter public String cargo;

    public Funcionario(String nome, int idade, String cpf, String cargo)
    {
        super(nome, idade, cpf);
        this.cargo = cargo;
    }

}
