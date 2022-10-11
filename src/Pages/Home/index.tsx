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


async function getGender(ls: LocalStorage) {
  let retval: string = 'd';
  await ls.getData('Gender').then(data => {
    if (data != null) {
      retval = data;
    }
  });
  return retval;
}

const Home: () => JSX.Element = () => {
  const ls = new LocalStorage(); // Initializes Local Storage Helper

  let f = getGender(ls);

  console.log(f);
  
  return (
    <View style={styles.mainView}>
      <Card header='Name' text='Jaden' />
      <Card header='Gender' text={`${f}`} />
      <Card header='Pronouns' text='He/Him' />
      <Card header='Status' text='Taken' />
    </View>
  );
};

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
