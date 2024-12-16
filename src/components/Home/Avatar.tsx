import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface AvatarProps {
  imageUri: string;
  size?: number;
}

export default function Avatar({ imageUri, size }: AvatarProps) {
  return (
    <Image
      source={{ uri: imageUri }}
      style={{ width: size, height: size, borderRadius: 20 }}
    />
  );
}
