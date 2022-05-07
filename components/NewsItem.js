import { StyleSheet, Text, View, Platform, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {

  const navigation = useNavigation();

  const openNews = () => {
    navigation.navigate("NewsView", {
      newsLink: newsUrl
    });
  };
  
  return (
    <Pressable onPress={openNews}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl !== null ? imageUrl : "https://timesofindia.indiatimes.com/thumb/msid-90871259,width-1200,height-900,resizemode-4/90871259.jpg" }} />
        <View style={{ width: "90%" }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description?.slice(0, 88)}{description ? "..." : ""}</Text>
          <Text style={styles.date}>Published At {(new Date(date).toLocaleString())}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    width: "100%"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20
  },
  description: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "700"
  },
  date: {
    marginTop: 10,
    marginBottom: 10
  },
})