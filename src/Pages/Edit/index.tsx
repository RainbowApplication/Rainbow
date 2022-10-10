import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import LocalStorage from '../../Helpers/LocalStorage';

// https://react-native-async-storage.github.io/async-storage/docs/usage

interface EditProps {}

const Edit: React.FC<EditProps> = ({}: EditProps) => {
  const [text, setText] = React.useState('');

  const ls = new LocalStorage();

  ls.setData('monke', 'test');
  let res = ls.getAllData();

  console.log(res.then(data => console.log(data)));

  let getMonke = ls.getData('@monke');

  console.log(getMonke.then(data => console.log(data)));

  return (
    <View style={styles.ViewStyle}>
      <TextInput
        style={styles.InputStyles}
        value={text}
        onChangeText={setText}
      />
      <Text>hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {},

  ViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  InputStyles: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Edit;
