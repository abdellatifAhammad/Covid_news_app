import * as React from "react";
import {
  StyleSheet,
  StatusBar,
  FlatList,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import "react-native-gesture-handler";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import Icon from "react-native-vector-icons/Feather";
import { Svg, Stop, LinearGradient, Defs, Path } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";
import Chart from "./components/Chart";
import Pie from "./components/PieChart";
import Card from "./components/Card";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  const { landscape } = useDeviceOrientation();
  const width = useDimensions().screen.width;

  return (
    <>
      <StatusBar
        backgroundColor="#FFA374"
        barStyle={"light-content"}
      ></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          {/* <Stack.Screen name="Profile" component={Profile} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b2135ff",
    // paddingTop: StatusBar.currentHeight,
  },
  cases: {
    fontSize: 16,
    padding: 10,
    color: "#ffffff",
  },
  cardImg: {
    alignContent: "center",
    width: 126,
    height: 114,
    marginRight: 15,
    marginTop: 12,
  },
  badge: {
    width: "35%",
    height: 22,
    backgroundColor: "#3263D9",
    borderRadius: 8,
    paddingBottom: 10,
    marginLeft: 12,
  },
  cardText: {
    color: "#ffffff",
    // fontFamily: "amiri",
    fontSize: 16,
    flex: 2,
    padding: 10,
    marginTop: 5,
    alignContent: "flex-start",
    textAlign: "justify",
    fontWeight: "300",
  },
  card: {},
  newsText: {
    color: "#ffffff",
    // fontFamily: "amiri",
    fontStyle: "normal",
    fontSize: 20,
    fontWeight: "300",
  },
  news: {
    marginTop: "2%",
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
    // fontFamily: "amiri",
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
