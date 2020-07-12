import React, { Component } from 'react';
import { } from 'react-native';
import IGStack from '../../navigators/IGStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { TGetstartedStackParam } from '../../types/TGetstartedStackParam';

export default class IGSettings extends Component<{navigation:StackNavigationProp<TGetstartedStackParam, 'IGSettings'>}> {
  render() {
    return (
      <IGStack
        onBackPress={this.goBackHandler.bind(this)}
        onGoDashboard={this.goDashboardHandler.bind(this)} />
    )
  }

  public goBackHandler(): void {
    this.props.navigation.goBack();
  }

  public goDashboardHandler(): void {
    this.props.navigation.navigate('Dashboard', {isNew: true});
  }
}