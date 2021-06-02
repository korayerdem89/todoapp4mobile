/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import styles from './InputBox.styles';

const InputBox = () => {

  const [task, setTask] = useState();

  function handleAddTask() {
    console.log(task)
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        style={styles.textInput}
        placeholderTextColor="gray"
        value={task}
        onChangeText = {text => setTask(text)}
      />
      <TouchableOpacity disabled={false} style={styles.button} onPress={() => handleAddTask()} >
        <Text style={styles.buttonTitle}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
