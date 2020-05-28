import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  Text,
} from 'react-native';

export default class PickerOption extends Component {

  static propTypes = {
    style: PropTypes.any,
    selected: PropTypes.bool,
    selectedOptionStyle: PropTypes.any,
    optionStyle: PropTypes.any,
    selectedOptionTextStyle: PropTypes.any,
    optionTextStyle: PropTypes.any,
    item: PropTypes.object,
  };

  static defaultProps = {
    selected: false
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
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
