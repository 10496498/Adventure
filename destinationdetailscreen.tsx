import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function DestinationDetailsScreen({ navigation }: any) {

  return (
    <View>

      <Text>Destination Details</Text>

      <Text>Western Cape</Text>

      <Text>
        Explore beautiful outdoor locations
        and exciting adventure experiences.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.replace("CalculateFees")}
      >
        <Text>Book Adventure</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Destinations")}
      >
        <Text>Back</Text>
      </TouchableOpacity>

    </View>
  );
}