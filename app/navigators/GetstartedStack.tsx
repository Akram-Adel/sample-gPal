import React, { Component } from 'react';
import { View } from 'react-native';
import Settings from '../containers/getstarted/Settings';

export default class GetstartedStack extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Settings />
      </View>
    )
  }
}