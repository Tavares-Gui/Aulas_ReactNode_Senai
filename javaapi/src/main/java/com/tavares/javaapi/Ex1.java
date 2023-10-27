package com.tavares.javaapi;

import lombok.Getter;
import lombok.Setter;

public class Ex1 
{
    @Getter @Setter public float nota1;
    @Getter @Setter public float nota2; 
    @Getter @Setter public float nota3;
    @Getter @Setter public float nota4;


    public Ex1(float nota1, float nota2, float nota3, float nota4){
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }

    public float media()
    {
        return (this.nota1 + this.nota2 + this.nota3 + this.nota4)/ 4;
    }
}
