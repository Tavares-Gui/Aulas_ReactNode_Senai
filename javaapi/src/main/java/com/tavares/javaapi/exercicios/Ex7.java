package com.tavares.javaapi.exercicios;

import java.util.ArrayList;

public class Ex7 
{
    public ArrayList<Funcionario> listaFunc = new ArrayList<Funcionario>();
    public Funcionario[] arrayFunc;

    public Ex7(){ }

    public void ex7()
    {
        Funcionario func1 = new Funcionario("Felipe", 19, "000.000.000-00", "Dev");
        Funcionario func2 = new Funcionario("Tavares", 18, "111.111.111-11", "Dev");

        arrayFunc[0] = (func1);
        arrayFunc[1] = (func2);

        listaFunc.add(func1);
        listaFunc.add(func2);

        for(int i = 0; i < arrayFunc.length; i++)
        {
            System.out.println(arrayFunc[i].nome);
            System.out.println(arrayFunc[i].idade);
            System.out.println(arrayFunc[i].cpf);
            System.out.println(arrayFunc[i].cargo);
        }

        for(Funcionario funcionario : listaFunc)
        {
            System.out.println(funcionario.nome);
            System.out.println(funcionario.idade);
            System.out.println(funcionario.cpf);
            System.out.println(funcionario.cargo);
        }
    }
}
