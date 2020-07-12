import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { IDashSession } from '../../types/IDashSession';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors, Fonts, Helpers } from '../../theme';
import Clock from '../../assets/images/clock.svg';
import i18n from 'i18n-js';
import LeftArrow from '../../assets/images/left-arrow.svg';

interface IProps {
  newSessionData: IDashSession[]
  progressSessionData: IDashSession[]
  completedSessionData: IDashSession[]
  onGoLike: () => void
  onGoFollow: () => void
  onGoUnfollow: () => void
}

export default class SessionTopTab extends Component<IProps> {
  private Tab = createMaterialTopTabNavigator();

  private newSession(props: IProps): JSX.Element {
    return (
      <ScrollView style={this.styles.scrollView}>
        {props.newSessionData.map((item: IDashSession) =>
          <View key={item.id} style={{paddingHorizontal:15, paddingVertical:20}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Clock width={10} height={10} />
              <Text style={{fontSize:16, fontFamily:Fonts.light}}> {item.date} </Text>
            </View>


            <StartToCards
              toFollow={item.toFollowCount}
              onToFollow={props.onGoFollow}
              toLike={item.toLikeCount}
              onToLike={() => props.onGoLike()}
              toUnfollow={item.toUnfollowCount}
              onToUnfollow={props.onGoUnfollow} />
          </View>
        )}
      </ScrollView>
    )
  }

  private inProgress(props: IProps): JSX.Element {
    return (
      <ScrollView style={this.styles.scrollView}>
        {props.progressSessionData.map((item: IDashSession) =>
          <View key={item.id} style={{paddingHorizontal:15, paddingVertical:20}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Clock width={10} height={10} />
              <Text style={{fontSize:16, fontFamily:Fonts.light}}> {item.date} </Text>
            </View>


            <SeeAllToCards
              toFollow={item.toFollowCount}
              toFollowProgress={item.toFollowProgress}
              onToFollow={props.onGoFollow}
              toLike={item.toLikeCount}
              toLikeProgress={item.toLikeProgress}
              onToLike={() => props.onGoLike()}
              toUnfollow={item.toUnfollowCount}
              toUnfollowProgress={item.toUnfollowProgress}
              onToUnfollow={props.onGoUnfollow} />
          </View>
        )}
      </ScrollView>
    )
  }

  private completed(props: IProps): JSX.Element {
    return (
      <ScrollView style={this.styles.scrollView}>
        {props.completedSessionData.map((item: IDashSession) =>
          <View key={item.id} style={{paddingHorizontal:15, paddingVertical:20}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Clock width={10} height={10} />
              <Text style={{fontSize:16, fontFamily:Fonts.light}}> {item.date} </Text>
            </View>


            <SeeAllToCards
              toFollow={item.toFollowCount}
              toFollowProgress={item.toFollowProgress}
              onToFollow={props.onGoFollow}
              toLike={item.toLikeCount}
              toLikeProgress={item.toLikeProgress}
              onToLike={() => props.onGoLike()}
              toUnfollow={item.toUnfollowCount}
              toUnfollowProgress={item.toUnfollowProgress}
              onToUnfollow={props.onGoUnfollow} />
          </View>
        )}
      </ScrollView>
    )
  }

  render() {
    return (
      <this.Tab.Navigator
        tabBarOptions={{
          activeTintColor:Colors.primary, inactiveTintColor:Colors.textLight,
          style: {borderTopLeftRadius:7, borderTopRightRadius:7},
          tabStyle: {paddingHorizontal:0},
          labelStyle: {fontSize:14, textTransform:'none'} }}>

        <this.Tab.Screen name="New Sessions" component={this.newSession.bind(this, this.props)} />
        <this.Tab.Screen name="In Progress" component={this.inProgress.bind(this, this.props)} />
        <this.Tab.Screen name="Completed" component={this.completed.bind(this, this.props)} />
      </this.Tab.Navigator>
    )
  }

  private styles = StyleSheet.create({
    scrollView:
    {
      ...Helpers.mainView,
      borderBottomRightRadius:7,
      borderBottomLeftRadius:7
    }
  })
}



interface ISessionCards {
  toFollow: number
  toFollowProgress?: number
  onToFollow: () => void
  toLike: number
  toLikeProgress?: number
  onToLike: () => void
  toUnfollow: number
  toUnfollowProgress?: number
  onToUnfollow: () => void
}

class StartToCards extends Component<ISessionCards> {
  render() {
    return (
      <View>
        <View style={{marginTop:25, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={{alignItems:'flex-start'}}>
            <Text>
              <Text style={{fontFamily:Fonts.bold}}> {this.props.toFollow} </Text>
              {i18n.t('profiles_to_follow')} </Text>
          </View>

  
          <TouchableOpacity
            onPress={this.props.onToFollow}
            style={{...this.styles.viewBubble, backgroundColor:'#EEFFFC'}} >
            <Text
              style={{...this.styles.textBubble, color: '#00957B'}}>
              {i18n.t('follow')} </Text>
          </TouchableOpacity>
        </View>

  
  
        <View style={{marginTop:25, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={{alignItems:'flex-start'}}>
            <Text>
              <Text style={{fontFamily:Fonts.bold}}> {this.props.toLike} </Text>
              {i18n.t('posts_to_like')} </Text>
          </View>

  
          <TouchableOpacity
            onPress={this.props.onToLike}
            style={{...this.styles.viewBubble, backgroundColor:'#EAE9FB'}} >
            <Text
              style={{...this.styles.textBubble, color: '#3F38DD'}}>
              {i18n.t('like')} </Text>
          </TouchableOpacity>
        </View>



        <View style={{marginTop:25, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={{alignItems:'flex-start'}}>
            <Text>
              <Text style={{fontFamily:Fonts.bold}}> {this.props.toUnfollow} </Text>
              {i18n.t('profiles_to_unfollow')} </Text>
          </View>


          <TouchableOpacity
            onPress={this.props.onToUnfollow}
            style={{...this.styles.viewBubble, backgroundColor:'#FFEEF1'}} >
            <Text
              style={{...this.styles.textBubble, color: '#F45586'}}>
              {i18n.t('unfollow')} </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  private styles = StyleSheet.create({
    viewBubble:
    {
      borderRadius:50
    },
    textBubble:
    {
      fontFamily: Fonts.medium,
      paddingVertical: 5,
      paddingHorizontal: 15
    }
  })
}

class SeeAllToCards extends Component<ISessionCards> {
  render() {
    return (
      <View>
        <View>
          <View style={this.styles.cardView}>
            <View style={{alignItems:'flex-start'}}>
              <Text>
                <Text style={{fontFamily:Fonts.bold}}> {this.props.toFollow} </Text>
                {i18n.t('profiles_to_follow')} </Text>
            </View>

    
            <View style={{alignItems:'flex-end'}}>
              <TouchableOpacity
                onPress={this.props.onToFollow}
                style={{...this.styles.viewBubble, backgroundColor:'#EEFFFC'}} >

                <View style={{flexDirection:'row', alignItems:'center', paddingRight:15}}>
                  <Text
                    style={{...this.styles.textBubble, color: '#00957B'}}>
                    {i18n.t('follow')} </Text>
                  <LeftArrow width={6} height={10} />
                </View>
              </TouchableOpacity>

              <Text style={{fontSize:12}}>
                <Text style={{color:'#F5B122'}}> {this.props.toFollowProgress} </Text>
                of
                {this.props.toFollow}
                {i18n.t('profilesVisited')}
              </Text>
            </View>
          </View>



          <View style={this.styles.progressBack}>
            <View
              style={[this.styles.progressFront,
              {width:`${(this.props.toFollowProgress) ? this.props.toFollowProgress/this.props.toFollow*100 : 0}%`},
              (this.props.toFollowProgress == this.props.toFollow) ? {backgroundColor:'#00C907'} : null]}>
            </View>
          </View>
        </View>


  
  
        <View>
          <View style={this.styles.cardView}>
            <View style={{alignItems:'flex-start'}}>
              <Text>
                <Text style={{fontFamily:Fonts.bold}}> {this.props.toLike} </Text>
                {i18n.t('posts_to_like')} </Text>
            </View>

    
            <View style={{alignItems:'flex-end'}}>
              <TouchableOpacity
                onPress={this.props.onToLike}
                style={{...this.styles.viewBubble, backgroundColor:'#EAE9FB'}} >

                <View style={{flexDirection:'row', alignItems:'center', paddingRight:15}}>
                  <Text
                    style={{...this.styles.textBubble, color: '#3F38DD'}}>
                    {i18n.t('like')} </Text>
                  <LeftArrow width={6} height={10} />
                </View>
              </TouchableOpacity>

              <Text style={{fontSize:12}}>
                <Text style={{color:'#F5B122', paddingRight:5}}> {this.props.toLikeProgress} </Text>
                of
                {this.props.toLike}
                {i18n.t('profilesVisited')}
              </Text>
            </View>
          </View>



          <View style={this.styles.progressBack}>
            <View
              style={[
                this.styles.progressFront,
                {width:`${(this.props.toLikeProgress) ? this.props.toLikeProgress/this.props.toLike*100 : 0}%`},
                (this.props.toLikeProgress == this.props.toLike) ? {backgroundColor:'#00C907'} : null]}>
            </View>
          </View>
        </View>




        <View>
          <View style={this.styles.cardView}>
            <View style={{alignItems:'flex-start'}}>
              <Text>
                <Text style={{fontFamily:Fonts.bold}}> {this.props.toUnfollow} </Text>
                {i18n.t('profiles_to_unfollow')} </Text>
            </View>

  
            <View style={{alignItems:'flex-end'}}>
              <TouchableOpacity
                onPress={this.props.onToUnfollow}
                style={{...this.styles.viewBubble, backgroundColor:'#FFEEF1'}} >

                <View style={{flexDirection:'row', alignItems:'center', paddingRight:15}}>
                  <Text
                    style={{...this.styles.textBubble, color: '#F45586'}}>
                    {i18n.t('unfollow')} </Text>
                  <LeftArrow width={6} height={10} />
                </View>
              </TouchableOpacity>

              <Text style={{fontSize:12}}>
                <Text style={{color:'#F5B122', paddingRight:5}}> {this.props.toUnfollowProgress} </Text>
                of
                {this.props.toUnfollow}
                {i18n.t('profilesVisited')}
              </Text>
            </View>
          </View>

          

          <View style={this.styles.progressBack}>
            <View
              style={[this.styles.progressFront,
              {width:`${(this.props.toUnfollowProgress) ? this.props.toUnfollowProgress/this.props.toUnfollow*100 : 0}%`},
              (this.props.toUnfollowProgress == this.props.toUnfollow) ? {backgroundColor:'#00C907'} : null]}>
            </View>
          </View>
        </View>
      </View>
    )
  }

  private styles = StyleSheet.create({
    viewBubble:
    {
      borderRadius:50
    },
    textBubble:
    {
      fontFamily: Fonts.medium,
      paddingVertical: 5,
      paddingHorizontal: 15
    },
    cardView:
    {
      marginTop:25,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    progressBack:
    {
      backgroundColor:Colors.textLight,
      height:5,
      flexGrow:1,
      borderRadius:10,
      marginTop:10
    },
    progressFront:
    {
      backgroundColor:"#F5B122",
      height:'100%',
      borderRadius:10
    }
  })
}