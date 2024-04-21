import React, { useState, useEffect, useMemo, useRef } from "react";
import { StyleSheet, Text,  View, Button , TextInput,} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import QrScreen from "./screens/QrScreen";
import LoginScreen from "./screens/LoginScreen";

import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import HomePage from "./screens/HomePage";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./AppNavigator";


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
       
       <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
      {/* <QrScreen /> */}
      {/* <LoginScreen/> */}
      {/* <HomePage/> */}
      <AppNavigator/>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    width: "100%",
    aspectRatio: 0.5,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: -350,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
