import React from 'react';
import {StyleSheet, Text,ViewStyle,TextStyle,GestureResponderEvent} from 'react-native';
import {useThemeAwareObject} from '../theme';
interface Props {

  style?: ViewStyle | TextStyle | string | number|any;
  onPress?: (event: GestureResponderEvent) => void
  numberOfLines?: number;
  children: JSX.Element|string|any,

}
const TextField: React.FC<Props> = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      textStyle: {
        color: theme.color.textBlack,
        fontSize: theme.size.xSmall,
        fontFamily: theme.fontFamily.lightFamily,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <Text
      numberOfLines={props.numberOfLines}
      onPress={props.onPress}
      style={[styles.textStyle, props.style]}
      allowFontScaling={false}>
      {props.children}
    </Text>
  );
};

export default TextField;
