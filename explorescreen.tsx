import React from "react";
import {View,Text,Button} from "react-native";

export default function ExploreScreen({navigation}:any){
 return <View style={{padding:15}}>
   <Text>Explore Adventures</Text>
   <Text>Western Cape • 6 activities</Text>

   <Text> Hiking</Text>
   <Text> Zip Line</Text>
   <Text> Coastal</Text>
   <Text> Winelands</Text>

   <Button
    title="Zipline Forest Adventure"
    onPress={()=>navigation.navigate("AdventureDetails")}
   />
   <Button
    title="Coastal Hiking Trail"
    onPress={()=>navigation.navigate("AdventureDetails")}
   />
 </View>
}