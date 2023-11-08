package com.tavares.javaapi.exercicios;

import java.util.ArrayList;

public class Ex5 
{
    public ArrayList<Integer> listaRestos = new ArrayList<Integer>();
    public int qtdImpar = 0;

    public Ex5(){ }

    public void ex5()
    {
        for(int i = 0; i <= 1000; i++)
        {
            if(i % 2 == 0)
                System.out.println(i);
            else   
                qtdImpar++;
        }

        System.out.println(qtdImpar);
    }
}
