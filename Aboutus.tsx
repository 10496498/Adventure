import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function AboutUsScreen({ navigation }: any) {

  return (
    <View>

      <Text>About Adventure Escape SA</Text>

      <Text>
        Adventure Escape SA is an outdoor adventure
        business established in 2024.
      </Text>

      <Text>Our Vision</Text>

      <Text>
        To provide exciting and memorable outdoor
        adventure experiences.
      </Text>

      <Text>Our Mission</Text>

      <Text>
        To connect individuals, families, schools,
        tourists and corporate groups with outdoor
        adventures.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Contact")}
      >
        <Text>Contact Us</Text>
      </TouchableOpacity>

    </View>
  );
}