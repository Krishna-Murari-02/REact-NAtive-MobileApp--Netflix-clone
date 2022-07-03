import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import axios from "axios";

const Row = ({ title, navigation, api }) => {
  const [Data, setData] = useState([]);
  const SetMovieTitleDetails = async () => {
    const request = await axios.get(api);
    setData(request.data.results);
  };
  SetMovieTitleDetails();

  return (
    <View style={tw`mb-5`}>
      <Text style={tw`text-white text-lg mb-1 font-bold `}>{title}</Text>
      <ScrollView horizontal={true}>
        <View style={tw`flex-row `}>
          {Data.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => navigation.navigate("Movie", { movieId: item.id })}
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
  );
};

export default Row;
