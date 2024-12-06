/**
 * General layout for all screens
 */
import React, { ReactNode } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { ThemedView } from "@/src/components/ThemedView";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemedView style={styles.container}>
      <KeyboardAwareScrollView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Layout;
