import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TDashboardTabParam } from '../../types/TDashboardTabParam';
import { Helpers } from '../../theme';
import { TabHeader } from '../../components/DashTabsComponents';
import i18n from 'i18n-js';


export default class Unfollow extends Component<{navigation:BottomTabNavigationProp<TDashboardTabParam, 'Unfollow'>}> {
  render() {
    return (
      <View style={{...Helpers.mainView, backgroundColor:'#F5F6F7'}}>
        <TabHeader
          isInfo={false}
          title={i18n.t('unfollow')}
          settingsHandler={() => {}}
          notificationHandler={() => {}} />

        <View style={{...Helpers.absoluteCenter}}>
          <Text> No preview available </Text>
        </View>
      </View>
    )
  }
}