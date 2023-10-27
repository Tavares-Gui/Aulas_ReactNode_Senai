package com.tavares.javaapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JavaapiApplication {

	public static void main(String[] args)
	{
		Ex1 notaAluno = new Ex1((float) 10.0, (float) 7.5, (float) 4.0, (float) 2.0);
		float media = notaAluno.media();
	}

}
