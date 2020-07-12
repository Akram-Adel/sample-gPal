import React, { Component } from 'react';
import { View } from 'react-native'
import { Helpers } from '../../theme';
import DashboardTab from '../../navigators/DashboardTab';

export default class Dashboard extends Component {
  public isNew: boolean = true;

  render() {
    return (
      <View style={Helpers.mainView}>
        <DashboardTab
          isNew={this.isNew}
          onEndNew={this.endNewHandler.bind(this)} />
      </View>
    )
  }

  public endNewHandler(): void {
    this.isNew = false;
    this.setState({});
  }
}