import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProgressBar from '../components/ProgressBar';
import IGUser from '../containers/iGStack/IGUser';
import HashtagFinder from '../containers/iGStack/HashtagFinder';
import Hashtags from '../containers/iGStack/Hashtags';
import AddHashtags from '../containers/iGStack/AddHashtags';
import TimeZones from '../containers/iGStack/TimeZones';
import AddTimeZones from '../containers/iGStack/AddTimeZones';
import FindPeoplePosts from '../containers/iGStack/FindPeoplePosts';
import { AppHeaderHeight } from '../theme';

export default class IGStack extends Component {
  private Stack = createStackNavigator();

  render() {
    return (
      <View style={{flex:1}}>
        <this.Stack.Navigator screenOptions={{
          headerStyle: {elevation:0, shadowOpacity: 0, height:AppHeaderHeight},
          headerStatusBarHeight: 0,
          headerLeft: () => null }}>

          <this.Stack.Screen
            name="IGUser"
            component={IGUser}
            options={{headerTitle: (props) => <ProgressBar {...props} progress='33%' onBack={() => {}} />}} />

          <this.Stack.Screen
            name="HashtagFinder"
            component={HashtagFinder}
            options={{
              headerTitle: (props) => null,
              headerStyle: {height: 0} }} />

          <this.Stack.Screen
            name="Hashtags"
            component={Hashtags} />

          <this.Stack.Screen
            name="AddHashtags"
            component={AddHashtags}
            options={{
              headerTitle: (props) => null,
              headerStyle: {height: 0} }} />

          <this.Stack.Screen
            name="TimeZones"
            component={TimeZones} />

          <this.Stack.Screen
            name="AddTimeZones"
            component={AddTimeZones}
            options={{
              headerTitle: (props) => null,
              headerStyle: {height: 0} }} />

          <this.Stack.Screen
            name="FindPeoplePosts"
            component={FindPeoplePosts}
            options={{
              headerTitle: (props) => null,
              headerStyle: {height: 0} }} />

        </this.Stack.Navigator>
      </View>
    )
  }
}