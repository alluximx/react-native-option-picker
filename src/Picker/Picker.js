import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import PickerOption from './PickerOption';


export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOpton: null,
      data: this.props.data
    };
  }

  updateSelectedOption = (newSelectedOption) => {
    var onPress = this.props.onPress || null;

    this.state.data.forEach(function (element) {
      if (element.selected) {
        if (newSelectedOption.id == element.id) {
          return false;
        } else {
          element.selected = false;
        }
      }

      if (newSelectedOption.id == element.id) {
        element.selected = true;
      }
    });

    this.setState({data: this.state.data});
    
    if(onPress){
      onPress(newSelectedOption)
    }

    return true;
  };

  render() {
    return (
      <FlatList
        style={this.props.style}
        numColumns={3}
        data={this.state.data}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => (
          <PickerOption
            optionStyle={this.props.optionStyle}
            selectedOptionStyle={this.props.selectedOptionStyle}
            optionTextStyle={this.props.optionTextStyle}
            selectedOptionTextStyle={this.props.selectedOptionTextStyle}
            updateSelectedOption={this.updateSelectedOption}
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
