import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TDashboardTabParam } from '../../types/TDashboardTabParam';
import { Helpers, Fonts } from '../../theme';
import { TabOverlay, TabHeader } from '../../components/DashTabsComponents';
import i18n from 'i18n-js';

export default class PostsToLike extends Component<{navigation:BottomTabNavigationProp<TDashboardTabParam, 'PostsToLike'>}> {
  render() {
    return (
      <View style={{...Helpers.mainView, backgroundColor:'#F5F6F7'}}>
        <TabHeader
          isInfo={false}
          title={i18n.t('posts_to_like')}
          settingsHandler={() => {}}
          notificationHandler={() => {}} />

        <View style={{...Helpers.absoluteCenter}}>
          <Text> No preview available </Text>
        </View>



        {
        (this.context.isNew)
          ? <TabOverlay 
              header={i18n.t('posts_to_like')}
              body={<Text>
                {i18n.t('posts_to_like_text_begin')}
                <Text style={{fontFamily:Fonts.medium}}>Growth Pal</Text>
                {i18n.t('posts_to_like_text_end')}</Text>}
              next={i18n.t('next')}
              onNext={this.overlayNext.bind(this)}
              onExit={this.context.onEndNew} />
          : null
        }
      </View>
    )
  }
  
  public overlayNext(): void {
    this.context.tabOverlayHandler('DashStatistics');
    this.props.navigation.navigate('DashStatistics');
  }
}