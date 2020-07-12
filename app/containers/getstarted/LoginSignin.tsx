import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TGetstartedStackParam } from '../../types/TGetstartedStackParam';
import { Colors, Helpers, Fonts } from '../../theme';
import Instagram from '../../assets/images/instagram.svg';
import { DefaultButton, BorderButton } from '../../components/Buttons';
import i18n from 'i18n-js';

export default class LoginSignin extends Component<{navigation:StackNavigationProp<TGetstartedStackParam, 'LoginSignin'>}> {
  render() {
    return (
      <View style={{...Helpers.mainView, position: "relative", justifyContent:"flex-end", alignItems:"center"}}>
        <View style={this.styles.halfCircle}></View>

        <View style={Helpers.absoluteCenter}>
          <Instagram width={95} />
          <Text style={{...Helpers.headerText, color:Colors.primary, fontFamily:Fonts.bold}}>Growth Pal</Text>
          <Text style={{fontSize:16, color:Colors.text, marginTop:15}}>{i18n.t('Android_Mobile_1_text')}</Text>
        </View>

        <View style={{marginBottom:20}}>
          <DefaultButton
            title={i18n.t('getStarted')}
            style={{marginBottom:15}}
            onClick={this.goSign.bind(this)} />
          <BorderButton
            title={i18n.t('aleady_have_account')}
            onClick={this.goLogin.bind(this)} />
        </View>
      </View>
    )
  }

  public goSign(): void {
    this.props.navigation.navigate('Sign');
  }

  public goLogin(): void {
    this.props.navigation.navigate('Login');
  }

  private styles = StyleSheet.create({
    halfCircle: {
      width: 340,
      height: 340,
      backgroundColor: Colors.primary,
      borderRadius: 340,
      position: "absolute",
      top: -170,
      right: -170
    }
  })
}