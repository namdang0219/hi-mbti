import {
	View,
	Text,
	Image,
	ScrollView,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { GlobalValues } from "../Datas/Variables";
import { MilkNguyen } from "../Datas/MilkNguyen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";

const Menu = ({navigation}) => {
	const currentUser = useContext(AuthContext)
	return (
		<View style={{ flex: 1, backgroundColor: "white", paddingTop: 16 }}>
			<View style={{flex: 1}}>
				<View
					style={{
						flexDirection: "row",
						gap: 20,
						marginBottom: 20,
						paddingHorizontal: GlobalValues.mainPadding,
					}}
				>
					<TouchableOpacity
						onPress={() => null}
						style={{
							backgroundColor: GlobalValues.primaryColor,
							flex: 1,
							height: 120,
							borderRadius: 12,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								fontSize: 50,
								color: "white",
								fontWeight: "500",
							}}
						>
							12
						</Text>
						<Text
							style={{
								color: "white",
								fontWeight: "600",
								fontSize: 16,
							}}
						>
							Follower
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => null}
						style={{
							backgroundColor: GlobalValues.primaryColor,
							flex: 1,
							height: 120,
							borderRadius: 12,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								fontSize: 50,
								color: "white",
								fontWeight: "500",
							}}
						>
							12
						</Text>
						<Text
							style={{
								color: "white",
								fontWeight: "600",
								fontSize: 16,
							}}
						>
							Following
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("Profile")}
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 8,
						paddingHorizontal: GlobalValues.mainPadding,
					}}
				>
					<Image
						source={{ uri: currentUser?.photoURL }}
						style={{ width: 30, height: 30, borderRadius: 50 }}
					/>
					<Text style={{ fontSize: 16, fontWeight: "500" }}>
						{currentUser?.displayName}
					</Text>
				</TouchableOpacity>
				<RecentlyChats />
				<MenuBlock />
			</View>
			<View style={{paddingHorizontal: GlobalValues.mainPadding, paddingBottom: 20}}>
				<Button
					title={"LOG OUT"}
					buttonStyle={{ backgroundColor: GlobalValues.activeGray, height: 50 }}
					titleStyle={{fontSize: 20, fontWeight: '500', color: GlobalValues.darkGray}}
					onPress={() => {
						navigation.navigate('LoginStack')
						signOut(auth)
						}}
				/>
			</View>
		</View>
	);
};

const RecentlyChats = () => {
	return (
		<View style={{ marginTop: 14 }}>
			<View
				style={{
					marginBottom: 14,
					flexDirection: "row",
					alignItems: "center",
					gap: 4,
				}}
			>
				<Text
					style={{
						fontWeight: "500",
						fontSize: 15,
						color: GlobalValues.darkGray,
						paddingLeft: GlobalValues.mainPadding,
					}}
				>
					Recently chats
				</Text>
				<MaterialIcons
					name="history"
					size={16}
					color={GlobalValues.darkGray}
					style={{ marginTop: 2 }}
				/>
			</View>
			<ScrollView
				style={{
					marginBottom: 20,
					paddingLeft: GlobalValues.mainPadding,
				}}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				<FlatList
					data={MilkNguyen.chats}
					scrollEnabled={false}
					horizontal={true}
					renderItem={({ item }) => (
						<ChatElement avatar={item.avatar} name={item.name} />
					)}
				/>
			</ScrollView>
		</View>
	);
};

const ChatElement = () => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Chat")}
			activeOpacity={GlobalValues.defaultActiveOpacity}
			style={{ alignItems: "center", width: 80 }}
		>
			<Image
				source={{ uri: MilkNguyen.avatar }}
				style={{ width: 54, height: 54, borderRadius: 27 }}
			/>
			<Text
				numberOfLines={1}
				style={{ marginTop: 4, maxWidth: 80, fontSize: 12 }}
			>
				{MilkNguyen.name}
			</Text>
		</TouchableOpacity>
	);
};

const MenuBlock = () => {
	return (
		<View style={{ paddingHorizontal: 24, flexDirection: "row" }}>
			<View style={styles.menuBlock}>
				<TouchableOpacity onPress={() => null} style={styles.menuItem}>
					<MaterialIcons
						name="groups"
						size={22}
						style={styles.menuItemIcon}
					/>
					<Text style={styles.menuItemText}>Groups</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => null} style={styles.menuItem}>
					<MaterialIcons
						name="block"
						size={22}
						style={styles.menuItemIcon}
					/>
					<Text style={styles.menuItemText}>Blocked</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => null} style={styles.menuItem}>
					<MaterialIcons
						name="settings"
						size={22}
						style={styles.menuItemIcon}
					/>
					<Text style={styles.menuItemText}>Setting</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => null} style={styles.menuItem}>
					<MaterialIcons
						name="privacy-tip"
						size={22}
						style={styles.menuItemIcon}
					/>
					<Text style={styles.menuItemText}>Privacy</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => null} style={styles.menuItem}>
					<MaterialIcons
						name="help-outline"
						size={22}
						style={styles.menuItemIcon}
					/>
					<Text style={styles.menuItemText}>Help</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.menuBlock}>
				<TouchableOpacity onPress={() => null} style={styles.menuItem}>
					<FontAwesome5
						name="user-friends"
						size={16}
						style={styles.menuItemIcon}
					/>
					<Text style={styles.menuItemText}>Friends</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => null} style={styles.menuItem}>
					<MaterialIcons
						name="calendar-month"
						size={22}
						style={styles.menuItemIcon}
					/>
					<Text style={styles.menuItemText}>Calendar</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => null} style={styles.menuItem}>
					<MaterialIcons
						name="info-outline"
						size={22}
						style={styles.menuItemIcon}
					/>
					<Text style={styles.menuItemText}>App Infomation</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => null} style={styles.menuItem}>
					<MaterialIcons
						name="feedback"
						size={22}
						style={styles.menuItemIcon}
					/>
					<Text style={styles.menuItemText}>Feedback</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => null} style={styles.menuItem}>
					<MaterialIcons
						name="language"
						size={22}
						style={styles.menuItemIcon}
					/>
					<Text style={styles.menuItemText}>Language</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	menuBlock: {
		flex: 1,
	},
	menuItem: {
		flexDirection: "row",
		gap: 4,
		alignItems: "center",
		marginBottom: 10,
		height: 32,
	},
	menuItemText: {
		fontSize: 16,
		fontWeight: "500",
	},
	menuItemIcon: {
		width: 25,
	},
});

export default Menu;
