import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class PickerOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  onItemSelected() {}

  optionStyle = function (selected) {
    if (selected) {
      return {
        margin: 5,
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#497DF9',
        font: 'Helevica Neue',
      };
    } else {
      return {
        margin: 5,
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#E9EFFE',
        font: 'Helevica Neue',
      };
    }
  };

  textOptionStyle = function (selected) {
    if (selected) {
      return {
        color: '#ffffff',
      };
    } else {
      return {
        color: '#497DF9',
      };
    }
  };

  _onPress = () => {
    this.props.updateSelectedOption(this.props.item);
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPress}
        style={this.optionStyle(this.props.item.selected)}>
        <Text style={this.textOptionStyle(this.props.item.selected)}>
          {this.props.item.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  gridItem: {
    margin: 5,
    width: 60,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerOption: {
    color: 'white',
    padding: 20,
    fontSize: 25,
  },
});
