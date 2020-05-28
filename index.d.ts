import { Component } from "react";
import {
    StyleProp,
    ViewStyle,
    TextStyle,
} from "react-native";

declare module "react-native-option-picker" {

    class ReactNativeOptionPicker extends Component<
        {
            data?: any[];
            style: StyleProp<ViewStyle>;
            selectedOptionStyle?: StyleProp<TextStyle>;
            optionTextStyle?: StyleProp<TextStyle>;
            selectedOptionTextStyle?: StyleProp<TextStyle>;
        },
        {}
        > { }

    export = ReactNativeOptionPicker;
}
