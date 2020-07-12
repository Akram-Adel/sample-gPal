import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Helpers } from './theme';


export default class Index extends Component {
  render() {
    return (
      <View style={{...Helpers.absoluteCenter}}>
        <Text> No preview available </Text>
      </View>
    )
  }
}