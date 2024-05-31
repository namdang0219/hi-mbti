import { View, Text, Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../Stacks/HomeStack";
import FollowStack from "../Stacks/FollowStack";
import AddStack from "../Stacks/AddStack";
import NotiStack from "../Stacks/NotiStack";
import MenuStack from "../Stacks/MenuStack";
import HeaderRight from "../../components/HeaderRight";
import Ionicons from "@expo/vector-icons/Ionicons";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { GlobalValues } from "../../Datas/Variables";

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {
	return (
		<Tab.Navigator
			initialRouteName="HomeStack"
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					paddingHorizontal: 14,
					paddingTop: 4,
				},
				tabBarIcon: ({ focused }) => {
					const setIconColor = () =>
						focused ? GlobalValues.primaryColor : "black";
					return (
						<>
							{(route.name === "HomeStack" && (
								<Foundation
									name="home"
									size={32}
									color={setIconColor()}
								/>
							)) ||
								(route.name === "FollowStack" && (
									<FontAwesome5
										name="user-friends"
										size={26}
										color={setIconColor()}
									/>
								)) ||
								(route.name === "AddStack" && (
									<Pressable
										onPress={() =>
											navigation.navigate("AddPost")
										}
									>
										<Ionicons
											name="add-circle-outline"
											size={42}
											color={setIconColor()}
										/>
									</Pressable>
								)) ||
								(route.name === "NotiStack" && (
									<Ionicons
										name={
											focused
												? "notifications-sharp"
												: "notifications-outline"
										}
										size={32}
										color={setIconColor()}
									/>
								)) ||
								(route.name === "MenuStack" && (
									<SimpleLineIcons
										name="menu"
										size={26}
										color={setIconColor()}
									/>
								))}
						</>
					);
				},
			})}
		>
			<Tab.Screen name="HomeStack" component={HomeStack} />
			<Tab.Screen name="FollowStack" component={FollowStack} />
			<Tab.Screen name="AddStack" component={AddStack} />
			<Tab.Screen name="NotiStack" component={NotiStack} />
			<Tab.Screen name="MenuStack" component={MenuStack} />
		</Tab.Navigator>
	);
};

export default Tabs;
