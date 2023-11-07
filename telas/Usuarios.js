import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal} from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context"

const styles = StyleSheet.create({
    viewClass: {
        backgroundColor: "#E0E0E0",
        height: "100%"
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00ff00',
        padding: 100,
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

function InfoUsers (props)
{
    return(
        <View style = {styles.box}>
            <Text style={styles.labelText}>Nome: {props.nome}</Text>
            <Text style={styles.labelText}>Idade: {props.idade}</Text>
            <Text style={styles.labelText}>Sexo: {props.sexo}</Text>
            <Text style={styles.labelText}>Recebe Notificação: {props.notificacao ? 'Sim' : 'Não'}</Text>
            <TouchableOpacity onPress = {() => props.deleteButton(props.nome)}>
                <Text style = {styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}

export default function Usuarios(props)
{
    const {utils, setUtils} = useContext(UtilsContext)

    function deleteButton (name)
    {
        var sub = [...utils.dados];
        var sub2 = [];
        sub.map((item) => {
            if(item.nome !== name)
            {
                sub2.push(item)
            }
        })

        setUtils({...utils, dados: sub2})
    }

    return(
        <View style = {styles.viewClass}>
            <Text style = {styles.titleText}>Usuários</Text>
            <View> 
                <FlatList
                    data={utils.dados}
                    renderItem={({item}) => <InfoUsers nome = {item.nome} 
                                                       idade = {item.idade} 
                                                       sexo = {item.sexo} 
                                                       notificacao = {item.notificacao}
                                                       deleteButton = {deleteButton} 
                                                       />}
                    keyExtractor={item => item.id}
                />
            </View>
            <TouchableOpacity style={styles.cadastroButton} onPress = {() => props.navigation.navigate("Cadastro")}>
                    <Text style = {styles.buttonText}>voltar</Text>
            </TouchableOpacity>
        </View>
        
    )
}