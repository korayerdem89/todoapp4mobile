import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputBox from './components/InputBox';

const App = () => {
const [number, setNumber]= useState(10)

 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_side}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Yapılacaklar</Text>
          <Text style={styles.headerText}>{number}</Text>
        </View>
        <Text style={styles.listView}>asdasd</Text>
      </View>
      <View style={styles.task_container}>
        <InputBox />
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
    paddingHorizontal: 7,
    paddingVertical: 15,
  },
  headerText: {
    color: '#d99006',
    fontWeight: 'bold',
    fontSize: 24,
  },
  task_container: {
    marginBottom: 20,
  },
  listView: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginHorizontal: 4,
    marginVertical: 5,
    backgroundColor: '#7da453',
    padding: 4,
    fontSize: 10,
  },
});

export default App;
