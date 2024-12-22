import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  useColorScheme,
} from "react-native";
import TextView from "../_Shared/TextView";
import { Card } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";

interface CardsProps {
  data: subjectModule[];
}

interface subjectModule {
  subjectModuleTitle: string;
  setTitle: string[];
  notes: notes[];
}

interface notes {
  title: string;
  thumbnailURL: string;
  dateAdded: string;
}

export default function CardsBig({ data }: CardsProps) {
  const theme = useColorScheme();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  // Scaling Animation
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleValue }],
      }}
    >
      <TouchableOpacity
        id="carousel-component"
        activeOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Carousel
          loop={false}
          width={width}
          height={height * 0.4}
          autoPlay={false}
          data={data}
          style={{ width: "100%" }}
          snapEnabled={true}
          scrollAnimationDuration={250}
          renderItem={({ item }) => (
            <Card
              style={{
                backgroundColor: theme === "dark" ? "#27272a" : "white",
                shadowColor: "black",
                shadowRadius: 12,
                shadowOpacity: 0.05,
                shadowOffset: { width: 0, height: 18 },
                alignContent: "center",
                justifyContent: "center",
                width: "75%",
                height: "92%",
                marginLeft: 20,
                marginTop: 5,
              }}
            >
              <Card.Content className="flex flex-col gap-y-6 justify-between">
                <TextView className="text-2xl font-semibold ">
                  {item.subjectModuleTitle}
                </TextView>
                <View>
                  <View className="flex flex-col gap-y-1 grow h-4/6">
                    {item.notes.map((note, index) => (
                      <View key={index} className="flex flex-row gap-x-2">
                        <Image
                          style={{
                            width: 55,
                            height: 55,
                            borderRadius: 10,
                          }}
                          source={{
                            uri: item.notes[index].thumbnailURL,
                          }}
                        />
                        <View className="flex flex-col gap-y-1 w-4/5">
                          <TextView className="font-semibold text-md">
                            {item.notes[index].title}
                          </TextView>
                          <TextView className="font-light text-sm">
                            Date Added: {item.notes[index].dateAdded}
                          </TextView>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
                <View>
                  <TextView className="font-light text-sm">
                    Items Added: {item.notes.length}
                  </TextView>
                </View>
              </Card.Content>
            </Card>
          )}
        />
      </TouchableOpacity>
    </Animated.View>
  );
}
