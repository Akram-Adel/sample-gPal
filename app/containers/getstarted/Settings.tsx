import React, { Component } from 'react';
import { View } from 'react-native';
import { Helpers } from '../../theme';
import SettingsStack from '../../navigators/SettingsStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { TGetstartedStackParam } from '../../types/TGetstartedStackParam';

export default class Settings extends Component<{navigation:StackNavigationProp<TGetstartedStackParam, 'Settings'>}> {
  render() {
    return (
      <View style={{...Helpers.mainView, backgroundColor:'#F5F6F7'}}>
        <SettingsStack
          onGoBack={this.goBackHandler.bind(this)} />
      </View>
    )
  }

  public goBackHandler(): void {
    this.props.navigation.goBack();
  }
}