import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch } from "react-native";
import { useState } from 'react';

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
    const [email, setEmail] = useState("");
    const [inicio, setInicio] = useState(false)
    const [senha, setSenha] = useState("");

    return(
        <View style = {styles.viewClass}>
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
                    autoComplete = {email}
                    value = {email}
                    onChangeText = {e => setEmail(e)}
                />

                <View style={styles.viewTextRow}>
                    <Text style = {styles.labelTextRow}>Sexo:</Text>
                    <Text style = {styles.labelTextRow}>Idade:</Text>
                </View>

                <View style={styles.viewInputRow}>
                    <TextInput
                        style = {styles.inputRow}
                        secureTextEntry = {true}
                        value = {senha}
                        onChangeText = {e => setSenha(e)}
                    />
                    <TextInput
                        style = {styles.inputRow}
                        secureTextEntry = {true}
                        value = {senha}
                        onChangeText = {e => setSenha(e)}
                    />
                </View>

                <Text style = {styles.labelText}>Email:</Text>
                <TextInput
                    style = {styles.input}
                    secureTextEntry = {true}
                    value = {senha}
                    onChangeText = {e => setSenha(e)}
                />

                <Text style = {styles.labelText}>Senha:</Text>
                <TextInput
                    style = {styles.input}
                    secureTextEntry = {true}
                    value = {senha}
                    onChangeText = {e => setSenha(e)}
                />

                <Text style = {styles.labelText}>Confirmar senha:</Text>
                <TextInput
                    style = {styles.input}
                    secureTextEntry = {true}
                    value = {senha}
                    onChangeText = {e => setSenha(e)}
                />

                <Text style = {styles.labelText}>Deseja receber notificações?</Text>
                <View style = {styles.viewSwitch}>
                    <Switch
                        onValueChange = {() => setInicio(!inicio)}
                        value = {inicio}
                        style = {{marginLeft: "7%"}}
                        trackColor = {{false: "red", true: "green"}}
                        thumbColor = {"white"}
                        activeThumbColor = {"#f4f3f4"}
                    />
                    <Text style = {styles.labelTextSwitch}>{inicio ? "Sim" : "Não"}</Text>
                </View>
            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.CadastroButton} onPress = {() => props.navigation.navigate("Usuarios")}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => props.navigation.navigate("Login")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

