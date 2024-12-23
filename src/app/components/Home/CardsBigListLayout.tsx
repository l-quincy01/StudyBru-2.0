import { View, Text } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import Cards from "./Cards";

import CardsBig from "./CardsBig";
import TextView from "../_Shared/TextView";
import { userModules } from "../../constants/subjectModules";

export default function CardBigLayout() {
  const modules = userModules;

  return (
    <ThemedView className="flex flex-col gap-y-12">
      {modules.map((item, index) => (
        <View className="flex flex-col gap-y-2 bg-transparent">
          <TextView className="font-semibold text-2xl">
            {item.subjectModuleTitle || "Module Title Not Found"}
          </TextView>

          <CardsBig data={item.moduleSets} />
        </View>
      ))}
    </ThemedView>
  );
}
