import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddPost from '../../Screens/AddPost'
import TabWrapper from './TabWrapper'

const Stack = createStackNavigator()

const Modal = () => {
  return (
    <Stack.Navigator initialRouteName='TabWrapper' screenOptions={{presentation: 'modal', headerShown: false}}>
      <Stack.Screen name='TabWrapper' component={TabWrapper} />
      <Stack.Screen name='AddPost' component={AddPost} />
    </Stack.Navigator>
  )
}

export default Modal;