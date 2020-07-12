import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Fonts } from '../theme';

interface IProps {
  title: string
  style?: ViewStyle
  svg?: JSX.Element
  onTextChange: (text: string) => void
}

export class DefaultInput extends Component<IProps> {
  render() {
    return (
      <View style={{...this.styles.input, ...this.props.style}}>
        {this.props.svg}
        <TextInput
          style={{marginLeft:15, fontSize:16, fontFamily:Fonts.regular, color:Colors.text, flexGrow:1}}
          placeholder={this.props.title} />
      </View>
    )
  }

  private styles = StyleSheet.create({
    input: {
      marginTop: 27,
      paddingBottom: 12,
      borderBottomWidth: 2,
      borderBottomColor: 'rgba(38, 38, 39, 0.2)',
      flexDirection: "row",
      alignItems: "center",
    }
  })
}