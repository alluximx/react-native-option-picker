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
      data: [
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
          title: '1:00 AM',
          selected: false,
        },
        {
          id: '14',
          title: '1:00 AM',
          selected: false,
        },
      ],
    };
  }

  updateSelectedOption = (newSelectedOption) => {
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
    return true;
  };

  render() {
    return (
      <FlatList
        numColumns={3}
        data={this.state.data}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => (
          <PickerOption
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
