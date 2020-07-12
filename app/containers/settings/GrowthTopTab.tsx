import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import i18n from 'i18n-js';
import { Fonts, Colors, Helpers } from '../../theme';
import Checked from '../../assets/images/checked.svg';
import { DefaultButton } from '../../components/Buttons';

interface IProps {
  currentGoal: string
  upgradeHandler: () => void
}

export default class GrowthTopTap extends Component<IProps> {
  private Tab = createMaterialTopTabNavigator();

  private Grow(props: IProps): JSX.Element {
    return (
      <ScrollView style={{flex:1}}>
        <GrowCard
          header="Grow"
          followers={50}
          price="Free"
          activities={240}
          follows={12}
          unfollows={10}
          likes={48}
          isActive={props.currentGoal == 'grow'}
          onClick={props.upgradeHandler} />
      </ScrollView>
    )
  }

  private fastGrow(props: IProps): JSX.Element {
    return (
      <ScrollView style={{flex:1}}>
        <GrowCard
          header="Fast Grow"
          followers={100}
          price="$10 monthly"
          activities={500}
          follows={30}
          unfollows={20}
          likes={120}
          isActive={props.currentGoal == 'fastGrow'}
          onClick={props.upgradeHandler} />
      </ScrollView>
    )
  }

  private superGrow(props: IProps): JSX.Element {
    return (
      <ScrollView style={{flex:1}}>
        <GrowCard
          header="Super Grow"
          followers={200}
          price="$29 monthly"
          activities={800}
          follows={50}
          unfollows={40}
          likes={450}
          isActive={props.currentGoal == 'superGrow'}
          onClick={props.upgradeHandler} />
      </ScrollView>
    )
  }

  render() {
    return (
      <this.Tab.Navigator
        tabBarOptions={{
          activeTintColor:Colors.primary, inactiveTintColor:Colors.textLight,
          tabStyle: {paddingHorizontal:0},
          labelStyle: {fontSize:18, textTransform:'none'} }}>

        <this.Tab.Screen name="Grow" component={this.Grow.bind(this, this.props)} />
        <this.Tab.Screen name="Fast Grow" component={this.fastGrow.bind(this, this.props)} />
        <this.Tab.Screen name="Super Grow" component={this.superGrow.bind(this, this.props)} />
      </this.Tab.Navigator>
    )
  }
}

interface ICardProps {
  header: string
  followers: number
  price: string
  activities: number
  follows: number
  unfollows: number
  likes: number
  isActive: boolean
  onClick: () => void
}

class GrowCard extends Component<ICardProps> {
  render() {
    return (
      <View style={{flex:1, margin:18, ...Helpers.boxShadow}}>
        <View style={this.styles.blueView}>
          <Text style={{color:'#fff', fontFamily:Fonts.light, fontSize:16}}> {i18n.t('growthGoals')} </Text>
          <Text style={{color:'#fff', fontFamily:Fonts.medium, fontSize:25}}> {this.props.header} </Text>
          <Text style={{color:'#fff', fontFamily:Fonts.light, fontSize:18}}> {this.props.followers} {i18n.t('followers_per_week')} </Text>
          <View style={{backgroundColor:'rgba(255, 255, 255, 0.3)', paddingHorizontal:48, paddingVertical:6, borderRadius:32, marginTop:15}}>
            <Text style={{fontSize:16, fontFamily:Fonts.regular, color:'#fff'}}> {this.props.price} </Text>
          </View>
        </View>

        <View style={{marginVertical:15, marginLeft:30, flexGrow:1}}>
          <View style={this.styles.view}>
            <Checked width={20} height={20} />
            <Text style={this.styles.text}> {this.props.activities} {i18n.t('activities_day')} </Text>
          </View>

          <View style={this.styles.view}>
            <Checked width={20} height={20} />
            <Text style={this.styles.text}> {this.props.follows} {i18n.t('follows_day')} </Text>
          </View>

          <View style={this.styles.view}>
            <Checked width={20} height={20} />
            <Text style={this.styles.text}> {this.props.unfollows} {i18n.t('unfollows_day')} </Text>
          </View>

          <View style={this.styles.view}>
            <Checked width={20} height={20} />
            <Text style={this.styles.text}> {this.props.likes} {i18n.t('likes_day')} </Text>
          </View>
        </View>

        <View style={{alignItems:'center', marginBottom:25}}>
          <DefaultButton
            title={(this.props.isActive) ? 'Current Growth Goals' : 'Upgrade to Fast Grow'}
            onClick={this.props.onClick}
            style={(this.props.isActive) ? {backgroundColor:Colors.textLight} : undefined} />
        </View>
      </View>
    )
  }

  private styles = StyleSheet.create({
    blueView:
    {
      alignItems:'center',
      backgroundColor:Colors.primary,
      paddingVertical:18,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      borderTopRightRadius:7,
      borderTopLeftRadius:7
    },
    view: {
      flexDirection:'row',
      alignItems:'center',
      marginVertical:15
    },
    text:
    {
      fontFamily:Fonts.medium,
      color:Colors.text,
      fontSize:15,
      marginLeft:12
    }
  })
}