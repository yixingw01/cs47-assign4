import { StyleSheet, SafeAreaView, Text, View, Image, FlatList, Pressable} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./app/screens/MainScreen";
import PreviewScreen from "./app/screens/PreviewScreen";
import DetailsScreen from "./app/screens/DetailsScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}} />
        <Stack.Screen name="PreviewScreen" component={PreviewScreen}
          options = {{
            title: "Song preview",
            headerTitleStyle: {color: Themes.colors.white},
            headerBackTitle: "Back",
            headerStyle: {backgroundColor: Themes.colors.background},
          }} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen}
          options = {{
            title: "Song details",
            headerTitleStyle: {color: Themes.colors.white},
            headerBackTitle: "Back",
            headerStyle: {backgroundColor: Themes.colors.background},
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}