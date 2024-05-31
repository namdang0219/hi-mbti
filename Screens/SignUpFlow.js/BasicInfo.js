import { View, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { Input, CheckBox } from "@rneui/themed";
import { Button } from "@rneui/themed";
import Feather from "@expo/vector-icons/Feather";
import { GlobalValues } from "../../Datas/Variables";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";

const BasicInfo = () => {
  const navigation = useNavigation()
	const [check, setCheck] = useState(false);
	const [passwordHidden, setPasswordHidden] = useState(true);
	const [err, setErr] = useState(false);
	const [image, setImage] = useState(null);
	const [blob, setBlob] = useState(null);

	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const currentUser = useContext(AuthContext)
	const [isLoading, setIsLoading] = useState(false)

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});
		// console.log(result);
		if (!result.canceled) {
			setImage(result.assets[0].uri);
			const response = await fetch(result.assets[0].uri);
			const blobConverse = await response.blob();
      setBlob(blobConverse)

		}
	};

	const handleSubmit = async () => {
		try {
			//Create user
			setIsLoading(true)
			const res = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			// console.log("user created", res.user);

			//Create a unique image name
			const date = new Date().getTime();
			const storageRef = ref(storage, `${displayName + date}`);

			await uploadBytesResumable(storageRef, blob).then(() => {
				getDownloadURL(storageRef).then(async (downloadURL) => {
					try {
						//Update profile
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						});
						//create user on firestore
						await setDoc(doc(db, "users", res.user.uid), {
							uid: res.user.uid,
							displayName,
							email,
							photoURL: downloadURL,
						});

						//create empty user chats on firestore
						await setDoc(doc(db, "userChats", res.user.uid), {});
					} catch (err) {
						console.log(err);
						setErr(true);
						// setLoading(false);
						setIsLoading(false)
					}
					navigation.navigate('Modal')
				});
			});
		} catch (err) {
			setErr(true);
			console.log(err);
			// setLoading(false);
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					paddingTop: 30,
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				<Pressable onPress={pickImage}>
					{image ? (
						<Image
							source={{
								uri: image,
							}}
							style={{
								width: 140,
								height: 140,
								borderRadius: 90,
								alignSelf: "center",
							}}
						/>
					) : (
						<Image
							source={{
								uri: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais",
							}}
							style={{
								width: 140,
								height: 140,
								borderRadius: 90,
								alignSelf: "center",
							}}
						/>
					)}
				</Pressable>
			</View>
			<View style={{ paddingHorizontal: 20, paddingTop: 24, flex: 1 }}>
				<InputTemp
					label={"Full Name"}
					placeholder={"Enter your name..."}
					secureTextEntry={false}
					onChangeText={(newName) => setDisplayName(newName)}
					defaultValue={displayName}
					errorMessage={err && "Something went wrong"}
				/>
				<InputTemp
					label={"Email"}
					placeholder={"Enter your email..."}
					secureTextEntry={false}
					onChangeText={(newEmail) => setEmail(newEmail)}
					defaultValue={email}
					errorMessage={err && "Something went wrong"}
				/>
				<InputTemp
					label={"Password"}
					placeholder={"Enter your password..."}
					secureTextEntry={passwordHidden ? true : false}
					onChangeText={(newPassword) => setPassword(newPassword)}
					defaultValue={password}
					rightIcon={
						<Pressable
							onPress={() => setPasswordHidden(!passwordHidden)}
						>
							<Feather
								color={GlobalValues.lightGray}
								name={passwordHidden ? "eye-off" : "eye"}
								size={18}
							/>
						</Pressable>
					}
					errorMessage={err && "Something went wrong"}
				/>
				<CheckBox
					checked={check}
					onIconPress={() => setCheck(!check)}
					title={"I accept all terms of HiMBTI."}
					textStyle={{ fontSize: 16, fontWeight: "400" }}
					containerStyle={{
						backgroundColor: "transparent",
						padding: 0,
						margin: 0,
					}}
				/>
			</View>
			<View
				style={{
					marginBottom: 30,
					paddingHorizontal: 30,
					paddingBottom: 20,
				}}
			>
				<Button
					loading={isLoading}
					
					titleStyle={{ fontSize: 22, fontWeight: "600" }}
					title={"Create Account"}
					buttonStyle={{
						backgroundColor: GlobalValues.primaryColor,
						padding: 10,
						borderRadius: 8,
					}}
					onPress={handleSubmit}
				/>
			</View>
		</View>
	);
};

const InputTemp = ({
	placeholder,
	label,
	onChangeText,
	defaultValue,
	secureTextEntry,
	rightIcon,
	errorMessage,
}) => {
	return (
		<Input
			labelStyle={{
				color: "black",
				fontWeight: "500",
				fontSize: 18,
				color: GlobalValues.darkGray,
				marginBottom: 6,
			}}
			label={label}
			placeholder={placeholder}
			inputContainerStyle={{
				borderWidth: 0.5,
				borderColor: GlobalValues.borderColor,
				borderRadius: 5,
				paddingHorizontal: 12,
				paddingVertical: 4,
			}}
			onChangeText={onChangeText}
			autoComplete="off"
			autoCorrect={false}
			defaultValue={defaultValue}
			secureTextEntry={secureTextEntry}
			rightIcon={rightIcon}
			errorMessage={errorMessage}
		/>
	);
};

export default BasicInfo;
