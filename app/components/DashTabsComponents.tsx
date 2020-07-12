import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Colors, Fonts } from '../theme';
import XWhite from '../assets/images/x_white.svg';
import Bell from '../assets/images/bell.svg';
import InfoButton from '../assets/images/information-button.svg';
import SettingsIcon from '../assets/images/Settings.svg';

interface IOverlayProps {
    next: string
    header: string
    body: JSX.Element
    onNext: () => void
    onExit: () => void
}

interface IHeaderProps {
    isInfo: boolean
    infoHandler?: () => void
    title: string
    settingsHandler: () => void
    notificationHandler: () => void
}

export class TabOverlay extends Component<IOverlayProps> {
  render() {
    return (
      <View style={this.styles.mainView}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableWithoutFeedback onPress={() => this.props.onExit()}>
            <XWhite width={30} height={30} />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => this.props.onNext()}>
            <Text style={{fontSize:20, color:'#fff', fontFamily:Fonts.medium}}> {this.props.next} </Text>
          </TouchableWithoutFeedback>
        </View>
        
        <View style={{marginTop:20, justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:20, textAlign:'center', color:'#fff', fontFamily:Fonts.medium}}> {this.props.header} </Text>
          <Text style={this.styles.bodyText}> {this.props.body} </Text>
        </View>
      </View>
    )
  }

  private styles = StyleSheet.create({
      mainView:
      {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 220,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 15,
        elevation: 10,
        zIndex: 10
      },
      bodyText:
      {
        paddingTop: 20,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: Fonts.light,
        color: '#fff',
        lineHeight: 25
      }
  })
}

export class TabHeader extends Component<IHeaderProps> {
  render() {
    return (
      <View style={this.styles.viewContainer}>
        <TouchableWithoutFeedback onPress={this.props.notificationHandler}>

          <View style={this.styles.iconView}>
            <Bell width={20} height={22} />
            <View style={{width:5, height:5, borderRadius:5, backgroundColor:'#FF0000'}}></View>
          </View>
        </TouchableWithoutFeedback>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{fontSize:20, fontFamily:Fonts.medium, color:Colors.text}}> {this.props.title} </Text>
          
          <TouchableWithoutFeedback onPress={this.props.infoHandler}>
            <View style={this.styles.iconView}>
              {(this.props.isInfo) ? <InfoButton width={25} height={25} /> : null}
            </View>
          </TouchableWithoutFeedback>
        </View>

        <TouchableWithoutFeedback onPress={this.props.settingsHandler}>

          <View style={this.styles.iconView}>
            <SettingsIcon width={20} height={22} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  private styles = StyleSheet.create({
    viewContainer:
    {
      height: 50,
      backgroundColor: '#fff',
      shadowOffset: {width:0, height:12},
      elevation: 6,
      shadowColor: '#000',
      shadowRadius: 6,
      flexDirection: 'row',
      paddingHorizontal: 15,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth:1,
      borderBottomColor: '#0000001A'
    },
    iconView:
    {
      width: 25,
      flexDirection:'row',
      justifyContent: 'center'
    }
  })
}