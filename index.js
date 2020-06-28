/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {componentNames} from './src/navigation/componentNames';
import {registerScreens} from './src/navigation/registerScreens';
import {Linking} from 'react-native';

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens();
  Navigation.setDefaultOptions({
    navigationBar: {backgroundColor: '#3c3c3c'},
    layout: {orientation: ['portrait']},
  });

  const launchArgs = await Navigation.getLaunchArgs();

  const initialURL = await Linking.getInitialURL();

  console.log({initialURL, launchArgs});

  Navigation.setRoot({root: {component: {name: componentNames.SplashScreen}}});
});
