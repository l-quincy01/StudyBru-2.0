import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ChevronDown } from "lucide-react-native";

import * as Haptics from "expo-haptics";
import ActionModal from "../screens/actionModal/ActionModal";
import { useNavigation } from "@react-navigation/native";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  const scheme = useColorScheme();

  // const CustomTabIcon = ({ color }: { color: string }) => {
  //   return (
  //     <View className="bg-gray-300 rounded-lg p-6 flex items-center justify-center">
  //       <Ionicons name="add" color={color} size={24} />
  //     </View>
  //   );
  // };

  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: scheme === "dark" ? "white" : "black",
        headerShown: false,

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
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              className={` flex items-center justify-center p-1 rounded-lg w-full h-full ${
                scheme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <Ionicons
                name="add"
                color={scheme === "dark" ? "white" : "black"}
                size={24}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            Haptics.selectionAsync();
            navigation.navigate("actionModal");
          },
        }}
      />
      <Tab.Screen
        name="Library"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "library" : "library-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// const styles = StyleSheet.create({
//   iconContainer: {
//     backgroundColor: "#e2e8f0",
//     padding: 2,
//     borderRadius: 8,
//   },
// });
