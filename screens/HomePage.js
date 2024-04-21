import { Dimensions, StyleSheet, Text, Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import React from "react";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const CardWidth = (WIDTH - 50) / 2;

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageContainer}>
      <View style={styles.Appheader}>
        <Ionicons name="menu" size={30} color="black" />

        <FontAwesome5 name="user-circle" size={30} color="black" />
      </View>

      <View style={[styles.cardRow, { marginTop: 60 }]}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Scan")}
        >
          {/* <AntDesign name="qrcode" size={100} color="black" /> */}
          <Text style={styles.cardTitle}>Stage 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Stage 2</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.cardRow, { marginTop: 20 }]}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Stage 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Stage 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  homepageContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  Appheader: {
    // paddingTop: 10,
    paddingBottom: 20,

    flexDirection: "row",
    justifyContent: "space-between",

    borderBottomWidth: 1,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 20,
    backgroundColor: "#EFEFEF",
    width: (WIDTH - 60) / 2,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardBackground1: {
    backgroundColor: "#e9e9e9",
  },
  cardBackground2: {
    backgroundColor: "#f0f0f0",
  },
});
