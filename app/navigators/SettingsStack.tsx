import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsHome from '../containers/settings/SettingsHome';
import AccountSettings from '../containers/settings/AccountSettings';
import HashtagsSettings from '../containers/settings/HashtagsSettings';
import AddHashtags from '../containers/iGStack/AddHashtags';
import TimeZonesSettings from '../containers/settings/TimeZonesSettings';
import AddTimeZones from '../containers/iGStack/AddTimeZones';
import NotificationsReminders from '../containers/settings/NotificationsReminders';
import GrowthGoals from '../containers/settings/GrowthGoals';

export default class SettingsStack extends Component {
  private Stack = createStackNavigator();

  render() {
    return (
      <View style={{flex:1}}>

        <this.Stack.Navigator headerMode='none'>
          <this.Stack.Screen name='SettingsHome' component={SettingsHome} />
          <this.Stack.Screen name='AccountSettings' component={AccountSettings} />
          <this.Stack.Screen name='Hashtags' component={HashtagsSettings} />
          <this.Stack.Screen name='AddHashtags' component={AddHashtags}  />
          <this.Stack.Screen name='TimeZones' component={TimeZonesSettings} />
          <this.Stack.Screen name='AddTimeZones' component={AddTimeZones}  />
          <this.Stack.Screen name='NotificationsReminders' component={NotificationsReminders} />
          <this.Stack.Screen name='GrowthGoals' component={GrowthGoals} />
        </this.Stack.Navigator>
      </View>
    )
  }
}