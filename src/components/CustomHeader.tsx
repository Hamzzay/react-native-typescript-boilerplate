import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import {Header} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';
import {wp} from '../util';
interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  numberOfLines?: number;
  containerStyle?: ViewStyle | TextStyle | string | number;
  children?: JSX.Element | string | any;
  centerContainerStyle?: ViewStyle;
  rightContainerStyle?: ViewStyle | TextStyle | string | number;
  leftContainerStyle?: ViewStyle | TextStyle | string | number;
  backgroundColor?: string;
  barStyle?: any;
  statusbar?: any;
  rightComponent?: JSX.Element | string | any;
  centerComponent?: JSX.Element | string | any;
  leftComponent?: JSX.Element | string | any;
  placement?: any;
}
const CustomHeader: React.FC<Props> = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      backgroundColor: {
        backgroundColor: theme.color.textBlack,
      },
      sideContainerStyle: {
        marginHorizontal: wp(2),
      },
      centerComponent: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <Header
      statusBarProps={props.statusbar ?? styles.backgroundColor}
      barStyle={props.barStyle}
      placement={props?.placement}
      leftComponent={props.leftComponent}
      centerComponent={props.centerComponent}
      rightComponent={props.rightComponent}
      backgroundColor={props.backgroundColor}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      centerContainerStyle={props.centerContainerStyle}
      leftContainerStyle={[styles.sideContainerStyle, props.leftContainerStyle]}
      rightContainerStyle={[
        styles.sideContainerStyle,
        props.rightContainerStyle,
      ]}
    />
  );
};

export default CustomHeader;
