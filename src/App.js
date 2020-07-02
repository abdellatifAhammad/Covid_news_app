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
export default function App() {
  const { landscape } = useDeviceOrientation();
  const width = useDimensions().screen.width;
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <StatusBar
        backgroundColor="#FFA374"
        barStyle={"light-content"}
      ></StatusBar>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Svg
              width={width}
              height="167"
              viewBox={"0 0 " + width + " 167"}
              fill="none"
            >
              <Path
                d="M0 0H375C375 0 375 144.152 375 143.503C375 138.633 349.619 162.356 314 166.23C278.381 170.103 218.5 158.113 218.5 158.113C218.5 158.113 137 144.152 88.5 144.152C40 144.152 0 166.23 0 166.23V0Z"
                fill="url(#paint0_linear)"
              />
              <Path
                d="M122.436 91.36C119.652 91.36 117.336 90.808 115.488 89.704C113.64 88.6 112.26 87.064 111.348 85.096C110.436 83.104 109.98 80.776 109.98 78.112C109.98 75.52 110.448 73.24 111.384 71.272C112.32 69.28 113.712 67.732 115.56 66.628C117.408 65.5 119.688 64.936 122.4 64.936C125.16 64.936 127.212 65.344 128.556 66.16C129.924 66.952 130.608 67.936 130.608 69.112C130.608 70 130.224 70.744 129.456 71.344C128.688 71.944 127.572 72.244 126.108 72.244C126.108 71.452 125.988 70.672 125.748 69.904C125.508 69.136 125.1 68.5 124.524 67.996C123.948 67.492 123.156 67.24 122.148 67.24C119.868 67.24 118.272 68.188 117.36 70.084C116.472 71.956 116.028 74.632 116.028 78.112C116.028 81.592 116.568 84.196 117.648 85.924C118.752 87.628 120.636 88.48 123.3 88.48C124.476 88.48 125.484 88.312 126.324 87.976C127.164 87.616 127.872 87.172 128.448 86.644C129.048 86.116 129.552 85.588 129.96 85.06C130.368 85.396 130.572 85.912 130.572 86.608C130.572 87.28 130.32 87.988 129.816 88.732C129.312 89.452 128.472 90.076 127.296 90.604C126.12 91.108 124.5 91.36 122.436 91.36ZM143.027 91.36C140.147 91.36 137.879 90.532 136.223 88.876C134.567 87.196 133.739 84.664 133.739 81.28C133.739 77.896 134.531 75.376 136.115 73.72C137.699 72.064 140.039 71.236 143.135 71.236C146.015 71.236 148.283 72.064 149.939 73.72C151.595 75.376 152.423 77.896 152.423 81.28C152.423 84.664 151.619 87.196 150.011 88.876C148.427 90.532 146.099 91.36 143.027 91.36ZM143.099 89.092C144.491 89.092 145.463 88.432 146.015 87.112C146.567 85.768 146.843 83.824 146.843 81.28C146.843 78.712 146.555 76.78 145.979 75.484C145.427 74.188 144.455 73.54 143.063 73.54C141.671 73.54 140.699 74.188 140.147 75.484C139.595 76.78 139.319 78.712 139.319 81.28C139.319 83.824 139.595 85.768 140.147 87.112C140.723 88.432 141.707 89.092 143.099 89.092ZM162.909 91L157.005 75.34C156.765 74.644 156.417 74.188 155.961 73.972C155.529 73.732 154.917 73.612 154.125 73.612V71.704H165.285V73.612H163.773C162.981 73.612 162.585 73.996 162.585 74.764C162.585 75.052 162.621 75.34 162.693 75.628C162.765 75.916 162.837 76.156 162.909 76.348L165.321 83.152C165.585 83.896 165.837 84.676 166.077 85.492C166.341 86.308 166.521 87.028 166.617 87.652C166.737 87.076 166.893 86.428 167.085 85.708C167.277 84.964 167.457 84.352 167.625 83.872L170.073 76.636C170.193 76.3 170.289 75.964 170.361 75.628C170.433 75.292 170.469 74.968 170.469 74.656C170.469 74.248 170.337 73.972 170.073 73.828C169.809 73.684 169.473 73.612 169.065 73.612H168.021V71.704H175.941V73.612H175.221C174.741 73.612 174.333 73.768 173.997 74.08C173.661 74.368 173.289 75.088 172.881 76.24L167.661 91H162.909ZM182.113 68.464C181.249 68.464 180.517 68.26 179.917 67.852C179.341 67.42 179.053 66.76 179.053 65.872C179.053 64.96 179.341 64.3 179.917 63.892C180.517 63.484 181.249 63.28 182.113 63.28C182.953 63.28 183.673 63.484 184.273 63.892C184.897 64.3 185.209 64.96 185.209 65.872C185.209 66.76 184.897 67.42 184.273 67.852C183.673 68.26 182.953 68.464 182.113 68.464ZM176.569 91V89.092H177.001C177.361 89.092 177.733 89.044 178.117 88.948C178.525 88.828 178.861 88.6 179.125 88.264C179.413 87.928 179.557 87.424 179.557 86.752V75.808C179.557 75.16 179.413 74.68 179.125 74.368C178.837 74.056 178.489 73.852 178.081 73.756C177.697 73.66 177.337 73.612 177.001 73.612H176.569V71.704H185.029V86.752C185.029 87.424 185.161 87.928 185.425 88.264C185.713 88.6 186.061 88.828 186.469 88.948C186.877 89.044 187.249 89.092 187.585 89.092H188.017V91H176.569ZM197.613 91.36C195.261 91.36 193.449 90.568 192.177 88.984C190.905 87.376 190.269 84.844 190.269 81.388C190.269 77.908 190.893 75.352 192.141 73.72C193.413 72.088 195.213 71.272 197.541 71.272C198.885 71.272 199.989 71.548 200.853 72.1C201.717 72.628 202.401 73.312 202.905 74.152H203.157C203.061 73.48 202.989 72.724 202.941 71.884C202.893 71.044 202.869 70.336 202.869 69.76V67.78C202.869 66.796 202.581 66.184 202.005 65.944C201.429 65.68 200.745 65.548 199.953 65.548H199.665V63.64H208.341V86.572C208.341 87.292 208.473 87.832 208.737 88.192C209.025 88.552 209.397 88.792 209.853 88.912C210.309 89.032 210.801 89.092 211.329 89.092H211.473V91H204.489L203.481 88.192H203.157C202.629 89.152 201.921 89.92 201.033 90.496C200.169 91.072 199.029 91.36 197.613 91.36ZM199.161 88.66C200.577 88.66 201.549 88.06 202.077 86.86C202.605 85.636 202.869 83.788 202.869 81.316C202.869 78.94 202.605 77.116 202.077 75.844C201.549 74.572 200.577 73.936 199.161 73.936C197.961 73.936 197.097 74.572 196.569 75.844C196.065 77.116 195.813 78.952 195.813 81.352C195.813 83.8 196.065 85.636 196.569 86.86C197.097 88.06 197.961 88.66 199.161 88.66ZM224.836 91V89.092H227.788C228.412 89.092 228.868 88.924 229.156 88.588C229.444 88.252 229.588 87.64 229.588 86.752V68.716C228.676 69.82 227.848 70.72 227.104 71.416C226.384 72.112 225.664 72.46 224.944 72.46C224.368 72.46 223.876 72.22 223.468 71.74C223.06 71.26 222.856 70.612 222.856 69.796C223.576 69.604 224.38 69.316 225.268 68.932C226.18 68.548 227.224 67.912 228.4 67.024L230.92 65.152H234.952V86.752C234.952 87.496 235.072 88.072 235.312 88.48C235.552 88.888 236.044 89.092 236.788 89.092H239.704V91H224.836ZM249.625 91.36C248.185 91.36 247.033 91.168 246.169 90.784C245.305 90.376 244.681 89.86 244.297 89.236C243.913 88.612 243.721 87.964 243.721 87.292C243.721 86.764 243.865 86.32 244.153 85.96C244.441 85.6 244.885 85.36 245.485 85.24C245.821 86.32 246.325 87.232 246.997 87.976C247.669 88.72 248.605 89.092 249.805 89.092C252.925 89.092 254.617 85.612 254.881 78.652C254.353 79.348 253.669 79.936 252.829 80.416C251.989 80.872 250.969 81.1 249.769 81.1C247.705 81.1 246.013 80.464 244.693 79.192C243.373 77.92 242.713 76.072 242.713 73.648C242.713 71.92 243.037 70.408 243.685 69.112C244.357 67.792 245.305 66.772 246.529 66.052C247.777 65.308 249.253 64.936 250.957 64.936C252.709 64.936 254.257 65.356 255.601 66.196C256.945 67.036 258.001 68.344 258.769 70.12C259.561 71.896 259.957 74.2 259.957 77.032C259.957 79 259.765 80.86 259.381 82.612C258.997 84.34 258.385 85.864 257.545 87.184C256.729 88.48 255.661 89.5 254.341 90.244C253.045 90.988 251.473 91.36 249.625 91.36ZM251.317 78.508C252.157 78.508 252.877 78.292 253.477 77.86C254.077 77.404 254.545 76.816 254.881 76.096C254.857 73.024 254.509 70.804 253.837 69.436C253.165 68.044 252.277 67.348 251.173 67.348C250.141 67.348 249.337 67.864 248.761 68.896C248.209 69.904 247.933 71.416 247.933 73.432C247.933 76.816 249.061 78.508 251.317 78.508Z"
                fill="white"
              />
              <Defs>
                <LinearGradient
                  id="paint0_linear"
                  x1="-85"
                  y1="-34"
                  x2="376.005"
                  y2="710.074"
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="#FFA374" />
                  <Stop offset="1" stopColor="#FF9373" />
                </LinearGradient>
              </Defs>
            </Svg>
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
        </View>
        <Card></Card>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.cases}>Generale advices </Text>
          <Icon
            style={{ alignContent: "center", marginVertical: 14 }}
            name="bar-chart-2"
            color="#ffffff"
            size={16}
          ></Icon>
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <View
            style={{
              width: width / 2 - 20,
              backgroundColor: "#24354F",
              borderRadius: 4,
              marginRight: 20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, textAlign: "center" }}>
              clean your hands all the time
            </Text>
            <Image
              fadeDuration={1000}
              // style={styles.cardImg}
              style={{
                alignContent: "center",
                width: 126,
                height: 114,
                marginLeft: 15,
                marginTop: 12,
              }}
              source={require("./assets/img/Antiseptic.png")}
            ></Image>
          </View>
          <View
            style={{
              width: width / 2 - 20,
              backgroundColor: "#24354F",
              borderRadius: 4,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, textAlign: "center" }}>
              keep using mask when you are going out
            </Text>
            <Image
              fadeDuration={1000}
              // style={styles.cardImg}
              style={{
                alignContent: "center",
                width: 126,
                height: 114,
                marginLeft: 15,
                marginTop: 12,
              }}
              source={require("./assets/img/Mask.png")}
            ></Image>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.cases}>Recovered cases </Text>
          <Icon
            style={{ alignContent: "center", marginVertical: 14 }}
            name="smile"
            color="#ffffff"
            size={16}
          ></Icon>
        </View>
        <Chart width={width}></Chart>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.cases}>Summury Of Cases in Morocco </Text>
          <Icon
            style={{ alignContent: "center", marginVertical: 14 }}
            name="pie-chart"
            color="#ffffff"
            size={16}
          ></Icon>
        </View>
        <Pie width={width}></Pie>
      </ScrollView>
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
    // fontFamily: "SlabRegular",
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
