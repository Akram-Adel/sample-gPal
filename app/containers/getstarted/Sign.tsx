import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TGetstartedStackParam } from '../../types/TGetstartedStackParam';
import { Helpers, Fonts, Colors, AppTopPadding } from '../../theme';
import { DefaultInput } from '../../components/Inputs';
import User from '../../assets/images/user.svg';
import Envolope from '../../assets/images/envolope.svg';
import Lock from '../../assets/images/lock.svg';
import { DefaultButton } from '../../components/Buttons';
import i18n from 'i18n-js';

export default class Sign extends Component<{navigation:StackNavigationProp<TGetstartedStackParam, 'Sign'>}> {
  private windowHeight: number = Dimensions.get('window').height;

  render() {
    return (
      <ScrollView style={{flex:1}}>
        <View style={{height:this.windowHeight-AppTopPadding}}>

          <View style={{...Helpers.flexGrowCenter, backgroundColor:'#fff'}}>
            <View style={Helpers.defaultWidth}>
              <Text style={{fontSize:25, fontFamily:Fonts.medium}}>{i18n.t('signUp')}</Text>
    
              <DefaultInput
                title={i18n.t('firstName')}
                svg={<User width={20} height={20} />}
                onTextChange={this.setText.bind(this)} />
    
              <DefaultInput
                title={i18n.t('lastName')}
                svg={<User width={20} height={20} />}
                onTextChange={this.setText.bind(this)} />
    
              <DefaultInput
                title={i18n.t('email')}
                svg={<Envolope width={20} height={20} />}
                onTextChange={this.setText.bind(this)} />
    
              <DefaultInput
                title={i18n.t('password')}
                svg={<Lock width={20} height={20} />}
                onTextChange={this.setText.bind(this)} />
    
              <DefaultInput
                title={i18n.t('confirmPassword')}
                svg={<Lock width={20} height={20} />}
                onTextChange={this.setText.bind(this)} />
    
              <View style={{alignItems:'center', marginVertical:35}}>
                <DefaultButton
                  title={i18n.t('signUp')}
                  onClick={this.signUpHandler.bind(this)} />
              </View>
    
              <Text style={{textAlign:'center', color:Colors.text}}>
                {i18n.t('have_account')}
                <TouchableWithoutFeedback onPress={this.goLogin.bind(this)}>
                  <Text style={{color:Colors.primaryLight}}> {i18n.t('signIn')}</Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

  public setText(text: string): void {
    // Add different method for each input
  }

  public signUpHandler(): void {
    this.props.navigation.navigate('IGSettings');
  }

  public goLogin(): void {
    this.props.navigation.navigate('Login');
  }
}