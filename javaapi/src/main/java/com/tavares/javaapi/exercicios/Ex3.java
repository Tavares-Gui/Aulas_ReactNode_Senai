package com.tavares.javaapi.exercicios;

public class Ex3 
{


    public Ex3(){ }

    public void ex3()
    {
        int[] array = {2, 4, 8, 16, 32, 64, 128};
        int sum = 0;

        for(int i = 0; i < array.length; i++)
        {
            sum += array[i];
        }
        
        System.out.println(sum);
    }
}
