import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import Icon from "react-native-vector-icons/Feather";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { ScrollView } from "react-native-gesture-handler";
// import { Button } from "react-native-vector-icons/Feather";
function Item({ text, tag, img, key }) {
  const width = useDimensions().screen.width;
  const styles = StyleSheet.create({
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
  });
  return (
    <View
      style={{
        backgroundColor: "#24354F",
        width: width - 20,
        // height: width * 0.45,
        paddingBottom: 10,
        marginLeft: 10,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 16,
      }}
      key={key}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.cardText}>{text}</Text>
        <View>
          <Image
            fadeDuration={3000}
            // style={styles.cardImg}
            style={{
              alignContent: "center",
              width: 126,
              height: 114,
              marginRight: 15,
              marginTop: 12,
            }}
            source={{
              uri: img,
            }}
          ></Image>
        </View>
      </View>
      <View style={styles.badge}>
        <Text style={{ color: "#fff", padding: 2, textAlign: "center" }}>
          {tag}
        </Text>
      </View>
    </View>
  );
}
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      chartData: [],
      data: [],
      crads: [],
      modalVisible: false,
      postTitle: "",
      post: "",
      PostImg: "",
    };
  }
  setModalVisible = (visible, title, post, img) => {
    this.setState({
      modalVisible: visible,
      postTitle: title,
      post: post,
      PostImg: img,
    });
  };

  getImgLink = (id) => {
    console.log(id);
    fetch("https://aslanakbi.000webhostapp.com/wp-json/wp/v2/media/" + id + "/")
      .then((response) => response.json())
      .then((img) => {
        return img;
      });
  };
  componentDidMount() {
    fetch("https://aslanakbi.000webhostapp.com/index.php/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        var test = [];
        responseJson.map((item, index) => {
          this.setState({
            data: [
              ...this.state.data,
              {
                index: index,
                title: item.title.rendered,
                content: item.excerpt.rendered.split("<p>")[1].split("</p>")[0],
                post: item.content.rendered.split("<p>")[1].split("</p>")[0],
                media: item.featured_media,
                img: responseJson[index].content.rendered
                  .split("src=")[1]
                  .split("alt")[0]
                  .split('"')[1],
              },
            ],
            loading: false,
          });
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  render() {
    return (
      <View>
        {!this.state.loading ? (
          <>
            <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}
            >
              <View style={{ flex: 1, backgroundColor: "#1b2135ff" }}>
                <View
                  style={{
                    backgroundColor: "#FFA374",
                    width: "100%",
                    height: 60,
                    flexDirection: "row",
                  }}
                >
                  <Icon
                    onPress={() => this.setModalVisible(false, "", "", "")}
                    name="chevron-left"
                    style={{ marginTop: 13, marginLeft: 6 }}
                    color="#ffffff"
                    size={30}
                  >
                    {" "}
                  </Icon>
                  <Text
                    style={{
                      marginTop: 13,
                      color: "white",
                      fontSize: 18,
                      marginLeft: 5,
                    }}
                  >
                    Covid news
                  </Text>
                </View>
                <ScrollView
                  style={{
                    backgroundColor: "#24354F",
                    alignContent: "center",
                    // marginRight: 0,
                    // marginVertical: "2%",
                    // marginHorizontal: "2%",
                    height: "100%",
                    paddingBottom: 10,
                  }}
                >
                  <View
                    style={{
                      alignContent: "center",
                      // marginRight: 0,
                      // marginVertical: "2%",
                      marginHorizontal: "2%",
                      // height: "100%",
                      // paddingBottom: 10,
                    }}
                  >
                    <ImageBackground
                      // source={require("../assets/img/6.jpg")}
                      // fadeDuration={1000}
                      // style={styles.cardImg}

                      style={{
                        alignContent: "center",
                        width: "100%",
                        height: 200,
                        // marginRight: 0,
                        marginTop: 5,
                        marginVertical: "2%",
                        marginRight: 5,
                        borderRadius: 7,
                        overflow: "hidden",
                      }}
                      source={{
                        uri: this.state.PostImg,
                      }}
                    ></ImageBackground>
                  </View>
                  <View style={{ flexDirection: "row", paddingLeft: 7 }}>
                    <Icon
                      name="bookmark"
                      color="white"
                      size={14}
                      style={{ marginTop: 4 }}
                    ></Icon>
                    <Text
                      style={{ color: "white", marginLeft: 6, fontSize: 14 }}
                    >
                      Abdellatif Ahammad
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        marginLeft: 18,
                        marginTop: 10,
                        color: "#C9D3F2",
                      }}
                    >
                      {this.state.postTitle.toUpperCase()}
                    </Text>
                    <Text
                      style={{
                        color: "#F0F0F2",
                        fontSize: 14,
                        fontWeight: "300",
                        marginLeft: 16,
                        marginRight: 16,
                        marginTop: 10,
                        marginBottom: 10,
                        alignContent: "flex-start",
                        textAlign: "justify",
                        lineHeight: 23,
                      }}
                    >
                      {this.state.post}
                    </Text>
                    <TouchableOpacity
                      style={{
                        marginTop: 10,
                        width: "30%",
                        height: 35,
                        alignContent: "center",
                        marginLeft: 12,
                        // marginRight: 30,
                        backgroundColor: "#ff6b6b",
                        borderRadius: 40,
                        paddingTop: 7,
                        marginBottom: 24,
                        flexDirection: "row",
                      }}
                      onPress={() => this.setModalVisible(false, "", "", "")}
                    >
                      <Icon
                        name="chevrons-left"
                        color="white"
                        size={19}
                        style={{ marginLeft: 12 }}
                      ></Icon>
                      <Text
                        style={{
                          fontSize: 15,
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        GO BACK
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </Modal>

            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    this.setModalVisible(true, item.title, item.post, item.img)
                  }
                >
                  <Item text={item.content} tag={item.title} img={item.img} />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.index.toString()}
            />
          </>
        ) : (
          <ActivityIndicator size="large" color="#fffff" />
        )}
      </View>
    );
  }
}

export default Card;
