import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { TSettingsStackParam } from '../../types/TSettingsStackParam';
import { StackNavigationProp } from '@react-navigation/stack';
import { Helpers } from '../../theme';
import i18n from 'i18n-js';
import SettingsHeader from '../../components/SettingsHeader';
import { FilledBubble, DottedBubble } from '../../components/Bubbles';
import { DefaultButton } from '../../components/Buttons';
import InfoBox from '../../components/InfoBox';

interface IProps {
  route: RouteProp<TSettingsStackParam, 'TimeZones'>
  navigation: StackNavigationProp<TSettingsStackParam, 'TimeZones'>
}

export default class TimeZonesSettings extends Component<IProps> {
  private timeZones: string[] = [];
  private _unsubscribe: () => void;


  constructor(props:IProps) {
    super(props);

    // subscribe to 'focus' event that gets called everytime we comeback to this page
    this._unsubscribe = this.props.navigation.addListener('focus', () => this.addTimeZone());
  }

  componentWillUnmount() {
    // unsubscribe when we go back from this page
    this._unsubscribe();
  }

  render() {
    return (
      <View style={{...Helpers.mainView}}>
        <SettingsHeader
          title='Time Zone'
          onBack={this.goBack.bind(this)} />

        <View style={{...Helpers.settingsPadding, flexGrow:1}}>
          <View style={{flexGrow:1, marginTop:30, flexDirection:'row', flexWrap:"wrap", marginHorizontal:-11}}>
            {
              this.timeZones.map((timezone:string) =>
                <FilledBubble key={timezone} title={timezone} onClick={this.removeTimeZone.bind(this, timezone)}/>)
            }
  
            <DottedBubble
              title={i18n.t('add_time_zone')}
              onClick={this.goAddTimeZones.bind(this)} />
          </View>
  
          <View style={{alignItems:'center', marginBottom:30}}>
            <DefaultButton
              title={i18n.t('saveChanges')}
              onClick={this.saveHandler.bind(this)} />
          </View>
  
          <InfoBox
            header={i18n.t('why_need_time_zone')}
            body={i18n.t('why_need_time_zone_text')} />
        </View>
      </View>
    )
  }

  public removeTimeZone(timeZone: string): void {
    this.timeZones = this.timeZones.filter((item: string) => item != timeZone);
    this.setState({});
  }

  private addTimeZone(): void {
    let timeZone: string|undefined = this.props.route.params?.timeZone;

    if(typeof timeZone == 'undefined') return;
    if(this.timeZones.includes(timeZone)) return;
    // if timeZone exists and not in timeZone[]

    this.timeZones.push(timeZone);
    this.setState({});
  }

  public goAddTimeZones(): void {
    this.props.navigation.navigate('AddTimeZones');
  }

  public saveHandler(): void {
    this.props.navigation.goBack();
  }

  public goBack(): void {
    this.props.navigation.goBack();
  }
}