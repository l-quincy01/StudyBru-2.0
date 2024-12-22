import { View, Text } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import Cards from "./Cards";
import { cardBigItems } from "~/src/app/constants/cardItems";
import CardsBig from "./CardsBig";
import TextView from "../_Shared/TextView";

export default function CardBigLayout() {
  const cardItemsArray = [{ cardBigItems }, { cardBigItems }, { cardBigItems }];

  return (
    <ThemedView className="flex flex-col gap-y-12">
      {cardItemsArray.map((item, index) => (
        <View className="flex flex-col gap-y-2 bg-transparent">
          <TextView className="font-semibold text-2xl">
            {item.cardBigItems[index].subjectModuleTitle || "Subject Modules"}
          </TextView>

          <CardsBig data={item.cardBigItems} />
        </View>
      ))}
    </ThemedView>
  );
}
