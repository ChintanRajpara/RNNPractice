import React from 'react';
import {Navigation} from 'react-native-navigation';
import {componentNames} from './componentNames';
import GlobalContextProvider from '../globalContext/GlobalContextProvider';
import HomeRoot from '../screens/bottomTabsRoot/HomeRoot';
import SearchRoot from '../screens/bottomTabsRoot/SearchRoot';
import CameraRoot from '../screens/bottomTabsRoot/CameraRoot';
import NotificationRoot from '../screens/bottomTabsRoot/NotificationRoot';
import ProfileRoot from '../screens/bottomTabsRoot/ProfileRoot';
import ProfileContainer from '../screens/profile/ProfileContainer';
import FullScreenPlayer from '../screens/fullScreenPlayer/FullScreenPlayer';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import GlobalVideoRequestDetailContainer from '../screens/globalVideoRequestDetail/GlobalVideoRequestDetailContainer';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

export const registerScreens = () => {
  Navigation.registerComponent(componentNames.HomeRoot, () => props => (
    <GlobalContextProvider>
      <HomeRoot {...props} />
    </GlobalContextProvider>
  ));

  Navigation.registerComponent(componentNames.SearchRoot, () => props => (
    <GlobalContextProvider>
      <SearchRoot {...props} />
    </GlobalContextProvider>
  ));
  Navigation.registerComponent(componentNames.CameraRoot, () => props => (
    <GlobalContextProvider>
      <CameraRoot {...props} />
    </GlobalContextProvider>
  ));
  Navigation.registerComponent(componentNames.NotificationRoot, () => props => (
    <GlobalContextProvider>
      <NotificationRoot {...props} />
    </GlobalContextProvider>
  ));
  Navigation.registerComponent(componentNames.ProfileRoot, () => props => (
    <GlobalContextProvider>
      <ProfileRoot {...props} />
    </GlobalContextProvider>
  ));
  Navigation.registerComponent(componentNames.Profile, () => props => (
    <GlobalContextProvider>
      <ProfileContainer {...props} />
    </GlobalContextProvider>
  ));
  Navigation.registerComponent(componentNames.FullScreenPlayer, () => props => (
    <GlobalContextProvider>
      <FullScreenPlayer {...props} />
    </GlobalContextProvider>
  ));

  Navigation.registerComponent(componentNames.SplashScreen, () => props => (
    <GlobalContextProvider>
      <SplashScreen {...props} />
    </GlobalContextProvider>
  ));

  Navigation.registerComponent(componentNames.GlobalVideoRequestDetail, () =>
    gestureHandlerRootHOC(props => (
      <GlobalContextProvider>
        <GlobalVideoRequestDetailContainer {...props} />
      </GlobalContextProvider>
    )),
  );
};
