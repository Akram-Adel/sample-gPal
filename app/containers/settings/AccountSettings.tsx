import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TSettingsStackParam } from '../../types/TSettingsStackParam';
import { Helpers, Colors } from '../../theme';
import SettingsHeader from '../../components/SettingsHeader';
import i18n from 'i18n-js';

export default class AccountSettings extends Component<{navigation:StackNavigationProp<TSettingsStackParam, 'AccountSettings'>}> {
  render() {
    return (
      <View style={{...Helpers.mainView}}>
        <SettingsHeader
          title='ACCOUNT SETTINGS'
          onBack={this.goBack.bind(this)} />

      <View style={{...Helpers.settingsPadding, flex:1, backgroundColor:'#F5F6F8'}}>
        <View style={this.styles.bottomBorder}>
          <Text> {i18n.t('changePassword')} </Text>
        </View>

        <View style={this.styles.bottomBorder}>
          <Text> {i18n.t('getHelp')} </Text>
        </View>

        <View style={this.styles.bottomBorder}>
          <Text> {i18n.t('about_growth')} </Text>
        </View>

        <View style={{...this.styles.bottomBorder, borderBottomWidth:0}}>
          <Text> {i18n.t('logout')} </Text>
        </View>
      </View>
        
      </View>
    )
  }

  public goBack(): void {
    this.props.navigation.goBack();
  }

  private styles = StyleSheet.create({
    bottomBorder:
    {
      paddingVertical:20,
      borderBottomWidth:1,
      borderBottomColor: Colors.textLight
    }
  })
}