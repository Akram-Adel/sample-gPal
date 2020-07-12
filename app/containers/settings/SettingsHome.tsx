import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import i18n from 'i18n-js';
import { Fonts, Colors, Helpers } from '../../theme';
import SettingsIcon from '../../assets/images/Settings.svg';
import HashtagCircle from '../../assets/images/hashtag-circle.svg';
import TimeZoneCircle from '../../assets/images/timezone-circle.svg';
import NotificationCircle from '../../assets/images/notification-circle.svg';
import RightArrow from '../../assets/images/arrow-right.svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { TSettingsStackParam } from '../../types/TSettingsStackParam';
import Goal from '../../assets/images/goal.svg';
import SettingsHeader from '../../components/SettingsHeader';

export default class SettingsHome extends Component<{navigation:StackNavigationProp<TSettingsStackParam, 'SettingsHome'>}> {
  render() {
    return (
      <View style={{flex:1}}>
        <SettingsHeader
          title={i18n.t('settings')}
          onBack={() => {}} />



        <View style={{marginHorizontal:18, marginVertical:6, flex:1}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:26}}>
            <View style={this.styles.leftRow}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={{width: 60, height: 60, borderRadius:60}} />

              <View style={{marginLeft:20}}>
                <Text style={{fontSize:18, fontFamily:Fonts.medium}}> Sarah Justin </Text>
                <Text style={{color:Colors.textLight}}> sarahoustin99@gmail.com </Text>
              </View>
            </View>

            <TouchableWithoutFeedback onPress={this.goAccountSettings.bind(this)}>
              <SettingsIcon width={25} height={25} />
            </TouchableWithoutFeedback>
          </View>



          <View style={{...Helpers.boxShadow, padding:18}}>
            <Text style={{fontFamily:Fonts.bold, fontSize:16}}> {i18n.t('basicInfo')} </Text>


            <TouchableWithoutFeedback onPress={this.goHashtagsSettings.bind(this)}>
              <View style={this.styles.infoCardView}>
                <View style={this.styles.leftRow}>
                  <HashtagCircle width={24} height={24} />
  
                  <View style={{marginLeft:10}}>
                    <Text style={{fontFamily:Fonts.medium}}> {i18n.t('hashtags')} (3) </Text>
                    <Text style={{fontSize:12, color:Colors.textLight}}> #music, #gitar, #rockandrole </Text>
                  </View>
                </View>
  
                <RightArrow width={7} height={14} />
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.goTimeZonesSettings.bind(this)}>
              <View style={this.styles.infoCardView}>
                <View style={this.styles.leftRow}>
                  <TimeZoneCircle width={24} height={24} />
  
                  <View style={{marginLeft:10}}>
                    <Text style={{fontFamily:Fonts.medium}}> {i18n.t('timeZone')} </Text>
                    <Text style={{fontSize:12, color:Colors.textLight}}> London, UK (GMT+1) </Text>
                  </View>
                </View>
  
                <RightArrow width={7} height={14} />
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.goNotificationSettings.bind(this)}>
              <View style={{...this.styles.infoCardView, ...this.styles.endInfoView}}>
                <View style={this.styles.leftRow}>
                  <NotificationCircle width={24} height={24} />
  
                  <View style={{marginLeft:10}}>
                    <Text style={{fontFamily:Fonts.medium}}> {i18n.t('notifications_reminders')} </Text>
                    <Text style={{fontSize:12, color:Colors.textLight}}> {i18n.t('on')} </Text>
                  </View>
                </View>
  
                <RightArrow width={7} height={14} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        


          <View style={{...Helpers.boxShadow, paddingHorizontal:18, paddingVertical:13, marginTop:18}}>
            <TouchableWithoutFeedback onPress={this.goGrowthGoals.bind(this)}>
              <View style={{...this.styles.infoCardView, ...this.styles.endInfoView, paddingTop:0}}>
                <View style={this.styles.leftRow}>
                  <Goal width={40} height={40} />
  
                  <View style={{marginLeft:15}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Text style={{fontSize:16, color:Colors.text}}> {i18n.t('growthGoals')} </Text>
                      <View style={{backgroundColor:'#F6AD20', borderRadius:20}}>
                        <Text
                          style={{paddingVertical:4, paddingHorizontal:10, fontSize:8, color:'#fff'}}>
                          {i18n.t('upgradeNow')} </Text>
                      </View>
                    </View>

                    <Text style={{fontSize:12, color:Colors.textLight}}> {i18n.t('grow')} </Text>
                  </View>
                </View>
  
                <RightArrow width={10} height={20} />
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={{flexGrow:1, justifyContent:'flex-end', marginBottom:10}}>
            <Text style={{textAlign:'center'}}>Version 1.0.4</Text>
          </View>
        </View>
      </View>
    )
  }

  public goAccountSettings(): void {
    this.props.navigation.navigate('AccountSettings');
  }

  public goHashtagsSettings(): void {
    this.props.navigation.navigate('Hashtags');
  }

  public goTimeZonesSettings(): void {
    this.props.navigation.navigate('TimeZones');
  }

  public goNotificationSettings(): void {
    this.props.navigation.navigate('NotificationsReminders');
  }

  public goGrowthGoals(): void {
    this.props.navigation.navigate('GrowthGoals');
  }

  private styles = StyleSheet.create({
    infoCardView:
    {
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomColor:Colors.textLight,
      borderBottomWidth:1,
      paddingVertical:15,
      alignItems:'center',
    },
    endInfoView:
    {
      borderBottomWidth:0,
      paddingBottom:0
    },
    leftRow:
    {
      flexDirection:'row',
      alignItems:'center',
    }
  })
}