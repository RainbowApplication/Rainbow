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
 
 
 const Home: () => JSX.Element = () => {
   
 
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
     alignItems:'center',
     backgroundColor:'#262a33'
   },
 
   textStyle:{
     color:'blue'
   }
 })
 
 
 export default Home;
 