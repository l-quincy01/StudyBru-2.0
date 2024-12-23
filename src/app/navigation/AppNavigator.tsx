import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "~/src/app/context/AuthContext";

import { Button, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import TabNavigator from "./TabNavigator";
import LoginScreen from "../screens/login/LoginScreen";
import ActionModal from "../screens/actionModal/ActionModal";

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();
  const { authState, onLogout } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ? (
          <>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="actionModal"
              component={ActionModal}
              options={({ navigation }) => ({
                presentation: "modal",
                title: "New Set",
                headerStyle: {
                  backgroundColor: "transparent",
                },
                headerTransparent: true,
                headerRight: () => (
                  <TouchableOpacity
                    className="p-4"
                    onPress={() => navigation.goBack()}
                  >
                    <Ionicons name="close-outline" size={24} color="black" />
                  </TouchableOpacity>
                ),
              })}
            />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
