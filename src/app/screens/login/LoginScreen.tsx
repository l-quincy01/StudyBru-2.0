import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
// import { ThemedView } from "@/src/components/ThemedView";
// import { ThemedText } from "@/src/components/ThemedText";
// import { API_URL, useAuth } from "@/src/context/AuthContext";
// import Layout from "@/src/components/Layout/Layout";
import axios from "axios";
import { API_URL, useAuth } from "~/src/app/context/AuthContext";
import Layout from "~/src/app/components/Layout/Layout";
import { ThemedView } from "~/src/app/components/ThemedView";
import { ThemedText } from "~/src/app/components/ThemedText";
import WrapperLayout from "~/src/app/components/Layout/Wrapper_Layout";
import SeparatorComp from "~/src/app/components/_Shared/SeparatorComp";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, onRegister } = useAuth();
  //const {authState, setAuthState} = useAuth();

  useEffect(() => {
    const testCall = async () => {
      const result = await axios.get(`${API_URL}/users]`);

      console.log(result);
    };
    testCall();
  }, []);

  //Still working on Login

  // const login = async () => {
  //   const result = await onLogin!(email, password);

  //   if (result && result.error) {
  //     alert(result.msg);
  //   }
  // };

  // Bypass for now

  const login = () => {
    onLogin!();
  };

  const register = async () => {
    const result = await onRegister!(email, password);

    if (result && result.error) {
      alert(result.msg);
    } else {
      login(); //automatically call login after registration
    }
  };

  return (
    <WrapperLayout>
      <Layout>
        <View className="flex items-center justify-center p-10">
          <Image
            source={require("../../assets/images/login/banner.png")}
            style={{ width: 150, height: 150, borderRadius: 90 }}
          />
        </View>
        <ThemedView className=" flex flex-col gap-y-5 ">
          <View className=" flex flex-col justify-center items-center gap-y-5">
            <ThemedText type="title">Get Started</ThemedText>
            <ThemedText type="defaultSemiBold" className="text-center">
              By signing up you accept StudyBru's Terms of service and privacy
              policy.
            </ThemedText>
          </View>

          <ThemedView className=" flex flex-col gap-y-6 ">
            <ThemedView>
              <ThemedText>Email</ThemedText>
              <TextInput
                className=" pb-2  mb-4"
                onChangeText={(text: string) => setEmail(text)}
                value={email}
              />
              <SeparatorComp />
            </ThemedView>

            <ThemedView>
              <ThemedText> Passoword</ThemedText>
              <TextInput
                className="pb-2   mb-4"
                secureTextEntry={true}
                onChangeText={(text: string) => setPassword(text)}
                value={password}
              />
              <SeparatorComp />
            </ThemedView>
            {/* <ThemedView>
            <ThemedText>Verify Password</ThemedText>
            <TextInput
              className="pb-2  border-b-2 mb-4"
              secureTextEntry={true}
              onChangeText={(text: string) => setPassword(text)}
              value={password}
            />
          </ThemedView> */}
          </ThemedView>
          <TouchableOpacity
            onPress={login}
            className="py-5 bg-violet-600 rounded-2xl items-center justify-center flex "
          >
            <Text className="text-white font-semibold text-center">
              Sign Up
            </Text>
          </TouchableOpacity>

          <ThemedView className="flex flex-row gap-x-3 items-center justify-center">
            <ThemedText type="defaultSemiBold">Have an account?</ThemedText>
            <TouchableOpacity onPress={login}>
              {" "}
              <Text className=" text-blue-600 text-xl font-semibold">
                Log in.
              </Text>{" "}
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </Layout>
    </WrapperLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
