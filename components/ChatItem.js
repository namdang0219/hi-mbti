import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { MilkNguyen } from "../Datas/MilkNguyen";
import { GlobalValues } from "../Datas/Variables";
import { useNavigation } from "@react-navigation/native";
import { Skeleton } from '@rneui/themed';


const screenWidth = Dimensions.get("screen").width;

const ChatItem = ({avatar, displayName}) => {
	const navigation = useNavigation()
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ flexDirection: "row", paddingHorizontal: 14, gap: 12, marginBottom: 20 }}>
			<Image
				source={{ uri: avatar }}
				style={{ width: 58, height: 58, borderRadius: 100 }}
			/>
			<View>
				<View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
          <Text
            style={{ fontSize: 16, fontWeight: "600", marginBottom: 2 }}
          >
            {displayName}
          </Text>
          <Text style={{color: GlobalValues.lightGray, fontSize: 12}}>15 minutes</Text>
        </View>
				<Text
					numberOfLines={2}
					style={{
            lineHeight: 18,
						maxWidth:
							screenWidth - GlobalValues.mainPadding * 2 - 12 - 58,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quos, quae?
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ChatItem;
