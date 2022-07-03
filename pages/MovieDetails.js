import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import Row from "../components/Row";
import axios from "axios";

const MovieDetails = ({ navigation, route }) => {
  const { movieId } = route.params;
  const [Data, setData] = useState();
  const [Similar, setSimilar] = useState([]);
  const SetMovieTitleDetails = async () => {
    const request = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=1678287e4d3f1a445b8c833b66b2bdce&language=en-US`
    );
    setData(request.data);
  };
  const SetSimalarMovie = async () => {
    const request = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=1678287e4d3f1a445b8c833b66b2bdce&language=en-US&page=1`
    );
    setSimilar(request.data.results);
  };
  useEffect(() => {
    SetMovieTitleDetails();
    SetSimalarMovie();
  }, [movieId]);

  return (
    <ScrollView style={style.container}>
      <View style={tw`flex-1 `}>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/original${Data?.backdrop_path}`,
          }}
          resizeMode="cover"
          style={style.image}
        >
          <TouchableHighlight
            onPress={() =>
              navigation.navigate("YoutubeScreen", { movieId: movieId })
            }
            style={style.button}
          >
            <Text style={tw`text-xl font-bold text-white`}>
              <AntDesign name="caretright" size={20} color="white" /> Play
            </Text>
          </TouchableHighlight>
        </ImageBackground>
        <View>
          <Text style={tw`text-white text-xl font-bold mt-3 mb-1`}>
            {Data?.original_title}
          </Text>
          <Text style={tw`text-white font-semibold mt-2`}>
            {Data?.overview}
          </Text>
          <View style={tw`flex-row flex-wrap mt-5`}>
            <Text style={tw` text-gray-400 `}>Cast:</Text>
            <Text style={tw` text-gray-400 ml-3`}>Harry Porter</Text>
            <Text style={tw` text-gray-400 ml-3`}>Harry Porter</Text>
            <Text style={tw` text-gray-400 ml-3`}>Harry Porter</Text>
            <Text style={tw` text-gray-400 ml-3`}>Harry Porter</Text>
          </View>
          <View style={tw`flex-row justify-center`}>
            <AntDesign
              style={tw`ml-8`}
              name="pluscircleo"
              size={24}
              color="white"
            />
            <AntDesign style={tw`ml-8`} name="like2" size={24} color="white" />
            <MaterialIcons
              style={tw`ml-8`}
              name="save-alt"
              size={24}
              color="white"
            />
          </View>
        </View>
        <Text style={tw`text-white text-lg mb-1 font-bold `}>Recomended</Text>
        <ScrollView horizontal={true}>
          <View style={tw`flex-row `}>
            {Similar?.map((item, key) => (
              <TouchableOpacity
                key={key}
                onPress={() =>
                  navigation.navigate("Movie", { movieId: item.id })
                }
              >
                <Image
                  style={tw`w-32 h-44 mx-2 `}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 5,
  },
  image: {
    height: windowHeight / 2,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    width: windowWidth / 2,
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
