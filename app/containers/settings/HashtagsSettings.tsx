import React, { Component } from 'react';
import { View } from 'react-native';
import { Helpers } from '../../theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { TSettingsStackParam } from '../../types/TSettingsStackParam';
import { RouteProp } from '@react-navigation/native';
import { FilledBubble, DottedBubble } from '../../components/Bubbles';
import i18n from 'i18n-js';
import InfoBox from '../../components/InfoBox';
import { DefaultButton } from '../../components/Buttons';
import SettingsHeader from '../../components/SettingsHeader';

interface IProps {
  route: RouteProp<TSettingsStackParam, 'Hashtags'>
  navigation: StackNavigationProp<TSettingsStackParam, 'Hashtags'>
}

export default class HashtagsSettings extends Component<IProps> {
  private hashtags: string[] = ['#music', '#rock'];
  private _unsubscribe: () => void;


  constructor(props: IProps) {
    super(props);

    // subscribe to 'focus' event that gets called everytime we comeback to this page
    this._unsubscribe = this.props.navigation.addListener('focus', () => this.addHashtag());
  }

  componentWillUnmount() {
    // unsubscribe when we go back from this page
    this._unsubscribe();
  }

  render() {
    return (
      <View style={{...Helpers.mainView}}>
        <SettingsHeader
          title='Hashtags'
          onBack={this.goBack.bind(this)} />

        <View style={{...Helpers.settingsPadding, flexGrow:1}}>
          <View style={{flexGrow:1, marginTop:10, flexDirection:'row', flexWrap:"wrap", marginHorizontal:-11}}>
            {
              this.hashtags.map((hashtag:string) =>
                <FilledBubble key={hashtag} title={hashtag} onClick={this.removeHashtag.bind(this, hashtag)}/>)
            }
  
            <DottedBubble
              title={i18n.t('addTags')}
              onClick={this.goAddHashtags.bind(this)} />
          </View>
  
          <View style={{alignItems:'center', marginBottom:30}}>
            <DefaultButton
              title={i18n.t('saveChanges')}
              onClick={this.saveHandler.bind(this)} />
          </View>
  
          <InfoBox
            header={i18n.t('how_use_hashtags')}
            body={i18n.t('how_use_hashtags_text')} />
        </View>
      </View>
    )
  }

  public removeHashtag(hashtag: string): void {
    this.hashtags = this.hashtags.filter((item: string) => item != hashtag);
    this.setState({});
  }

  private addHashtag(): void {
    let hashtag: string|undefined = this.props.route.params?.hashtag;

    if(typeof hashtag == 'undefined') return;
    if(this.hashtags.includes(hashtag)) return;
    // if hashtag exists and not in hashtags[]

    this.hashtags.push(hashtag);
    this.setState({});
  }

  public goAddHashtags(): void {
    this.props.navigation.navigate('AddHashtags');
  }

  public saveHandler(): void {
    this.props.navigation.goBack();
  }

  public goBack(): void {
    this.props.navigation.goBack();
  }
}