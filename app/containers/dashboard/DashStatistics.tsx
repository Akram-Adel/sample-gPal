import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TDashboardTabParam } from '../../types/TDashboardTabParam';
import { Helpers } from '../../theme';
import { TabOverlay, TabHeader } from '../../components/DashTabsComponents';
import i18n from 'i18n-js';

export default class DashStatistics extends Component<{navigation:BottomTabNavigationProp<TDashboardTabParam, 'DashStatistics'>}> {
  render() {
    return (
      <View style={{...Helpers.mainView, backgroundColor:'#F5F6F7'}}>
        <TabHeader
          isInfo={false}
          title={i18n.t('statistics')}
          settingsHandler={() => {}}
          notificationHandler={() => {}} />

        <View style={{...Helpers.absoluteCenter}}>
          <Text> No preview available </Text>
        </View>

        {
        (this.context.isNew)
          ? <TabOverlay 
              header={i18n.t('statistics')}
              body={<Text>{i18n.t('statistics_text')}</Text>}
              next={i18n.t('finish')}
              onNext={this.overlayFinish.bind(this)}
              onExit={this.context.onEndNew} />
          : null
        }
      </View>
    )
  }

  public overlayFinish(): void {
    this.context.onEndNew();
    this.props.navigation.navigate('Home');
  }
}