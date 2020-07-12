import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import i18n from 'i18n-js';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TDashboardTabParam } from '../../types/TDashboardTabParam';
import { Fonts, Colors, Helpers } from '../../theme';
import { TabOverlay, TabHeader } from '../../components/DashTabsComponents';
import { IDashSession } from '../../types/IDashSession';
import SessionTopTab from './SessionTopTab';

export default class Home extends Component<{navigation:BottomTabNavigationProp<TDashboardTabParam, 'Home'>}> {
  private newSessionData: IDashSession[] = [{
    id: '1',
    isNew: true,
    date: 'Today, 26 May',
    toFollowCount: 12,
    toLikeCount: 20,
    toUnfollowCount: 8
  }];
  private progressSessionData: IDashSession[] = [
    {
      id: '1',
      isNew: false,
      date: 'Today, 26 May',
      toFollowCount: 12,
      toFollowProgress: 4,
      toLikeCount: 20,
      toLikeProgress: 4,
      toUnfollowCount: 8,
      toUnfollowProgress: 0
    },
    {
      id: '2',
      isNew: false,
      date: 'Yesterday, 25 May',
      toFollowCount: 12,
      toFollowProgress: 4,
      toLikeCount: 20,
      toLikeProgress: 4,
      toUnfollowCount: 8,
      toUnfollowProgress: 0
    }
  ]
  private completedSessionData: IDashSession[] = [
    {
      id: '1',
      isNew: false,
      date: 'Yesterday, 25 May',
      toFollowCount: 12,
      toFollowProgress: 12,
      toLikeCount: 20,
      toLikeProgress: 20,
      toUnfollowCount: 8,
      toUnfollowProgress: 8
    },
    {
      id: '2',
      isNew: false,
      date: '24 May',
      toFollowCount: 12,
      toFollowProgress: 12,
      toLikeCount: 20,
      toLikeProgress: 20,
      toUnfollowCount: 8,
      toUnfollowProgress: 8
    }
  ]

  render() {
    return (
      <View style={{...Helpers.mainView, backgroundColor:'#F5F6F7'}}>
        <TabHeader
          isInfo={false}
          title={i18n.t('dashboard')}
          settingsHandler={this.goSettings.bind(this)}
          notificationHandler={this.goNotification.bind(this)} />



        <View style={{paddingHorizontal:18, flexGrow:1, marginVertical:6}}>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:25, fontFamily:Fonts.medium, color:Colors.text}}>{i18n.t('hi')} Sarah</Text>
            <Text style={this.styles.text}>{i18n.t('get_going')}</Text>
            <Text style={this.styles.text}>{i18n.t('select_session_to_start')}</Text>
          </View>


          <View style={{...Helpers.boxShadow, marginVertical:15, flex:1}}>
            <SessionTopTab
              newSessionData={this.newSessionData}
              progressSessionData={this.progressSessionData}
              completedSessionData={this.completedSessionData}
              onGoLike={this.goLike.bind(this)}
              onGoFollow={this.goFollow.bind(this)}
              onGoUnfollow={this.goUnfollow.bind(this)} />
          </View>
        </View>



        {
        (this.context.isNew)
          ? <TabOverlay 
              header={i18n.t('dashboard')}
              body={<Text>{i18n.t('dashboard_text')}</Text>}
              next={i18n.t('next')}
              onNext={this.overlayNext.bind(this)}
              onExit={this.context.onEndNew} />
          : null
        }
      </View>
    )
  }

  public overlayNext(): void {
    this.context.tabOverlayHandler('Follow');
    this.props.navigation.navigate('Follow');
  }

  public goSettings(): void {
    this.context.onGoSettings();
  }

  public goNotification(): void {
    this.context.onGoNotifications();
  }

  public goFollow(): void {
    this.props.navigation.navigate('Follow');
  }
  public goUnfollow(): void {
    this.props.navigation.navigate('Unfollow');
  }

  public goLike(): void {
    this.props.navigation.navigate('PostsToLike');
  }

  public styles = StyleSheet.create({
    text:
    {
      fontSize:16,
      fontFamily:Fonts.light,
      color:Colors.text,
      lineHeight: 22
    }
  })
}