/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform, StatusBar, View} from 'react-native';
import RootNavigator from './src/components/Navigation/Root';
import Geolocation from '@react-native-community/geolocation';
import {createStackNavigator} from '@react-navigation/stack';
import {withAuthenticator} from 'aws-amplify-react-native';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';

navigator.geolocation = require('@react-native-community/geolocation');

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Atlas App Location Permission',
          message: 'Atlas App needs access to your location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <>
      <RootNavigator />
    </>
  );
};
export default withAuthenticator(App);
