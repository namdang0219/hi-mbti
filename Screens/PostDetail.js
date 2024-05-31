import { View, Text, ScrollView, Dimensions, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { GlobalValues } from "../Datas/Variables";
import Image from "react-native-image-auto-height";
import { Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";

const PostDetail = () => {
	const screenWidth = Dimensions.get("screen").width;
	const [like, setLike] = useState(false);
	const likeCount = 5;
	const navigation = useNavigation();
  const [follow, setFollow] = useState(false);
	return (
		<ScrollView style={{ flex: 1, backgroundColor: "white" }}>
			<View
				style={{
					paddingBottom: 8,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: 'space-between',
					paddingHorizontal: GlobalValues.mainPadding,
					paddingTop: 8,
				}}
			>
				<View style={{flexDirection: "row",
					alignItems: "center",gap: 10, paddingHorizontal: 0}}>
          <Image
            source={{
              uri: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/12/13/1279496/Son-Tung-2-R.jpeg",
            }}
            style={{ width: 32, height: 32, borderRadius: 16 }}
          />
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Son Tung MTP
            </Text>
            <Text style={{ color: GlobalValues.darkGray }}>
              10 hours ago
            </Text>
          </View>
        </View>
        <Pressable onPress={() => setFollow(!follow)}>
				<Animatable.View animation={follow ? "bounceIn" : null} style={{marginRight: 10}}>
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
			<Text
				style={{
					paddingHorizontal: GlobalValues.mainPadding,
					marginBottom: 14,
          lineHeight: 20
				}}
			>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Veritatis, obcaecati?
			</Text>
			<Image
				source={{
					uri: "https://vnn-imgs-f.vgcloud.vn/2020/03/03/14/son-tung-m-tp-khien-fan-dung-ngoi-khong-yen-voi-doan-clip-15-giay-2.jpg",
				}}
				style={{ width: screenWidth, height: "auto" }}
			/>
			<View
				style={{
					flexDirection: "row",
					paddingHorizontal: 20,
					paddingVertical: 14,
					justifyContent: "space-around",
          borderBottomColor: GlobalValues.darkGray,
          borderBottomWidth: 0.25
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
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 4,
					}}
					onPress={() => navigation.navigate("PostDetail")}
				>
					<MaterialCommunityIcons name="comment-outline" size={22} />
					<Text style={{ fontSize: 16 }}>Comment</Text>
				</Pressable>
				<Pressable
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 4,
					}}
				>
					<Feather name="download" size={24} />
					<Text style={{ fontSize: 16 }}>Save</Text>
				</Pressable>
			</View>
      <CommentWrap />
		</ScrollView>
	);
};

const CommentWrap = () => {
  return (
    <View style={{paddingHorizontal: GlobalValues.mainPadding, marginTop: 16}}>
      <Text>Recently Comments</Text>
      <View style={{marginTop: 16}}>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </View>
    </View>
  )
}

const CommentItem = () => {
  const screenWidth = Dimensions.get("screen").width;
  const [likeCount, setLikeCount] = useState(0)
  const [liked, setLiked] = useState(false)
  return (
    <View style={{flexDirection: "row", gap: 10, marginBottom: 12}}>
      <Image style={{width: 30, height: 30, borderRadius: 15}} source={{uri: 'https://afamilycdn.com/k:thumb_w/600/DDJSMHQdIlnpxe143umBhlHK7YLPl/Image/2015/11/SonTung/SonTung2-ba325/son-tung-mtp.JPG'}} />
      <View>
        <View style={{backgroundColor:'#e5e5e5', marginBottom: 4, width: screenWidth - GlobalValues.mainPadding * 2 - 40 , paddingHorizontal: 8, paddingVertical: 10, borderRadius: 5}}>
          <Text style={{lineHeight: 20}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, obcaecati.</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 8}}>
          <TouchableOpacity onPress={() => {setLiked(!liked); liked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1)}}>
            <Text style={{color: `${liked ? 'red' : "#007AFF"}`}}>{likeCount == 0 ? null : likeCount} Like</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Report complete !')}>
            <Text style={{color: "#007AFF"}}>Report</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 14, color: GlobalValues.lightGray}}>10 hours ago</Text>
        </View>
      </View>
    </View>
  )
}

export default PostDetail;
