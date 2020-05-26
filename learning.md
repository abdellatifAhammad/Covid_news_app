{/_ touchWF it's for pass the click event to image or what ever _/}
{/_ <TouchableWithoutFeedback
onPress={() => {
console.log("image clicked");
}} >
<Image
// blurRadius={3}
// fadeDuration={3000}
source={{
            width: 300,
            height: 300,
            uri: "https://picsum.photos/300/300",
          }} ></Image>
</TouchableWithoutFeedback> _/}
{/_ reduce the opacity of image when you click _/}
{/_ <TouchableOpacity>
<Image
// blurRadius={3}
// fadeDuration={3000}
source={{
            width: 300,
            height: 300,
            uri: "https://picsum.photos/300/300",
          }} ></Image>
</TouchableOpacity> _/}
{/_ <TouchableHighlight>
<Image
// blurRadius={3}
// fadeDuration={3000}
// opacity={0.8}
source={{
            width: 300,
            height: 300,
            uri: "https://picsum.photos/300/300",
          }} ></Image>
</TouchableHighlight> _/}
{/_ <TouchableNativeFeedback>
<View style={styles.box}></View>
</TouchableNativeFeedback> _/}

      {/* buttons :) */}
      {/* <Button
        color="gray"
        title="hello from the other side"
        onPress={() => {
          // Alert.alert("helloo boy", "My message", [
          //   {
          //     text: "yes",
          //     onPress: () => {
          //       console.log("the first is tapped");
          //     },
          //   },
          //   { text: "No" },
          // ]);
          // just for ios :(
          // Alert.prompt("My title", "message", (text) => {
          //   console.log(text);
          // });
        }}
      ></Button> */}
