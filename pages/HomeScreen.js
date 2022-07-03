import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Row from '../components/Row'


const HomeScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <Header/>
     <ScrollView>
     <Row navigation={navigation} title="Popular On Netflix" image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
     api="https://api.themoviedb.org/3/discover/movie?api_key=1678287e4d3f1a445b8c833b66b2bdce&with_networks=213"
     />
      
      <Row navigation={navigation} title="Trending Now" image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
      api="https://api.themoviedb.org/3//trending/all/week?api_key=1678287e4d3f1a445b8c833b66b2bdce"
      />
      
      <Row navigation={navigation} title="Watch it Again" image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
      api="https://api.themoviedb.org/3/movie/top_rated?api_key=1678287e4d3f1a445b8c833b66b2bdce&language=en-US"
      />
      
      <Row navigation={navigation} title="Action Movie" image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
      api="https://api.themoviedb.org/3/discover/movie?api_key=1678287e4d3f1a445b8c833b66b2bdce&with_genres=28"
      />
     </ScrollView>
      
    </View>
  )
}

export default HomeScreen


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 5,
  },
})

