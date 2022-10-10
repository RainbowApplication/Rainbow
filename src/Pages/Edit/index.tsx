import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface EditProps {

}

const Edit: React.FC<EditProps> = ({}: EditProps) => {
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.Text}>
        Hello World
        <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}></View>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Text: {

    },

    ViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Edit;

