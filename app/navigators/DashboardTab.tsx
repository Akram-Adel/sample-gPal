import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../containers/dashboard/Home';
import Follow from '../containers/dashboard/Follow';
import Unfollow from '../containers/dashboard/Unfollow';
import PostsToLike from '../containers/dashboard/PostsToLike';
import DashStatistics from '../containers/dashboard/DashStatistics';
import { Colors } from '../theme';
import Bars from '../assets/images/bars.svg';
import BarsFocus from '../assets/images/bars_focus.svg';
import HomeIcon from '../assets/images/Home.svg';
import HomeFocus from '../assets/images/Home_focus.svg';
import FollowIcon from '../assets/images/follow.svg';
import FollowFocus from '../assets/images/follow_focus.svg';
import UnfollowIcon from '../assets/images/unfollow.svg';
import UnfollowFocus from '../assets/images/unfollow_focus.svg';
import Like from '../assets/images/like.svg';
import LikeFocus from '../assets/images/Like_focus.svg';


interface IProps {
  isNew: boolean
  onEndNew: () => void
}
interface IDashboardContext {
  isNew?: boolean
  tabOverlayHandler?: (tab: string) => void
  onEndNew?: () => void
}

export default class DashboardTab extends Component<IProps> {
  private Tab = createBottomTabNavigator();
  public dashboardContext = React.createContext<IDashboardContext>({});
  private overlayScreen: string = "Home";
  private isInfoActive: boolean = false;

  constructor(props: IProps) {
    super(props);
    Home.contextType = this.dashboardContext;
    Follow.contextType = this.dashboardContext;
    Unfollow.contextType = this.dashboardContext;
    PostsToLike.contextType = this.dashboardContext;
    DashStatistics.contextType = this.dashboardContext;
  }

  render() {
    return (
      <View style={{flex:1}}>
        <this.dashboardContext.Provider value={{
          isNew: this.props.isNew,
          tabOverlayHandler: this.tabOverlayHandler.bind(this),
          onEndNew: this.props.onEndNew }}>

          <this.Tab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let icon:JSX.Element;
  
                if (route.name == "Home") {
                  icon = !focused
                    ? <HomeIcon width={20} height={20} />
                    : <HomeFocus width={20} height={20} />
                }
                else if (route.name == "Follow") {
                  icon = !focused
                    ? <FollowIcon width={20} height={20} />
                    : <FollowFocus width={20} height={20} />
                }
                else if (route.name == "Unfollow") {
                  icon = !focused
                    ? <UnfollowIcon width={20} height={20} />
                    : <UnfollowFocus width={20} height={20} />
                }
                else if (route.name == "PostsToLike") {
                  icon = !focused
                    ? <Like width={20} height={20} />
                    : <LikeFocus width={20} height={20} />
                }
                else if (route.name == "DashStatistics") {
                  icon = !focused
                    ? <Bars width={20} height={20} />
                    : <BarsFocus width={20} height={20} />
                }
                else { icon = <HomeIcon width={20} height={20} /> }
  
                return icon;
              }
            })}
            tabBarOptions={{showLabel:false}}>
  
            <this.Tab.Screen name="Home" component={Home} />
            <this.Tab.Screen name="Follow" component={Follow} />
            <this.Tab.Screen name="Unfollow" component={Unfollow} />
            <this.Tab.Screen name="PostsToLike" component={PostsToLike} />
            <this.Tab.Screen name="DashStatistics" component={DashStatistics} />
          </this.Tab.Navigator>
        </this.dashboardContext.Provider>

        {this.tabOverlayRender()}

        {(this.isInfoActive)
          ? <View style={{...this.styles.viewContainer, height:50, backgroundColor:'rgba(0, 0, 0, 0.6)'}}></View>
          : null
        }
      </View>
    )
  }

  // Return overlay over the bottom tab if user new to the dashboard
  public tabOverlayRender(): JSX.Element|null {
    if (!this.props.isNew) return null;

    return (
      <View style={this.styles.viewContainer}>
        <View style={[this.styles.iconContainer, this.overlayScreen == "Home" ? this.styles.tabOverlay : null]}>
          <HomeFocus width={20} height={20} />
        </View>

        <View style={[this.styles.iconContainer, this.overlayScreen == "Follow" ? this.styles.tabOverlay : null]}>
          <FollowFocus width={20} height={20} />
        </View>

        <View style={[this.styles.iconContainer, this.overlayScreen == "Unfollow" ? this.styles.tabOverlay : null]}>
          <UnfollowFocus width={20} height={20} />
        </View>

        <View style={[this.styles.iconContainer, this.overlayScreen == "PostsToLike" ? this.styles.tabOverlay : null]}>
          <LikeFocus width={20} height={20} />
        </View>

        <View style={[this.styles.iconContainer, this.overlayScreen == "DashStatistics" ? this.styles.tabOverlay : null]}>
          <BarsFocus width={20} height={20} />
        </View>
      </View>
    )
  }

  public tabOverlayHandler(overlayScreen: string): void {
    this.overlayScreen = overlayScreen;
    this.setState({});
  }

  public infoOverlayHandler(visible: boolean): void {
    this.isInfoActive = visible;
    this.setState({});
  }

  private styles = StyleSheet.create({
    tabIconView: {
      alignItems: 'center',
    },
    tabIconDot: {
      width:5,
      height:5,
      borderRadius:5,
      backgroundColor:'#FF0000',
      marginTop:5
    },
    viewContainer:
    {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 55,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: Colors.primary
    },
    iconContainer:
    {
      width: 40,
      height: 50,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.primary
    },
    tabOverlay:
    {
      backgroundColor: '#fff'
    }
  })
}