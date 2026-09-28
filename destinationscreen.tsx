import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function DestinationsScreen({ navigation }: any) {

  return (
    <View>

      <Text>Destinations</Text>

      <Text>Western Cape</Text>
      <Text>Cape Town</Text>
      <Text>Table Mountain</Text>
      <Text>Jonkershoek</Text>
      <Text>Franschhoek</Text>

      <TouchableOpacity
        onPress={() => navigation.replace("DestinationDetails")}
      >
        <Text>View Destination</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>

    </View>
  );
}