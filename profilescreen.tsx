import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }: any) {

  return (
    <View>

      <Text>Profile</Text>

      <Text>Name: Adventure Customer</Text>
      <Text>Email: customer@example.com</Text>
      <Text>Phone: 000 000 0000</Text>

      <TouchableOpacity
        onPress={() => navigation.replace("Bookings")}
      >
        <Text>My Bookings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Contact")}
      >
        <Text>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>

    </View>
  );
}