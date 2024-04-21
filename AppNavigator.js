import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './screens/LoginScreen';
import HomePage from './screens/HomePage';
import QrScreen from './screens/QrScreen';

const Stack = createStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='HomePage' component={HomePage}/>
            <Stack.Screen name='Scan' component={QrScreen}/>
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})