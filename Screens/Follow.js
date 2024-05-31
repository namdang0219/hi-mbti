import { View, Text, FlatList } from "react-native";
import React from "react";
import { Posts } from "../Datas/Posts";
import Post from "../components/Post";

const Follow = () => {
	return (
		<FlatList
			data={Posts}
			renderItem={({ item }) => (
				<Post
					avatar={
						"https://duyendangvietnam.net.vn/public/uploads/file1s/PV_Hoai_Nhung/T1_2023/1(43).jpg"
					}
					postImage={item.image}
					content={item.content}
					likeCount={item.liked.length}
					showImage={() => navigation.navigate("ShowImage")}
				/>
			)}
      scrollEnabled={true}
		/>
	);
};

export default Follow;
