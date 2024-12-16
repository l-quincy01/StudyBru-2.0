import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import TextView from "../_Shared/TextView";
import { ThemedView } from "../ThemedView";
import SeparatorComp from "../_Shared/SeparatorComp";
import AntDesign from "@expo/vector-icons/AntDesign";
import { PaperProvider, Card } from "react-native-paper";

import Carousel from "react-native-reanimated-carousel";

interface CardItem {
  id: string;
  title: string;
  //   highlightColour: string will re add later if necessary
  topicsAdded: number;
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

export default function CardsBig({ data }: CardsProps) {
  const theme = useColorScheme();
  var ReactNativeSwipeableViewStack = require("react-native-swipeable-view-stack");
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  //reactNativeSwipeableViewStack();

  return (
    <View className="flex flex-col gap-y-2">
      <TextView className="font-semibold text-4xl">Computer Science</TextView>
      <View
        id="carousel-component"
        dataSet={{ kind: "basic-layouts", name: "left-align" }}
      >
        <Carousel
          loop={false}
          width={width}
          height={height * 0.4}
          autoPlay={false}
          data={[...new Array(3).keys()]}
          style={{ width: "100%" }}
          snapEnabled={true}
          scrollAnimationDuration={250}
          renderItem={({ index }) => (
            <Card
              style={{
                backgroundColor: theme === "dark" ? "#27272a" : "white",
                shadowColor: "black",
                shadowRadius: 16,
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 18 },
                alignContent: "center",
                justifyContent: "center",
                width: "75%",
                height: "92%",
                marginLeft: 20,
                marginTop: 5,
              }}
            >
              <Card.Content className="flex flex-col gap-y-4">
                <TextView className="text-2xl font-semibold ">
                  Complier Design.
                </TextView>
                <View>
                  <View className="flex flex-col gap-y-1">
                    <View className="flex flex-row gap-x-2">
                      <Image
                        style={{ width: 55, height: 55, borderRadius: 10 }}
                        source={require("../../assets/images/Shared/imgPlaceholder.png")}
                      />
                      <View className="flex flex-col gap-y-1">
                        <TextView className="font-semibold text-lg">
                          Lecture 21
                        </TextView>
                        <TextView className="font-light text-sm">
                          Date Added: 20/08/2021
                        </TextView>
                      </View>
                    </View>
                    <View className="flex flex-row gap-x-2">
                      <Image
                        style={{ width: 55, height: 55, borderRadius: 10 }}
                        source={require("../../assets/images/Shared/imgPlaceholder.png")}
                      />
                      <View className="flex flex-col gap-y-1">
                        <TextView className="font-semibold text-lg">
                          Lecture 21
                        </TextView>
                        <TextView className="font-light text-sm">
                          Date Added: 20/08/2021
                        </TextView>
                      </View>
                    </View>
                    <View className="flex flex-row gap-x-2">
                      <Image
                        style={{ width: 55, height: 55, borderRadius: 10 }}
                        source={require("../../assets/images/Shared/imgPlaceholder.png")}
                      />
                      <View className="flex flex-col gap-y-1">
                        <TextView className="font-semibold text-lg">
                          Lecture 21
                        </TextView>
                        <TextView className="font-light text-sm">
                          Date Added: 20/08/2021
                        </TextView>
                      </View>
                    </View>
                  </View>
                </View>
                <View>
                  <TextView className="font-light text-sm">
                    Items Added: 4
                  </TextView>
                </View>
              </Card.Content>
            </Card>
          )}
        />{" "}
      </View>
    </View>
  );
}
