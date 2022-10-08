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
import {Text, View, StyleSheet} from 'react-native';
import Home from '../../Pages/Home';
import Edit from '../../Pages/Edit';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();




const Navigation: any = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        header: () => null,
      }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Edit" component={Edit}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({});

export default Navigation;
