import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { validationMessages } from "../formValidations/ValidationMessages";

const LoginScreen = () => {
  const navigation = useNavigation();

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email(validationMessages.email.invalid)
      .required(validationMessages.email.required),
    password: Yup.string()
      .min(8, validationMessages.password.minLength)
      .required(validationMessages.password.required),
    accessCode: Yup.string()
      .min(6, validationMessages.accessCode.minLength)
      .required(validationMessages.accessCode.required),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Login Your</Text>
      <Text style={styles.headText}>Account</Text>

      <Formik
        initialValues={{ email: "", password: "", accessCode: "" }}
        validationSchema={LoginFormSchema}
        onSubmit={() => navigation.navigate("HomePage")}
      >
        {({
          handleChange,
          setFieldTouched,
          isValid,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <Text
              style={[styles.inputText, { marginTop: 20, marginBottom: 10 }]}
            >
              Email
            </Text>

            <View
              style={[
                styles.container1,
                touched.email &&
                  errors.email && {
                    borderWidth: 1.5,
                    borderColor: "#F54949",
                  },
              ]}
            >
              <View style={styles.inputContainer}>
                <FontAwesome
                  name="envelope"
                  size={20}
                  color="black"
                  style={styles.image}
                />
                <TextInput
                  placeholder="Ex: johndoe@gmail.com"
                  value={values.email}
                  onChangeText={handleChange("email")}
                />
              </View>
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <Text
              style={[styles.inputText, { marginTop: 20, marginBottom: 10 }]}
            >
              Password
            </Text>

            <View
              style={[
                styles.container1,
                touched.password &&
                  errors.password && {
                    borderWidth: 1.5,
                    borderColor: "#F54949",
                  },
              ]}
            >
              <View style={styles.inputContainer}>
                <FontAwesome
                  name="lock"
                  size={24}
                  color="black"
                  style={styles.image}
                />
                <TextInput
                  placeholder="**********"
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange("password")}
                />
              </View>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <Text
              style={[styles.inputText, { marginTop: 20, marginBottom: 10 }]}
            >
              Access Code
            </Text>

            <View
              style={[
                styles.container1,
                touched.accessCode &&
                  errors.accessCode && {
                    borderWidth: 1.5,
                    borderColor: "#F54949",
                  },
              ]}
            >
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons
                  name="server-security"
                  size={24}
                  color="black"
                  style={styles.image}
                />

                <TextInput
                  placeholder="999999"
                  value={values.accessCode}
                  onChangeText={handleChange("accessCode")}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            {touched.accessCode && errors.accessCode && (
              <Text style={styles.errorText}>{errors.accessCode}</Text>
            )}

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
              // onPress={() => navigation.navigate("HomePage")}
              onPress={handleSubmit}
            >
              <Text style={{ fontSize: 20, fontWeight: 500, color: "#FFFFFF" }}>
                Login
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: -100,
    backgroundColor: "#fff",
  },
  headText: {
    fontSize: 32,
    fontWeight: "600",

    marginHorizontal: 20,
    marginTop: 0,
    color: "#000000",
  },
  headText1: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
    marginHorizontal: 20,

    marginTop: 20,
  },
  inputText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
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
  errorText: {
    color: "#F54949",
    marginHorizontal: 20,
    marginBottom: -10,
  },
});
