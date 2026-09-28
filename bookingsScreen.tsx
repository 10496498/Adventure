import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function BookingsScreen({ navigation }: any) {

  return (
    <View>

      <Text>My Bookings</Text>

      <Text>Booking 01</Text>
      <Text>Mountain Adventure</Text>
      <Text>Status: Confirmed</Text>

      <TouchableOpacity
        onPress={() => navigation.replace("BookingDetails")}
      >
        <Text>View Details</Text>
      </TouchableOpacity>

      <Text>Booking 02</Text>
      <Text>Hiking Adventure</Text>
      <Text>Status: Completed</Text>

      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>

    </View>
  );
}