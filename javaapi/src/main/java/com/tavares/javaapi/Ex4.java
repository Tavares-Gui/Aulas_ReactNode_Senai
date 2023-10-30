package com.tavares.javaapi;

import java.util.ArrayList;

public class Ex4 
{
    public ArrayList<Integer> listaRestos = new ArrayList<Integer>();

    public Ex4(){ }

    public void ex4()
    {
        for(int i = 1000; i <= 1999; i++)
        {
            if(i % 11 == 5)
                System.out.println(i);
        }
    }
}
