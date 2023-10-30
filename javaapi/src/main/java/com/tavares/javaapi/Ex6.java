package com.tavares.javaapi;

import lombok.Getter;
import lombok.Setter;

public class Ex6 
{
    public Ex6(){ }
    
    public class Pessoa
    {
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

    public class Funcionario extends Pessoa
    {
        @Getter @Setter public String cargo;

        public Funcionario(String nome, int idade, String cpf, String cargo)
        {
            super(nome, idade, cpf);
            this.cargo = cargo;
        }
    }

    public class Usuario extends Pessoa
    {
        @Getter @Setter public String login;

        public Usuario(String nome, int idade, String cpf, String login)
        {
            super(nome, idade, cpf);
            this.login = login;
        }
    }

    public void ex6()
    {
        Funcionario func1 = new Funcionario("Felipe", 19, "000.000.000-00", "Dev");
        Funcionario func2 = new Funcionario("Tavares", 18, "111.111.111-11", "Dev");

        Usuario user1 = new Usuario("Felipe", 18, "111.111.111-11", "FELIIIIPE");
        Usuario user2 = new Usuario("Tavares", 18, "111.111.111-11", "TAVAAAARES");

        System.out.println(func1.nome + " - " + func1.idade + " - " + func1.cpf + " - " + func1.cargo);
        System.out.println(func2.nome + " - " + func2.idade + " - " + func2.cpf + " - " + func2.cargo);
        System.out.println(user1.nome + " - " + user1.idade + " - " + user1.cpf + " - " + user1.login);
        System.out.println(user2.nome + " - " + user2.idade + " - " + user2.cpf + " - " + user2.login);
    }
}