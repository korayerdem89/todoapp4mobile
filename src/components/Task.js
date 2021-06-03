/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './Task.style';

const Card = props => {
  return (
    <View style={styles.container}>
      <Text style={{color:'#d4e2c8'}}>{props.text}</Text>
    </View>
  );
};

export default Card;
