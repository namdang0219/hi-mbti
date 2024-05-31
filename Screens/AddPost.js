import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { GlobalValues } from '../Datas/Variables'
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from 'react-native';

const AddPost = () => {
  const [paddingBottom, setPaddingBottom] = useState(0)
  return (
    <KeyboardAvoidingView style={{backgroundColor: 'white', flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{flexDirection: 'row', marginBottom: 16, paddingHorizontal: GlobalValues.mainPadding, gap: 10, alignItems: 'center', paddingTop: 14}}>
        <Image style={{width: 32, height: 32, borderRadius: 16}} source={{uri: 'https://vcdn1-giaitri.vnecdn.net/2021/01/27/mtptung2-1611762083-2801-1611762227.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=6xnMEsZXHKurpgmEg6R4BQ'}} />
        <Text style={{fontSize: 18, fontWeight: '500'}}>Son Tung Mtp</Text>
      </View>
      <ScrollView style={{paddingHorizontal: GlobalValues.mainPadding, flexGrow: 1}}>
        <TextInput autoCorrect={false} onFocus={() => setPaddingBottom(70)} onBlur={() => setPaddingBottom(0)} autoFocus={true} style={{fontSize: 16}} placeholder="Let's share something..."  />
      </ScrollView>
      <SafeAreaView>
          <View style={{paddingVertical: 10, flexDirection: 'row', paddingHorizontal: 30, justifyContent: 'space-between', alignItems: 'center',paddingBottom: paddingBottom}}>
            <View style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
              <TouchableOpacity>
                <FontAwesome6 name='location-dot' size={26} color='red' />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome6 name='images' size={28} color='#00DACE' />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name='emoji-happy' size={28} color='#EDD100' />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              {/* <Text style={{fontSize: 18, color: GlobalValues.primaryColor}}>Share</Text> */}
              <Ionicons name='send' size={34} color={GlobalValues.primaryColor} />
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default AddPost