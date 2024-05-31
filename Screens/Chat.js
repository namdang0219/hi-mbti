import {
	View,
	Text,
	KeyboardAvoidingView,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Platform,
	Image,
  FlatList,
} from "react-native";
import React, { useContext, useState } from "react";
import { GlobalValues } from "../Datas/Variables";
import { SafeAreaView } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import { ScreenWidth } from "@rneui/base";

const Chat = () => {
	return (
		<KeyboardAvoidingView
			style={{ backgroundColor: "white", flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end'  }}
				style={{
					paddingHorizontal: GlobalValues.mainPadding,
          paddingTop: 20
				}}
			>
				<FlatList scrollEnabled={false} data={chatDatas} renderItem={({item}) => <ChatItem sender={item.sender} content={item.content} />} />
			</ScrollView>
			<SafeAreaView
				style={{
					borderTopColor: GlobalValues.borderColor,
					borderTopWidth: 0.25,
				}}
			>
				<View
					style={{
						paddingHorizontal: 20,
						gap: 10,
						paddingVertical: 10,
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<TextInput
						placeholder="Type your message"
						style={{
							backgroundColor: GlobalValues.inputBackground,
							borderRadius: 1000,
							paddingHorizontal: 16,
							paddingVertical: 10,
							flex: 1,
						}}
					/>
					<TouchableOpacity
						style={{
							backgroundColor: GlobalValues.primaryColor,
							borderRadius: 20,
							width: 60,
							height: "100%",
							alignItems: "center",
						}}
					>
						{/* <Ionicons style={{marginTop: 4}} name="send" size={28} color={'white'} /> */}
						<Text
							style={{
								color: "white",
								fontSize: 16,
								fontWeight: "500",
								marginTop: 8,
							}}
						>
							Send
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
};

const ChatItem = ({content, sender}) => {
	const currentUser = useContext(AuthContext);
	return (
		<View style={{flexDirection: `${sender ? 'row-reverse' : 'row'}`, gap: 10, marginBottom: 20}}>
			<Image
				source={{ uri: currentUser.photoURL }}
				style={{ width: 30, height: 30, borderRadius: 60, marginTop: 6 }}
			/>
      <View style={{backgroundColor: GlobalValues.primaryColor, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10, maxWidth: ScreenWidth - 28 - 30 - 50 }}>
        <Text style={{color: "white", fontSize: 16, fontWeight: '500'}}>{content}</Text>
      </View>
		</View>
	);
};

const chatDatas = [
  {
    sender: true,
    content: 'How about your work today ?',
  },
  {
    sender: false,
    content: 'It is not smooth, but i enjoyed my day!',
  },
  {
    sender: true,
    content: 'Oho my day too',
  },
  {
    sender: true,
    content: 'And do you wanna go camping for this weekend? 😃',
  },
  {
    sender: false,
    content: 'Of course! It is a nice idea!',
  },
  {
    sender: true,
    content: 'Oho my day too',
  },
  {
    sender: true,
    content: 'And do you wanna go camping for this weekend? 😃',
  },
  {
    sender: false,
    content: 'Of course! It is a nice idea!',
  },
  {
    sender: true,
    content: 'Oho my day too',
  },
  {
    sender: true,
    content: 'And do you wanna go camping for this weekend? 😃',
  },
  {
    sender: false,
    content: 'Of course! It is a nice idea!',
  },
  {
    sender: true,
    content: 'Oho my day too',
  },
  {
    sender: true,
    content: 'And do you wanna go camping for this weekend? 😃',
  },
  {
    sender: false,
    content: 'Of course! It is a nice idea!',
  },
  
]

export default Chat;
