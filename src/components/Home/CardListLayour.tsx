import { View, Text } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import Cards from "./Cards";
import { cardItems } from "~/src/constants/cardItems";

export default function CardListLayout() {
  const cardItemsArray = [{ cardItems }, { cardItems }, { cardItems }];

  return (
    <ThemedView className="flex flex-col gap-y-12">
      {cardItemsArray.map((item) => (
        <Cards data={item.cardItems} />
      ))}
    </ThemedView>
  );
}
