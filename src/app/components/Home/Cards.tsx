import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import TextView from "../_Shared/TextView";
import { ThemedView } from "../ThemedView";
import SeparatorComp from "../_Shared/SeparatorComp";

interface CardItem {
  id: string;
  title: string;
  //   highlightColour: string will re add later if necessary
  itemsAdded: number;
  dateCreated: string;
}
// interface HighlightColour {
//   colour: string;
// }

interface CardsProps {
  data: CardItem[];
  //  highlightColour: HighlightColour[];
}

export default function Cards({ data }: CardsProps) {
  return (
    <View className="flex flex-col gap-y-4">
      <TextView className="font-semibold text-2xl">
        Computer Engineering
      </TextView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            className="flex flex-row gap-x-3 px-2"
            accessibilityLabel={`View details for ${item.title}`}
          >
            <View className={`w-2 h-full bg-blue-500 rounded-lg flex `}></View>

            <View className="flex flex-col gap-y-2">
              <TextView className="font-semibold text-xl">
                {item.title}
              </TextView>

              <SeparatorComp />

              <ThemedView className="flex flex-col gap-y-1">
                <TextView className="font-normal text-gray-400">
                  Items Added: {item.itemsAdded}
                </TextView>
                <TextView className="font-normal text-gray-400">
                  Date Created: {item.dateCreated}
                </TextView>
              </ThemedView>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
