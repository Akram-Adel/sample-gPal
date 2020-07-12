import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SkeletonContent from "react-native-skeleton-content";
import { Helpers, Colors } from '../../theme';
import i18n from 'i18n-js';
import { StackNavigationProp } from '@react-navigation/stack';
import { TIGStackParam } from '../../types/TIGStackParam';

export default class FindPeoplePosts extends Component<{navigation:StackNavigationProp<TIGStackParam, 'FindPeoplePosts'>}> {
  private skeletonCount:number[] = Array.from(Array(3).keys());

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('FoundPeople');
    }, 2000);
  }

  render() {
    return (
      <View style={{...Helpers.mainView, ...Helpers.absoluteCenter}}>
        <Text style={Helpers.headerText}> {i18n.t('howdy')} --name--! </Text>

        <Text style={{...Helpers.maxWidth, marginTop: 50, marginBottom:100}}>
          <Text style={{color:Colors.primary}}>Growth Pal </Text>
            {i18n.t('finding_new_people_posts')}
        </Text>

        {
          this.skeletonCount.map((item:number) =>
            <View key={item} style={{width:'100%'}}>
              <View style={this.styles.containerView}>
                <SkeletonContent
                  containerStyle={{flexDirection:'row', alignItems:'center', marginHorizontal:15, marginVertical:10}}
                  isLoading={true} >
                    <View style={{height:50, width:50, borderRadius:50}}></View>
                    <View style={{height:40, flexGrow:1, marginLeft:10, marginRight:30}}></View>
                    <View style={{height:30, width:50}}></View>
                </SkeletonContent>
              </View>
            </View>
          )
        }
      </View>
    )
  }

  private styles = StyleSheet.create({
    containerView:
    {
      borderRadius:5,
      marginHorizontal:25,
      marginVertical:10,
      elevation:4,
      shadowOffset: {width:0,height:2},
      shadowColor:'#000',
      shadowRadius:6,
      shadowOpacity: 0.23,
      backgroundColor:'rgba(250,250,250,1)'
    }
  })
}