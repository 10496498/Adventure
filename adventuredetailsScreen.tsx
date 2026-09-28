import React from "react";
import {View,Text,Image,Button} from "react-native";

export default function AdventureDetailsScreen({navigation}:any){
 return <View style={{padding:15}}>
   <Image
    source={{uri:"https://images.unsplash.com/photo-1522163182402-834f871fd851"}}
    style={{width:"100%",height:200}}
   />
   <Text>Zipline Forest Adventure</Text>
   <Text> Tokai, Cape Town</Text>
   <Text> 2 hrs • Easy</Text>
   <Text>R420 / person</Text>

   <Button title="Book Now" onPress={()=>navigation.navigate("Bookings")}/>
 </View>
}