import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AboutConway from "../AboutConway";
import AboutGame from "../AboutGame";
import React from "react";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AboutGame" component={AboutGame} />
      <Tab.Screen name="AboutConway" component={AboutConway} />
    </Tab.Navigator>
  );
}

export default MyTabs;
