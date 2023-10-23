import { View, Text, StyleSheet } from "react-native";

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

export default function Usuarios()
{
    return(
        <View style = {styles.viewClass}>
            <Text style = {styles.titleText}>Usuarios</Text>
            <View style = {styles.box}>
                <Text style = {styles.labelText}>Nome: </Text>
                <Text style = {styles.labelText}>Idade: </Text>
                <Text style = {styles.labelText}>Sexo: </Text>
                <Text style = {styles.labelText}>Recebe Notificação: </Text>
            </View>
        </View>
    )
}