import React from "react";
import { StackNavigator } from "react-navigation";
import { HomeScreen } from "./HomeScreen";


export const Root = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerStyle: {
        backgroundColor: "rgb(200,250,200)"
      },
      headerTitleStyle: {
        color: "grey"
      },
      headerTintColor: "#ff0000"
    })
  },
});

