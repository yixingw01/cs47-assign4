import { Image, View, StyleSheet, Text } from "react-native";
import { Themes } from "../../assets/Themes";
import { WebView } from "react-native-webview";

export default function DetailsScreen ({ route }) {
    return (
        <WebView source={{ uri: route.params.detailsscreen }} />
    );
};

