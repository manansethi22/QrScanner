import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";


export default function QrScreen() {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const snapPoints = useMemo(() => ["30%"], []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    const playSuccessSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/success.mp3")
      );
      await sound.playAsync();
    };

    if (showSuccessMessage) {
      playSuccessSound();
    }
  }, [showSuccessMessage]);


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={28} color="black" />
      </TouchableOpacity>
      <Camera
        style={StyleSheet.absoluteFillObject}
        ratio="16:9"
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        style={styles.sheetContainer}
      >
        <View style={styles.bottomContainer}>
          <Text style={styles.headText3}>Stage 1</Text>
          
          {scannedData ? (
            <View style={styles.bottomContainer1}>
              <Text style={styles.scannedDataText}>
                Scanned Data: {scannedData}
              </Text>
              {showSuccessMessage && (
            <Text style={styles.successMessage}>Scanned Successfully!!</Text>
          )}
              <TouchableOpacity
                style={styles.button}
                onPress={() => setScanned(false)}
              >
                <Text style={styles.buttonText}>Scan Again</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.bottomContainer1}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setScanned(false)}
              >
                <Text style={styles.buttonText}>Scan QR</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bottomContainer: {
    flex: 1,
  },
  bottomContainer1: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  headText3: {
    fontSize: 20,
    fontWeight: "600",

    marginHorizontal: 20,
    marginTop: 0,
    color: "#000000",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#00008B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backBtn: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 15,
  },
  successMessage: {
    color: "green",
    fontSize: 16,
    position: "absolute",
    bottom: 75,
    alignSelf:'center'
  },
  scannedDataText:{
    fontSize: 16,
    fontWeight: "500",
    color:'#000000',
    marginTop: 40,
  }
});
