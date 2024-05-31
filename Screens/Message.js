import { View, TextInput, ScrollView, Text } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { GlobalValues } from "../Datas/Variables";
import { Tab, TabView } from "@rneui/themed";
import ChatItem from "../components/ChatItem";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { set } from "firebase/database";
import { AuthContext } from "../contexts/AuthContext";

const Message = () => {
	const inputRef = useRef(null);
	const [index, setIndex] = useState(0);

	const [userName, setUserName] = useState("");
	const [user, setUser] = useState(null);

	const [err, setErr] = useState(false);

	const handleSearch = async (userName) => {
		const q = query(
			collection(db, "users"),
			where("displayName", "==", userName)
		);
		try {
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				setUser(doc.data());
			});
		} catch (error) {
			setErr(true);
			console.log(error)
		}
	};

	return (
		<View
			style={{
				backgroundColor: "white",
				flex: 1,
				paddingTop: 8,
			}}
		>
			<View style={{ paddingHorizontal: 14 }}>
				<TextInput
					onChangeText={(text) => handleSearch(text)}
					// onSubmitEditing={handleSearch}
					autoCorrect={false}
					autoComplete="off"
					placeholder="Seach chat..."
					style={{
						backgroundColor: GlobalValues.inputBackground,
						paddingHorizontal: 14,
						paddingVertical: 10,
						borderRadius: 8,
						marginBottom: 14,
					}}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<Tab
					value={index}
					onChange={(e) => setIndex(e)}
					disableIndicator={true}
					variant="primary"
					style={{
						backgroundColor: "white",
						gap: 12,
						marginBottom: 12,
						paddingHorizontal: 14,
					}}
				>
					<Tab.Item
						title="Messages"
						titleStyle={{
							fontSize: 12,
							fontWeight: "500",
							color: "black",
						}}
						containerStyle={(active) => ({
							borderRadius: 50,
							backgroundColor: active
								? GlobalValues.activeGray
								: GlobalValues.inputBackground,
							paddingVertical: 4,
						})}
						buttonStyle={{ padding: 0 }}
						dense={true}
					/>
					<Tab.Item
						title="Requests"
						titleStyle={{
							fontSize: 12,
							fontWeight: "500",
							color: "black",
						}}
						containerStyle={(active) => ({
							borderRadius: 50,
							backgroundColor: active
								? GlobalValues.activeGray
								: GlobalValues.inputBackground,
							paddingVertical: 4,
						})}
						buttonStyle={{ padding: 0 }}
						dense={true}
					/>
					<Tab.Item
						title="Blocked"
						titleStyle={{
							fontSize: 12,
							fontWeight: "500",
							color: "black",
						}}
						containerStyle={(active) => ({
							borderRadius: 50,
							backgroundColor: active
								? GlobalValues.activeGray
								: GlobalValues.inputBackground,
							paddingVertical: 4,
						})}
						buttonStyle={{ padding: 0 }}
						dense={true}
					/>
				</Tab>

				<TabView
					value={index}
					onChange={setIndex}
					animationType="spring"
				>
					<TabView.Item style={{ flex: 1, backgroundColor: "white" }}>
						<MessagesTab user={user} err={err} />
					</TabView.Item>
					<TabView.Item style={{ flex: 1, backgroundColor: "white" }}>
						<RequestTab />
					</TabView.Item>
					<TabView.Item style={{ flex: 1, backgroundColor: "white" }}>
						<BlockedTab />
					</TabView.Item>
				</TabView>
			</View>
		</View>
	);
};

const MessagesTab = ({ user, err }) => {
	const currentUser = useContext(AuthContext)
	return (
		<ScrollView style={{ paddingTop: 12 }}>
			{user && (
				<ChatItem
					avatar={user?.photoURL}
					displayName={user.displayName}
				/>
			)}
			<ChatItem avatar={currentUser.photoURL} />
			<ChatItem avatar={currentUser.photoURL} />
			<ChatItem avatar={currentUser.photoURL} />
		</ScrollView>
	);
};

const RequestTab = () => {
	const currentUser = useContext(AuthContext)
	return (
		<ScrollView style={{ paddingTop: 12 }}>
			<ChatItem avatar={currentUser.photoURL} />
			<ChatItem avatar={currentUser.photoURL} />
			<ChatItem avatar={currentUser.photoURL} />
		</ScrollView>
	);
};

const BlockedTab = () => {
	const currentUser = useContext(AuthContext)
	return (
		<ScrollView style={{ paddingTop: 12 }}>
			<ChatItem avatar={currentUser.photoURL} />
			<ChatItem avatar={currentUser.photoURL} />
			<ChatItem avatar={currentUser.photoURL} />
		</ScrollView>
	);
};

export default Message;
