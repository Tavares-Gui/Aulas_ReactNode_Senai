package com.tavares.javaapi.exercicios;

import java.util.Arrays;
import java.util.Scanner;

public class Ex8 {

    public Ex8(){ }

    public void ex8()
    {
        Scanner scan = new Scanner(System.in);
        int val = scan.nextInt();
        int[] sizeLista = new int[val];
    
        for(int i = 0; i < val; i++)
        {
            sizeLista[i] = scan.nextInt();
        }
    
        Arrays.sort(sizeLista);
        System.out.println(val);
        System.out.println(sizeLista[val - 1]);

        scan.close();
    }
}
