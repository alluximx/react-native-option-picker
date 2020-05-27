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

  optionStyle = function (selected) {
    if (selected) {
      return this.props.selectedOptionStyle;
    } else {
        return this.props.optionStyle;
    }
  };

  textOptionStyle = function (selected) {
    if (selected) {
      return this.props.selectedOptionTextStyle
    } else {
      return this.props.optionTextStyle;
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
