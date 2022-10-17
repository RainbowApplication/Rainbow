import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import LocalStorage from '../../Helpers/LocalStorage';

// https://react-native-async-storage.github.io/async-storage/docs/usage

interface EditProps {}

const Edit: React.FC<EditProps> = ({}: EditProps) => {
  const [name, setName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [pronouns, setPronouns] = React.useState('');
  const [status, setStatus] = React.useState('');

  const ls = new LocalStorage();

  return (
    <View style={styles.ViewStyle}>
      <TextInput
        style={styles.InputStyles}
        value={name}
        onSubmitEditing={() => {
          ls.setData('Name', name);
          setName('');
        }}
        onChangeText={newText => setName(newText)}
      />
      <Text>Edit your Name!</Text>

      <TextInput
        style={styles.InputStyles}
        value={gender}
        onSubmitEditing={() => {
          ls.setData('Gender', gender);
          setGender('');
        }}
        onChangeText={newText => setGender(newText)}
      />
      <Text>Edit your Gender!</Text>

      <TextInput
        style={styles.InputStyles}
        value={pronouns}
        onSubmitEditing={() => {
          ls.setData('Pronouns', pronouns);
          setPronouns('');
        }}
        onChangeText={newText => setPronouns(newText)}
      />
      <Text>Edit your Pronouns!</Text>

      <TextInput
        style={styles.InputStyles}
        value={status}
        onSubmitEditing={() => {
          ls.setData('Status', status);
          setStatus('');
        }}
        onChangeText={newText => setStatus(newText)}
      />
      <Text>Edit your Status!</Text>
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
