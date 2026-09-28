import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ContactScreen({ navigation }: any) {

  return (
    <View>

      <Text>Contact Us</Text>

      <Text>Adventure Escape SA</Text>

      <Text>Phone: 000 000 0000</Text>

      <Text>Email: info@adventureescape.co.za</Text>

      <Text>Western Cape, South Africa</Text>

      <Text>Follow us on social media</Text>

      <TouchableOpacity
        onPress={() => navigation.replace("About")}
      >
        <Text>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>

    </View>
  );
}