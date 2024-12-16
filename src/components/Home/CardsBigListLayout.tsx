import { View, Text } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import Cards from "./Cards";
import { cardBigItems } from "~/src/constants/cardItems";
import CardsBig from "./CardsBig";

export default function CardBigLayout() {
  const cardItemsArray = [{ cardBigItems }, { cardBigItems }, { cardBigItems }];

  return (
    <ThemedView className="flex flex-col gap-y-12">
      {cardItemsArray.map((item) => (
        <CardsBig data={item.cardBigItems} />
      ))}
    </ThemedView>
  );
}
