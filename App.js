import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./pages/HomeScreen";
import MovieDetails from "./pages/MovieDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Row from "./components/Row";
import YoutubeScreen from "./pages/YoutubeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>

      
      <Stack.Navigator
       initialRouteName="Landing" 
       screenOptions={{
         headerShown: false,
       }}
      >
        <Stack.Screen
          name="Landing"
          component={HomeScreen}
         
        />
        <Stack.Screen
          name="YoutubeScreen"
          component={YoutubeScreen}
         
        />
        <Stack.Screen name="Movie" component={MovieDetails} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 5,
  },
});
