package com.tavares.javaapi;

import com.tavares.javaapi.Ex6.Funcionario;

import java.lang.reflect.Array;

import java.util.ArrayList;

import lombok.Getter;
import lombok.Setter;

public class Ex7 
{
    public ArrayList<Funcionario> listaRestos = new ArrayList<Funcionario>();

    public Ex7(){ }

    public void ex7()
    {
        Funcionario func1 = new Funcionario("Felipe", 19, "000.000.000-00", "Dev");
        Funcionario func2 = new Funcionario("Tavares", 18, "111.111.111-11", "Dev");
    }
}
