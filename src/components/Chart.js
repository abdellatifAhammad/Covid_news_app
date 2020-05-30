import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { LineChart } from "react-native-chart-kit";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      chartData: [],
      data: [],
    };
  }

  wichDay = (date) => {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var d = new Date(date);
    return days[d.getDay()];
  };
  fromTodayTo = (days) => {
    var d1 = new Date(); //"now"
    var diff = Math.abs(d1 - days * 24 * 60 * 60 * 1000);
    return new Date(diff).toISOString().split("T")[0];
  };
  componentDidMount() {
    fetch(
      "https://api.covid19api.com/country/morocco?from=" +
        this.fromTodayTo(7) +
        "T00:00:00Z&to=" +
        new Date().toISOString().split("T")[0] +
        "T00:00:00Z"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          chartData: responseJson,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }
  render() {
    return (
      <View>
        {!this.state.loading ? (
          <LineChart
            data={{
              labels: [
                this.wichDay(this.state.chartData[0].Date),
                this.wichDay(this.state.chartData[1].Date),
                this.wichDay(this.state.chartData[2].Date),
                this.wichDay(this.state.chartData[3].Date),
                this.wichDay(this.state.chartData[4].Date),
                this.wichDay(this.state.chartData[5].Date),
                this.wichDay(this.state.chartData[6].Date),
              ],

              datasets: [
                {
                  data: !this.state.loading
                    ? [
                        this.state.chartData[0].Recovered,
                        this.state.chartData[1].Recovered,
                        this.state.chartData[2].Recovered,
                        this.state.chartData[3].Recovered,
                        this.state.chartData[4].Recovered,
                        this.state.chartData[5].Recovered,
                        this.state.chartData[6].Recovered,
                      ]
                    : [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                      ],
                },
              ],
            }}
            width={this.props.width} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
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
            bezier
            style={{
              // marginVertical: 8,
              margin: 10,
              width: this.props.width - 20,
              borderRadius: 6,
            }}
          />
        ) : (
          <ActivityIndicator size="large" color="#fffff" />
        )}
      </View>
    );
  }
}

export default Chart;
