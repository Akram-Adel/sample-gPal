import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TGetstartedStackParam } from '../../types/TGetstartedStackParam';
import { Helpers, Colors, Fonts } from '../../theme';
import SettingsHeader from '../../components/SettingsHeader';

interface INotification {
  id: number
  title: string
  date: string
  body: string
}

interface INotifications {
  id: number
  status: string
  body: INotification[]
}

export default class Notifications extends Component<{navigation:StackNavigationProp<TGetstartedStackParam, 'Notifications'>}> {
  private notifications: INotifications[] = [
    {
      id: 1,
      status: 'New',
      body: [
        {
          id: 1,
          title: 'New Session',
          date: '2 min ago',
          body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.'
        },
        {
          id: 2,
          title: 'Message Title',
          date: '4 hours ago',
          body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.'
        }
      ]
    },
    {
      id: 2,
      status: 'Earlier',
      body: [
        {
          id: 3,
          title: 'Message Title',
          date: '25 May',
          body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.'
        }
      ]
    },
  ]

  render() {
    return (
      <View style={{...Helpers.mainView}}>
        <SettingsHeader
          title='Notifications'
          onBack={this.goBackHandler.bind(this)} />



        <View style={{marginHorizontal:16}}>

          {this.notifications.map((item: INotifications) => 
            <View key={item.id} style={{marginVertical:25}}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize:16, color:Colors.textLight}}>{item.status}</Text>

                {(item.status == "New")
                ? <View style={{borderRadius:100, backgroundColor:'#FF0000', marginLeft:7}}>
                    <Text style={{paddingHorizontal:6, fontSize:14, color:'#fff'}}>{item.body.length}</Text>
                  </View>
                : null}
              </View>



              {item.body.map((notification: INotification) =>
                <View key={notification.id} style={{marginVertical:18}}>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text
                      style={{color:Colors.primary, fontSize:16, fontFamily:Fonts.medium}}>
                      {notification.title}</Text>

                    <Text
                      style={{color:Colors.textLight, fontSize:14, marginLeft:6, flexGrow:1}}>
                      {notification.date}</Text>

                    {(item.status == "New")
                      ? <View style={{width:5, height:5, backgroundColor:'#FF0000', borderRadius:5}}></View>
                      : null
                    }
                  </View>


                  <View style={{marginVertical:7}}>
                    <Text style={{fontSize:14, color:Colors.text}}>{notification.body}</Text>
                  </View>
                </View>
              )}
            </View>
          )}

        </View>
      </View>
    )
  }

  public goBackHandler(): void {
    this.props.navigation.goBack();
  }
}