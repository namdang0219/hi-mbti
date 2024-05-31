import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostDetail from "../../Screens/PostDetail";
import Message from "../../Screens/Message";
import Profile from "../../Screens/Profile";
import HeaderRight from "../../components/HeaderRight";
import Menu from "../../Screens/Menu";
import Chat from "../../Screens/Chat";
import IntroEdit from "../../Screens/IntroEdit";
import { HeaderNavStyle } from "../../Datas/Variables";

const Stack = createStackNavigator();

const MenuStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Menu"
			screenOptions={{
				headerShown: true,
				headerRight: () => <HeaderRight />,
			}}
		>
			<Stack.Screen options={HeaderNavStyle.HeaderTitleOnLeft} name="Menu" component={Menu} />
			<Stack.Screen name="PostDetail" component={PostDetail} />
			<Stack.Screen name="Message" component={Message} />
			<Stack.Screen name="Profile" component={Profile} />
			{/* <Stack.Screen name="Chat" component={Chat} /> */}
			<Stack.Screen name="IntroEdit" component={IntroEdit} />
		</Stack.Navigator>
	);
};

export default MenuStack;
