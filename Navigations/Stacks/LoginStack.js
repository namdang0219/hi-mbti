import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../Screens/Login";
import IntroduceStack from "./IntroduceStack";
import { GlobalValues } from "../../Datas/Variables";

const Stack = createStackNavigator();

const LoginStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: GlobalValues.primaryColor,
						borderBottomWidth: 0,
						height: 120,
					},
					headerShadowVisible: false,
					headerShown: true,
					headerTitle: "Create new Account",
					headerTitleStyle: {
						fontSize: 28,
						marginLeft: -8,
						marginTop: 18,
						color: "white",
						fontWeight: "700",
					},
					headerLeft: () => null,
					headerLeftContainerStyle: {
						marginTop: 18,
						paddingLeft: 14,
					},
					headerTitleAlign: "left",
				}}
				name="IntroduceStack"
				component={IntroduceStack}
			/>
		</Stack.Navigator>
	);
};

export default LoginStack;
