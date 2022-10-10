import * as React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import Header from '../Header';

interface CardProps {
  header: string;
  text: string;
}

const Card: React.FC<CardProps> = ({text, header}: CardProps) => {
  return (
    <ImageBackground
      style={styles.ImageStyles}
      source={require('../../Images/bocks.png')}>
      <Header header={header} />
      <Text style={{marginTop: 10}}>{text}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ImageStyles: {
    height: 150,
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
