package com.tavares.javaapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.tavares.javaapi.Ex6.Funcionario;
import com.tavares.javaapi.Ex6.Usuario;

@SpringBootApplication
public class JavaapiApplication 
{
	public static void main(String[] args)
	{
		//EXERCICIO 1
		// Ex1 notaAluno = new Ex1((float) 10.0, (float) 7.5, (float) 4.0, (float) 2.0);
		// float media = notaAluno.media();

		// if(media >= 7 && media < 9)
		// {
		// 	System.out.println("Aprovado");
		// }
		// else if(media >= 9)
		// {
		// 	System.out.println("Parabens");
		// }
		// else
		// {
		// 	System.out.println("Reprovado");
		// }


		//EXERCICIO 2
		// Ex2 somaLista = new Ex2();
		// somaLista.ex2();


		//EXERCICIO 3


		//EXERCICIO 4
		// Ex4 listaResto = new Ex4();
		// listaResto.ex4();


		//EXERCICIO 5
		// Ex5 listaImpar = new Ex5();
		// listaImpar.ex5();


		//EXERCICIO 6
		Ex6 listaImpar = new Ex6();
		listaImpar.ex6();
	}
}
