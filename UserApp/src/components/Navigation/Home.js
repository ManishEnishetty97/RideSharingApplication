import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import DestinationSearch from '../../screens/DestinationSearch';
import SearchResults from '../../screens/SearchResults';
import {createStackNavigator} from '@react-navigation/stack';
import OrderScreen from '../../screens/OrderScreen';

const Stack = createStackNavigator();
const HomeNavigator = props => {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen
          name={'DestinationSearch'}
          component={DestinationSearch}
        />
        <Stack.Screen name={'SearchResults'} component={SearchResults} />
        <Stack.Screen name={'OrderPage'} component={OrderScreen} />
      </Stack.Navigator>
    </>
  );
};
export default HomeNavigator;
