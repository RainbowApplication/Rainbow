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
import { useIsFocused } from "@react-navigation/native";


// Methods
async function getGender(ls: LocalStorage, setgender: any) {
  let data = await ls.getData('Gender');
  setgender(data);
}

const Home: () => JSX.Element = () => {
  // States and Variables
  const [gender, setgender] = React.useState('Default'); // useEffect hook for
  const ls = new LocalStorage(); // Initializes Local Storage Helper
  const isFocused = useIsFocused(); // Rerenders every focus

  // Code

  getGender(ls, setgender);



  // JSX  
  return (
    <View style={styles.mainView}>
      <Card header='Name' text='Jaden' />
      <Card header='Gender' text={`${gender}`} />
      <Card header='Pronouns' text='He/Him' />
      <Card header='Status' text='Taken' />
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
