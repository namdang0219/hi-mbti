import { View, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { GlobalValues } from "../Datas/Variables";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";

const HeaderRight = () => {
	const navigation = useNavigation();
	const currentUser = useContext(AuthContext);
	return (
		<View
			style={{
				flexDirection: "row",
				gap: 8,
				alignItems: "center",
				paddingRight: GlobalValues.mainPadding,
			}}
		>
			<TouchableOpacity onPress={() => navigation.navigate("Search")}>
				<AntDesign
					name="search1"
					size={24}
					color={GlobalValues.darkGray}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("Message")}>
				<AntDesign
					name="message1"
					size={23}
					color={GlobalValues.darkGray}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("Profile")}>
				{currentUser && (
					<Image
						source={{ uri: 'https://2sao.vietnamnetjsc.vn/images/2022/09/07/10/45/phuong-ly-01.jpg' }}
						style={{ width: 28, height: 28, borderRadius: 14 }}
					/>
				)}
			</TouchableOpacity>
		</View>
	);
};
export default HeaderRight;
