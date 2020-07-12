import React, { Component } from 'react';
import { View } from 'react-native';
import { Helpers } from '../../theme';
import SettingsStack from '../../navigators/SettingsStack';

export default class Settings extends Component {
  render() {
    return (
      <View style={{...Helpers.mainView, backgroundColor:'#F5F6F7'}}>
        <SettingsStack />
      </View>
    )
  }
}