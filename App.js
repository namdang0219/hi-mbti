import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginStack from "./Navigations/Stacks/LoginStack";
import Modal from "./Navigations/Tabs/Modal";
import { createContext, useContext } from "react";
import { AuthContext, AuthContextProvider } from "./contexts/AuthContext";

const Stack = createStackNavigator();

const AppNavigation = () => {
	const currentUser = useContext(AuthContext);
	// console.log(currentUser)
	return (
		<Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
			{/* {currentUser ? null : <Stack.Screen name="LoginStack" component={LoginStack} />} */}
			{/* <Stack.Screen name="LoginStack" component={LoginStack} /> */}
			<Stack.Screen
				options={{ gestureEnabled: false }}
				name="Modal"
				component={Modal}
			/>
		</Stack.Navigator>
	);
};

export const UserDataContext = createContext();

const RootNavigation = () => {
	return (
		<NavigationContainer>
			<AppNavigation />
		</NavigationContainer>
	);
};

export default function App() {
	return (
		<AuthContextProvider>
			<RootNavigation />
		</AuthContextProvider>
	);
}
