import React from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { store } from "./redux/store";

@connect(state => {
  return {
    language: state.language,
  };
})
export class HomeScreen extends React.Component {
  constructor(){
    super()
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>{this.props.language}</Text>
        </View>
      );
    }
}
  