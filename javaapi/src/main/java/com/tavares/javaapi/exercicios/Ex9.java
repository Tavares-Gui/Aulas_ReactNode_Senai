package com.tavares.javaapi.exercicios;

import java.util.Scanner;

public class Ex9 {

    public Ex9(){ }

    public void ex9()
    {
        Scanner scan = new Scanner(System.in);
        String frase = scan.nextLine();

        String[] separar = frase.split(" ");

        if(separar.length % 2 == 0)
        {
            System.out.println(separar[(separar.length / 2) - 1]);
            System.out.println(separar[separar.length / 2]);
        }
        else
        {
            System.out.println(separar[separar.length / 2]);
        }

        scan.close();
    }

}
