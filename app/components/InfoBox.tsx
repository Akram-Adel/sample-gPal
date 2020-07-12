import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InformationButton from '../assets/images/information_button.svg';
import { Colors, Fonts } from '../theme';

interface IProps {
  header: string
  body: string
}

export default class InfoBox extends Component<IProps> {
  render() {
    return (
      <View style={{backgroundColor:Colors.secondary, borderRadius:7, padding:15}}>
        <View style={{flexDirection:'row', alignItems:'center', marginBottom:15}}>
          <InformationButton />
          <Text style={{paddingLeft:10, fontFamily:Fonts.medium}}>{this.props.header}</Text>
        </View>
        <Text style={{lineHeight:20}}>{this.props.body}</Text>
      </View>
    )
  }
}