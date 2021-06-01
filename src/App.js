import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputBox from './components/InputBox';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_side}>
        <View style={styles.header}>
          <Text>Yapılacaklar</Text>
          <Text>2</Text>
        </View>
        <Text>LIST DIVISION</Text>
      </View>
      <View style={styles.task_container}>
        <InputBox style={{color:'red'}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    borderWidth:1,
    height:'100%',
  },
  task_container:{
    marginBottom:20
  }
});

export default App;

