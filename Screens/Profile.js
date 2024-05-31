import {
	View,
	Text,
	ScrollView,
	ImageBackground,
	Image,
	StyleSheet,
	FlatList,
  TouchableOpacity
} from "react-native";
import React, { useContext } from "react";
import { MilkNguyen } from "../Datas/MilkNguyen";
import { GlobalValues } from "../Datas/Variables";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import PostCreate from "../components/PostCreate";
import { Posts } from "../Datas/Posts";
import Post from "../components/Post";
import { AuthContext } from "../contexts/AuthContext";


const Profile = ({ navigation }) => {
	const currentUser = useContext(AuthContext)
	return (
		<ScrollView style={{ backgroundColor: "white" }}>
			<ImageBackground
				style={{ height: 200, position: "relative" }}
				source={{
					uri: "https://cand.com.vn/Files/Image/chienthang/2018/05/06/60fa76d7-6972-443b-91ab-9b3c47e588b2.JPG",
				}}
			>
				<View
					style={{
						position: "absolute",
						top: 112,
						alignSelf: "center",
						alignItems: "center",
					}}
				>
					<Image
						source={{ uri: 'https://2sao.vietnamnetjsc.vn/images/2022/09/07/10/45/phuong-ly-01.jpg' }}
						style={{
							width: 140,
							height: 140,
							borderRadius: 70,
							borderColor: "white",
							borderWidth: 4,
						}}
					/>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "600",
							marginTop: 8,
						}}
					>
						{currentUser.displayName}
					</Text>
					<Text
						style={{
							fontSize: 12,
							color: GlobalValues.darkGray,
							marginTop: 2,
						}}
					>
						{MilkNguyen.jobs.join(", ")}
					</Text>
				</View>
			</ImageBackground>
			<View style={{ marginTop: 100 }}>
				<Intro onPressToEdit={() => navigation.navigate("IntroEdit")} />
			</View>
			<View style={{ marginTop: 16, paddingHorizontal: 8 }}>
				<PostCreate />
			</View>
			<View style={{ backgroundColor: GlobalValues.primaryBackground }}>
				<Text
					style={{
						paddingHorizontal: GlobalValues.mainPadding,
						paddingVertical: 10,
						fontWeight: "500",
						color: GlobalValues.darkGray,
					}}
				>
					Recently Posts
				</Text>
				<FlatList
					data={Posts}
					renderItem={({ item }) => (
						<Post
							avatar={
								"https://duyendangvietnam.net.vn/public/uploads/file1s/PV_Hoai_Nhung/T1_2023/1(43).jpg"
							}
							postImage={item.image}
							content={item.content}
							onPressToProfile={() =>
								navigation.navigate("Profile")
							}
							likeCount={item.liked.length}
							showImage={() => navigation.navigate('ShowImage')}
						/>
					)}
					scrollEnabled={false}
				/>
			</View>

			<View style={{ minHeight: 200 }}></View>
		</ScrollView>
	);
};

const Intro = ({ onPressToEdit }) => {
	return (
		<View
			style={{
				paddingHorizontal: GlobalValues.mainPadding,
				paddingTop: 16,
			}}
		>
			<Text
				style={{
					fontWeight: "600",
					fontSize: 16,
					marginLeft: 10,
					marginBottom: 8,
				}}
			>
				About me
			</Text>
			<View
				style={{
					marginBottom: 14,
					paddingHorizontal: 15,
					borderColor: GlobalValues.borderColor,
					borderWidth: 0.5,
					borderRadius: 10,
					paddingVertical: 4,
				}}
			>
				<View style={styles.infoItem}>
					<MaterialIcons
						name={MilkNguyen.male ? "male" : "female"}
						style={styles.infoIcon}
					/>
					<Text style={styles.infoText}>
						Sex: {MilkNguyen.male ? "Male" : "Female"}
					</Text>
				</View>
				<View style={styles.infoItem}>
					<MaterialIcons
						name="face"
						style={[styles.infoIcon, { fontSize: 20 }]}
					/>
					<Text style={styles.infoText}>Type: {MilkNguyen.type}</Text>
				</View>
				<View style={styles.infoItem}>
					<Ionicons name="location-outline" style={styles.infoIcon} />
					<Text style={styles.infoText}>
						Live in: {MilkNguyen.address.city},{" "}
						{MilkNguyen.address.country}
					</Text>
				</View>
				<View style={styles.infoItem}>
					<Ionicons name="language-outline" style={styles.infoIcon} />
					<Text style={styles.infoText}>
						Language: {MilkNguyen.languages.join(", ")}
					</Text>
				</View>
				<View style={[styles.infoItem, { borderBottomWidth: 0 }]}>
					<MaterialIcons name="draw" style={styles.infoIcon} />
					<Text style={styles.infoText} numberOfLines={1}>
						Hobbies: {MilkNguyen.hobbies.join(", ")}
					</Text>
				</View>
			</View>
			<TouchableOpacity
				onPress={() => onPressToEdit()}
				style={{
					backgroundColor: GlobalValues.primaryColor,
					alignItems: "center",
					paddingVertical: 12,
					borderRadius: 4,
				}}
			>
				<Text
					style={{ color: "white", fontWeight: "600", fontSize: 16 }}
				>
					Edit your profile
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	infoItem: {
		flexDirection: "row",
		alignItems: "center",
		borderBottomColor: GlobalValues.borderColor,
		borderBottomWidth: 0.5,
		height: 36,
	},
	infoIcon: {
		fontSize: 22,
		width: 26,
	},
	infoText: {},
});

export default Profile;
