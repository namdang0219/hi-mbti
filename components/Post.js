import {
	View,
	Text,
	Dimensions,
	Pressable,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Image from "react-native-image-auto-height";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GlobalValues } from "../Datas/Variables";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { Skeleton } from "@rneui/themed";
import { ScreenWidth } from "@rneui/base";

const Post = ({ postImage, avatar, content, likeCount, showImage }) => {
	const navigation = useNavigation();
	return (
		<View
			style={{
				backgroundColor: "white",
				paddingTop: 14,
				marginBottom: 12,
			}}
		>
			<PostHead
				avatar={avatar}
				onPressToProfile={() => navigation.navigate("Profile")}
			/>
			<PostContent
				content={content}
				postImage={postImage}
				onPress={() => showImage()}
			/>
			<PostFeature likeCount={likeCount} />
		</View>
	);
};

const PostHead = ({ avatar, name, postAt, onPressToProfile }) => {
	const navigation = useNavigation();
	const [follow, setFollow] = useState(false);
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				paddingHorizontal: 14,
				marginBottom: 6,
			}}
		>
			<View
				style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
			>
				<TouchableOpacity
					onPress={() => navigation.navigate("Profile")}
				>
					<Image
						source={{ uri: avatar }}
						style={{ width: 30, height: 30, borderRadius: 15 }}
					/>
				</TouchableOpacity>
				<View>
					<TouchableOpacity
						onPress={() => navigation.navigate("Profile")}
					>
						<Text style={{ fontSize: 16, fontWeight: "600" }}>
							{name}Milk Nguyen
						</Text>
					</TouchableOpacity>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 4,
							marginTop: 3,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								color: GlobalValues.lightGray,
							}}
						>
							{postAt}22/03/03
						</Text>
						<MaterialIcons
							name="public"
							size={14}
							color={GlobalValues.lightGray}
						/>
					</View>
				</View>
			</View>
			<Pressable onPress={() => setFollow(!follow)}>
				<Animatable.View animation={follow ? "bounceIn" : null}>
					<SimpleLineIcons
						name={follow ? "user-following" : "user-follow"}
						size={20}
						color={
							follow
								? GlobalValues.primaryColor
								: GlobalValues.darkGray
						}
					/>
				</Animatable.View>
			</Pressable>
		</View>
	);
};

const PostContent = ({ content, postImage }) => {
	const windowWidth = Dimensions.get("window").width;
	return (
		<View>
			<Text style={{ paddingHorizontal: 16, marginBottom: 10 }}>
				{content}
			</Text>
			<Image
				source={{ uri: postImage }}
				style={{ width: windowWidth, height: "auto" }}
			/>
		</View>
	);
};

const PostFeature = ({ likeCount }) => {
	const navigation = useNavigation();
	const [like, setLike] = useState(false);
	return (
		<View
			style={{
				flexDirection: "row",
				paddingHorizontal: 20,
				paddingVertical: 14,
				justifyContent: "space-around",
			}}
		>
			<Pressable
				onPress={() => {
					setLike(!like);
				}}
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 4,
					width: 70,
				}}
			>
				<Animatable.View animation={like ? "bounceIn" : null}>
					<Entypo
						name={like ? "heart" : "heart-outlined"}
						size={24}
						color={like ? "red" : "black"}
					/>
				</Animatable.View>
				<Text style={{ fontSize: 16 }}>
					{like ? likeCount + 1 : likeCount} <Text>Like</Text>
				</Text>
			</Pressable>
			<Pressable
				style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
				onPress={() => navigation.navigate("PostDetail")}
			>
				<MaterialCommunityIcons name="comment-outline" size={22} />
				<Text style={{ fontSize: 16 }}>Comment</Text>
			</Pressable>
			<Pressable
				style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
			>
				<Feather name="download" size={24} />
				<Text style={{ fontSize: 16 }}>Save</Text>
			</Pressable>
		</View>
	);
};

export const PostSkeleton = () => {
	return (
		<View style={{backgroundColor: 'white', paddingTop: 10}}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					paddingHorizontal: 14,
					marginBottom: 10,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						gap: 8,
						alignItems: "center",
					}}
				>
					<Skeleton
						animation="pulse"
						width={30}
						height={30}
						circle={true}
					/>
					<View>
					<Skeleton animation="pulse" width={120} height={26} />
						
					</View>
				</View>
				<Skeleton animation="pulse" width={26} height={26} />
			</View>

			<View style={{paddingHorizontal: 14, marginBottom: 16}}>
				<Skeleton animation="pulse" height={26} width={200} />
			</View>
			<Skeleton animation="pulse" width={ScreenWidth} height={ScreenWidth} />
			<PostFeature />
		</View>
	);
};

export default Post;
