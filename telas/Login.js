import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    viewClass: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#E0E0E0",
        height: "100%"
    },
    titleText: {
        paddingTop: "17%",
        paddingBottom: "17%",
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: "center",
    },
    labelText: {
        paddingLeft: "7%",
    },
    input: {
        backgroundColor: "white",
        height: 25,
        marginLeft: "7%",
        marginRight: "7%",
        marginBottom: "5%",
        borderRadius: 5
    },
    viewForm: {
        display: "flex",
        justifyContent: "flex-start",
    },
    viewButton: {
        display: "flex",
        justifyContent: "flex-end",
    },
    loginButton: {
        backgroundColor: "white",
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "10%",
        borderRadius: 5
    },
    cadastroButton: {
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "10%",
        marginBottom: "10px"
    },
    buttonText: {
        textAlign: "center"
    },
});

export function Login(props)
{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <View style = {styles.viewClass}>
            <View style = {styles.viewForm}>
                <Text style = {styles.titleText}>Login</Text>

                <Text style = {styles.labelText}>E-mail:</Text>
                <TextInput
                    style = {styles.input}
                    autoComplete = {email}
                    value = {email}
                    onChangeText = {e => setEmail(e)}
                />

                <Text style = {styles.labelText}>Senha:</Text>
                <TextInput
                    style = {styles.input}
                    secureTextEntry = {true}
                    value = {senha}
                    onChangeText = {e => setSenha(e)}
                />
            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.loginButton} onPress = {() => props.navigation.navigate("Usuarios")}>
                    <Text style = {styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => props.navigation.navigate("Cadastro")}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

