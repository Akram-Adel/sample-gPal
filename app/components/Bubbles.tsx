import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, ViewStyle } from 'react-native';
import Remove from '../assets/images/x.svg';
import { Colors, Fonts } from '../theme';
import Plus from '../assets/images/Plus.svg';

interface IProps {
  title: string
  onClick: (arg?: string) => void
  style?: ViewStyle
}

export class FilledBubble extends Component<IProps> {
  private stringLimig:number = 30
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.onClick()}>
        <View style={this.styles.container}>
          <Text
            style={{color:Colors.text, fontFamily:Fonts.medium, fontSize:18, marginRight:25}}>
            {(this.props.title.length > this.stringLimig) ? this.props.title.substring(0, this.stringLimig-3) + '...' : this.props.title}</Text>

          <Remove width={18} />
        </View>
      </TouchableWithoutFeedback>
    )
  }

  private styles = StyleSheet.create({
    container:
    {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: Colors.secondary,
      padding: 12,
      margin: 11,
      borderRadius: 40,
      alignItems: 'center',
    }
  })
}

export class DottedBubble extends Component<IProps> {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.onClick()}>
        <View style={[this.styles.container, this.props.style]}>
          <Plus width={18}/>

          <Text
            style={{color:Colors.text, fontFamily:Fonts.medium, fontSize:18, marginLeft:15}}>
            {this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  private styles = StyleSheet.create({
    container:
    {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 12,
      margin: 11,
      borderRadius: 40,
      borderWidth: 1,
      borderStyle: "dotted",
      borderColor: Colors.text,
      alignItems: 'center'
    }
  })
}