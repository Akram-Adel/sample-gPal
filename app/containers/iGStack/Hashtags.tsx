import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TIGStackParam } from '../../types/TIGStackParam';
import ProgressBar from '../../components/ProgressBar';
import { Helpers, Colors, AppHeaderHeight, AppTopPadding } from '../../theme';
import i18n from 'i18n-js';
import { FilledBubble, DottedBubble } from '../../components/Bubbles';
import { DefaultButton } from '../../components/Buttons';
import InfoBox from '../../components/InfoBox';
import { RouteProp } from '@react-navigation/native';

interface IProps {
  route: RouteProp<TIGStackParam, 'Hashtags'>
  navigation: StackNavigationProp<TIGStackParam, 'Hashtags'>
}

export default class Hashtags extends Component<IProps> {
  private viewHeight:number = Dimensions.get('window').height-AppHeaderHeight-AppTopPadding;
  private hashtags: string[] = ['#music', '#rock'];
  private _unsubscribe: () => void;


  constructor(props:IProps) {
    super(props);

    // subscribe to 'focus' event that gets called everytime we comeback to this page
    this._unsubscribe = this.props.navigation.addListener('focus', () => this.addHashtag());
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: (props) => <ProgressBar {...props} progress='66%' onBack={this.goBack.bind(this)} />
    });
  }

  componentWillUnmount() {
    // unsubscribe when we go back from this page
    this._unsubscribe();
  }

  render() {
    return (
      <ScrollView style={{flex:1}}>

        <View style={{...Helpers.mainView, ...Helpers.settingsPadding, minHeight:this.viewHeight}}>
          <Text
            style={{...Helpers.headerText, marginTop:20}}>
            {i18n.t('addHashtags')} </Text>
  
          <View style={{flexGrow:1, marginTop:30, flexDirection:'row', flexWrap:"wrap", marginHorizontal:-11}}>
            {
              this.hashtags.map((hashtag:string) =>
                <FilledBubble key={hashtag} title={hashtag} onClick={this.removeHashtag.bind(this, hashtag)}/>)
            }
  
            <DottedBubble
              title={i18n.t('addTags')}
              onClick={this.goAddHashtags.bind(this)} />
          </View>
  
          <View style={{alignItems:'center'}}>
            <DefaultButton
              title={i18n.t('next')}
              onClick={this.goNext.bind(this)} />
          </View>
  
          <Text
            style={{color:Colors.textLight, textAlign:'center', paddingVertical:24}}>
            {i18n.t('can_change_settings_later')} </Text>
  
          <InfoBox
            header={i18n.t('how_use_hashtags')}
            body={i18n.t('how_use_hashtags_text')} />
        </View>
      </ScrollView>
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

  public goNext(): void {
    // unsubscribe when moving next
    this._unsubscribe();
    this.props.navigation.navigate('TimeZones');
  }

  public goBack(): void {
    this.props.navigation.navigate('IGUser');
  }
}