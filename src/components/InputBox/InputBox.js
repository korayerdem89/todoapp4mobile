import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './InputBox.styles';

const InputBox = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." />
    </View>
  );
};

export default InputBox;
