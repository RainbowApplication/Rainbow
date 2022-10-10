import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

interface EditProps {

}

const Edit: React.FC<EditProps> = ({}: EditProps) => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.Text}>
        Hello World
      </Text>
      <TextInput value={text} onChangeText={setText} />
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

