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
import Icon from "react-native-vector-icons/Feather";
// ;
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  web: `testss`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}></View>
        <View style={styles.welcome}>
          <Text style={styles.covid}>Covid 19</Text>
        </View>
        <View style={styles.news}>
          <Text style={styles.newsText}>Covid news </Text>
          <Icon
            name="activity"
            style={{ margin: 5, paddingLeft: 5 }}
            color="white"
            size={20}
          ></Icon>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.cardText}>
              stay at home and don't go out its not for you ,the live have a lot
              of price
            </Text>
            <Image
              style={styles.cardImg}
              source={require("./assets/img/covid-male.png")}
            ></Image>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b2135ff",
    paddingTop: StatusBar.currentHeight,
  },
  cardImg: {
    padding: 15,
    width: 126,
    height: 114,
    margin: 15,
  },
  cardText: {
    color: "#ffffff",
    fontFamily: "amiri",
    fontSize: 16,
    padding: 5,
    fontWeight: "300",
  },
  card: {
    backgroundColor: "#24354F",
    width: "90%",
    height: "25%",
    marginLeft: "5%",
    borderRadius: 10,
  },
  newsText: {
    color: "#ffffff",
    fontFamily: "amiri",
    fontSize: 20,
    fontWeight: "300",
  },
  news: {
    marginTop: "22%",
    padding: 8,
    marginLeft: 2,
    flexDirection: "row",
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
  covid: {
    color: "#ffffff",
    fontSize: 32,
    textAlign: "center",
    marginTop: "5%",
    fontWeight: "600",
    fontStyle: "bold",
    fontFamily: "amiri",
  },
  welcome: {
    width: "100%",
    height: "15%",
    top: "6%",
    position: "absolute",
    backgroundColor: "#F99D80",
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
