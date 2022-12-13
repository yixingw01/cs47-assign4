import { StyleSheet, SafeAreaView, Text, View, Image, FlatList, Pressable} from "react-native";
import { useSpotifyAuth } from "../../utils";
import { Themes } from "../../assets/Themes";
import Song from "../components/Song";
import images from "../../assets/Images/images";

export default function MainScreen({navigation}) {
    const AuthButton = ({authFunction}) => {
        return (
          <Pressable title="Auth" onPress={authFunction}>
          <View style={styles.authButton}>
            <Image style={styles.authImage} source={images.spotify} />
            <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
          </View>
          </Pressable>
        )
      };
      
      
      const List = ({tracks}) => {
      
        const renderSong = ({item, index}) => {
            return(
            <Song item={item} index={index+1} navigation={navigation}/>
          )
        }
      
        // FlatList data={tracks}
        return(
          <View style={styles.container}>
            <View style={styles.header}>
              <Image style={styles.logo} source={require('../../assets/spotify-logo.png')}/>
              <Text style={styles.headerText}>
                My Top Tracks
              </Text>
            </View>
            <FlatList 
              data={tracks}
              renderItem={(item) => renderSong(item)}
            />
          </View> 
        )
      }
      


  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  // if token is True, render FlatList
  // else, render Authentication button
  let contentDisplayed;
  if (token) {
    // render Flatlist
    contentDisplayed = <List tracks={tracks}/>;
  } else {
    // render AuthButton
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth} />;
  }
    

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  }, 
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
  },
  headerText: {
    color: Themes.colors.white,
    fontWeight: 'bold',
    fontSize: 25,
  },
  authButton: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: Themes.colors.spotify,
    width: '50%',
    height: '20%',
    borderRadius: 999,
    marginHorizontal: 10,
  },
  authImage: {
    height: 15,
    width: 15,
    marginHorizontal: 5,
  },
  authText: {
    color: Themes.colors.white,
    marginVertical: 5,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
