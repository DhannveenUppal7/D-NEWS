import React from "react";
import { ImageBackground, StyleSheet, Text, View, Pressable } from "react-native";


const Category = ({ title, image, setPressCat }) => (
  <Pressable onPress={setPressCat} android_ripple={{ color: "#ccc" }}>
    <View style={styles.container}>
      <ImageBackground source={{ uri: image }} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{title}</Text>
      </ImageBackground>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    width: 150,
    maxHeight: 100
  },
  image: {
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#2e2e2ec0"

  }
});

export default Category;