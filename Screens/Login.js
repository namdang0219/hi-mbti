import {
	View,
	Text,
	SafeAreaView,
	Pressable,
	Alert,
	TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { Input } from "@rneui/themed";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Button } from "@rneui/themed";
import * as Animatable from "react-native-animatable";
import { GlobalValues } from "../Datas/Variables";
import { AuthContext } from "../contexts/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const logoAnimate = {
	0: {
		top: 360,
	},
	0.5: {
		top: 360,
	},
	1: {
		top: 140,
	},
};

const Login = ({ navigation }) => {
	const [err, setErr] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false)

	const handleLogin = async () => {
		try {
			setIsLoading(true)
			await signInWithEmailAndPassword(auth, email, password);
			navigation.navigate("Modal");
			setEmail("");
			setPassword("");
			setErr(false)
			setIsLoading(false)
		} catch (err) {
			setErr(true);
			console.log(err);
		}
	};

	return (
		<View style={{ backgroundColor: GlobalValues.primaryColor, flex: 1 }}>
			<SafeAreaView style={{ flex: 1, position: "relative" }}>
				<Animatable.Image
					animation={logoAnimate}
					duration={2800}
					easing={"ease-in-out-cubic"}
					source={require("../assets/logo_text.png")}
					style={{
						width: 200,
						height: 100,
						resizeMode: "contain",
						top: 140,
						alignSelf: "center",
						position: "absolute",
					}}
				/>
				<View
					style={{
						paddingHorizontal: 36,
						justifyContent: "flex-end",
						flex: 1,
						paddingBottom: 50,
					}}
				>
					<Animatable.Text
						animation={"fadeInUp"}
						delay={1800}
						style={{
							color: "white",
							fontSize: 26,
							fontWeight: "700",
							textAlign: "left",
							paddingLeft: 10,
							marginBottom: 18,
						}}
					>
						👋 Hi, WELCOME...{" "}
					</Animatable.Text>
					<Animatable.View animation={"fadeInUp"} delay={2200}>
						<Input
							onChangeText={(text) => {setEmail(text); setErr(false)}}
							defaultValue={email}
							placeholder="Email..."
							label="Email:"
							labelStyle={{
								color: "white",
								marginBottom: 4,
								fontSize: 18,
							}}
							placeholderTextColor={GlobalValues.lightGray}
							inputStyle={{
								backgroundColor: "white",
								borderRadius: 5,
								paddingHorizontal: 12,
								fontSize: 14,
							}}
							errorMessage={err ? "Something went wrong" : null}
							inputContainerStyle={{ borderBottomWidth: 0 }}
							// errorMessage='Your email is incorrect!'
							rightIcon={
								<Pressable onPress={() => setEmail('')}>
									<FontAwesome6
										color={GlobalValues.lightGray}
										name="xmark"
									/>
								</Pressable>
							}
							rightIconContainerStyle={{
								position: "absolute",
								right: 8,
							}}
						/>
						<Input
							onChangeText={(text) => {setPassword(text); setErr(false)}}
							defaultValue={password}
							placeholder="Password..."
							label="Password:"
							labelStyle={{
								color: "white",
								marginBottom: 4,
								fontSize: 18,
							}}
							placeholderTextColor={GlobalValues.lightGray}
							inputStyle={{
								backgroundColor: "white",
								borderRadius: 5,
								paddingHorizontal: 12,
								fontSize: 14,
							}}
							errorMessage={err ? "Something went wrong" : null}
							inputContainerStyle={{ borderBottomWidth: 0 }}
							// errorMessage='Your password is incorrect!'
							rightIcon={
								<Pressable onPress={() => setPassword('')}>
									<FontAwesome6
										color={GlobalValues.lightGray}
										name="xmark"
									/>
								</Pressable>
							}
							rightIconContainerStyle={{
								position: "absolute",
								right: 8,
							}}
							secureTextEntry
						/>
						<View style={{ paddingHorizontal: 10 }}>
							<Button
								title="Login"
								titleStyle={{ fontWeight: "600" }}
								uppercase={true}
								buttonStyle={{ paddingVertical: 10 }}
								containerStyle={{ borderRadius: 5 }}
								onPress={handleLogin}
								loading={isLoading ? true : false}
							/>
						</View>
						<Text
							style={{
								textAlign: "center",
								color: "white",
								fontSize: 18,
								marginTop: 6,
							}}
						>
							or
						</Text>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("IntroduceStack")
							}
						>
							<Text
								style={{
									textAlign: "center",
									color: "white",
									fontSize: 16,
									marginTop: 6,
									fontWeight: "600",
								}}
							>
								Create an Acount
							</Text>
						</TouchableOpacity>
					</Animatable.View>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Login;
