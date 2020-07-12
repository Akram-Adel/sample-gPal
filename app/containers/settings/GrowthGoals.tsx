import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TSettingsStackParam } from '../../types/TSettingsStackParam';
import { Helpers } from '../../theme';
import SettingsHeader from '../../components/SettingsHeader';
import GrowthTopTab from './GrowthTopTab';

export default class GrowthGoals extends Component<{navigation:StackNavigationProp<TSettingsStackParam, 'GrowthGoals'>}> {
  private currentGoal:string = "grow";

  render() {
    return (
      <View style={{...Helpers.mainView}}>
        <SettingsHeader
          title='Upgrade'
          onBack={this.goBack.bind(this)} />

        <GrowthTopTab
          currentGoal={this.currentGoal}
          upgradeHandler={this.upgradeHandler.bind(this)} />
      </View>
    )
  }

  public upgradeHandler(): void {
    this.props.navigation.goBack();
  }

  public goBack(): void {
    this.props.navigation.goBack();
  }
}