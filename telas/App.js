import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {Login} from "./Login" 
import {Cadastro} from "./Cadastro"
import Usuarios from "./Usuarios"

export default function App() {
	const Stack = createStackNavigator()
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name = "Login" options = {{headerShown: false}} component = {Login} />
				<Stack.Screen name = "Cadastro" options = {{headerShown: false}} component = {Cadastro} />
				<Stack.Screen name = "Usuarios" options = {{headerShown: false}} component = {Usuarios} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}