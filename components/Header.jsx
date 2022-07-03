import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Header = () => {
  return (
    <View style={tw`flex-row justify-between  w-full android:mt-8  border`}>
      <Image
        style={tw`w-5 h-8 `}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/640px-Netflix_2015_N_logo.svg.png",
        }}
      />
      <Text style={tw`text-lg font-semibold text-white`}>Tv Shows</Text>
      <Text style={tw`text-lg font-semibold text-white`}>Movies</Text>
      <Text style={tw`text-lg font-semibold text-white`}>My List</Text>
    </View>
  );
};

export default Header;
// #242121
const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
  },
});
