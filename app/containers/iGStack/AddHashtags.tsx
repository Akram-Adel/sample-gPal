import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TIGStackParam } from '../../types/TIGStackParam';
import { Helpers, Fonts, Colors } from '../../theme';
import { DefaultInput } from '../../components/Inputs';
import i18n from 'i18n-js';
import Plus from '../../assets/images/Plus.svg';

export default class AddHashtags extends Component<{navigation:StackNavigationProp<TIGStackParam, 'AddHashtags'>}> {
  private hashtags: string[] = ['#igmusic', '#newmusic', '#song', '#hiphop'];

  render() {
    return (
      <View style={{...Helpers.mainView, ...Helpers.settingsPadding}}>
        <View style={{flexDirection:'row', marginTop:10}}>
          <DefaultInput
            title={i18n.t('enter_hashtag')}
            style={{marginTop:0, paddingBottom:0, flexGrow:1}}
            onTextChange={this.setText} />

          <TouchableOpacity onPress={this.cancelHandler.bind(this)} style={{justifyContent:'center'}}>
            <Text
              style={{fontSize:16, marginLeft:20}}>
              {i18n.t('cancel')}</Text>
          </TouchableOpacity>
        </View>

        {
          this.hashtags.map((hashtag: string) =>
            <View key={hashtag} style={{flexDirection:'row', justifyContent:'space-between', marginVertical:25}}>
              <Text
                style={{fontSize:16, fontFamily:Fonts.medium}}>
                {hashtag}</Text>

              <TouchableOpacity onPress={this.addHashtag.bind(this, hashtag)}>
                <View style={{alignItems:'center', flexDirection:'row'}}>
                  <Plus width={16} />
                  <Text
                    style={{fontSize:16, color:Colors.textLight, marginLeft:10}}>
                    {i18n.t('addTag')}</Text>
                </View>
              </TouchableOpacity>
            </View>)
        }
      </View>
    )
  }

  public setText(text: string): void {
    // Add different method for each input
  }

  public addHashtag(hashtag: string): void {
    this.props.navigation.navigate('Hashtags', {hashtag: hashtag});
  }

  public cancelHandler(): void {
    this.props.navigation.goBack();
  }
}