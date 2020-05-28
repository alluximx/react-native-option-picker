/**
 * Sample React Native Option 
 * https://github.com/alluximx/react-native-option-picker
 * @flow
 */

import React, { Component } from 'react';
import { View } from "react-native";
import Picker from './Picker/Picker';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Picker
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
    pikcerStyle: {
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
        font: 'Helevica Neue',
      },
      selectedOptionStyle: {
        margin: 5,
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#497DF9',
        font: 'Helevica Neue',
      },
      optionTextStyle: {
        color: '#497DF9',
      },
      selectedOptionTextStyle: {
        color: '#ffffff',
      },  
  });
  