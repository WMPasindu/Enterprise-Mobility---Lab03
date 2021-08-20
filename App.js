/*This is an example of React Native Get Current Time in 12 hours format AM PM*/
import React, { Component } from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import moment from 'moment';
//import moment to help you play with date and time
export default class App extends Component {
  
  state = {
    curTime: moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss a')
  };

  constructor(props) {
    super(props);
    this.state = {
      type: 12
    };
    setInterval(() => (
      this.setState(
        {
          curTimeTwelveHour: moment()
            .utcOffset('+05:30')
            .format('YYYY-MM-DD hh:mm:ss a')
        },
      )
    ), 1000);

    setInterval(() => (
      this.setState(
        {
          curTimeTwentyFourHour: moment()
            .utcOffset('+05:30')
            .format('YYYY-MM-DD HH:mm:ss')
        }
      )
    ), 1000);
  }

  toggleTime = () => {
    if (this.state.type == 12) {
      {this.setState({ type: 24 })}
    } else {
      {this.setState({ type: 12 })}
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red', fontSize: 35 }}>{this.state.type === 12 ? this.state.curTimeTwelveHour : this.state.curTimeTwentyFourHour}</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.toggleTime()}> 
          <Text> Toggle </Text> 
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '60%',
    alignItems: "center",
    backgroundColor: "#17E6B4",
    marginTop: '10%',
    padding: 10
}
});
