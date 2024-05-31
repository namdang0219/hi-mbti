import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { GlobalValues } from "../Datas/Variables";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";


const PostCreate = ({onPressToProfile, onPressCreatePost}) => {
	const currentUser = useContext(AuthContext)
	const navigation = useNavigation()
	return (
		<View style={{ paddingHorizontal: 16,paddingTop: 12 , backgroundColor: 'white' }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					gap: 16,
					alignItems: "center",
					paddingBottom: 14,
					borderBottomColor: GlobalValues.borderColor,
					borderBottomWidth: 0.25,
				}}
			>
				<TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Profile')}>
					<Image
						// source={{ url: currentUser?.photoURL }}
						source={{ url: 'https://2sao.vietnamnetjsc.vn/images/2022/09/07/10/45/phuong-ly-01.jpg' }}
						style={{ width: 30, height: 30, borderRadius: 15 }}
					/>
				</TouchableOpacity>
				<TextInput
					placeholder="Share about your day..."
					style={{ flex: 1 }}
				/>
				<TouchableOpacity activeOpacity={0.5}>
					<Ionicons
						name="send"
						size={24}
						color={GlobalValues.primaryColor}
					/>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 12
				}}
			>
				<TouchableOpacity onPress={() => navigation.navigate('AddPost')}>
					<StyledFeature>
						<MaterialIcons
							name="post-add"
							size={34}
							color={GlobalValues.primaryColor}
						/>
						<Text>Creat a post</Text>
					</StyledFeature>
				</TouchableOpacity>
				<TouchableOpacity>
					<StyledFeature>
						<AntDesign
							name="picture"
							size={30}
							color={GlobalValues.primaryColor}
						/>
						<Text>Share a picture</Text>
					</StyledFeature>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const StyledFeature = styled.View`
	flex-direction: row;
	gap: 8px;
	align-items: center;
`;

export default PostCreate;
