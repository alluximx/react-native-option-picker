import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import {Picker} from 'react-native-option-picker';

const DATA = [
  {
    id: '9',
    title: '9:00 AM',
    selected: false,
  },
  {
    id: '10',
    title: '10:00 AM',
    selected: true,
  },
  {
    id: '11',
    title: '11:00 AM',
    selected: false,
  },
  {
    id: '12',
    title: '12:00 AM',
    selected: false,
  },
  {
    id: '13',
    title: '1:00 PM',
    selected: false,
  },
  {
    id: '14',
    title: '1:00 PM',
    selected: false,
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  _onPress(data){
    // do something fun! 
    alert(data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          data={DATA}
          onPress={this._onPress}
          style={styles.pickerStyle}
          optionStyle={styles.optionStyle}
          selectedOptionStyle={styles.selectedOptionStyle}
          optionTextStyle={styles.optionTextStyle}
          selectedOptionTextStyle={styles.selectedOptionTextStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionStyle: {
    margin: 5,
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#E9EFFE',
    fontFamily: 'Helevica Neue',
  },
  selectedOptionStyle: {
    margin: 5,
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#497DF9',
    fontFamily: 'Helevica Neue',
  },
  optionTextStyle: {
    color: '#497DF9',
  },
  selectedOptionTextStyle: {
    color: '#ffffff',
  },
});
