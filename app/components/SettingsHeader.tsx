import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ArrowLeft from '../assets/images/arrow-left.svg';
import { Fonts, Colors } from '../theme';

interface IProps {
  title: string
  onBack: () => void
}

export default class SettingsHeader extends Component<IProps> {
  render() {
    return (
      <View style={this.styles.viewContainer}>
        <TouchableWithoutFeedback onPress={this.props.onBack}>
          <ArrowLeft width={10} height={17} />
        </TouchableWithoutFeedback>
        
        <Text style={{fontSize:20, fontFamily:Fonts.medium, color:Colors.text}}> {this.props.title} </Text>

        <ArrowLeft width={10} height={17} style={{opacity:0}} />
      </View>
    )
  }

  private styles = StyleSheet.create({
    viewContainer:
    {
      height: 50,
      backgroundColor: '#fff',
      shadowOffset: {width:0, height:3},
      elevation: 6,
      shadowColor: '#00000029',
      shadowRadius: 6,
      flexDirection: 'row',
      paddingHorizontal: 15,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth:1,
      borderBottomColor: '#0000001A'
    }
  })
}