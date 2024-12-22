import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "~/src/app/context/AuthContext";

import { Button } from "react-native";

import TabNavigator from "./TabNavigator";
import LoginScreen from "../screens/login/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { authState, onLogout } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ? (
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false,
              // headerRight: () => <Button onPress={onLogout} title="Sign Out" />,
            }} // Customize header options here
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }} // Customize header options here
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
