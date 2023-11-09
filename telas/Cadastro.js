import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch, Button } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context"
import axios from "axios";

const styles = StyleSheet.create({
    viewClass: 
    {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#E0E0E0",
        height: "100%"
    },
    viewImg: 
    {
        alignItems: "center"
    },
    Img:
    {
        height: "180px",
        width: "180px",
    },
    labelText: 
    {
        paddingLeft: "7%",
    },
    input: 
    {
        backgroundColor: "white",
        height: 25,
        marginLeft: "7%",
        marginRight: "7%",
        marginBottom: "5%",
        borderRadius: 5
    },
    inputRow:
    {
        backgroundColor: "white",
        width: 148,
        height: 25,
        marginLeft: "7%",
        marginBottom: "5%",
        borderRadius: 5
    },
    labelTextRow: 
    {
        paddingLeft: "7%",
        paddingRight: "32%",
    },
    viewTextRow:
    {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
    }, 
    viewInputRow:
    {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
    },
    viewForm: 
    {
        display: "flex",
        justifyContent: "flex-start",
    },
    viewButton: 
    {
        display: "flex",
        justifyContent: "flex-end",
    },
    viewSwitch:
    {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
    },
    labelTextSwitch: 
    {
        paddingLeft: "3%",
    },
    CadastroButton: 
    {
        backgroundColor: "white",
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "10%",
        borderRadius: 5
    },
    cadastroButton: 
    {
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "10%",
        marginBottom: "10px"
    },
    buttonText: 
    {
        textAlign: "center"
    },
});

export function Cadastro(props)
{

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [notificacao, setNotificacao] = useState(false)
    const {utils, setUtils} = useContext(UtilsContext)

    const attUser = async() => {
        try {
            const response = await axios("http://localhost:8080/user", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    function gotoUsers()
    {
        if(utils.dados)
        {
            setUtils({...utils, dados: [...utils.dados, {
                nome: nome,
                idade: idade,
                sexo: sexo,
                notificacao: notificacao
            }]})
        }
        else
        {
            setUtils({...utils, dados: [{
                nome: nome,
                idade: idade,
                sexo: sexo,
                notificacao: notificacao
            }]}) 
        }

        props.navigation.navigate("Usuarios")
    }

    return(
        <View style = {styles.viewClass}>
            <Button onPress={() => attUser()}>Testezin</Button>
            <View style = {styles.viewImg}>
                <Image 
                    style = {styles.Img}
                    source = {require("./img/imgLogin.png")}
                />
            </View>
            <View style = {styles.viewForm}>
                <Text style = {styles.labelText}>Nome:</Text>
                <TextInput
                    style = {styles.input}
                    autoComplete = {nome}
                    value = {nome}
                    onChangeText = {e => setNome(e)}
                />

                <View style={styles.viewTextRow}>
                    <Text style = {styles.labelTextRow}>Sexo:</Text>
                    <Text style = {styles.labelTextRow}>Idade:</Text>
                </View>

                <View style={styles.viewInputRow}>
                    <TextInput
                        style = {styles.inputRow}
                        value = {sexo}
                        onChangeText = {e => setSexo(e)}
                    />
                    <TextInput
                        style = {styles.inputRow}
                        value = {idade}
                        onChangeText = {e => setIdade(e)}
                    />
                </View>

                <Text style = {styles.labelText}>Email:</Text>
                <TextInput style = {styles.input}/>

                <Text style = {styles.labelText}>Senha:</Text>
                <TextInput style = {styles.input} secureTextEntry = {true}/>

                <Text style = {styles.labelText}>Confirmar senha:</Text>
                <TextInput style = {styles.input} secureTextEntry = {true}/>

                <Text style = {styles.labelText}>Deseja receber notificações?</Text>
                <View style = {styles.viewSwitch}>
                    <Switch
                        onValueChange = {() => setNotificacao(!notificacao)}
                        value = {notificacao}
                        style = {{marginLeft: "7%"}}
                        trackColor = {{false: "red", true: "green"}}
                        thumbColor = {"white"}
                        activeThumbColor = {"#f4f3f4"}
                    />
                    <Text style = {styles.labelTextSwitch}>{notificacao ? "Sim" : "Não"}</Text>
                </View>
            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.CadastroButton} onPress = {() => gotoUsers()}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => props.navigation.navigate("Login")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

