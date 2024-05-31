import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BasicInfo from '../../Screens/SignUpFlow.js/BasicInfo'

const Stack = createStackNavigator()

const IntroduceStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='BasicInfo' component={BasicInfo} />
    </Stack.Navigator>
  )
}

export default IntroduceStack