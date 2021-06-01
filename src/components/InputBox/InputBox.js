import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import styles from './InputBox.styles';

const InputBox = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        style={styles.textInput}
        placeholderTextColor="gray"
      />
      <TouchableOpacity disabled={true} style={styles.button}>
        <Text style={styles.buttonTitle}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
