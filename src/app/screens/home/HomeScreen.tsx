import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "~/src/app/components/ThemedView";
import { ThemedText } from "~/src/app/components/ThemedText";
import CardComp from "../../components/cardComp";
//import AvatarComp from "../../../components/Home/AvatarComp";

import Avatar from "~/src/app/components/Home/Avatar";
import TextView from "~/src/app/components/_Shared/TextView";
import { SeparatorHorizontal } from "lucide-react-native";
import { Separator } from "@rn-primitives/dropdown-menu";
import SeparatorComp from "~/src/app/components/_Shared/SeparatorComp";
import Cards from "~/src/app/components/Home/Cards";
import { cardItems } from "~/src/app/constants/cardItems";
import CardListLayout from "~/src/app/components/Home/CardListLayour";
import WrapperLayout from "~/src/app/components/Layout/Wrapper_Layout";
import Layout from "~/src/app/components/Layout/Layout";
import CardBigLayout from "~/src/app/components/Home/CardsBigListLayout";
import { BlurView } from "expo-blur";

export default function HomeScreen() {
  // interface CardItem {
  //   id: string;
  //   title: string;
  //   itemsAdded: number;
  //   dateCreated: string;
  // }

  const colourCodes = [
    { highlightColour: "blue" },
    { highlightColour: "red" },
    { highlightColour: "green" },
    { highlightColour: "purple" },
    { highlightColour: "orange" },
  ];
  return (
    <WrapperLayout>
      <ThemedView className="flex justify-between flex-row py-4 ">
        <ThemedText type="title"> Home</ThemedText>
        <Avatar imageUri="https://github.com/shadcn.png" size={40} />
      </ThemedView>

      <Layout>
        <>
          <ThemedView className="mt-8">
            {/* <CardListLayout /> */}
            <CardBigLayout />
          </ThemedView>
        </>
      </Layout>
    </WrapperLayout>
  );
}
