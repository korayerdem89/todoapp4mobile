import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputBox from './components/InputBox';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_side}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Yapılacaklar</Text>
          <Text style={styles.headerText}>2</Text>
        </View>
        <Text>LIST DIVISION</Text>
      </View>
      <View style={styles.task_container}>
        <InputBox style={{color: 'red'}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102126',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  headerText: {
    color: '#d99006',
    fontWeight:'bold',
    fontSize:24
  },
  task_container: {
    marginBottom: 20,
  },
});

export default App;
