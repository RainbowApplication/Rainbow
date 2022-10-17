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
import {View, StyleSheet} from 'react-native';
import Card from '../../Components/Card';
import LocalStorage from '../../Helpers/LocalStorage';
import {useIsFocused} from '@react-navigation/native';
import * as getData from '../../Helpers/getData';

// Methods

const Home: () => JSX.Element = () => {
  // States and Variables
  const [name, setname] = React.useState('Default');
  const [gender, setgender] = React.useState('Default');
  const [pronouns, setpronouns] = React.useState('Default');
  const [status, setstatus] = React.useState('Default');

  const ls = new LocalStorage(); // Initializes Local Storage Helper

  // Code

  useIsFocused(); // Rerenders every focus
  getData.getGender(ls, setgender);
  getData.getName(ls, setname);
  getData.getPronouns(ls, setpronouns);
  getData.getStatus(ls, setstatus);

  // JSX
  return (
    <View style={styles.mainView}>
      <Card header="Name" text={`${name}`} />
      <Card header="Gender" text={`${gender}`} />
      <Card header="Pronouns" text={`${pronouns}`} />
      <Card header="Status" text={`${status}`} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262a33',
    overflow: 'hidden',
  },

  textStyle: {
    color: 'blue',
  },

  imageStyle: {
    height: 150,
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
