import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";

const RootDrawerNavigator = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator.Navigator initialRouteName="GameZone">
        <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
        <RootDrawerNavigator.Screen name="About" component={AboutStack} />
      </RootDrawerNavigator.Navigator>
    </NavigationContainer>
  );
}