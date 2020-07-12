import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TGetstartedStackParam } from '../../types/TGetstartedStackParam';
import { Helpers, Fonts, Colors, AppTopPadding } from '../../theme';
import { DefaultInput } from '../../components/Inputs';
import Envolope from '../../assets/images/envolope.svg';
import Lock from '../../assets/images/lock.svg';
import { DefaultButton, ShadowButton } from '../../components/Buttons';
import Facebook from '../../assets/images/facebook.svg';
import Google from '../../assets/images/google.svg';
import i18n from "i18n-js";

export default class Login extends Component<{navigation:StackNavigationProp<TGetstartedStackParam, 'Login'>}> {
  private windowHeight: number = Dimensions.get('window').height;
  
  render() {
    return (
      <ScrollView style={{flex:1}}>
        <View style={{height:this.windowHeight-AppTopPadding}}>

          <View style={{...Helpers.absoluteCenter, backgroundColor:'#fff'}}>
            <View style={Helpers.defaultWidth}>
              <Text style={{fontSize:25, fontFamily:Fonts.medium}}>{i18n.t('signIn')}</Text>
    
              <DefaultInput
                title={i18n.t('email')}
                svg={<Envolope width={20} height={20} />}
                onTextChange={this.setText.bind(this)} />
    
              <DefaultInput
                title={i18n.t('password')}
                svg={<Lock width={20} height={20} />}
                onTextChange={this.setText.bind(this)} />
    
              <TouchableWithoutFeedback>
                <Text style={{color:Colors.primaryLight, textAlign:'right', paddingTop:15}}>{i18n.t('forgotPassword')}</Text>
              </TouchableWithoutFeedback>
    
              <View style={{alignItems:'center', marginVertical:35}}>
                <DefaultButton
                  title={i18n.t('signIn')}
                  onClick={this.loginHandler.bind(this)} />
              </View>
    
              <Text style={{textAlign:'center', color:Colors.text}}>
                {i18n.t('dont_have_account')}
                <TouchableWithoutFeedback onPress={this.goSign.bind(this)}>
                  <Text style={{color:Colors.primaryLight}}> {i18n.t('signUp')}</Text>
                </TouchableWithoutFeedback>
              </Text>
    
              <Text
                style={{marginTop:30, marginBottom:20, color:Colors.textLight, textAlign:'center', fontSize:16}}>
                {i18n.t('or_connect_using')}</Text>
    
              <View style={{flexDirection:'row', justifyContent:"space-between"}}>
                <ShadowButton
                  title='Facebook'
                  svg={<Facebook />}
                  onClick={this.loginHandler.bind(this)} />
                <ShadowButton
                  title='Google'
                  svg={<Google />}
                  onClick={this.loginHandler.bind(this)} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

  public setText(text: string): void {
    // Add different method for each input
  }

  public loginHandler(): void {
    this.props.navigation.navigate('Dashboard', {isNew: true});
    // this.props.navigation.navigate('IGSettings');
  }

  public goSign(): void {
    this.props.navigation.navigate('Sign');
  }
}