import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './app/localization/en';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Index from './app/Index';

i18n.translations = {
  en: en
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./app/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./app/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('./app/assets/fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <Index />
      </SafeAreaView>
    );
  }
}
