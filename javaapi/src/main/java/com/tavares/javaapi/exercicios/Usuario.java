package com.tavares.javaapi.exercicios;

import lombok.Getter;
import lombok.Setter;

public class Usuario extends Pessoa{

    @Getter @Setter public String login;

    public Usuario(String nome, int idade, String cpf, String login)
    {
        super(nome, idade, cpf);
        this.login = login;
    }
    
}
