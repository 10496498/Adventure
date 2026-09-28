import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const activities: [string, number][] = [
  ["Ultimate Adventure Day", 1500],
  ["Family Explorer Package", 1500],
  ["Mountain Adventure Package", 1500],
  ["Corporate Team Challenge", 1500],
  ["Ziplining Adventure", 750],
  ["Kayaking Experience", 750],
  ["Rock Climbing Session", 750],
];

export default function CalculateFeesScreen({ navigation }: any) {
  const [selected, setSelected] = useState<number[]>([]);
  const [total, setTotal] = useState(0);

  const selectActivity = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const calculate = () => {
    const subtotal = selected.reduce(
      (sum, i) => sum + activities[i][1],
      0
    );

    let discount = 0;

    if (selected.length === 2) {
      discount = 0.05;
    } else if (selected.length === 3) {
      discount = 0.10;
    } else if (selected.length > 3) {
      discount = 0.15;
    }

    const discountAmount = subtotal * discount;
    const afterDiscount = subtotal - discountAmount;
    const vat = afterDiscount * 0.15;
    const finalTotal = afterDiscount + vat;

    setTotal(finalTotal);
  };

  return (
    <View>

      <Text>Calculate Total Fees</Text>

      <Text>Select your adventures:</Text>

      {activities.map((activity, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => selectActivity(index)}
        >
          <Text>
            {selected.includes(index) ? "✓ " : ""}
            {activity[0]} - R{activity[1]}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={calculate}>
        <Text>Calculate Total</Text>
      </TouchableOpacity>

      <Text>Total: R{total.toFixed(2)}</Text>

      <TouchableOpacity
        onPress={() => navigation.replace("Bookings")}
      >
        <Text>Continue to Booking</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>

    </View>
  );
}