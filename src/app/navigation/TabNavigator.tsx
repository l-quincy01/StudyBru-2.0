import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ChevronDown } from "lucide-react-native";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  const scheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: scheme === "dark" ? "white" : "black",
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 1 / 5,
          borderTopColor: scheme === "dark" ? "black" : "",
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={30}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="library-shelves"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
