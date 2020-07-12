import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Fonts } from '../theme';

interface IProps {
  title: string
  style?: ViewStyle
  svg?: JSX.Element
  onClick: () => void
}

export class DefaultButton extends Component<IProps> {
  render() {
    return (
      <TouchableOpacity
        style={{...this.styles.button, ...this.props.style}}
        onPress={this.props.onClick}>
        <Text style={{fontSize:16, fontFamily:Fonts.medium, color:'#fff'}}> {this.props.title} </Text>
      </TouchableOpacity>
    )
  }

  private styles = StyleSheet.create({
    button:
    {
      backgroundColor: Colors.primary,
      shadowOffset: {width:0, height:3},
      elevation: 6,
      shadowColor: '#00000029',
      shadowRadius: 6,
      width: 258,
      alignItems: "center",
      paddingVertical: 16,
      borderRadius: 35
    }
  })
}

export class BorderButton extends Component<IProps> {
  render() {
    return (
      <TouchableOpacity
        style={{...this.styles.button, ...this.props.style}}
        onPress={this.props.onClick}>
        <Text style={{fontSize:16, fontFamily:Fonts.medium, color:Colors.primary}}> {this.props.title} </Text>
      </TouchableOpacity>
    )
  }

  private styles = StyleSheet.create({
    button:
    {
      backgroundColor: '#fff',
      width: 258,
      alignItems: "center",
      paddingVertical: 16,
      borderRadius: 35,
      borderWidth: 2,
      borderColor: Colors.primary
    }
  })
}

export class ShadowButton extends Component<IProps> {
  render() {
    return (
      <TouchableOpacity
        style={{...this.styles.button, ...this.props.style}}
        onPress={this.props.onClick}>
        {this.props.svg}
        <Text style={{fontSize:16, fontFamily:Fonts.regular, color:Colors.text, paddingLeft:15}}> {this.props.title} </Text>
      </TouchableOpacity>
    )
  }

  private styles = StyleSheet.create({
    button:
    {
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: "center",
      paddingVertical: 12,
      paddingHorizontal: 15,
      borderRadius: 35,
      elevation: 6,
      shadowOffset: {width:0, height:3},
      shadowRadius: 6,
      shadowColor: '#00000029'
    }
  })
}