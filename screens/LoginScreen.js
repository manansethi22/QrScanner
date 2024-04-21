import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
const navigation = useNavigation();

  return (
    <View style={styles.container}>

<Text style={styles.headText}>Login Your</Text>
<Text style={styles.headText}>Account</Text>


<Text style={[styles.inputText, { marginTop: 20,marginBottom:10 }]}>Email</Text>

      <View style={[styles.container1]}>
        
        <View style={styles.inputContainer}>
          <FontAwesome
            name="envelope"
            size={20}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="Ex: johndoe@gmail.com" />
        </View>
      </View>
     
<Text style={[styles.inputText, { marginTop: 20,marginBottom:10 }]}>Password</Text>

<View style={[styles.container1]}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="lock"
            size={24}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="**********" secureTextEntry={true} />
        </View>
      </View>
     
<Text style={[styles.inputText, { marginTop: 20,marginBottom:10 }]}>Access Code</Text>

<View style={[styles.container1]}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="server-security"
            size={24}
            color="black"
            style={styles.image}
          />
    
          <TextInput placeholder="999999" />
        </View>
      </View>
     
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: "#141C0D",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 85,
          marginHorizontal: 20,
        }}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={{ fontSize: 20, fontWeight: 500, color: "#FFFFFF" }}>
          Login
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: -100,
    backgroundColor: "#fff"
  },
  headText: {
    fontSize: 32,
    fontWeight: "600",
    
    marginHorizontal: 20,
    marginTop:0,
    color:'#000000'
   
  },
  headText1: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
    marginHorizontal: 20,

    marginTop: 20,
  },
  inputText:{
    fontSize: 16,
    fontWeight: "500",
    color:'#000000',
    marginHorizontal: 20,

  },
  input: {
    height: 55,
    backgroundColor: "#F8F8F8",
    borderRadius: 15,
    marginTop: 25,
    padding: 15,
  },
  container1: {
    borderWidth: 1.5,
    borderColor: "#E9E9E9",
    height: 55,
    backgroundColor: "#F8F8F8",
    borderRadius: 15,
    
    padding: 12,
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    marginRight: 15,
  },
});
