import React, { useEffect } from 'react'
import WebView from 'react-native-webview'

const NewsView = ({ navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Dhannveen NEWS"
        });
    }, [navigation])
    
    return (
        <WebView
            source={{ uri: route.params.newsLink }}
        />
    )
}

export default NewsView