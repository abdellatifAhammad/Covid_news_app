import * as React from "react";
import {
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  TouchableNativeFeedback,
  StatusBar,
  Button,
  Alert,
  Text,
  View,
  Image,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  web: `testss`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <View style={styles.container}>
      <View style={landscape ? styles.fullstyles : styles.box}>
        <Text style={styles.navText}>Covid In Morocco</Text>
      </View>
      <View>{/* <Text>the state of Morocco at this time</Text> */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
    // backgroundColor: "white",
  },
  box: {
    width: "100%",
    height: "9%",
    backgroundColor: "#F99D80",
  },
  fullstyles: {
    width: "100%",
    height: "15%",
    backgroundColor: "#F99D80",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  navText: {
    fontSize: 26,
    color: "white",
    padding: 10,
  },
  headerImg: {
    width: "100%",
    height: 150,
    marginTop: 3,
    position: "relative",
  },
});
