import React, { Component } from 'react';
import { View } from 'react-native';
import IGSettings from "../containers/getstarted/IGSettings";

export default class GetstartedStack extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <IGSettings />
      </View>
    )
  }
}