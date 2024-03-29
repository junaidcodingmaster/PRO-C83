import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

let customFonts = {
  "Junaid-font-mix": require("../assets/fonts/HindSiliguri-Regular.ttf"),
};

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = { fontsLoaded: false };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if (!this.state.fontsLoaded) {
      return (
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Junaid-font-mix",
            marginTop: 100,
            alignSelf: "center",
          }}>
          Loading . . .
        </Text>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.authorContainer}>
              <View style={styles.authorImageContainer}>
                <Image
                  source={{ uri: this.props.post.profile }}
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.authorNameContainer}>
                <Text style={styles.authorNameText}>
                  {this.props.post.author}
                </Text>
              </View>
            </View>
            <Image
              source={{ uri: this.props.post.post }}
              style={styles.postImage}
            />
            <View style={styles.captionContainer}>
              <Text style={styles.captionText}>{this.props.post.caption}</Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2a2a2a",
    borderRadius: RFValue(20),
    padding: RFValue(20),
  },
  authorContainer: {
    flex: 0.1,
    flexDirection: "row",
  },
  authorImageContainer: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: RFValue(100),
  },
  authorNameContainer: {
    flex: 0.85,
    justifyContent: "center",
  },
  authorNameText: {
    color: "white",
    fontSize: RFValue(20),
    fontFamily: "Junaid-font-mix",
  },
  postImage: {
    marginTop: RFValue(20),
    resizeMode: "contain",
    width: "100%",
    alignSelf: "center",
    height: RFValue(275),
  },
  captionContainer: {},
  captionText: {
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10),
    fontFamily: "Junaid-font-mix",
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30),
  },
  likeText: {
    color: "white",
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
    fontFamily: "Junaid-font-mix",
  },
});
