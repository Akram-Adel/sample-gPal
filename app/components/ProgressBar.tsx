import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Colors } from '../theme';
import LeftArrow from '../assets/images/left_arrow.svg';

interface IProps {
  progress: string
  onBack: () => void
}

export default class ProgressBar extends Component<IProps> {
  private windowWidth = Dimensions.get('window').width;

  render() {
    return (
      <View style={{width:this.windowWidth-30, flexDirection:'row', alignItems:'center'}}>
        <TouchableWithoutFeedback onPress={this.props.onBack}>
          <LeftArrow />
        </TouchableWithoutFeedback>

        <View style={{backgroundColor:Colors.secondary, height:14, flexGrow:1, borderRadius:100, marginLeft:15}}>
          <View style={{backgroundColor:Colors.primary, width:this.props.progress, height:'100%', borderRadius:100}}>
          </View>
        </View>
      </View>
    )
  }
}