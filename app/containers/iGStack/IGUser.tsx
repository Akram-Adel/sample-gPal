import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TIGStackParam } from '../../types/TIGStackParam';
import { Fonts, Colors, Helpers, AppHeaderHeight, AppTopPadding } from '../../theme';
import InstagramLogo from '../../assets/images/instagram_logo.svg';
import { DefaultInput } from '../../components/Inputs';
import { DefaultButton } from '../../components/Buttons';
import InfoBox from '../../components/InfoBox';
import i18n from 'i18n-js';

export default class IGUser extends Component<{navigation:StackNavigationProp<TIGStackParam, 'IGUser'>}> {
  private viewHeight:number = Dimensions.get('window').height-AppHeaderHeight-AppTopPadding;
  private userName: string = '';

  // Variables of the part that changes when IG account is found
  private headerText:string = i18n.t('add_ig_username');
  private accountContainer:JSX.Element;
  private buttonText:string = i18n.t('next');

  constructor(props:{navigation:StackNavigationProp<TIGStackParam, 'IGUser'>}) {
    super(props);
    this.accountContainer =
    (
      <View style={this.styles.accountContainer}>
        <View style={{alignItems:'center'}}>
          <InstagramLogo width={100} height={100} />
        </View>

        <DefaultInput
          title={i18n.t('igUsername')}
          onTextChange={this.setText} />
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={{flex:1}}>

        <View style={{...Helpers.mainView, ...Helpers.settingsPadding, height:this.viewHeight}}>
          <Text
            style={{...Helpers.headerText, marginTop:20}}>
            {this.headerText} </Text>
  
          <View
            style={Helpers.flexGrowCenter}>
            {this.accountContainer}
          </View>
  
          <View style={{alignItems:'center'}}>
            <DefaultButton
              title={this.buttonText}
              onClick={this.userNameHandler.bind(this)} />
          </View>
  
          <Text
            style={{color:Colors.textLight, textAlign:'center', paddingVertical:24}}>
            {i18n.t('can_change_settings_later')} </Text>
  
          <InfoBox
            header={i18n.t('how_use_ig_username')}
            body={i18n.t('how_use_ig_username_text')} />
        </View>
      </ScrollView>
    )
  }

  public setText(text: string): void {
    // Add different method for each input
  }

  public userNameHandler(): void {
    if (this.userName.length == 0) {
      this.userName = "#"
      this.changeAccountContainer();

    } else {
      this.props.navigation.navigate('HashtagFinder');
    }
  }
  private changeAccountContainer() {
    this.headerText = i18n.t('confirm_account');

    this.accountContainer =
    (
      <View style={this.styles.accountContainer}>
        <View style={{alignItems:'center'}}>
          <Image
            source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
            style={{width: 100, height: 100, borderRadius:55}} />
        </View>

        <View style={{alignItems:'center'}}>
          <Text style={this.styles.accountHeavy}>sarah_jstn</Text>
          <Text style={{...this.styles.accountLight, marginVertical:5}}>full name</Text>

          <View style={{flexDirection:'row', marginTop:5}}>
            <Text style={this.styles.accountLight}>Followers:</Text>
            <Text style={this.styles.accountHeavy}> 119 </Text>

            <Text> | </Text>

            <Text style={this.styles.accountLight}> Following:</Text>
            <Text style={this.styles.accountHeavy}> 531</Text>
          </View>
        </View>
      </View>
    )

    this.buttonText = i18n.t('confirm_account_button');

    this.setState({});
  }

  private styles = StyleSheet.create({
    accountContainer:
    {
      width:'100%',
      flex:1,
      justifyContent:'center'
    },
    accountHeavy:
    {
      fontSize: 18,
      fontFamily: Fonts.medium
    },
    accountLight:
    {
      fontSize: 18,
      color: Colors.textLight,
      fontFamily: Fonts.regular
    }
  })
}