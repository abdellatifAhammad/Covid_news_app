import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { PieChart } from "react-native-chart-kit";
class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      chartData: [],
      data: [],
    };
  }
  fromTodayTo = (days) => {
    var d1 = new Date(); //"now"
    var diff = Math.abs(d1 - days * 24 * 60 * 60 * 1000);
    return new Date(diff).toISOString().split("T")[0];
  };
  componentDidMount() {
    fetch(
      "https://api.covid19api.com/country/morocco?from=" +
        this.fromTodayTo(1) +
        "T00:00:00Z&to=" +
        new Date().toISOString().split("T")[0] +
        "T00:00:00Z"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          chartData: responseJson,
          loading: false,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: "#FFF",
            width: this.props.width - 20,
            height: this.props.width / 2 + 10,
            margin: 10,
            marginBottom: 20,
            borderRadius: 6,
            overflow: "hidden",
            shadowColor: "#fff",
          }}
        >
          {!this.state.loading ? (
            <PieChart
              data={
                !this.state.loading
                  ? [
                      {
                        name: "Active",
                        population: this.state.chartData[0].Active,
                        color: "#2E476C",
                        legendFontColor: "#E0F0FF",
                        legendFontSize: 15,
                      },
                      {
                        name: "Deaths",
                        population: this.state.chartData[0].Deaths,
                        color: "#FE9B69",
                        legendFontColor: "#E0F0FF",
                        legendFontSize: 15,
                      },
                      {
                        name: "Recovered",
                        population: this.state.chartData[0].Recovered,
                        color: "#FFFFFF",
                        legendFontColor: "#E0F0FF",
                        legendFontSize: 15,
                      },
                    ]
                  : []
              }
              width={this.props.width - 18} // from react-native
              height={200}
              chartConfig={{
                backgroundColor: "#5363F7",
                backgroundGradientFrom: "#81A4FD",
                backgroundGradientTo: "#5363F7",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 6,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#5363F7",
                },
              }}
              accessor="population"
              backgroundColor="#628AEE"
              paddingLeft="5"
              absolute
              // style={{
              //   // marginVertical: 8,
              //   margin: 10,
              //   width: width - 20,
              //   borderRadius: 6,
              // }}
            ></PieChart>
          ) : (
            <ActivityIndicator size="large" color="#fffff" />
          )}
        </View>
        {/* <View style={{ backgroundColor: "#24354F", height: 20 }}>
          <Text style={{ color: "white", fontSize: 13, marginLeft: "13%" }}>
            all the right reserved to Abdellatif Ahammad{" "}
          </Text>
        </View> */}
      </>
    );
  }
}

export default Pie;
