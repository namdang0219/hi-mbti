import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Search from "../../Screens/Search";
import { GlobalValues } from "../../Datas/Variables";
import Chat from "../../Screens/Chat";
import HeaderRight from "../../components/HeaderRight";

const Stack = createStackNavigator();

const TabWrapper = () => {
  const screenWidth = Dimensions.get("screen").width;
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Tabs" component={Tabs} />
			<Stack.Screen
				options={{
          headerTitle: () => null,
					headerRightContainerStyle: {
						paddingRight: 14,
					},
					headerRight: () => (
						<TextInput
							placeholder="Search anything..."
							autoFocus={true}
							style={{
								backgroundColor: GlobalValues.inputBackground,
								paddingHorizontal: 14,
								paddingVertical: 6,
								borderRadius: 100,
								width: screenWidth - 14 - 70,
							}}
						/>
					),
          headerShown: true,
					headerBackImage: () => null,
					headerBackTitle: "Cancel",
					headerBackTitleStyle: {
						paddingLeft: 14,
						fontSize: 14,
						color: "black",
					},
				}}
				name="Search"
				component={Search}
			/>
			<Stack.Screen options={{headerShown: true, headerRight: () => <HeaderRight />, headerBackTitle: 'Back'}} name='Chat' component={Chat} />
		</Stack.Navigator>
	);
};

export default TabWrapper;
