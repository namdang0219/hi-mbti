import { View, Text, ScrollView, FlatList, Alert } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Posts } from "../Datas/Posts";
import { GlobalValues } from "../Datas/Variables";
import { useScrollToTop } from "@react-navigation/native";
import PostCreate from "../components/PostCreate";
import Post, { PostSkeleton } from "../components/Post";


const Home = ({ navigation }) => {
	const ref = useRef(null);
	useScrollToTop(ref);
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 600);
	}, [])
	return (
		<ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			style={{ backgroundColor: "white", flex: 1 }}
		>
			<PostCreate
				onPressToProfile={() => navigation.navigate("Profile")}
				onPressCreatePost={() => navigation.navigate('AddPost')}
			/>
			<View style={{ backgroundColor: GlobalValues.primaryBackground }}>
				<View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
					<Text
						style={{
							fontWeight: "600",
							fontSize: 14,
							color: GlobalValues.darkGray,
						}}
					>
						Recently Posts
					</Text>
				</View>
				{loading ? <PostSkeleton /> : <FlatList
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
							showImage={() => navigation.navigate("ShowImage")}
						/>
					)}
					scrollEnabled={false}
				/>}
				
			  
			</View>
		</ScrollView>
	);
};

export default Home;
