import React, { Component } from 'react';
import { Text, View, Switch, StyleSheet, ScrollView, TextStyle } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TSettingsStackParam } from '../../types/TSettingsStackParam';
import { Helpers, Colors, Fonts } from '../../theme';
import SettingsHeader from '../../components/SettingsHeader';
import i18n from 'i18n-js';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { DefaultButton } from '../../components/Buttons';

interface BubbleProps {
  id: number
  val: string
  isActive: boolean
}

export default class NotificationsReminders extends Component<{navigation:StackNavigationProp<TSettingsStackParam, 'NotificationsReminders'>}> {
  private isOn: boolean = true;
  private notificationDays: BubbleProps[] = [
    {id: 0, val: 'Mo', isActive: true},
    {id: 1, val: 'Tu', isActive: false},
    {id: 2, val: 'We', isActive: true},
    {id: 3, val: 'Th', isActive: false},
    {id: 4, val: 'Fr', isActive: false},
    {id: 5, val: 'Sa', isActive: false},
    {id: 6, val: 'Su', isActive: false}
  ]
  private notificationTimes: BubbleProps[] = [
    {id: 0, val:'08:00 - 10:00', isActive: false},
    {id: 1, val:'10:00 - 12:00', isActive: false},
    {id: 2, val:'12:00 - 14:00', isActive: false},
    {id: 3, val:'14:00 - 16:00', isActive: false},
    {id: 4, val:'16:00 - 18:00', isActive: false},
    {id: 5, val:'18:00 - 20:00', isActive: false},
    {id: 6, val:'20:00 - 22:00', isActive: true},
    {id: 7, val:'22:00 - 00:00', isActive: true},
    {id: 8, val:'00:00 - 02:00', isActive: false},
    {id: 9, val:'02:00 - 04:00', isActive: false},
    {id: 10, val:'04:00 - 06:00', isActive: false},
    {id: 11, val:'06:00 - 08:00', isActive: false},
  ]

  render() {
    return (
      <View style={{...Helpers.mainView, backgroundColor:'#fff'}}>
        <SettingsHeader
          title='Time Zone'
          onBack={this.goBack.bind(this)} />



        <ScrollView style={{paddingHorizontal:16}}>
          <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center', paddingVertical:20, borderBottomWidth:1, borderBottomColor:Colors.textLight}}>
            <Text style={{fontSize:18, fontFamily:Fonts.regular, color:Colors.text}}> {i18n.t('notifications')} </Text>
            <Switch
              trackColor={{false:Colors.textLight, true:Colors.primary}}
              thumbColor={this.isOn ? "#fff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => this.notificationsOnHandler()}
              value={this.isOn} />
          </View>
  
  
          <View style={{marginVertical:26}}>
            <Text style={{fontSize:16, color:Colors.text}}> {i18n.t('choose_days_notified')} </Text>
  
            <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:13}}>
              { this.notificationDays.map((day: BubbleProps) =>
                <ColoredBubble
                  key={day.id}
                  text={day.val}
                  isActive={day.isActive}
                  onClick={() => {this.notificationDays[day.id].isActive = !this.notificationDays[day.id].isActive; this.setState({})}} />
              )}
            </View>
          </View>
  
  
          <View style={{flexGrow:1}}>
            <Text style={{fontSize:16, color:Colors.text}}> {i18n.t('choose_times_notified')} </Text>
  
            <View style={{flexDirection:'row', flexWrap:"wrap", marginVertical:13, justifyContent:'center'}}>
              { this.notificationTimes.map((time: BubbleProps) =>
                <ColoredBubble
                  key={time.id}
                  text={time.val}
                  isActive={time.isActive}
                  textStyle={{fontSize:13}}
                  onClick={() => {this.notificationTimes[time.id].isActive = !this.notificationTimes[time.id].isActive; this.setState({})}} />
              )}
            </View>
          </View>
  
          <View style={{alignItems:"center", marginBottom:20}}>
            <DefaultButton
              title={i18n.t('saveChanges')}
              onClick={this.saveHandler.bind(this)} />
          </View>
        </ScrollView>
      </View>
    )
  }

  public notificationsOnHandler(): void {
    this.isOn = !this.isOn;
    this.setState({});
  }

  public saveHandler(): void {
    this.props.navigation.goBack();
  }

  public goBack(): void {
    this.props.navigation.goBack();
  }
}

interface IProps {
  text: string
  isActive: boolean
  onClick: () => void
  textStyle?: TextStyle
}

class ColoredBubble extends Component<IProps> {
  render() {
    return(
      <TouchableWithoutFeedback
        style={[this.styles.touch, (this.props.isActive) ? this.styles.activeTouch : this.styles.passiveTouch]}
        onPress={this.props.onClick} >

        <Text style={[this.styles.text, this.props.textStyle, (this.props.isActive) ? this.styles.activeText : this.styles.passiveText]}> {this.props.text} </Text>
      </TouchableWithoutFeedback>
    )
  }

  private styles = StyleSheet.create({
    touch:
    {
      borderRadius:35,
      minWidth: 39,
      minHeight:37,
      alignItems: 'center',
      margin:6
    },
    activeTouch: { backgroundColor:'#F5B122', borderWidth:1, borderColor:'#F5B122' },
    passiveTouch: { borderWidth:1, borderColor:'#EFEFF3' },

    text: {
      fontSize:16,
      fontFamily:Fonts.regular,
      paddingHorizontal:4,
      paddingVertical:8
    },
    activeText: { color:'#fff' },
    passiveText: { color:Colors.text }
  })
}