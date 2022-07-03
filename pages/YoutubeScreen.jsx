import { View, Text, StatusBar } from "react-native";
import React from "react";
// import YoutubePlayer from "react-native-yt-player";
import YoutubePlayer from "react-native-youtube-iframe";
import tw from "tailwind-react-native-classnames";

const YoutubeScreen = () => {
  return (
    <View style={tw` android:pt-10 flex-1 bg-black`}>
      <YoutubePlayer height={300} play={true} videoId={"7Zspy3-eFUY"} />
    </View>
  );
};

const TopBar = ({ play, fullScreen }) => (
  <View
    style={{
      alignSelf: "center",
      position: "absolute",
      top: 0,
    }}
  >
    <Text style={{ color: "#FFF" }}> Custom Top bar</Text>
  </View>
);

export default YoutubeScreen;
