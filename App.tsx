import React, { useState } from "react";

import SplashScreen from "./splashscreen";
import HomeScreen from "./homescreen";
import ExploreScreen from "./explorescreen";
import AdventureDetailsScreen from "./adventuredetailsScreen";
import DestinationsScreen from "./destinationscreen";
import DestinationDetailsScreen from "./destinationdetailscreen";
import AboutUsScreen from "./Aboutus";
import CalculateTotalScreen from "./calculateTotal";
import BookingsScreen from "./bookingsScreen";
import BookingDetailsScreen from "./bookingDetailsScreen";
import ProfileScreen from "./profilescreen";
import ContactScreen from "./contactDetails";

export default function App() {
  const [screen, setScreen] = useState("Splash");

  const navigation = {
    replace: (name: string) => setScreen(name),
  };

  if (screen === "Splash") return <SplashScreen navigation={navigation} />;
  if (screen === "Home") return <HomeScreen navigation={navigation} />;
  if (screen === "Explore") return <ExploreScreen navigation={navigation} />;
  if (screen === "AdventureDetails") return <AdventureDetailsScreen navigation={navigation} />;
  if (screen === "Destinations") return <DestinationsScreen navigation={navigation} />;
  if (screen === "DestinationDetails") return <DestinationDetailsScreen navigation={navigation} />;
  if (screen === "About") return <AboutUsScreen navigation={navigation} />;
  if (screen === "CalculateFees") return <CalculateTotalScreen navigation={navigation} />;
  if (screen === "Bookings") return <BookingsScreen navigation={navigation} />;
  if (screen === "BookingDetails") return <BookingDetailsScreen navigation={navigation} />;
  if (screen === "Profile") return <ProfileScreen navigation={navigation} />;
  if (screen === "Contact") return <ContactScreen navigation={navigation} />;

  return <HomeScreen navigation={navigation} />;
}