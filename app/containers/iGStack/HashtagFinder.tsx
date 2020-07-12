import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TIGStackParam } from '../../types/TIGStackParam';
import SearchEngine from '../../assets/images/search_engine.svg';
import { Colors, Helpers, Fonts } from '../../theme';
import i18n from 'i18n-js';

export default class HashtagFinder extends Component<{navigation:StackNavigationProp<TIGStackParam, 'HashtagFinder'>}> {
  componentDidMount() {
    let _this = this;
    setTimeout(() => {
      _this.props.navigation.navigate('Hashtags');
    }, 2000);
  }

  render() {
    return (
      <View style={{...Helpers.mainView, ...Helpers.flexGrowCenter}}>
        <View style={Helpers.defaultWidth}>
          <Text style={{color:Colors.text, fontSize:16, fontFamily:Fonts.regular, textAlign:'center', marginBottom:85}}>
            <Text style={{color:Colors.primary, fontFamily:Fonts.medium}}> Growth Pal </Text>
            {i18n.t('finding_related_hashtags')}
          </Text>

          <SearchEngine width={'100%'} />
        </View>
      </View>
    )
  }
}