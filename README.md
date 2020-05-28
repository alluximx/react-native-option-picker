React Native Option Picker
================================================
A simple and customizable React Native option picker tool.


<img src="./react-native-option-picker.gif" width="250" height="500"/>

## [View example on snack.expo.io](https://snack.expo.io/@gus_reyes01/react-native-option-picker)

## Getting Started

## Install

```sh
$ npm install react-native-option-picker
```

### Basic Usage

```js

import {Picker} from 'react-native-option-picker';

export const Dropdown = () => {
    return (
        <Picker
            data={[
                { id: '9', title: '9:00 AM', selected: false },
                { id: '10', title: '10:00 AM', selected: true },
                { id: '11', title: '11:00 AM', selected: false },
            ]}
        />
    );
};

```

## Styling


| Prop        | Description           | Type  |
| ------------- |:-------------:| -----:|
| **`optionStyle`**        |  Style for the idle option | Any |
| **`selectedOptionStyle`**       | Style for the selected option      |  Any |
| **`optionTextStyle`** | Style for the option text      |    Any |
| **`selectedOptionTextStyle`** | Style for the selected option text      |    Any |


## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [an issue](https://github.com/gusreyes01/react-native-option-picker/issues).


## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
[<img src="https://avatars0.githubusercontent.com/u/2120129?v=4" width="100px;"/><br /><sub><b>Gustavo Reyes</b></sub>](https://github.com/gusreyes01)<br />[💬](#question-alluximx "Answering Questions") [💻](https://github.com/alluximx/react-native-option-picker/commits?author=gusreyes01 "Code") 


## Discussion and Collaboration

In addition to the [Github Issues](https://github.com/alluximx/react-native-option-picker/issues) page

## License

Licensed under the MIT License.