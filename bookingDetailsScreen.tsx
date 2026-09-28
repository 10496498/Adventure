import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function BookingDetailsScreen({ navigation }: any) {

  return (
    <View>

      <Text>Booking Details</Text>

      <Text>Activity: Mountain Adventure</Text>
      <Text>Date: Not selected</Text>
      <Text>Location: Western Cape</Text>
      <Text>Price: R1500</Text>
      <Text>Status: Confirmed</Text>

      <TouchableOpacity
        onPress={() => navigation.replace("Bookings")}
      >
        <Text>Back to Bookings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>

    </View>
  );
}