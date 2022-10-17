/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {} from 'react-native';
import Home from '../../Pages/Home';
import Edit from '../../Pages/Edit';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Navigation: () => JSX.Element = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Edit" component={Edit} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
