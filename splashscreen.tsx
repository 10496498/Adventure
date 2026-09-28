import React, { useEffect } from "react";
import { View, Text, Image, Button } from "react-native";

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => navigation.replace("Home"), 3000);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
              source={{
                uri: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
              }}
              style={{ width: "100%", height: 180 }}
            />

      <Text>ADVENTURE ESCAPE SA</Text>
      <Text>Escape the ordinary, experience the adventure!</Text>

      <Button
        title="Get Started"
        onPress={() => navigation.replace("Home")}
      />
    </View>
  );
}