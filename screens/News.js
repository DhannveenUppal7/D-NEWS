import { View, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Category from '../components/Category';
import NewsItem from '../components/NewsItem';

const News = ({ navigation }) => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Dhannveen NEWS"
    });
  }, [navigation])

  useEffect(async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=`;
    let data = await fetch(url);
    let parsedData = await data.json();

    let filteredNews = parsedData.articles.filter((da) => {
      return da.author !== "" && da.description !== "" && da.publishedAt !== "" && da.source.name !== "" && da.title !== "" && da.url !== "" && da.urlToImage !== ""
    })

    setNews(filteredNews);
    setLoading(false);
  }, [category]);


  const categories = [
    {
      name: "General",
      img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    },
    {
      name: "Business",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      name: "Entertainment",
      img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Health",
      img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Science",
      img: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    },
    {
      name: "Sports",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Technology",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },


  ]

  const renderCategoryItem = (itemData) => {
    const item = itemData.item;

    const setPressCat = () => {
      setCategory(item.name);
    };

    return (
      <Category title={item.name} image={item.img} setPressCat={setPressCat} />
    )
  };

  const renderNewsItem = (itemData) => {
    const newsItem = itemData.item;
    return (
      <NewsItem title={newsItem.title} description={newsItem.description} imageUrl={newsItem.urlToImage} newsUrl={newsItem.url} author={newsItem.author} date={newsItem.publishedAt} source={newsItem.source.name} />
    )
  };

  return (
    <View>
      <View style={{ padding: 15 }}>
        <FlatList horizontal={true} data={categories} keyExtractor={(item) => item.name} renderItem={renderCategoryItem} style={{ overflow: "hidden" }} />
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      {loading === false ? <View style={{ height: "100%", paddingBottom: 250 }}>
        <FlatList data={news} keyExtractor={(item) => item.url} renderItem={renderNewsItem} />
      </View> : <View style={{ marginTop: "50%" }}>
        <ActivityIndicator size="large" color="#521cb8" />
      </View>}
    </View>
  )
}

export default News
