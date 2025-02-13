import * as React from 'react';
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  GestureResponderEvent
} from 'react-native';
import {Input} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
interface Props {
  placeholder?: string;
  onChangeText?: (event: string ) => void|Function;
  onChange?: () => void;
  value?: string;
  leftIcon?: undefined;
  rightIcon?: undefined;
  onBlur?:(event?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  multiline?: boolean;
  maxLength?: number;
  style?: ViewStyle | TextStyle | string | number;
  containerStyle?: ViewStyle | string | number;
  inputContainerStyle?: ViewStyle | TextStyle | string | number;
  onPress?: (event: GestureResponderEvent) => void
  numberOfLines?: number;
  inputContainer?: ViewStyle;
  inputStyle?: TextStyle;
}
const CustomInputField: React.FC<Props> = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      inputContainer: {
        paddingHorizontal: wp(1),
        height: hp(7),
      },
      textStyle: {
        fontSize: hp(1.7),
        fontFamily: theme.fontFamily.regularFamily,
      },
      containerStyle: {
        height: hp(10),
        marginBottom: hp(0.5),
      },
      fontFamily: theme.fontFamily.regularFamily,
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <Input
      inputStyle={props.inputStyle}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      onPressIn={props.onPress}
      inputContainerStyle={[styles.inputContainer, props.inputContainerStyle]}
      leftIcon={props.leftIcon}
      rightIcon={props.rightIcon}
      secureTextEntry={props.secureTextEntry}
      editable={props.editable}
      multiline={props.multiline}
      placeholder={props.placeholder}
      numberOfLines={props.numberOfLines}
      placeholderTextColor={'#959B9E'}
      style={[styles.textStyle, props.style]}
      maxLength={props.maxLength}
      onChangeText={props.onChangeText}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
      autoCompleteType={false}
      keyboardType={props.keyboardType}
    />
  );
};

export default CustomInputField;
