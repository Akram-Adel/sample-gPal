import { StyleSheet } from 'react-native';
import Colors from './colors';
import Fonts from './fonts';

export default StyleSheet.create({
  mainView:
  {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerText:
  {
    fontSize: 20,
    fontFamily: Fonts.medium,
    color: Colors.text
  },
  defaultWidth: {width: 302},
  maxWidth:
  {
    textAlign: 'center',
    maxWidth: 302,
    marginHorizontal: 'auto',
    color: Colors.text
  },
  absoluteCenter:
  {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexGrowCenter:
  {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingsPadding:
  {
    paddingHorizontal: 25,
    paddingBottom: 25
  },
  boxShadow:
  {
    shadowOffset: {width:0, height:3},
    elevation: 3,
    shadowColor: '#000',
    shadowRadius: 3,
    borderRadius: 7,
    shadowOpacity: 0.2,
    backgroundColor: 'rgba(250,250,250,1)',
  }
})