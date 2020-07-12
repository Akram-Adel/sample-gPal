import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TIGStackParam } from '../../types/TIGStackParam';
import { Helpers, Fonts } from '../../theme';
import { DefaultInput } from '../../components/Inputs';
import i18n from 'i18n-js';

export default class AddTimeZones extends Component<{navigation:StackNavigationProp<TIGStackParam, 'AddTimeZones'>}> {
  private timeZones: string[] = ['UTC+06:00 — British Indian Ocean Territory', 'UTC−04:00 (AST) — Anguilla, Bermuda,...', 'UTC−08:00 (PT) — larger western part of B...'];

  render() {
    return (
      <View style={{...Helpers.mainView, ...Helpers.settingsPadding}}>
        <View style={{flexDirection:'row', marginTop:10}}>
          <DefaultInput
            title={i18n.t('search_city_zone')}
            style={{marginTop:0, paddingBottom:0, flexGrow:1}}
            onTextChange={this.setText} />

        <TouchableOpacity onPress={this.cancelHandler.bind(this)}  style={{justifyContent:'center'}}>
          <Text
            style={{fontSize:16, marginLeft:20}}>
            {i18n.t('cancel')}</Text>
        </TouchableOpacity>
        </View>

        {
          this.timeZones.map((timeZone: string) =>
            <TouchableOpacity
              key={timeZone}
              style={{marginVertical:25}}
              onPress={this.addTimeZone.bind(this, timeZone)}>

              <Text
                style={{fontSize:16, fontFamily:Fonts.medium}}>
                {timeZone}</Text>
            </TouchableOpacity>)
        }
      </View>
    )
  }

  public setText(text: string): void {
    // Add different method for each input
  }

  public addTimeZone(timeZone: string): void {
    this.props.navigation.navigate('TimeZones', {timeZone: timeZone})
  }

  public cancelHandler(): void {
    this.props.navigation.goBack();
  }
}