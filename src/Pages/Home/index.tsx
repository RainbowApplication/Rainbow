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
import {View, StyleSheet, Image} from 'react-native';

const Home: () => JSX.Element = () => {
  return (
    <View style={styles.mainView}>
      <Image
        source={require('../../Images/bocks.png')}
        style={styles.imageStyle}
      />
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
    width: '98%',
    borderRadius: 30,
    overflow: 'hidden',
  },
});

export default Home;
