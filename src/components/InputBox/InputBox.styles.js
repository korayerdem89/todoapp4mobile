import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#37464e',
    margin: 8,
    borderRadius: 5,
    paddingHorizontal:8,
    alignItems: 'center',
  },
  textInput: {
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    width:'100%',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: '94%',
    borderRadius:8,
    height:30,
    backgroundColor:'gray',
    marginBottom:10
 
  },
  buttonTitle: {color: 'white'},
});
