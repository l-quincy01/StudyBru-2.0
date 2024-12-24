import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { ThemedView } from "../../components/ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import TextView from "../../components/_Shared/TextView";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import * as DocumentPicker from "expo-document-picker";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

export default function ActionModal() {
  const scheme = useColorScheme();
  const navigation = useNavigation();
  const [showCamera, setShowCamera] = useState<boolean>(false);
  //   const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  const pickDocument = async () => {
    console.log("Document picker opened");
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.assets![0].uri) {
      console.log("Document picked successfully");
      //   setSelectedFile(result);
      //   await documentUploadService(result, setNotes, cleanText);
    } else {
      console.log("Document picker cancelled or failed");
    }
  };

  if (!permission!.granted && showCamera) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity onPress={requestPermission}>
          <TextView>Grant permission</TextView>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <ThemedView className=" p-5 flex-1">
        {!showCamera ? (
          <>
            <ThemedView className="flex flex-row justify-center items-center w-full">
              <TextView className="text-2xl font-semibold">New Set</TextView>
              <TouchableOpacity
                className="p-4"
                onPress={() => navigation.goBack()}
              >
                <View className="right-2 ">
                  <Ionicons
                    name="close-outline"
                    size={24}
                    color={scheme === "dark" ? "white" : "black"}
                  />
                </View>
              </TouchableOpacity>
            </ThemedView>

            <ThemedView className="flex flex-col gap-y-4 mt-12">
              <TouchableOpacity
                className={` rounded-xl flex flex-row gap-x-2 border-hairline items-center justify-center py-8 px-6 ${
                  scheme === "dark" ? "border-white" : "border-black"
                }`}
                onPress={pickDocument}
              >
                <Ionicons
                  name="document-text-outline"
                  size={24}
                  color={scheme === "dark" ? "white" : "black"}
                />
                <TextView>Upload Document</TextView>
              </TouchableOpacity>
              <TouchableOpacity
                className={` rounded-xl flex flex-row gap-x-2 border-hairline items-center justify-center py-8 px-6 ${
                  scheme === "dark" ? "border-white" : "border-black"
                }`}
              >
                <Octicons
                  name="paste"
                  size={24}
                  color={scheme === "dark" ? "white" : "black"}
                />

                <TextView>Paste Text</TextView>
              </TouchableOpacity>
              <TouchableOpacity
                className={` rounded-xl flex flex-row gap-x-2 border-hairline items-center justify-center py-8 px-6 ${
                  scheme === "dark" ? "border-white" : "border-black"
                }`}
                onPress={() => setShowCamera(true)}
              >
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color={scheme === "dark" ? "white" : "black"}
                />

                <TextView>Scan Document</TextView>
              </TouchableOpacity>

              <TouchableOpacity
                className={` rounded-xl flex flex-row gap-x-2 border-hairline items-center justify-center py-8 px-6 ${
                  scheme === "dark" ? "border-white" : "border-black"
                }`}
              >
                <MaterialIcons
                  name="multitrack-audio"
                  size={24}
                  color={scheme === "dark" ? "white" : "black"}
                />
                <TextView>Upload Audio</TextView>
              </TouchableOpacity>
              <TouchableOpacity
                className={` rounded-xl flex flex-row gap-x-2 border-hairline items-center justify-center py-8 px-6 ${
                  scheme === "dark" ? "border-white" : "border-black"
                }`}
              >
                <Ionicons
                  name="videocam-outline"
                  size={24}
                  color={scheme === "dark" ? "white" : "black"}
                />
                <TextView>Upload Video</TextView>
              </TouchableOpacity>
            </ThemedView>
          </>
        ) : (
          <>
            <View style={styles.container}>
              <CameraView style={styles.camera} facing={facing}>
                <View style={styles.buttonContainer}></View>
              </CameraView>
            </View>
          </>
        )}
      </ThemedView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
