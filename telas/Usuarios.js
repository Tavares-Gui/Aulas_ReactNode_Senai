import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context"

const styles = StyleSheet.create({
    viewClass: {
        backgroundColor: "#E0E0E0",
        height: "100%"
    },
    titleText: {
        paddingTop: "2%",
        paddingLeft: "6%",
        fontSize: 60,
        fontWeight: 'bold',
    },
    box: {
        borderWidth: "1px",
        borderRadius: 5,
        marginHorizontal: "5%",
        marginTop: "5%"
    },
    labelText: {
        paddingLeft: "7%",
    },
});

function InfoUsers(props)
{
    return(
        <View style = {{width: "100%"}}>
            <Text style={styles.labelText}>Nome: {props.nome}</Text>
            <Text style={styles.labelText}>Idade: {props.idade}</Text>
            <Text style={styles.labelText}>Sexo: {props.sexo}</Text>
            <Text style={styles.labelText}>Recebe Notificação: {props.notificacao ? 'Sim' : 'Não'}</Text>
        </View>
    )
}

export default function Usuarios(props)
{
    const {utils, setContext} = useContext(UtilsContext)
    console.log(utils)
    return(
        <View style = {styles.viewClass}>
            <Text style = {styles.titleText}>Usuários</Text>
            <View style = {styles.box}> 
                <FlatList
                    data={utils.dados}
                    renderItem={({item}) => <InfoUsers nome = {item.nome} idade = {item.idade} sexo = {item.sexo} notificacao = {item.notificacao}/>}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity style={styles.cadastroButton}>
                    <Text style = {styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.cadastroButton} onPress = {() => props.navigation.navigate("Cadastro")}>
                    <Text style = {styles.buttonText}>voltar</Text>
            </TouchableOpacity>
        </View>
    )
}