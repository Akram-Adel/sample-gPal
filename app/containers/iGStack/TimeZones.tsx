import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TIGStackParam } from '../../types/TIGStackParam';
import ProgressBar from '../../components/ProgressBar';
import { RouteProp } from '@react-navigation/native';
import { Helpers, Colors } from '../../theme';
import i18n from 'i18n-js';
import { FilledBubble, DottedBubble } from '../../components/Bubbles';
import { DefaultButton } from '../../components/Buttons';
import InfoBox from '../../components/InfoBox';

interface IProps {
  route: RouteProp<TIGStackParam, 'TimeZones'>
  navigation: StackNavigationProp<TIGStackParam, 'TimeZones'>
}

export default class TimeZones extends Component<IProps> {
  private timeZones: string[] = [];
  private _unsubscribe: () => void;


  constructor(props:IProps) {
    super(props);

    // subscribe to 'focus' event that gets called everytime we comeback to this page
    this._unsubscribe = this.props.navigation.addListener('focus', () => this.addTimeZone());
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: (props) => <ProgressBar {...props} progress='100%' onBack={this.goBack.bind(this)} />
    });
  }

  componentWillUnmount() {
    // unsubscribe when we go back from this page
    this._unsubscribe();
  }

  render() {
    return (
      <View style={{...Helpers.mainView, ...Helpers.settingsPadding}}>
        <Text
          style={{...Helpers.headerText, marginTop:20}}>
          {i18n.t('select_time_zone')} </Text>

        <View style={{flexGrow:1, marginTop:30, flexDirection:'row', flexWrap:"wrap", marginHorizontal:-11}}>
          {
            this.timeZones.map((timezone:string) =>
              <FilledBubble key={timezone} title={timezone} onClick={this.removeTimeZone.bind(this, timezone)}/>)
          }

          <DottedBubble
            title={i18n.t('add_time_zone')}
            onClick={this.goAddTimeZones.bind(this)} />
        </View>

        <View style={{alignItems:'center'}}>
          <DefaultButton
            title={i18n.t('finish')}
            onClick={this.finish.bind(this)} />
        </View>

        <Text
          style={{color:Colors.textLight, textAlign:'center', paddingVertical:24}}>
          {i18n.t('can_change_settings_later')} </Text>

        <InfoBox
          header={i18n.t('why_need_time_zone')}
          body={i18n.t('why_need_time_zone_text')} />
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

  public finish(): void {
    // unsubscribe when moving next
    this._unsubscribe();
    this.props.navigation.navigate('FindPeoplePosts');
  }

  public goBack(): void {
    this.props.navigation.goBack();
  }
}