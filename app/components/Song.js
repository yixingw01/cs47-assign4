import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Themes } from "../../assets/Themes";
import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Song = ({item, index, navigation}) => {
    return(
        <View style={styles.container}>
            <Pressable style={styles.button} 
                onPress={() => navigation.navigate("PreviewScreen", {previewscreen: item.preview_url})}>
                <Ionicons name="play-circle" size={22} color={Themes.colors.spotify}/>
            </Pressable>
            <Image style={styles.image} source = {{uri: item.album.images[0].url}} />
            <Pressable style={styles.nameBox} 
                onPress={() => navigation.navigate("DetailsScreen", {detailsscreen: item.external_urls.spotify})}>
                <Text numberOfLines={1} style={styles.title}> {item.name} </Text>
                <Text numberOfLines={1} style={styles.artist}> {item.artists[0].name} </Text>
            </Pressable>
            <View style={styles.albumBox}>
                <Text numberOfLines={1} style={styles.album}>{item.album.name}</Text>
            </View>
            <Text style={styles.duration}>{millisToMinutesAndSeconds(item.duration_ms)}</Text>
        </View>
    )
}

export default Song;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 20,
        marginHorizontal: 5,
    },
    // index: {
    //     color: Themes.colors.gray,
    // },
    image: {
        height: 50,
        width: 50,
        margin: 10,
    },
    nameBox: {
        width: 100,
        margin: 25
    },
    title: {
        color: Themes.colors.white,
    },
    artist: {
        color: Themes.colors.gray,
    },
    albumBox: {
        width: 100,
        margin: 10,
    },
    album: {
        color: Themes.colors.gray,
    }, 
    duration: {
        color: Themes.colors.gray,
    }
})