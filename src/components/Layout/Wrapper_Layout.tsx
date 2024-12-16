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
  View,
} from "react-native";
import { ThemedView } from "@/src/components/ThemedView";

interface LayoutProps {
  children: ReactNode;
}

const WrapperLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemedView style={styles.safeArea}>
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

export default WrapperLayout;
