import React, { Component } from 'react';
import { View } from 'react-native';
import Dashboard from "../containers/getstarted/Dashboard";

export default class GetstartedStack extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Dashboard />
      </View>
    )
  }
}