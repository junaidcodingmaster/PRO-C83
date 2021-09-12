import React from "react";
import { Text, View } from "react-native";

export default class Profile extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text>Profile</Text>
      </View>
    );
  }
}
