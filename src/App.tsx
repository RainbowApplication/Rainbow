/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';


const App: () => JSX.Element = () => {
  

  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>
        Testing text
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },

  textStyle:{
    color:'blue'
  }
})


export default App;
