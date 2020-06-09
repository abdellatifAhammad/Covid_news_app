import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
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
    };
  }
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
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.data}
            renderItem={({ item }) => (
              <Item text={item.content} tag={item.title} img={item.img} />
            )}
            keyExtractor={(item) => item.index.toString()}
          />
        ) : (
          <ActivityIndicator size="large" color="#fffff" />
        )}
      </View>
    );
  }
}

export default Card;
