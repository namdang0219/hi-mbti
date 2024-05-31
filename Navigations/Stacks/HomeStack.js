import React, { createContext, useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../Screens/Home";
import PostDetail from "../../Screens/PostDetail";
import Message from "../../Screens/Message";
import Profile from "../../Screens/Profile";
import HeaderRight from "../../components/HeaderRight";
import Chat from "../../Screens/Chat";
import IntroEdit from "../../Screens/IntroEdit";
import { Text, TouchableOpacity } from "react-native";
import { GlobalValues } from "../../Datas/Variables";
import { MilkNguyen } from "../../Datas/data";
import Feather from "@expo/vector-icons/Feather";
import { Overlay } from '@rneui/themed';
import { View } from "react-native-animatable";
import { BlurView } from 'expo-blur';
import styled from "styled-components";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

const TableContext = createContext()

const HomeStack = () => {
	const [visible, setVisible] = useState(false)
	const toggleOverlay = () => {
		setVisible(!visible);
	};
	const [type, setType] = useState('INFJ')
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: true,
				headerRight: () => <HeaderRight />,
			}}
		>
			<Stack.Screen
				options={{
					headerTitle: () => (
						<Text style={{ fontSize: 16 }}>❤️‍🔥 {type} ❤️‍🔥</Text>
					),
					headerLeft: () => (
						<TableContext.Provider value={{setType, setVisible}}>
							<View>
								<TouchableOpacity onPress={toggleOverlay} style={{flexDirection: "row", gap: 2, alignItems: 'center'}}>
									<Text
										style={{
											fontSize: 20,
											fontWeight: "500",
											paddingLeft: GlobalValues.mainPadding,
										}}
									>
										Home
									</Text>
									<Feather name="chevron-down" size={22} style={{marginTop: 4}} />
								</TouchableOpacity>
								<Overlay overlayStyle={{padding: 0, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, overflow: "hidden", position: 'absolute', top: 90, left: 14}} backdropStyle={{backgroundColor: 'transparent'}}  isVisible={visible} onBackdropPress={toggleOverlay}>
									<BlurView intensity={40} tint="light">
											<TypeOption />
									</BlurView>
								</Overlay>
							</View>
						</TableContext.Provider>
					),
				}}
				name="Home"
				component={Home}
			/>
			<Stack.Screen name="PostDetail" component={PostDetail} />
			<Stack.Screen name="Message" component={Message} />
			<Stack.Screen name="Profile" component={Profile} />
			{/* <Stack.Screen name="Chat" component={Chat} /> */}
			<Stack.Screen name="IntroEdit" component={IntroEdit} />
		</Stack.Navigator>
	);
};

const TypeOption = () => {
	const {setType} = useContext(TableContext)
	const {setVisible} = useContext(TableContext)
	return(
		<View style={{width: 300, borderRadius: 20}}>
			<View style={{flexDirection: "row", borderBottomColor: GlobalValues.borderColor, borderBottomWidth: 0.25}}>
				<TouchableOpacity onPress={() => {
					setType('ISTJ')
					setVisible(false)
					}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>ISTJ</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('ISFJ'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>ISFJ</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('INFJ'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>INFJ</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('INTJ'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1}}><Text style={{textAlign: "center"}}>INTJ</Text></TouchableOpacity>
			</View>
			<View style={{flexDirection: "row", borderBottomColor: GlobalValues.borderColor, borderBottomWidth: 0.25}}>
				<TouchableOpacity onPress={() => {setType('ISTP'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>ISTP</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('ISFP'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>ISFP</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('INFP'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>INFP</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('INTP'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1}}><Text style={{textAlign: "center"}}>INTP</Text></TouchableOpacity>
			</View>
			<View style={{flexDirection: "row", borderBottomColor: GlobalValues.borderColor, borderBottomWidth: 0.25}}>
				<TouchableOpacity onPress={() => {setType('ESTP'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>ESTP</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('ESFP'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>ESFP</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('ENFP'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>ENFP</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('ENTP'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1}}><Text style={{textAlign: "center"}}>ENTP</Text></TouchableOpacity>
			</View>
			<View style={{flexDirection: "row"}}>
				<TouchableOpacity onPress={() => {setType('ESTJ'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>ESTJ</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('ESFJ'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>ESFJ</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('ENFJ'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1, borderRightColor: GlobalValues.borderColor, borderRightWidth: 0.25}}><Text style={{textAlign: "center"}}>ENFJ</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => {setType('ENTJ'); setVisible(false)}} activeOpacity={0.5} style={{paddingVertical: 10, flex: 1}}><Text style={{textAlign: "center"}}>ENTJ</Text></TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	typeStyle:{
		flex: 1,
		textAlign: 'center',
		paddingVertical: 10, 
	},
	typeBorderRight: {
		flex: 1,
		textAlign: 'center',
		paddingVertical: 10, 
		borderRightColor: GlobalValues.borderColor,
		borderRightWidth: 0.25
	}
})

export default HomeStack;

// ISTJ: The Inspector
// ISFJ: The Protector
// INFJ: The Counsellor
// INTJ: The Mastermind

// ISTP: The Craftsman
// ISFP: The Composer
// INFP: The Healer
// INTP: The Architect

// ESTP: The Dynamo
// ESFP: The Performer
// ENFP: The Champion
// ENTP: The Visionary

// ESTJ: The Supervisor
// ESFJ: The Provider
// ENFJ: The Teacher
// ENTJ: The Commander [i]
















