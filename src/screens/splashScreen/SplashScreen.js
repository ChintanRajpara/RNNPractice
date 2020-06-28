import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useGlobalContext} from '../../globalContext/globalContext';
import setAuthenticatedNavigationRoot from '../../navigation/roots/setAuthenticatedNavigationRoot';

const SplashScreen = () => {
  const {setAuthenticated} = useGlobalContext();

  const runSplashScreenQuery = () => {
    setTimeout(() => {
      setAuthenticated(true);
      setAuthenticatedNavigationRoot();
      console.log('GO NEXT');
    }, 2000);
  };

  useEffect(() => {
    runSplashScreenQuery();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color="#FED834" />
    </View>
  );
};

export default SplashScreen;
