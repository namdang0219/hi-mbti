import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { ScreenWidth } from "@rneui/base";
import { GlobalValues } from "../Datas/Variables";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
	return (
		<View style={{ backgroundColor: "white", flex: 1, paddingTop: 20 }}>
			<FlatList data={notiList} renderItem={({item}) => <NotiItem notiContent={item} />}/>
		</View>
	);
};

const NotiItem = ({notiContent}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('PostDetail')} style={{flexDirection: 'row', gap: 14, paddingHorizontal: GlobalValues.mainPadding, marginBottom: 20}}>
      <Image style={{width: 54, height: 54, borderRadius: 27}} source={{uri: 'https://cdn.tuoitre.vn/thumb_w/640/471584752817336320/2023/1/5/khoi-tai-san-cua-ca-si-son-tung-mtp-do-so-co-nao-091145-16729038226001862283060.jpg'}}  />
      <Text numberOfLines={3} style={{fontSize: 16, width: ScreenWidth - 28 - 54 - 14}}>{notiContent}</Text>
    </TouchableOpacity>
  )
}

const notiList = [
	"How arr you bla bla arr you bla bla arr you bla bla",
	"How to do your homework without at home How to do your homework without at home",
	"How arr you bla bla",
	"How to do your homework without at home",
	"How arr you bla bla",
	"How to do your homework without at home",
];

export default Notification;
